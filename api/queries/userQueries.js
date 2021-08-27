const User = require('../models/User');
const bcrypt = require('bcryptjs');

const getSingleUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const existUser = await User.findOne({ _id: user_id });
    if (!existUser) return res.send("User with doesn't exist");
    res.json(existUser);
  } catch (err) {
    return res.json(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (err) {
    return res.json(err);
  }
};

const deleteSingleUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const existUser = await User.findOne({ _id: user_id });
    if (!existUser) return res.send("User with doesn't exist");
    const deletedUser = await User.deleteOne({ _id: user_id });
    res.json(deletedUser);
  } catch (err) {
    return res.json(err);
  }
};

const updateSingleUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const existUser = await User.findOne({ _id: user_id });
    if (!existUser) return res.send("User with doesn't exist");
    const keyObj = Object.keys(req.body);
    const updatedFields = {};
    keyObj.map(async (index) => {
      if (index === 'password') {
        return res.json("Can't update password on this route");
      }
      updatedFields[index] = req.body[index];
    });

    const updatedUser = await User.updateOne(
      { _id: user_id },
      { $set: updatedFields },
      { $currentDate: { lastUpdated: true } }
    );
    res.json(updatedUser);
  } catch (err) {
    return res.json(err);
  }
};

const updateSingleUserPassword = async (req, res) => {
  try {
    const user_id = req.params.id;
    const existUser = await User.findOne({ _id: user_id });
    if (!existUser) return res.send("User with doesn't exist");
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword)
      return res.send('You must enter both old and new passwords');
    //Move this to validation file
    const validPassword = await bcrypt.compare(
      req.body.oldPassword,
      existUser.password
    );
    if (!validPassword) return res.send('Old password is wrong');

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.newPassword, salt);
    const updatedUser = await User.updateOne(
      { _id: user_id },
      { $set: { password: hashPassword } },
      { $currentDate: { lastUpdated: true } }
    );
    res.json(updatedUser);
  } catch (err) {
    return res.json(err);
  }
};

module.exports = {
  getSingleUser,
  getAllUsers,
  deleteSingleUser,
  updateSingleUser,
  updateSingleUserPassword,
};
