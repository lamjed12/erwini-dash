const express = require('express');
const route = express.Router();

// const services = require("../services/render");
const user = require("../controller/user");
const whiteTest = require("../controller/whiteTest");
const agriculteur =  require("../controller/agriculteur");
const formation =  require("../controller/formation");
const passeCertif =  require("../controller/passeCertif");
/**
 * @description Root Route
 * @method GET /
 */



  //API user 
  route.post('/api/create', user.create);
  route.get("/api/users",user.find);
  route.get("/api/user/:id",user.findByid);
  route.put("/api/user/:id",user.update);
  route.delete("/api/user/:id",user.delete);



  //API whiteTest 
  route.post('/api/create/whiteTests', whiteTest.create);
  route.get("/api/whiteTests",whiteTest.find);
  route.get("/api/whiteTest/:id",whiteTest.findByid);
  route.put("/api/whiteTest/:id",whiteTest.update);
  route.delete("/api/whiteTest/:id",whiteTest.delete);


 //API agriculteur 
 route.post('/api/create/agriculteur', agriculteur.create);
 route.get("/api/agriculteurs",agriculteur.find);
 route.get("/api/agriculteur/:id",agriculteur.findByid);
 route.put("/api/agriculteur/:id",agriculteur.update);
 route.delete("/api/agriculteur/:id",agriculteur.delete);


 //API formation 
 route.post('/api/create/formation', formation.create);
 route.get("/api/formation",formation.find);
 route.get("/api/formation/:id",formation.findByid);
 route.put("/api/formation/:id",formation.update);
 route.delete("/api/formation/:id",formation.delete);



 //API passe Certifcation 
 route.post('/api/create/passeCertif', passeCertif.create);
 route.get("/api/passeCertifs",passeCertif.find);
 route.get("/api/passeCertif/:id",passeCertif.findByid);
 route.put("/api/passeCertif/:id",passeCertif.update);
 route.delete("/api/passeCertif/:id",passeCertif.delete);










  module.exports = route 