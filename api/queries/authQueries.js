const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {
  signUpValidation,
  loginValidation,
} = require('../authentication/validation');
const { sendConfirmationEmail } = require('../authentication/node.mailer');

const signupAction = async (req, res) => {
  try {
    //validation
    const { error } = signUpValidation(req.body);
    if (error) {
      return res.send(error.details[0].message);
    }

    //hash passowrds
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //assign conf. token
    const confirmation = jwt.sign(
      { email: req.body.email },
      process.env.TOKEN_KEY
    );

    // create user
    const user = new User({
      ...req.body,
      password: hashPassword,
      confirmationCode: confirmation,
    });
    const createdUser = await user.save();

    //send conf. code
    url = `${req.protocol}://${req.get('host')}/auth/confirm/${confirmation}`;
    sendConfirmationEmail(createdUser.firstName, createdUser.email, url);
    res.send({ message: 'success', user: { firstName, lastName }, link: url });
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
    //validation
    const { error } = loginValidation(req.body);
    if (error) {
      return res.send(error.details[0].message);
    }

    //if user exists
    const existUser = await User.findOne({ email: req.body.email });
    if (!existUser) return res.send('Email is not found');

    //if user has accepted confirmation code
    if (existUser.status != 'Active') {
      return res.status(401).send({
        message: 'Pending Account. Please Verify Your Email!',
      });
    }
    //if password is wrong
    const validPassword = await bcrypt.compare(
      req.body.password,
      existUser.password
    );
    if (!validPassword) return res.send('Password is wrong');

    //give token
    const token = jwt.sign({ _id: existUser._id }, process.env.TOKEN_KEY);
    res
      .header('token', token)
      .send({ token: token, id: existUser._id, name: existUser.firstName });
  } catch (err) {
    res.send(err);
  }
};

const verifyUser = async (req, res, next) => {
  try {
    const existUser = await User.findOne({
      confirmationCode: req.params.confirmationCode,
    });
    if (!existUser) return res.send('User not found');

    await User.updateOne(
      { confirmationCode: existUser.confirmationCode },
      {
        $set: {
          status: 'Active',
        },
      },
      { $currentDate: { lastUpdated: true } }
    );
    const check = await User.findOne({
      confirmationCode: req.params.confirmationCode,
    });
    res.json(check);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  signupAction,
  loginAction,
  verifyUser,
};
