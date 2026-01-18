const axios = require('axios');

const getProducts = async (req, res) => {
  axios.get('https://fakestoreapi.com/products')
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Failed to fetch products' });
    });
};

module.exports = {getProducts};