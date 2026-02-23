//router
import productRouter from './routes/productRouter.js'
import userRouter from './routes/userRouter.js'
import users from './models/userModel.js'
import products from './models/productModel.js'
import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("Server is Live")
})
// const userRouter =express.Router()
// const productRouter =express.Router()

// userRouter.get("/",(req,resp)=>{
//     resp.send("This is get request of user router")
// })
// userRouter.post("/",(req,resp)=>{
//     resp.send("This is post request of user router")
// })
app.use("/api/user",userRouter)



// productRouter.get("/",(req,resp)=>{
//     resp.send("This is get request of product router")
// })
// productRouter.post("/",(req,resp)=>{
//     resp.send("This is post request of product router")
// })

app.use("/api/product",productRouter)