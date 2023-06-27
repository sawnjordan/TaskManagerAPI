const express = require("express");
const {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("./task.controller");

const router = express.Router();

//Get All Tasks
router.get("/", getAllTask);

//Create a New Task
router.post("/", createTask);

//Get a single task
router.get("/:id", getTask);

//Update a task
router.put("/:id", updateTask);

//Delete a task
router.delete("/:id", deleteTask);

module.exports = router;
