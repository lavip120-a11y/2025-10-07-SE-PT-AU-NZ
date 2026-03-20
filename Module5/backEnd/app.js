//import the code so that the test will use app.js instead of index.js

const express = require("express"); //importing express package using require and assign it to a variable
const app = express(); //return the web server

const calculatorRouter = require("./routes/calculatorRoutes");


app.use("/calculate", calculatorRouter); //calculator routes is attached to web server

module.exports = app; //exporting the app so that other files can use it

