import express from "express";
const app = express();
app.listen(8080);

//now we will send 1234 in the json format from the postman if it mathces then next otherwise it will be denied


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





