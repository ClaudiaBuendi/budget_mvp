// Import database pool from config folder
const pool = require("../config/db");

// AUTHENTICATION & ACCOUNT MANAGEMENT
const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    await pool.query("INSERT INTO users (username, password) VALUES (?, ?)", [
      username,
      password,
    ]);
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).send({ error: "Error registering user" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const [user] = await pool.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );
    if (user.length > 0) {
      res.status(200).send({ message: "Login successful", user: user[0] });
    } else {
      res.status(401).send({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).send({ error: "Error logging in" });
  }
};

// OPTIONAL: GET USERS
const getUsers = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM users;");
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: "Error fetching users" });
  }
};

// EXPORT FUNCTIONS
module.exports = {
  registerUser,
  loginUser,
  getUsers,
};
