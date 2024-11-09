const User = require("../../database/model/user.model");
const Task = require("../../database/model/task.model");

const addTask = async (req, res) => {
  const { task, id } = req.body;

  try {
    if (!task) return res.status(400).send("Kindly enter the task");
    if (task.length < 10)
      return res.status(400).send("Please enter at least 10 characters");

    const taskDetail = await new Task({
      task,
      createdBy: id,
    });

    await taskDetail.save();
    return res.status(200).send(taskDetail);
  } catch (error) {
    return res.status(400).send("Failed to add task");
  }
};

module.exports = { addTask };
