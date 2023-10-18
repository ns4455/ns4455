const Task = require("../models/tasks");

const getAllTasks = async (req, res) => {
  try {
    await Task.find({}).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const createNewTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    await Task.findOne({ _id: taskId }).then((data) => {
      if (!data) {
        return res
          .status(404)
          .json({ msg: `Task with id '${taskId}' not found..!` });
      }
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(404).json({ msg: `Task with id '${taskId}' not found..!` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const data = await Task.findOneAndDelete({ _id: taskId });
    if (!data) {
      return res
        .status(404)
        .json({ msg: `Task with id '${taskId}' not found..!` });
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createNewTask,
  getTask,
  updateTask,
  deleteTask,
};
