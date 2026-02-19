import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server Started");
});




// app.get("/:num1/:num2/:num3", (req, resp) => {
//     console.log(req.url);
//     console.log(req.params);
//     const result = Number(req.params.num1) + Number(req.params.num2) +  Number(req.params.num3);
//     resp.send(result);
//     }
// );


// app.get("/x/:num1/y/:num2/z/:num3", (req, resp) => {
//   console.log(req.url);
//   console.log(req.params);
//   const result = Number(req.params.num1) + Number(req.params.num2) +  Number(req.params.num3);
//   resp.send(result);
// });

app.get("/:a/:b/:c/:d", (req, resp) => {
  resp.send("hello student");
});