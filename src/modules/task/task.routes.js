const express = require("express");

const router = express.Router();

//Get All Tasks
router.get("/", (req, res, next) => {
  res.json({ status: 200, msg: "All Tasks lists." });
});

//Create a New Task
router.post("/", (req, res, next) => {
  res.json({ status: 200, msg: "Create New Task." });
});

//Get a single task
router.get("/:id", (req, res, next) => {
  res.json({
    status: 200,
    msg: `Get a Single Task with id: ${req.params.id}.`,
  });
});

//Update a task
router.put("/:id", (req, res, next) => {
  res.json({ status: 200, msg: `Update a Task with id: ${req.params.id}.` });
});

//Delete a task
router.delete("/:id", (req, res, next) => {
  res.json({ status: 200, msg: `Delete a Task with id: ${req.params.id}.` });
});

module.exports = router;
