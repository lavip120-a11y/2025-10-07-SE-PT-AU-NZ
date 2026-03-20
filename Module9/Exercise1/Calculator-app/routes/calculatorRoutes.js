const express = require("express");
const calculatorRouter = express.Router();
const calculatorController = require("../controllers/calculatorController")

calculatorRouter.get('/', (req, res) => { //bind to an endpoint of the object app using the URL (root) 2 arguments are passed. request and response.
res.send('Calculate') //send message to requestor.
});

calculatorRouter.get("/add", (req, res)=> { 
    calculatorController.addNumbers(req, res);
});
calculatorRouter.get("/subtract", (req, res)=> { 
    calculatorController.subtractNumbers(req, res);
});
calculatorRouter.get("/divide", (req, res)=> { 
    calculatorController.divideNumbers(req, res);
});
calculatorRouter.get("/multiply", (req, res)=> { 
    calculatorController.multiplyNumbers(req, res);
});

module.exports = calculatorRouter;