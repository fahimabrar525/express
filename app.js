const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use("/api/user", userRouter);


app.use("/register", (req, res)=>{
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");
})

app.get("/login", (req, res)=>{
    // res.cookie("name", "fahim abara");
    // res.cookie("age", "26");
    // res.clearCookie("name");
    res.append("id", "1230000")
    res.end();
})

app.use('/', (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html");
})

app.use((req, res)=>{
    res.send("404, invalid URL")
})



module.exports = app;