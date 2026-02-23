import express from 'express'
const app=express();
app.listen(8080,()=>console.log("Server is live"));

//sending status code
app.get("/",(req,resp)=>{
    resp.status(201).json({message:"Hello World"})
})