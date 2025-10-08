const Task = require('../models/task.model');
const jwt = require('jsonwebtoken');

const createTask = async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    const token = req.headers?.authorization?.split(' ')[1];

    if (!token) {
      return res.status(400).json({
        message: 'Please Login',
      });
    }

    const decoded = jwt.sign(token, 'secert-jwt');

    const newTask = new Task({ title, description, userId: decoded.id });
    await newTask.save();

    return res.status(201).json({
      task: newTask,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

module.exports = {
  createTask,
};
