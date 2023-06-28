const taskModel = require("./task.model");
const getAllTask = async (req, res, next) => {
  try {
    const allTasks = await taskModel.find();

    res.json({
      status: 200,
      response: allTasks,
    });
  } catch (error) {
    console.log(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { name, completed } = req.body;
    if (name === "") {
      return res.status(400).json({
        status: 400,
        response: "Please enter name for the task.",
      });
    }
    // console.log(name, completed);
    const task = new taskModel({
      name,
      completed: completed ? completed : false,
    });
    // console.log(task);

    let response = await task.save();
    console.log(response);
    res.json({
      status: 200,
      msg: `Task Name: ${response.name}.`,
    });
  } catch (error) {
    console.log(error);
  }
};

const getTask = (req, res, next) => {
  res.json({
    status: 200,
    msg: "This is request to get a task.",
  });
};

const updateTask = (req, res, next) => {
  res.json({
    status: 200,
    msg: " This is to update the task.",
  });
};

const deleteTask = (req, res, next) => {
  res.json({
    status: 200,
    msg: " This is to delete the task.",
  });
};

module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask };
