import express from 'express'

const userRouter = express.Router()

userRouter.get("/",(req,resp)=>{
    resp.send("This is get request of user router")
})
userRouter.post("/",(req,resp)=>{
    resp.send("This is post request of user router")
})

export default userRouter