const req = require("express/lib/request");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name : String,
    email : String,
    age : Number,
    city : String,
    profession : String
}, {timesstamps: true});

const User = mongoose.model("User",userSchema);

module.exports =User;