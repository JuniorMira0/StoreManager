const productService = require('../services/productServices');

const ok = 200;
const created = 201;

const getProduct = async (_req, res) => {
    const products = await productService.getProduct();
  
    return res.status(ok).json(products);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const product = await productService.getById(id);

    return res.status(ok).json(product[0]);
};

const enrolProduct = async (req, res) => {
  const { name } = req.body;
  const addProduct = await productService.enrolProduct(name);
  const product = { id: addProduct, name };

  return res.status(created).json(product);
};

module.exports = {
  getProduct,
  getById,
  enrolProduct,
};
