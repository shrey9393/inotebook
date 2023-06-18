// db.js file

const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/";
const connectToMongo = () => {
  mongoose
    .connect(mongoURI, { serverSelectionTimeoutMS: 5000 })
    .then(console.log("connected"));
};

// main index file
connectToMongo();

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
