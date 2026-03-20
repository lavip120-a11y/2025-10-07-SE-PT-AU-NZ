const express = require("express"); //import express
const router = express.Router(); //create router
const exercise4Controller = require("../controllers/exercise4Controller"); //import controller file

// matches GET requests sent to /api (endpoint)

router.get("/", exercise4Controller.getProducts);

router.put("/:id", exercise4Controller.updateProducts);

module.exports = router;
