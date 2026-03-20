const express = require("express"); //import express (it is already installed)
const calculatorRouter = express.Router(); //create a router - use express.router function to return a root
const calculatorController = require("../controllers/calculatorController");

//get method and path
calculatorRouter.get("/add", (req, res)=>{ //get method and path
    calculatorController.addNumbers(req, res); //logic to calculate numbers located in calculator controller
});

calculatorRouter.get("/subtract", (req, res)=>{ 
    calculatorController.subtractNumbers(req, res); 
});

calculatorRouter.get("/multiply", (req, res)=>{
calculatorController.multiplyNumbers(req, res);
});
    
calculatorRouter.get("/divide", (req, res)=>{
calculatorController.divideNumbers(req, res);
});


module.exports = calculatorRouter; //attach this calculator router to the index file