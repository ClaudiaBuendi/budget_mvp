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
  // Destructuring the request body
  const { category_id, description, type, total, date, user } = req.body;

  // Ensure the values are sanitized and validated
  if (!category_id || !description || !type || !total || !date || !user) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Using parameterized queries to prevent SQL injection
    await pool.query(
      `INSERT INTO transactions (category_id, description, type, total, date, user) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [category_id, description, type, total, date, user]
    );
    res.status(201).send({ message: "Transaction added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to create transaction" });
  }
};

module.exports = {
  getTransactions,
  getTransactionsByCustomerID,
  createTransactions,
};
