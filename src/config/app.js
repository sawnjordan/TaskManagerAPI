const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({ msg: "This is first get request" });
});

module.exports = app;
