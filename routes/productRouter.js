// import express from 'express'

// const productRouter = express.Router()

// productRouter.get("/",(req,resp)=>{
//     resp.send("This is get request of product router")
// })
// productRouter.post("/",(req,resp)=>{
//     resp.send("This is post request of product router")
// })

// export default productRouter

import express from "express"
import { addProduct,getProducts } from "../controllers/productController.js"
const productRouter = express.Router()
productRouter.get("/",getProducts)
productRouter.post("/",addProduct)
export default productRouter