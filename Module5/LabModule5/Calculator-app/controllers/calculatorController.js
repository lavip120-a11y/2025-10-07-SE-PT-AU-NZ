const calcLibrary = require('../libraries/calculator'); //importing the calculator library which is a class
let myCalc = new calcLibrary(); //create an object of the class

const addNumbers = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    console.log(num1);
    console.log(num2);

if (isNaN(num1) || isNaN(num2)) { //
    res
    .status(500)
    .json({ error:"numbers should be integers" }); //error handling for invalid inputs
} else { 
    let result = myCalc.add(parseInt(num1), parseInt(num2)); // get the calculation from the library
    res
    .status(200)
    .json({ result: result }); 
}
};

const subtractNumbers = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) { //
    res
    .status(500)
    .json({ error:"numbers should be integers" }); //error handling for invalid inputs
} else { 
    let result = myCalc.subtract(parseInt(num1), parseInt(num2)); //difference of two numbers
    res
    .status(200)
    .json({ result: result });
}
};

const divideNumbers = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) { //
    res
    .status(500)
    .json({ error:"numbers should be integers" }); //error handling for invalid inputs
} else { 
    if (num2 === 0) {
    res
    .status(500)
    .json({ error: "division by zero is not allowed" }); //error handling for division by zero
    }
    let result = myCalc.divide(parseInt(num1), parseInt(num2)); //division of two numbers
    res
    .status(200)
    .json({ result: result });
}
};

const multiplyNumbers = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) { //
    res
    .status(500)
    .json({ error:"numbers should be integers" }); //error handling for invalid inputs
} else { 
    let result = myCalc.multiply(parseInt(num1), parseInt(num2)); //product of two numbers
    res
    .status(200)
    .json({ result: result });
}
};

module.exports = {addNumbers, subtractNumbers, divideNumbers, multiplyNumbers };