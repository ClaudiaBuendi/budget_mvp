// import the DB pool from your config folder
const pool = require("../config/db");

// example controller function
const getCustomers = async (req, res) => {
  // SELECT * FROM customers;
  const [result] = await pool.query("SELECT * FROM customers;");
  res.status(200).send(result);
};

const getAllPurchases = async (req, res) => {
  const [result] = await pool.query(
    "SELECT customers.*, purchases.date_time, purchases.total FROM customers LEFT JOIN purchases ON customers.id = purchases.customer_id;"
  );
  res.status(200).send(result);
};

const getPurchasesByCustomerId = async (req, res) => {
  console.log("REQ.PARAMS", req);
  const { id } = req.params;
  const [result] = await pool.query(
    `SELECT customers.*, purchases.date_time, purchases.total FROM customers LEFT JOIN purchases ON customers.id = purchases.customer_id WHERE customers.id = ${id};`
  );
  res.status(200).send(result);
};

const addPurchase = async (req, res) => {
  const { id } = req.params;
  console.log("REQ.BODY", req.body);
  const { date_time, total } = req.body;
  await pool.query(
    `INSERT INTO purchases (date_time, total, customer_id) VALUES ('${date_time}', ${total}, ${id});`
  );
  res.status(201).send({ message: "Purchase added" });
};

module.exports = {
  getCustomers,
  getAllPurchases,
  getPurchasesByCustomerId,
  addPurchase,
};
