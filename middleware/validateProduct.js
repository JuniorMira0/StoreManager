const productService = require('../services/productServices');

const notFound = 404;

const productNotFound = async (req, res, next) => {
    const { id } = req.params;

    const product = await productService.getById(id);

  if (product.length < 1) {
    return res.status(notFound).json({ message: 'Product not found' });
  }
  next();
};

module.exports = { productNotFound };