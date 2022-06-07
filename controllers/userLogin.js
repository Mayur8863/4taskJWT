const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require("../models/userRegisterModel");
const get = (req,res)=>{
    res.status(200).send("Login Page");
}
const post = (req,res) => {
    User.findOne({email : req.body.email })
    .then(data => {
        bcrypt.compare(req.body.password, data.password, function(err, result) {
            if(result)
            {
                const secretKey = "qwertyuiop";
                const token =jwt.sign({_id : data.id},secretKey);
                res.header('auth-token',token).send(`Asssigned token is ${token}`)
            }
            else{
                res.send("Invalid Credentials")
            }
        });
    })
    .catch(err =>{
        res.send("Register Before Login");
    })
}

module.exports = {
    userLoginGet : get,
    userLoginPost : post
}