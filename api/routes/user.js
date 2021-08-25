const express = require('express');
const router = express.Router();
const { authentication } = require('../authentication/authentication');
const { getSingleUser } = require('../queries/userQueries');

router.get('/', authentication, getSingleUser);

module.exports = router;
