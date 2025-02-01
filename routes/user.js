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
const jwt=require("jsonwebtoken")
const JWT_USER_TOKEN="_id_token_for_user_signin";



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


userRouter.post("/signin",async (req,res)=>{
  try{
      //user will give the email and password to sign in
      const {email,password}=req.body;

      // find the given email and password in DB
      //dont user find() becaise return the empty array if not found 
      const user=await userModel.findOne({
          email:email,
          password:password
      })
  
      //if user exist
      if(user){
          //create the userToken by using the _id of the DB
          
          const token=jwt.sign({
            _id:user._id
          },JWT_USER_TOKEN);
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

userRouter.get("/purchases",(req,res)=>{
    res.json({
        message:"purchases endpoints"
    })
})
    

module.exports={
    userRouter:userRouter
}