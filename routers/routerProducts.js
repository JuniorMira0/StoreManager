const express = require('express');

const productController = require('../controllers/productControllers');
const validate = require('../middleware/validateProduct');

const router = express.Router();

router
  .route('/products/:id')
  .get(
    validate.productNotFound,
    productController.getById,
  );

router
  .route('/products')
  .get(productController.getProduct);

module.exports = router;