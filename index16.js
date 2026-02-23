import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());
app.listen(8080);
const users = [];
const SECRET_KEY = "lpu"; 
app.post("/signup", async (req, res) => {
  const body = req.body;
  const hashPassword = await bcrypt.hash(body.password, 10);
  body.password = hashPassword;
  users.push(body);
  res.json(users);
});



app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const found = users.find((user) => user.email === email);
  if (found) {
    const chkPassword = await bcrypt.compare(password, found.password);
    if (chkPassword) {
      const token = jwt.sign({ email: found.email }, SECRET_KEY, { expiresIn: "1h" });
      res.status(200).json({ message: "success", token });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } else {
    res.status(401).json({ message: "User not found" });
  }
});

app.get("/users", (req, res) => {
  res.json(users);
});


const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; 
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

app.get("/", verifyToken, (req, res) => {
  res.send("Hello World");
});



