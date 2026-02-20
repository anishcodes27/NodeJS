import express from 'express'
const app = express()
app.get("/", (a, b) => {
    // console.log(req.headers);
    console.log(a.headers.authorization);
    b.send()    
})
app.listen(8080)