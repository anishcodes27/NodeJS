import express from "express";
const app = express();
app.listen(8080);



// const auth=(req,resp,next)=>{
//    if(req.path==="/1234"){
//     next();
//    }
//    else{
//     resp.send("Access Denied");
//    }
// }


app.use(express.json());

const auth=(req,resp,next)=>{
   if(req.body.token === 1234){
    next();
   }
   else{
    resp.send("Access Denied");
   }
}




app.use(auth);
// app.use(logger);
app.post("/1234", (req, res) => {

  res.send("Welcome");
});





