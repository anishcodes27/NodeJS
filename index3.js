import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("Server Started");
});
app.get("/",(req,resp)=>{
    console.log(req.url)
    resp.send("response from server for /")
})
app.get("/home",(req,resp)=>{
    console.log(req.url)
    resp.send("response from server for /home")
})
app.get("/home/page1",(req,resp)=>{
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    console.log(req.headers.authorization)
    resp.send("response from server for /home/page1")
})

