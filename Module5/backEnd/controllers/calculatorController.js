const Calculator = require("../libraries/calculator");
let mycalc = new Calculator(); //Instance of Calculator Class

const addNumbers = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  console.log(num1);
  console.log(num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(500).json({ error: "numbers should be integers" });
  }

  let result = mycalc.add(num1, num2);
  return res.status(200).json({ result });
};

const subtractNumbers = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(500).json({ error: "numbers should be integers" });
  }

  let result = mycalc.subtract(num1, num2);
  //sending the response back as a json object
  return res.status(200).json({ result });
};

const divideNumbers = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(500).json({ error: "numbers should be integers" });
  }

  if (num2 === 0) {
    return res.status(500).json({ error: "cannot divide by zero" });
  }

  let result = mycalc.divide(num1, num2);

  return res.status(200).json({ result });
};

const multiplyNumbers = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(500).json({ error: "numbers should be integers" });
  }

  let result = mycalc.multiply(num1, num2);

  return res.status(200).json({ result });
};

module.exports = {
  addNumbers,
  subtractNumbers,
  divideNumbers,
  multiplyNumbers,
};
