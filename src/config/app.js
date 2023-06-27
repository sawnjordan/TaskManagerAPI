const express = require("express");
const router = require("../routes");
const app = express();

//this is to get the data from req.body if your content type is application/json
app.use(express.json());

//this is to get the data from req.body if you content type is application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/", router);

module.exports = app;
