import express from "express";
const app = express();
app.listen(8080);


const auth=(req,resp,next)=>{
   if(req.path==="/1/2/3/4"){
    next();
   }
   else{
    resp.send("Access Denied");
   }
}


app.use(auth);
// app.use(logger);
app.get("/1/2/3/4", (req, res) => {

  res.send("Welcome");
});



