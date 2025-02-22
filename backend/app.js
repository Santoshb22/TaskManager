const express = require("express");
const routes = require("./route/index")
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options("*", cors());

app.use("/", routes)

module.exports = app;