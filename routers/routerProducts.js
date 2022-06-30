const express = require('express');

const { getProduct, getById } = require('../models/productModel');

const router = express.Router();

router
  .get('/products', getProduct)
  .get('products/:id', getById);

module.exports = router;