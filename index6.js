import express from "express";
const app =express();
app.listen(8080)
app.get("/",(req,resp)=>{
    console.log("Server started");
    resp.send("Hello"+req.query.name+req.query.age);
})


