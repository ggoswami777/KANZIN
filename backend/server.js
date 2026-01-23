import express from 'express'
import cors from "cors"
import 'dotenv/config'
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'

dotenv.config({quiet:true});
const app=express();
const port=process.env.PORT || 4000;
connectDB();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json({success:true,message:"API WORKING"})
})
app.get("/test", (req, res) => {
    res.send("Test Works");
});
app.use("/api/user",userRouter);
app.listen(port,()=>{
    console.log('Server started on PORT :'+ port);
})