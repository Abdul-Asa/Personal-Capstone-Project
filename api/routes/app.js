const express = require('express');
const router = express.Router();
const { authentication } = require('../authentication/authentication');

router.get('/', authentication, (req, res) => {
  res.json(req.user);
});

module.exports = router;
