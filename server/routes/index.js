const express = require("express");
const router = express.Router();
const {
  getTransactions,
  createTransactions,
} = require("../controllers/transactionsController");
const {
  getCategories,
  createCategories,
} = require("../controllers/categoriesController");
const { registerUser, loginUser } = require("../controllers/userController");

// Define your endpoint. This routers job is to get all transactions
router.get("/transactions", getTransactions);

// this router's job is to create a new transaction. ("endpoint", function)
router.post("/new-transactions", createTransactions);

router.get("/categories", getCategories);

router.post("/new-categories", createCategories);

//USER ROUTES
// Register -> create new user
router.post("/register", registerUser);

// login -> get user info
router.post("/login", loginUser);

//LATER:
//delete user
// get all users
// get user by id
// update user info

module.exports = router;
