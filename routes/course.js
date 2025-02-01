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

courseRouter.get("/preview",(req,res)=>{
    //to see all the course

    res.json({
        message:"course preview"
    })

   
})


courseRouter.post("/purchase",(req,res)=>{
    
})

module.exports={
    courseRouter:courseRouter
}    