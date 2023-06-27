const express = require("express");
const router = express.Router();
const taskRouter = require("../modules/task/task.routes");

router.use("/tasks", taskRouter);

module.exports = router;
