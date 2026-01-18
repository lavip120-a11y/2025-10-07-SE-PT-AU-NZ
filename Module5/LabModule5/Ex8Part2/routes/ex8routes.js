const express = require('express');
const controllers = require('../controllers/ex8controllers');
const router = express.Router();

// Define route for getting products
router.get('/products', controllers.getProducts);

module.exports = router;