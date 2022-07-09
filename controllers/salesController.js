const salesService = require('../services/salesService');

const created = 201;

const createSalesProduct = async (req, res) => {
  const sales = req.body;
  const id = await salesService.createSale();

  if (!sales) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  const saleCreated = sales.map(async (sale) => {
    const { productID, quantity } = sale;
    const addSales = await salesService.createSalesProduct(
      id,
      productID,
      quantity,
    );
    return addSales;
  });
    await Promise.all(saleCreated);

  return res.status(created).json({ id, itemsSold: sales });
};

module.exports = {
  createSalesProduct,
};