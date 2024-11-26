// Import database pool from config folder
const pool = require("../config/db");
var jwt = require("jsonwebtoken");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;

const supersecret = process.env.SUPER_SECRET;

// AUTHENTICATION & ACCOUNT MANAGEMENT
const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, saltRounds);
    await pool.query("INSERT INTO users (username, password) VALUES (?, ?)", [
      username,
      hash,
    ]);
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).send({ error: "Error registering user" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [results] = await pool.query(
      `SELECT * FROM users WHERE username = ?`,
      [username]
    );

    const user = results[0];
    if (user) {
      const user_id = user.id;

      const correctPassword = await bcrypt.compare(password, user.password);

      if (!correctPassword) throw new Error("Incorrect password");

      // { user_id } is the same as { user_id: user_id }
      let token = jwt.sign({ user_id }, supersecret);

      res.send({ message: "Login successful, here is your token", token });
    } else {
      throw new Error("User does not exist");
    }
  } catch (err) {
    console.error("Login error:", err); // Log the error in the backend console
    res
      .status(400)
      .send({ message: "Login failed. Please check your credentials." });
  }
};

// OPTIONAL: GET USERS
const getUsers = async (req, res) => {
  const [results] = await pool.query(
    `SELECT username FROM users WHERE id = ${req.user_id}`
  );
  res.send(results[0]);
};

// EXPORT FUNCTIONS
module.exports = {
  registerUser,
  loginUser,
  getUsers,
};
