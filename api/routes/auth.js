const express = require('express');
const router = express.Router();
const {
  loginAction,
  signupAction,
  verifyUser,
} = require('../queries/authQueries');

router.post('/signup', signupAction);

router.post('/login', loginAction);

router.get('/confirm/:confirmationCode', verifyUser);

module.exports = router;
