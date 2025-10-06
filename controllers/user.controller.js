const User = require('../models/user.model');

const createUser = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;

    const newUser = new User({ email, password, fullName });

    await newUser.save();

    res.status(201).json({
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

module.exports = {
  createUser,
};
