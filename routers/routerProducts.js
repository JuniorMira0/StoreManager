const express = require('express');

const productController = require('../controllers/productControllers');
const salesController = require('../controllers/salesController');
const validate = require('../middleware/validateProduct');
const validateSchema = require('../middleware/validationSales');

const router = express.Router();

router
  .route('/products/:id')
  .get(
    validate.productNotFound,
    productController.getById,
  );

router
  .route('/products')
  .get(productController.getProduct)
  .post(
    validate.validateInputName,
    productController.enrolProduct,
);

router
  .route('/sales')
  .post(
    validateSchema.schema,
    salesController.createSalesProduct,
);

module.exports = router;