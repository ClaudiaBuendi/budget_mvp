const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

// Import routers
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/api", indexRouter); // General routes
app.use("/api/users", usersRouter); // User-related routes

module.exports = app;
