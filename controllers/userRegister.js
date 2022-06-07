const User = require("../models/userRegisterModel");
const UserValidation = require("../userValidation");
const bcrypt = require("bcrypt");
const saltRounds = 12;

const get = (req,res)=>{
    res.status(200).send("Register Page");
}
const post = (req,res) => {
    // User data check
    console.log('dd')
    const {error}  = UserValidation(req.body);
    if(error) return res.send(error);
    // email Duplication
    console.log('dd1')
    User.findOne({email: req.body.email})
    .then(result=>{
        if(result){
            return res.status(409).send("Email already exists");
        }
    })
    .catch(err =>{
        res.send(401).json({err})
    })

    const Data  = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
    })
    Data.save().then(result => {
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            User.updateOne({email:result.email},{$set : {password:hash}}).then(resp=>{
                console.log(resp);
            })
        })
        res.status(200).json(`Sucess ${result}`);
    })
    .catch(err =>{
        res.json(err);
    })
}

module.exports = {
    userRegisterGet : get,
    userRegisterPost : post
}