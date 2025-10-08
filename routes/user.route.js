const express = require('express');
const userController = require('../controllers/user.controller');
const userRoute = express.Router();

userRoute.post('/', userController.registerUser);
userRoute.post('/login', userController.loginUser);

module.exports = userRoute;
