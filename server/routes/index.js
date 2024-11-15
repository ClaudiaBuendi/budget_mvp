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

// Define your endpoint. This routers job is to get all transactions
router.get("/transactions", getTransactions);

// this router's job is to create a new transaction. ("endpoint", function)
router.post("/new-transactions", createTransactions);

router.get("/categories", getCategories);

router.post("/new-categories", createCategories);
module.exports = router;
