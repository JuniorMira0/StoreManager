const salesModel = require('../models/salesModel');

const createSalesProduct = async (id, productID, quantity) => {
  const addProduct = await salesModel.createSalesProduct(
    id,
    productID,
    quantity,
  );

  return addProduct;
};

const createSale = async () => {
  const idSale = await salesModel.createSale();

  return idSale;
};

module.exports = {
  createSalesProduct,
  createSale,
};