const getAllTask = (req, res, next) => {
  res.json({
    status: 200,
    msg: "This is request to get all thet tasks.",
  });
};

const createTask = (req, res, next) => {
  res.json({
    status: 200,
    msg: "This is request to create the tasks.",
  });
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
