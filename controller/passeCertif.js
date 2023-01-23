
var passeCertifdb = require("../model/passeCertif");


//create and save new passeCertif


exports.create =  (req, res)=>{
    console.log(req.body);
    //validate request
   

    //new passeCertif
    const PasseCertif = new passeCertifdb({
        date_passage:req.body.date_passage,
        valider:req.body.valider,
        // certification:req.body.certification,
        // etudient:req.body.etudient,
    })

    //save passeCertif in the database
    
    try{
        res.status(201).json( PasseCertif.save())
    }
    catch{
        res.status(400).json({ message: error.message || "Some error" });
    };
}

exports.findByid = async (req, res) => {
    const id = req.params.id;
  
    passeCertifdb.findById(id)
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

//retrieve and return all passeCertifs/ retrive and return a single passeCertif
exports.find = (req, res)=>{

    if(req.query.id) {
        const id = req.query.id;

        passeCertifdb.findById(id)
        .then(data =>{
            if(!data){
            res.status(404).send({message : "not found passeCertif with id"+id})

            }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({message: "erro retrieving passeCertif with id"+id})
    })

    }else{
    passeCertifdb.find()
    .then(passeCertif=>{
        res.send(passeCertif)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"error occurred while retriving passeCertif information"})
    })
}
}

exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "Data to update can not be empty" });
      return;
    }
  
    const id = req.params.id;
    passeCertifdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error Update passeCertif information" });
      });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    passeCertifdb.findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Delete patient with ${id}. Maybe patient not found ! "});
        } else {
          res.send({
            message: "passeCertif was deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Could not delete Patient with id=" + id });
      });
  };

