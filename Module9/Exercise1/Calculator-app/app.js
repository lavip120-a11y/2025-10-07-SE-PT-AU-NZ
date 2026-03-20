const express = require('express'); //require the express package 
const app = express(); //create an app using the express package

const calculatorRoutes = require('./routes/calculatorRoutes'); // importing calculatorRoutes

app.use(express.json()); //middleware to parse JSON bodies 
app.use("/calculate", calculatorRoutes) ; //telling the app to use the calculatorRoutes for any request that starts with /calculate

module.exports = app; //exporting the app module so that it can be used in other files like test files.