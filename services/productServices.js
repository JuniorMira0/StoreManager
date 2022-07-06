const ProductModel = require('../models/productModel');

const getProduct = async () => {
  const products = await ProductModel.getProduct();

  return products;
};

const getById = async (id) => {
  const product = await ProductModel.getById(id);

  return product;
};

const enrolProduct = async (name) => {
  const addProduct = await ProductModel.enrolProduct(name);
  return addProduct;
};

module.exports = {
  getProduct,
  getById,
  enrolProduct,
};
