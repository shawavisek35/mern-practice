const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    username : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
} , {

    timestamps : true
});

const User = mongoose.model("User" , user);
module.exports = User;