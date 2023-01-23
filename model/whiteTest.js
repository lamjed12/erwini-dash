const mongoose = require("mongoose");



var whiteTest_schema = new mongoose.Schema({
    code : {
        type : String,
        required: true
    },
    domaine:{
        type:String,
        required:true,
        
    },
    technologie:{
        type:String,
        required:true,
        
    },
    level:String,
    titre:String,
    duration:String,
    nbQuestion:String,
    langue:String,
})


const whiteTest = mongoose.model("whiteTest",whiteTest_schema);

module.exports = whiteTest;