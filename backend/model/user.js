const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    type:{
        type:String,
        required:true,
        unique:true
    },
    user : [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    gender:String,
    status:String
})

const Userdb = mongoose.model("userdb",schema);

module.exports = Userdb;