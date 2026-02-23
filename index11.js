import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("Server is live")
})

// app.use(express.static("images"))
app.use("/public",express.static("public"))