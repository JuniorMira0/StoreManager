const salesService = require('../services/salesService');

const created = 201;

const createSalesProduct = async (req, res) => {
  const sales = req.body;
  const id = await salesService.createSale();
  
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