

# Create a course selling app

- Initialize a new Node.js project
- Add Express, jsonwebtoken , mongoose to it as a dependency
- Create index.js
- Add route skeleton for user login, signup,see all courses, purchase a course, see course
- Add routes for admin login, admin signup, create a course, delete a course, add course content.
- Add middlewares for user and admin auth
- Add a database (mongodb), use dotenv to store the database connection string
- Define the schema for User, Admin, Course, Purchase
- Complete the routes for user login, signup, purchase a course, see course (Extra points – Use express routing to better structure your routes)
- Create the frontend


https://github.com/100xdevs-cohort-3/week-8-course-selling-project/tree/main




# **Course Selling App Development Guide**  

## **1. Backend Development (Node.js + Express + MongoDB)**  

### **Step 1: Initialize a New Node.js Project**  
- Create a new project directory and initialize a Node.js project:  
  ```bash
  mkdir course-selling-app
  cd course-selling-app
  npm init -y
  ```
- Install dependencies:  
  ```bash
  npm install express jsonwebtoken mongoose dotenv
  ```

### **Step 2: Set Up Express and Routing**  
- Create an `index.js` file.  
- Add route skeletons for:  
  - **User:** Login, Signup, Purchase Course, View Courses  
  - **Admin:** Login, Signup, Create Course, Delete Course, Add Course Content  

### **Step 3: Middleware for Authentication**  
- Implement authentication middlewares for user and admin using JWT (jsonwebtoken).  

### **Step 4: Database Setup (MongoDB)**  
- Use **MongoDB** as the database.  
- Store the connection string securely using **dotenv**.  

### **Step 5: Define Mongoose Schemas**  
- Define schemas for:  
  - **User**  
  - **Admin**  
  - **Course**  
  - **Purchase**  

### **Step 6: Implement Routes**  
- Complete backend routes for:  
  - **User:** Login, Signup, Purchase Course, View Courses  
  - **Admin:** Login, Signup, Create Course, Delete Course, Add Course Content  
- Use **Express Router** for structured routing.  

---

## **2. Frontend Development**  
- Create the frontend using React.js or another framework of choice.  
- Implement user and admin authentication.  
- Display available courses and purchase functionality.


  to push the project
/////////////////
git remote add origin https://github.com/Ankit-Singh1234/Online-Course-Selling-App-using-Full-stack.git
git branch -M main
git push -u origin main
////////////////



______________________________________________________________________________________________________________________________________

//routes

const express=require("express")
const app=express();


app.post("/user/signup",(req,res)=>{

})


app.post("/user/signup",(req,res)=>{
    
})

app.get("/user/purchases",(req,res)=>{
    
})


app.post("/course/preview",(req,res)=>{
    
})


app.post("/course/purchase",(req,res)=>{
    
})




______________________________________________________________________________________________________________________________________

//create routes for user and course.js and place in the routes folder


function createUserRoutes(app){

    app.post("/user/signup",(req,res)=>{
        res.json({
            message:"signup endpoints"
        })
    })
    
    
    app.post("/user/signin",(req,res)=>{
        res.json({
            message:"signin endpoints"
        })      
    })
    
    app.get("/user/purchases",(req,res)=>{
        res.json({
            message:"purchases endpoints"
        })
    })
    
}

module.exports={
    createUserRoutes:createUserRoutes
}


///
function createCourseRoutes(app){
    app.post("/course/preview",(req,res)=>{
        //to see all the course
    
       
    })
    
    
    app.post("/course/purchase",(req,res)=>{
        
    })
    
}

module.exports={
    createCourseRoutes:createCourseRoutes
}
///
const express=require("express")

const {createUserRoutes}=require("./routes/user")
const {createCourseRoutes}=require("./routes/course")

const app=express();


createUserRoutes(app);//calling the function which has endpoints for "/users/"
createCourseRoutes(app);//calling the function which has endpoints for "/course/"


app.listen(3000)

___________________________________________________________________________________________________________________________


//the method which os used in industry

const {Router}=require("express")

//              0r
/*
const express=require("express")
const Router=express.Router
*/

const userRouter=Router(); //Router is a function  
// we use uerRouter in place of app


    userRouter.post("signup",(req,res)=>{
        res.json({
            message:"signup endpoints"
        })
    })
    
    
    userRouter.post("signin",(req,res)=>{
        res.json({
            message:"signin endpoints"
        })      
    })
    
    userRouter.get("purchases",(req,res)=>{
        res.json({
            message:"purchases endpoints"
        })
    })
    

module.exports={
    userRouter:userRouter
}


___________________________________________________________________________________________________________________________________


 write for the admin 

 
