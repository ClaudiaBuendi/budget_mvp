var express = require("express");
var router = express.Router();

const customersController = require("../controllers/customersController");

// any route in this file is pre-pended with /api/customers
/* GET users listing. */
router.get("/", customersController.getCustomers);

router.get("/transactions", customersController.getAlltransactions);

/* 
router has 3 important things
1. Method (get, post, put, delete)
2. Path ("/") 
3. Callback function (req, res) => {}

the method takes 2 arguments
1. Path ("/")
2. Callback function (req, res) => {} | controller function
*/

// localhost:4000/api/customers/3/purchases
// router.get("/:id/purchases", customersController.getPurchasesByCustomerId);

// router.post("/:id/purchases", customersController.addPurchase);
router.get("/:id/transactions", transactionsController.getByCustomerId);
router.post("/transactions");

module.exports = router;
