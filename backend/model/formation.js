const mongoose = require("mongoose");



var formation_schema = new mongoose.Schema({
    date_debut : {
        type : String,
        required: true
    },
    date_fin:{
        type:String,
        required:true,
        unique:true
    },
    nb_place:{
        type:String,
        required:true,
        unique:true
    },
    lien:String,
})


const formation = mongoose.model("formation",formation_schema);

module.exports = formation;