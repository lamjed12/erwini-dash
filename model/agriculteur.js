const mongoose = require("mongoose");



var agriculteur_schema = new mongoose.Schema({

    Phone:{
        type:String,
        required:true,
        unique:true
    },
    Pus:{
        type:String,
        required:true,
        unique:true
    },
    CodePuk:{
        type:String,
        required:true,
        unique:true
    },
    Points:{
        type:String,
        required:true,
        unique:true
    },
    Name:String,
    City:String,
    Region:String,
    NbPompe:String,
    NbPuit:String,
    NbVanne:String,
    NbMultivanne:String,
    agriculteur : [{ type: mongoose.Schema.Types.ObjectId, ref: "agriculteur" }],
})


const agriculteur = mongoose.model("agriculteur",agriculteur_schema);

module.exports = agriculteur;