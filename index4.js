import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server Started");
});
// app.get("/:id", (req, resp) => {
//     console.log(req.url);
//   resp.send(req.params.id);
// });

app.get("/:id/:email", (req, resp) => {
  console.log(req.url);
  console.log(req.params);
  resp.send(req.params.id + req.params.email);
});

app.get("/id/:id/email/:email", (req, resp) => {
  console.log(req.url);
  console.log(req.params);
  resp.send(req.params.id + req.params.email);
});
app.get("/home",(req,resp)=>{

    resp.send("Hello World");

})