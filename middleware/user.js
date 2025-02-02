// const JWT_USER_TOKEN="_id_token_for_Admin_signin";
const {JWT_USER_TOKEN}=require("../config")


// it will authenticate only that user is signed in and have the corresponding token
function userMiddleware(req,res,next){
    const token=req.headers.token;
    const decodedData=Jwt.verify(token,JWT_USER_TOKEN);

    if(decodedData){
        req._id=decodedData._id;
        next();
        
    }else{
        return res.json({
            error:"you are not signed in, please sign in again..."
        })
    }



    
}

module.exports={
    userMiddleware:userMiddleware
}