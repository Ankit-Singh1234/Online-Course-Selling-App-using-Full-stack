const {router, Router}=require("express")

const {adminModel,courseModel}=require("../db")
const jwt=require("jsonwebtoken")
// const JWT_ADMIN_TOKEN="_id_token_for_Admin_signin";
const {JWT_ADMIN_TOKEN}=require("../config");
const { adminMiddleware } = require("../middleware/admin");

const adminRouter=Router();

adminRouter.post("/signup",async (req,res)=>{
    const {email,password,firstName,lastName}=req.body;

    try{
        await adminModel.create({
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName
        })
    }catch(e){
       return  res.json({
        meaasge:"Error"
       })
    }

    //apply the zod ,hash the password, put the try-catch block
    res.json({
        message:"signup successful"
    })
})


adminRouter.post("/signin",async (req,res)=>{
    try{
        //user will give the email and password to sign in
        const {email,password}=req.body;
  
        // find the given email and password in DB
        //dont user find() becaise return the empty array if not found 
        const admin=await adminModel.findOne({
            email:email,
            password:password
        })
    
        //if user exist
        if(admin){
            //create the userToken by using the _id of the DB
            
            const token=jwt.sign({
              _id:admin._id
            },JWT_ADMIN_TOKEN);
            //apply cookie logic
    
            //return the token after creation of token
            res.json({
                token:token,
                createrId:admin._id
            })
        }else{
            res.status(403).json({
                error:"Incorrect Credentilas"
            })
        }
   
        }catch(e){
      return res.json({
          error:"server Error"
      })
    }         
})

adminRouter.post("/course",adminMiddleware,async (req,res)=>{    //create new course
    //to create the course first creater has to give his createrId
    const adminId=req.createrId;

    //give all the detiosl fo tjhe course
    const { title, description, imageUrl, price } = req.body;
    try{
        const course=await courseModel.create({
            title:title,
            description:description,
            price:price,
            imageUrl:imageUrl,
            createrId:adminId
        })
        //return the -id of the corse which is generated now
        res.json({
            message:"Course Created successfully...",
            courseId:course._id

        })
    }catch(e){
        return res.json({
            error:"Server Error..."
        })
    }    
})

// adminRouter.post("/course", adminMiddleware, async function(req, res) {
//     const adminId = req.userId;

//     const { title, description, imageUrl, price } = req.body;

//     // creating a web3 saas in 6 hours
//     const course = await courseModel.create({
//         title: title, 
//         description: description, 
//         imageUrl: imageUrl, 
//         price: price, 
//         creatorId: adminId
//     })

//     res.json({
//         message: "Course created",
//         courseId: course._id
//     })
// })






// adminRouter.put("/course", adminMiddleware ,async (req,res)=>{  //to update the couser data
      
//       // admin/creater only create the same corse which has created , not the others 
      
//       // so we need to check for courseId as well as adminId 
//       //user will give the courseId

//       const title=req.body.title;
//       const description=req.body.description;
//       const price=req.body.price;
//       const imageUrl=req.body.imageUrl;
//       //admin wil give the course id  , the id of the course which he wants to update
//       const courseId=req.body.courseId;



//       //middle ware gives the token  which has  the adminId
    
//         const course = await courseModel.updateOne({
//             _id:courseId,
//             createrId:req.createrId
//         },{
//             title:title,
//             description:description,
//             price:price,
//             imageUrl:imageUrl
//         })

//        return res.json({
//             msd:"course Updated...",
//             courseId:course._id
//         })


      

// })

adminRouter.put("/course", adminMiddleware, async (req, res) => {
    try {
        const { title, description, price, imageUrl, courseId } = req.body;

        //i have to manully giv the courseId in the body by copying the courseId from the DB

        //The issue with your code is that the updateOne method in Mongoose does not return 
        // the updated document by default. Instead, it returns an object containing information
        //  about the operation, such as the number of documents matched and modified. 
        // To ensure that the data is being updated correctly and to return the updated document, 
        // you can use the findOneAndUpdate method with the new: true option.
        //  This will return the updated document.

        // Use findOneAndUpdate to update the course and return the updated document
        const updatedCourse = await courseModel.findOneAndUpdate(
            {
                _id: courseId,
                createrId: req.createrId // Ensure the creator is updating their own course
            },
            {
                title: title,
                description: description,
                price: price,
                imageUrl: imageUrl,
        
            },
            {
                new: true // Return the updated document
            }
        );

        if (!updatedCourse) {
            return res.status(404).json({ msg: "Course not found or you are not authorized to update this course" });
        }

        return res.json({
            msg: "Course updated successfully",
            courseId: updatedCourse._id
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal server error" });
    }
});




adminRouter.get("/course/bulk",adminMiddleware,async (req,res)=>{ //see all the courses
    // showw all the courses whch is only created by this admin
    const createrId=req.createrId ;
    
    try{

        const courses=await courseModel.find({
            createrId:createrId
        })

        return res.json({
            courses:courses
        })
        
    }catch(e){
        console.log(e)
        return res.json({
            error:"Server Error.."
        })
    }
})

module.exports={
    adminRouter:adminRouter
}