// function createUserRoutes(app){

//     app.post("/user/signup",(req,res)=>{
//         res.json({
//             message:"signup endpoints"
//         })
//     })
    
    
//     app.post("/user/signin",(req,res)=>{
//         res.json({
//             message:"signin endpoints"
//         })      
//     })
    
//     app.get("/user/purchases",(req,res)=>{
//         res.json({
//             message:"purchases endpoints"
//         })
//     })
    
// }

// module.exports={
//     createUserRoutes:createUserRoutes
// }




//the method which os used in industry

const {Router}=require("express")

//              0r
/*
const express=require("express")
const Router=express.Router
*/

const userRouter=Router(); //Router is a function  
// we use uerRouter in place of app

const {userModel}=require("../db");


userRouter.post("/signup",async (req,res)=>{


    const {email,password,firstName,lastName}=req.body;

    try{
        await userModel.create({
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
        message:"signup endpoints"
    })
})


userRouter.post("/signin",(req,res)=>{
    res.json({
        message:"signin endpoints"
    })      
})

userRouter.get("/purchases",(req,res)=>{
    res.json({
        message:"purchases endpoints"
    })
})
    

module.exports={
    userRouter:userRouter
}