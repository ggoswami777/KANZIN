import express from "express"
import lessonController from "../controllers/lessonController.js";
const lessonRouter=express.Router();
lessonRouter.get('/test',(req,res)=>{
    res.json({success:true,message:"api working"})
})
lessonRouter.post('/complete',lessonController)
export default lessonRouter;