// function createCourseRoutes(app){
//     app.post("/course/preview",(req,res)=>{
//         //to see all the course
    
       
//     })
    
    
//     app.post("/course/purchase",(req,res)=>{
        
//     })
    
// }

// module.exports={
//     createCourseRoutes:createCourseRoutes
// }


const {Router}=require("express")

const courseRouter=Router();
const {purchasesModel, courseModel}=require("../db");
const { userMiddleware } = require("../middleware/user");






courseRouter.post("/purchase", userMiddleware,async  (req,res)=>{
    try{
        const userId=req.userId;//it is  comes fron the middle ware ( from the token)
        const courseId=req.body.courseId; //given by the user in body

        const course=await purchasesModel.create({
            courseId:courseId,
            userId:userId
        })

        return res.json({
            msg:"course purchased",
            purchaseId:course._id
        })
    }catch(e){
        console.log(e);
        return res.json({
            error:"internal server error"
        })
    }


})


courseRouter.get("/preview",async (req,res)=>{
    //to see all the course available to be purcahsed

    // no neet to signup and sign in

    const courses=await courseModel.find({})

    res.json({
        all_courses_are:courses
    })

   
})

module.exports={
    courseRouter:courseRouter
}    