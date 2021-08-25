const User = require('../models/User');
const bcrypt = require('bcryptjs');

const getSingleUser = async (req, res) => {
  try {
    const existUser = await User.findOne({ id: req.user.id });
    res.json(existUser);
  } catch (err) {
    res.json(err.message);
  }
};

module.exports = {
  getSingleUser,
};
