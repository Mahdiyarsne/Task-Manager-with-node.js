const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    const userByEmail = await User.findOne({ email }).exec();
    if (userByEmail) {
      res.status(400).json({
        message: 'email is already taken',
      });

      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, fullName });

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

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userByEmail = await User.findOne({ email }).exec();

    const isMatchPassword = await bcrypt.compare(
      password,
      userByEmail.password
    );

    if (!isMatchPassword) {
      return res.status(400).json({
        message: 'Email does not exist',
      });
    }

    const payload = {
      id: userByEmail._id,
      email: userByEmail.email,
      fullName: userByEmail.fullName,
    };

    const accessToken = jwt.sign(payload, 'access-jwt', { expiresIn: '1d' });

    return res.status(200).json({
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
