const mongoose = require("mongoose");
//const certif = require("certification");
// const user = require("Userdb");
var passeCertif = new mongoose.Schema({
    date_passage : {
        type : String,
       
    },
    valider:{
        type:String,
       
       
    },
 //   certification:[certif],
   
  
})

const passeCertifdb = mongoose.model("passeCertifdb",passeCertif);

module.exports = passeCertifdb;