// import the DB pool from your config folder
const pool = require("../config/db");

// example controller function
const getCategories = async (req, res) => {
  // SELECT * FROM customers;
  const [result] = await pool.query("SELECT * FROM categories;");
  res.status(200).send(result);
};

const createCategories = async (req, res) => {
  //destructuring these 6 keys from req.body
  const { name, budget } = req.body;
  await pool.query(
    //creating new purchases with these 6 keys into the database
    `INSERT INTO categories (name, budget) VALUES ('${name}', ${budget});`
  ); //respond and connect & successfully created a new transaction
  res.status(201).send({ message: "category added" });
};

module.exports = {
  getCategories,
  createCategories,
};
