const connection = require('./connection');

const getProduct = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return products;
};

const getById = async (id) => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE ID = ?;',
    [id],
  );
  return products;
};

module.exports = { getProduct, getById };