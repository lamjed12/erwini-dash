
var certification = require("../model/certification");


//create and save new certification


exports.create =  (req, res)=>{
    console.log(req.body);
    //validate request
   

    //new certification
    const Certification = new certification({
        code:req.body.code,
        domaine:req.body.domaine,
        technologie:req.body.technologie,
        level:req.body.level,
        titre:req.body.titre,
        duration:req.body.duration,
        nbQuestion:req.body.nbQuestion,
        langue:req.body.langue,
        fee: req.body.fee

    })

    //save certification in the database
    
    try{
        res.status(201).json( Certification.save())
    }
    catch{
        res.status(400).json({ message: error.message || "Some error" });
    };
}

exports.findByid = async (req, res) => {
    const id = req.params.id;
  
    certification.findById(id)
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

//retrieve and return all certifications/ retrive and return a single certification
exports.find = (req, res)=>{

    if(req.query.id) {
        const id = req.query.id;

        certification.findById(id)
        .then(data =>{
            if(!data){
            res.status(404).send({message : "not found certification with id"+id})

            }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({message: "erro retrieving certification with id"+id})
    })

    }else{
    certification.find()
    .then(certification=>{
        res.send(certification)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"error occurred while retriving certification information"})
    })
}
}

exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "Data to update can not be empty" });
      return;
    }
  
    const id = req.params.id;
    certification.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error Update certification information" });
      });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    certification.findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Delete patient with ${id}. Maybe patient not found ! "});
        } else {
          res.send({
            message: "certification was deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Could not delete Patient with id=" + id });
      });
  };

