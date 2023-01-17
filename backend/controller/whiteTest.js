
var whiteTest = require("../model/whiteTest");


//create and save new WhiteTest


exports.create =  (req, res)=>{
    console.log(req.body);
    //validate request
   

    //new WhiteTest
    const whitetest = new whiteTest({
        code:req.body.code,
        domaine:req.body.domaine,
        technologie:req.body.technologie,
        level:req.body.level,
        titre:req.body.titre,
        duration:req.body.duration,
        nbQuestion:req.body.nbQuestion,
        langue:req.body.langue,

    })

    //save WhiteTest in the database
    
    try{
        res.status(201).json(whitetest.save())
    }
    catch{
        res.status(400).json({ message: error.message || "Some error" });
    };
}

exports.findByid = async (req, res) => {
    const id = req.params.id;
  
    whiteTest.findById(id)
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

//retrieve and return all WhiteTests/ retrive and return a single WhiteTest
exports.find = (req, res)=>{

    if(req.query.id) {
        const id = req.query.id;

        whiteTest.findById(id)
        .then(data =>{
            if(!data){
            res.status(404).send({message : "not found WhiteTest with id"+id})

            }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({message: "erro retrieving WhiteTest with id"+id})
    })

    }else{
    whiteTest.find()
    .then(WhiteTest=>{
        res.send(WhiteTest)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"error occurred while retriving WhiteTest information"})
    })
}
}

exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "Data to update can not be empty" });
      return;
    }
  
    const id = req.params.id;
    whiteTest.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error Update WhiteTest information" });
      });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    whiteTest.findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Delete patient with ${id}. Maybe patient not found ! "});
        } else {
          res.send({
            message: "WhiteTest was deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Could not delete Patient with id=" + id });
      });
  };

