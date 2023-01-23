
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const { startSession } = require("mongoose");
const app = express();
const cors = require("cors");

const connectDB = require("./database/connection");

//cors provides Express middleware to enable CORS with various options
var corsOptions = {
  origin: "http://localhost:4200",
};

app.use((req, res, next) => {
  //res.setHeader('Access-Control-Allow-Origin', 'https://cdpn.io')
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Authorization,Accept");
  next();
});
app.use(cors(corsOptions));

dotenv.config({ path: ".env" });
const port = process.env.port || 8080;

//log requests
app.use(morgan("tiny"));
app.use(express.json());

//mongodb connection
connectDB();

app.get("/", (req, res) => {
    res.send("Application!");
  });
  
  //load routers
  app.use('/',require('./routes/router'));

  app.listen(port, () => {
    console.log("Server is running" );
  });