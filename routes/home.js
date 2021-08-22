const express = require('express');
const router = express.Router();
const { authentication } = require('./private');

router.get('/', authentication, (req, res) => {
  res.json(req.user);
});
module.exports = router;
