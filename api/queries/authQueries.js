const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {
  signUpValidation,
  loginValidation,
} = require('../authentication/validation');

const signupAction = async (req, res) => {
  try {
    const { error } = signUpValidation(req.body);
    if (error) {
      return res.send(error.details[0].message);
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      ...req.body,
      password: hashPassword,
    });
    const createdUser = await user.save();
    res.send({ message: 'success', user: createdUser });
  } catch (err) {
    if (err.code === 11000) {
      res.send('Email already exists');
    } else {
      res.send({ err, message: err.message });
    }
  }
};

const loginAction = async (req, res) => {
  try {
    const { error } = loginValidation(req.body);
    if (error) {
      return res.send(error.details[0].message);
    }
    const existUser = await User.findOne({ email: req.body.email });
    if (!existUser) return res.send('Email is not found');
    const validPassword = await bcrypt.compare(
      req.body.password,
      existUser.password
    );
    if (!validPassword) return res.send('Password is wrong');
    const token = jwt.sign({ _id: existUser._id }, process.env.TOKEN_KEY);
    res
      .header('token', token)
      .send({ token: token, id: existUser._id, name: existUser.firstName });
  } catch (err) {
    res.send(err);
  }
};
module.exports = {
  signupAction,
  loginAction,
};
