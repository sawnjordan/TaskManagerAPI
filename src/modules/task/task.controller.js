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
      msg: `Task Name: ${response.name} created.`,
    });
  } catch (error) {
    console.log(error);
  }
};

const getTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    let response = await taskModel.findOne({ _id: taskId });
    res.json({
      status: 200,
      msg: response,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const data = req.body;
    const response = await taskModel.findByIdAndUpdate({ _id: taskId }, data, {
      new: true,
      runValidators: true,
    });
    res.json({
      status: 200,
      msg: `Task Updated with new name: ${data.name}`,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    let response = await taskModel.findOneAndDelete({ _id: taskId });
    res.json({
      status: 200,
      msg: `Task: ${response.name} deleted.`,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask };
