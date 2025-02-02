adminRouter.get("/course/bulk",async (req,res)=>{ //see all the courses
    // showw all the courses whch is only created by this admin
    const createrId=req.createrId ;
    
    try{

        const courses=await courseModel.find({
            createrId:createrId
        })

        return res.json({
            courses:courses
        })
        
    }catch(e){
        console.log(e)
        return res.json({
            error:"Server Error.."
        })
    }
})