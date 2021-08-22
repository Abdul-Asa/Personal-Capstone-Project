const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { signUpValidation, loginValidation } = require('../validation');

router.post('/signup', async (req, res) => {
  try {
    const { error } = signUpValidation(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({ ...req.body, password: hashPassword });
    const createdUser = await user.save();
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

    const token = jwt.sign(
      { _id: existUser._id, name: existUser.fullName },
      process.env.TOKEN_KEY
    );
    // res.send(`${existUser.fullName} is logged in`);
    res.header('auth-token', token).send(token);
  } catch (err) {
    res.status(400).send({ err, message: err.message });
  }
});

module.exports = router;
