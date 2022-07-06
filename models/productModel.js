const connection = require('./connection');

const getProduct = async () => {
    const [products] = await connection.execute(
      'SELECT * FROM StoreManager.products',
    );
    return products;
};

const getById = async (id) => {
    const [product] = await connection.execute(
      `
      SELECT * FROM StoreManager.products
      WHERE id = ?
      `,
      [id],
    );
    return product;
};

const enrolProduct = async (name) => {
    const [{ insertId }] = await connection.execute(
      `
    INSERT INTO StoreManager.products (name)
    VALUE (?)`,
      [name],
    );
  return insertId;
};

module.exports = { getProduct, getById, enrolProduct };