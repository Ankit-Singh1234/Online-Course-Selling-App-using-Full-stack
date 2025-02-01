const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

mongoose.connect("mongodb+srv://ankitsingh:6m6pPDY!-x3tXTp@cluster0.wqx2c.mongodb.net/online-course-selling-app")


const userSchema=new Schema({
    email:{type:String, unique:true},
    password:String,
    firstName:String,
    lastName:String

})

const adminSchema=new Schema({
    email:{type:String, unique:true},
    password:String,
    firstName:String,
    lastName:String

})

const courseSchema=new Schema({
    title:String,
    description:String,
    price:String,
    imageUrl:String,
    createrId:ObjectId

})

const purchaseSchema=new Schema({
    userId:ObjectId,
    courseId:ObjectId
})


const userModel=mongoose.model("user",userSchema)
const adminModel=mongoose.model("admin",adminSchema)
const courseModel=mongoose.model("course",courseSchema)
const purchasesModel=mongoose.model("purchase",purchaseSchema)

module.exports={
    userModel,
    adminModel,
    courseModel,
    purchasesModel

}

//import the adminModel in admin.js