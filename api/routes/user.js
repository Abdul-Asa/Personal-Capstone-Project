const express = require('express');
const router = express.Router();
const {
  userAuthentication,
  adminAuthentication,
} = require('../authentication/authentication');
const {
  getSingleUser,
  getAllUsers,
  deleteSingleUser,
  updateSingleUser,
  updateSingleUserPassword,
} = require('../queries/userQueries');

router.get('/:id', userAuthentication, getSingleUser);
router.get('/', adminAuthentication, getAllUsers);
router.delete('/:id', userAuthentication, deleteSingleUser);
router.patch('/:id', userAuthentication, updateSingleUser);
router.patch(
  '/reset-password/:id',
  userAuthentication,
  updateSingleUserPassword
);

module.exports = router;
