import express from 'express'
const app = express()
app.listen(8080, () => {
    console.log("Server Started......")
})
const logger=(req, res, next)=>{
    req.message="This is logger function."
    // console.log(req.url)
    next();

};
app.use(logger)

app.get("/",(req,resp)=>{
    
    console.log(req.message)
    resp.json(req.url)

})
app.get("/home",(req,resp)=>{
    
    console.log(req.message)
    resp.json(req.url)

})