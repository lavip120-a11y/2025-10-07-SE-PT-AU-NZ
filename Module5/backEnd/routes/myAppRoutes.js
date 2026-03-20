const express = require("express"); //import express do not need an app - it was created in the index file
const myAppRouter = express.Router(); //create a router

myAppRouter.get("/about", (req, res) => { //adding a new route with what to respond back
    res.send("This page is developed as part of a sample demonstration of backend webservices");
});

myAppRouter.get('/test', (req, res) =>{ //add the route to the get the test endpoint
    res.send("This route is for testing purpose");
});

myAppRouter.get("/contact", (req, res) => {
    res.send("Please contact 123 456 789");
});

//export router for the file because there is no link to the express.static
module.exports = myAppRouter;