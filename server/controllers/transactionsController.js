// import the DB pool from your config folder
const pool = require("../config/db");

// example controller function
const getTransactions = async (req, res) => {
  // SELECT * FROM customers;
  const [result] = await pool.query("SELECT * FROM transactions;");
  res.status(200).send(result);
};

const getTransactionsByCustomerID = async (req, res) => {
  try {
    console.log("REQ.PARAMS", req.params);

    // Get id from req
    const { id } = req.params;

    // Use pool to get data from DB with a parameterized query
    const [result] = await pool.query(
      "SELECT customers.* FROM transactions INNER JOIN customers ON transactions.customer_id = customers.id WHERE transactions.id = ?",
      [id]
    );

    // Check if there are any results
    if (result.length === 0) {
      return res.status(404).json({
        error: "No transactions found for this customer ID",
      });
    }

    res.status(200).send(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to retrieve transactions" });
  }
};

const createTransactions = async (req, res) => {
  //destructuring these 6 keys from req.body
  const { category_id, description, type, total, date, user } = req.body;
  await pool.query(
    //creating new purchases with these 6 keys into the database
    `INSERT INTO transactions (category_id, description, type, total, date, user) VALUES (${category_id}, '${description}', '${type}', ${total}, '${date}', '${user}');`
  ); //respond and connect & successfully created a new transaction
  res.status(201).send({ message: "Purchase added" });
};

module.exports = {
  getTransactions,
  getTransactionsByCustomerID,
  createTransactions,
};
