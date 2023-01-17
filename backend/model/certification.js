const mongoose = require("mongoose");



var certification_schema = new mongoose.Schema({
    code : {
        type : String,
        required: true
    },
    domaine:{
        type:String,
        required:true,
        unique:true
    },
    technologie:{
        type:String,
        required:true,
        unique:true
    },
    fee:{
        type:String,
        required:true,
        unique:true
    },
    level:String,
    titre:String,
    duration:String,
    nbQuestion:String,
    langue:String,
    certification : [{ type: mongoose.Schema.Types.ObjectId, ref: "certif" }],
})


const certification = mongoose.model("certification",certification_schema);

module.exports = certification;