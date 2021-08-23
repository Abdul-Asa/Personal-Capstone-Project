const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {
  signUpValidation,
  loginValidation,
} = require('../authentication/validation');

router.post('/signup', async (req, res) => {
  try {
    const { error } = signUpValidation(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      ...req.body,
      password: hashPassword,
    });
    const createdUser = await user.save();
    // const token = jwt.sign(
    //   { _id: createdUser._id, name: createdUser.fullName },
    //   process.env.TOKEN_KEY
    // );
    // await User.updateOne(user, { $set: { token: token } });
    res.send(createdUser.fullName + ' has been added to the database');
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).send('Email already exists');
    } else {
      res.status(400).send({ err, message: err.message });
    }
  }
});

router.post('/login', async (req, res) => {
  try {
    const { error } = loginValidation(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const existUser = await User.findOne({ email: req.body.email });
    if (!existUser) return res.status(400).send('Email is not found');
    const validPassword = await bcrypt.compare(
      req.body.password,
      existUser.password
    );
    if (!validPassword) return res.status(400).send('Password is wrong');
    res.send('logged in');
    const token = jwt.sign(
      { _id: existUser._id, name: existUser.fullName },
      process.env.TOKEN_KEY
    );
    res.header('auth-token', token).send(existUser.fullName + ' is logged in');
  } catch (err) {
    res.status(400).send({ err, message: err.message });
  }
});

module.exports = router;
