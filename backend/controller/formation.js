
var formationdb = require("../model/formation");


//create and save new formation


exports.create =  (req, res)=>{
    console.log(req.body);
    
    //new formation
    const Formation = new formationdb({
        date_debut:req.body.date_debut,
        date_fin:req.body.date_fin,
        nb_place:req.body.nb_place,
        lien:req.body.lien
    })

    //save formation in the database
    
    try{
        res.status(201).json( Formation.save())
    }
    catch{
        res.status(400).json({ message: error.message || "Some error" });
    };
}

exports.findByid = async (req, res) => {
    const id = req.params.id;
  
    formationdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found patient with id" + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Erreur retrieving patient with id " + id });
      });
  };

//retrieve and return all formations/ retrive and return a single formation
exports.find = (req, res)=>{

    if(req.query.id) {
        const id = req.query.id;

        formationdb.findById(id)
        .then(data =>{
            if(!data){
            res.status(404).send({message : "not found formation with id"+id})

            }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({message: "erro retrieving formation with id"+id})
    })

    }else{
    formationdb.find()
    .then(formation=>{
        res.send(formation)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"error occurred while retriving formation information"})
    })
}
}

exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "Data to update can not be empty" });
      return;
    }
  
    const id = req.params.id;
    formationdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error Update formation information" });
      });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    formationdb.findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Delete patient with ${id}. Maybe patient not found ! "});
        } else {
          res.send({
            message: "formation was deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Could not delete Patient with id=" + id });
      });
  };

