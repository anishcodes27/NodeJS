import express from 'express'
const app =express()
app.listen(8080)

app.get("/",(req,resp)=>{
    const user={
        name:"John",
        email:"john@email.com",
        role:"Student",

    };
    resp.send(user);

})