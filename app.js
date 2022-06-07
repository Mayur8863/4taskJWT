const express = require("express");
const app = express();
app.use(express.json());

// register route
const registerRoute = require("./routes/register.js");
app.use("/user/register",registerRoute)
// Login route
const loginRoute = require("./routes/login.js");
app.use("/user/login",loginRoute);
// logout route
const logoutRoute = require("./routes/logout.js");
app.use("/user/logout",logoutRoute);

app.use((req,res)=>{
    res.status(200).json({
        message : "Page Not Found",
        status : "404",
    })
})
module.exports = app;