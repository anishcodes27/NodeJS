import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("Server Started");
});
app.get("/",(req,resp)=>{
    console.log(req.url)
    resp.send("response from server for /")
})