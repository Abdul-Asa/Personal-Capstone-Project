const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  const user = new User(req.body);
  try {
    const createdUser = await user.save().then(() => {
      res.send(`${user} has been created`);
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/login', (req, res) => {
  res.send(`${req.body.name} has been logged in`);
});

module.exports = router;
