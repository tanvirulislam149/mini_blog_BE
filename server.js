const express = require("express");
const connectDB = require("./connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
