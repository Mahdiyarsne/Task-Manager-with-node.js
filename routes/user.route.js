const express = require('express');
const userController = require('../controllers/user.controller');
const userRoute = express.Router();

userRoute.post('/', userController.registerUser);

module.exports = userRoute;
