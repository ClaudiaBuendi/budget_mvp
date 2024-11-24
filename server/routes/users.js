const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Routes for user management
router.post("/register", userController.registerUser); // Register a new user
router.post("/login", userController.loginUser); // Log in an existing user

// Optional: Get all users (if needed)
router.get("/", userController.getUsers);

module.exports = router;
