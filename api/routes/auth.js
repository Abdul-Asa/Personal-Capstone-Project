const express = require('express');
const router = express.Router();
const { loginAction, signupAction } = require('../queries/authQueries');

router.post('/signup', signupAction);

router.post('/login', loginAction);

module.exports = router;
