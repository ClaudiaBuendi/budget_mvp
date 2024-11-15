const cors = require("cors");
const express = require("express");
const app = express();
// const port = 4000;
var path = require("path");
var cookieParser = require("cookie-parser");
var indexRouter = require("./routes/index");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);
// Your routes here
// app.get("/api/transactions", (req, res) => {
//   res.json({ transactions: [] }); // Sample response
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${4000}`);
// });
module.exports = app;
