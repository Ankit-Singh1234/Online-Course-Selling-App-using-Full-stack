const express=require("express")
require("dotenv").config()


// const {createUserRoutes}=require("./routes/user")
const {userRouter}=require("./routes/user")
// const {createCourseRoutes}=require("./routes/course")
const {courseRouter}=require("./routes/course")
const {adminRouter}=require("./routes/admin")
const app=express();

app.use(express.json())


//createUserRoutes(app);//calling the function which has endpoints for "/users/"
//createCourseRoutes(app);//calling the function which has endpoints for "/course/"
// app.use("/user",userRouter);
// app.use("/course",courseRouter);  //we can use anyPrefix for readibility

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);


app.listen(3000)
