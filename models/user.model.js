const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    mobile:{
        type: String,
        require: true
    },
    role:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model("user", userSchema);