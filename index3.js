import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("Server Started");
});
app.get("/home",(req,resp)=>{
    console.log(req.url)
    resp.send("response from server for /home")
})