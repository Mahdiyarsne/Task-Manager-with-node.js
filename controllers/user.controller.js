const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;

    const newUser = new User({ email, password, fullName });

    const payload = {
      id: newUser._id,
      email: newUser.email,
      fullName: newUser.fullName,
    };

    const accessToken = jwt.sign(payload, 'secert-jwt', { expiresIn: '1d' });

    await newUser.save();

    res.status(201).json({
      accessToken,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

module.exports = {
  registerUser,
};
