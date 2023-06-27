const getAllTask = (req, res, next) => {
  res.json({
    status: 200,
    msg: "This is request to get all thet tasks.",
  });
};

module.exports = getAllTask;
