const express = require("express");
const router = require("../routes");
const app = express();

//this is to get the data from req.body if your content type is application/json
app.use(express.json());

//this is to get the data from req.body if you content type is application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/", router);

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "CastError") {
    return res.status(401).json({
      status: 401,
      err: err,
      msg: `Invalid value ${err.value} for field: ${err.path}`,
    });
  }

  if (err.name === "ValidationError") {
    return res.status(401).json({
      status: 401,
      err: err,
      msg: err.message,
    });
  }

  res
    .status(500)
    .json({ status: 500, msg: "Internal Server Error.", err: err });
});

module.exports = app;
