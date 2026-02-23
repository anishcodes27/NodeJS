import express from 'express'
import jwt from 'jsonwebtoken'
const app=express()
const SECRET="lpu"
app.listen(8080,()=>{
    console.log("Server is Live.....")
})

const user={
    name:"John",
    email:"jhon@email.com",
    role:"student"
}

const token=jwt.sign(user,SECRET,{expiresIn:"1h"})
console.log(token)
