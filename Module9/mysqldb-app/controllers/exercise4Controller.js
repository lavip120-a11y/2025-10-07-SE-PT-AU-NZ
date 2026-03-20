"use strict"; //run in strict mode

const axios = require("axios"); //import axios

const getProducts = (req, res) => {
  //function - request and response
  axios
    .get("https://fakestoreapi.com/products") // using axios to get products from the fakestore
    .then((response) => {
      res.send({ result: 200, data: response.data }); //successfuly response
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message }); //failed request returning error message
    });
};

// uses JSON from request body to update products using ID from params
const updateProducts = (req, res) => {
  try {
    const id = req.params.id; //get product matching id
    const updateData = req.body; //get data from the body

    res.send({
      result: 200,
      message: `Product ${id} updated`,
      data: updateData,
    }); //successfuly response
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message }); //failed request returning error message
  }
};

module.exports = {
  //exporting to the router
  getProducts,
  updateProducts,
};
