const {router, Router}=require("express")

const {adminModel}=require("../db")

const adminRouter=Router();

adminRouter.post("/signup",(req,res)=>{
    res.json({
        message:"signup endpoints"
    })
})


adminRouter.post("/signin",(req,res)=>{
    res.json({
        message:"signin endpoints"
    })      
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