const productService = require('../services/productServices');

const notFound = 404;
const badRequest = 400;
const webDAV = 422;

const productNotFound = async (req, res, next) => {
    const { id } = req.params;

    const product = await productService.getById(id);

  if (product.length < 1) {
    return res.status(notFound).json({ message: 'Product not found' });
  }
  next();
};

const validateInputName = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(badRequest).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res
      .status(webDAV)
      .json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = { productNotFound, validateInputName };