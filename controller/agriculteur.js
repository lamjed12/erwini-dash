
var agriculteur = require("../model/agriculteur");


//create and save new agriculteur


exports.create =  (req, res)=>{
    console.log(req.body);
    //validate request
   

    //new agriculteur
    const agriculteur = new agriculteur({
        
        
        Name:req.body.Name,
        Phone:req.body.Phone,
        Pus:req.body.Pus,
        CodePuk:req.body.CodePuk,
        City:req.body.City,
        Region:req.body.Region,
        NbPompe:req.body.NbPompe,
        NbPuit:req.body.NbPuit,
        NbVanne:req.body.NbVanne,
        NbMultivanne:req.body.NbMultivanne,
        Points: req.body.Points

    })

    //save agriculteur in the database
    
    try{
        res.status(201).json( agriculteur.save())
    }
    catch{
        res.status(400).json({ message: error.message || "Some error" });
    };
}

exports.findByid = async (req, res) => {
    const id = req.params.id;
  
    agriculteur.findById(id)
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

//retrieve and return all agriculteurs/ retrive and return a single agriculteur
exports.find = (req, res)=>{

    if(req.query.id) {
        const id = req.query.id;

        agriculteur.findById(id)
        .then(data =>{
            if(!data){
            res.status(404).send({message : "not found agriculteur with id"+id})

            }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({message: "erro retrieving agriculteur with id"+id})
    })

    }else{
    agriculteur.find()
    .then(agriculteur=>{
        res.send(agriculteur)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"error occurred while retriving agriculteur information"})
    })
}
}

exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "Data to update can not be empty" });
      return;
    }
  
    const id = req.params.id;
    agriculteur.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error Update agriculteur information" });
      });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    agriculteur.findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Delete patient with ${id}. Maybe patient not found ! "});
        } else {
          res.send({
            message: "agriculteur was deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Could not delete Patient with id=" + id });
      });
  };

