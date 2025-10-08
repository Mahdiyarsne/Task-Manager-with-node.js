const express = require('express');

const taskController = require('../controllers/task.controller');

const taskRouter = express.Router();

taskRouter.post('/', taskController.createTask);

module.exports = taskRouter;
