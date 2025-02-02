// const JWT_ADMIN_TOKEN="_id_token_for_Admin_signin";
const jwt=require("jsonwebtoken")
const {JWT_ADMIN_TOKEN}=require("../config")



// it will authenticate only that user is signed in and have the corresponding token
function adminMiddleware(req,res,next){
    const token=req.headers.token;
    const decodedData=jwt.verify(token,JWT_ADMIN_TOKEN);

    if(decodedData){
        req.createrId=decodedData._id;
        // res.json({
        //     msg:"Signed in Succesfully..",
        //     createrId:req.createrId
        // })
        next();


        
    }else{
        return res.json({
            error:"you are not signed in, please sign in again..."
        })
    }

    
}

module.exports={
    adminMiddleware:adminMiddleware
}
// const jwt = require("jsonwebtoken");
// const { JWT_ADMIN_TOKEN } = require("../config");
// function adminMiddleware(req, res, next) {
//     const token = req.headers.token;
//     const decoded = jwt.verify(token, JWT_ADMIN_TOKEN);

//     if (decoded) {
//         req.userId = decoded.id;
//         next()
//     } else {
//         res.status(403).json({
//             message: "You are not signed in"
//         })
//     }

// }

// module.exports = {
//     adminMiddleware: adminMiddleware
// }