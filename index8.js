import express from 'express'
const app = express()
app.use(express.json())
let users = [{
        id: 1,
        name: "John",
        email: "john@gmail.com",
        role: "student"
    },
    {
        id: 2,
        name: "Cathy",
        email: "cathy@gmail.com",
        role: "student"
    },
    {
        id: 3,
        name: "Mike",
        email: "mike@gmail.com",
        role: "admin"
}]
app.get("/", (req, res) => {
    res.json(users)
})
app.post("/", (req, res) => {
    const user = req.body
    users.push(user)
    res.json(users)
})
// app.delete("/:id", (req, res) => {
//     users = users.filter((user) => user.id !== Number(req.params.id))
//     res.json(users)
// })
app.delete("/:id", (req, res) => {
    console.log("Delete route hit");

    const id = Number(req.params.id);
    users = users.filter((user) => user.id !== id);

    res.json(users);
});
app.listen(8080, () => {
    console.log("Server started");
})





// import express from 'express'
// const app = express()
// const users = [{
//         id: 1,
//         name: "John",
//         email: "john@gmail.com",
//         role: "student"
//     },
//     {
//         id: 2,
//         name: "Cathy",
//         email: "cathy@gmail.com",
//         role: "student"
//     },
//     {
//         id: 3,
//         name: "Mike",
//         email: "mike@gmail.com",
//         role: "admin"
// }]
// app.get("/", (req, res) => {
//     res.json(users)
// })
// app.get("/:id", (req, res) => {
//     const user = users.find((user) => user.id === Number(req.params.id))
//     res.send(user)
// })
// app.listen(8080)
