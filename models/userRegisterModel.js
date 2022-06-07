const mongoose = require("mongoose");
const registeredUserModel = mongoose.model(
    "registeredUsers",
    new mongoose.Schema({
        name : {
            type : String,
            min : 4,
            required : true
        },
        email : {
            type : String,
            min : 4,
            required : true
        },
        password : {
            type : String,
            min : 4,
            required : true
        }
    })
    )
module.exports = registeredUserModel;