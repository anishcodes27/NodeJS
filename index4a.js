import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server Started");
});
app.get("/:num1/:num2", (req, resp) => {
  console.log(req.url);
  console.log(req.params);
  const result = Number(req.params.num1) + Number(req.params.num2);
    resp.send(result);

});