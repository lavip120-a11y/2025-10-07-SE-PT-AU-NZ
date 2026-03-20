const express = require("express") //import express do not need an app - it was created in the index file
const secondAppRouter = express.Router() //create a router

secondAppRouter.get("/", (req, res) => { 
res.send("Welcome to my second backend application");
});

module.exports = secondAppRouter;