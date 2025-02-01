const {router, Router}=require("express")

const {adminModel}=require("../db")
const jwt=require("jsonwebtoken")
const JWT_ADMIN_TOKEN="_id_token_for_Admin_signin";


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
                token:token
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

adminRouter.post("/",(req,res)=>{
    res.json({
        message:"course endpoints"
    })      
})

adminRouter.put("/course",(req,res)=>{ //create new course
    res.json({
        message:"course endpoints"
    })      
})
adminRouter.get("/course/bulk",(req,res)=>{ //see all the courses
    res.json({
        message:"course endpoints"
    })      
})

module.exports={
    adminRouter:adminRouter
}