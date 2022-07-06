const connection = require('./connection');

const createSalesProduct = async ({ id, productID, quantity }) => {
  const query = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
  VALUES(?, ?, ?)`;

  await connection.execute(query, [id, productID, quantity]);
  return { productID, quantity };
};

const createSale = async () => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.sales
    VALUE ()`,
  );
  console.log(insertId);
  return insertId;
};

module.exports = {
  createSalesProduct,
  createSale,
};