const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authentication = require("./router/authentication");
const aktifitas = require("./router/aktifitas");
const progress = require("./router/progress");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("listening on port " + port);
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization , x-api-key"
  );
  next();
});

mongoose
  .connect(
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-9xsqnuo-shard-00-00.iyftu5l.mongodb.net:27017,ac-9xsqnuo-shard-00-01.iyftu5l.mongodb.net:27017,ac-9xsqnuo-shard-00-02.iyftu5l.mongodb.net:27017/?ssl=true&replicaSet=atlas-g7ik5a-shard-0&authSource=admin&retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connection to database successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to fitness tracker api",
  });
});

app.use("/authentication", authentication);
app.use("/aktifitas", aktifitas);
app.use("/progress", progress);

module.exports = app;
