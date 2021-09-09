const express = require('express');
const router = express.Router();
const { profileParser } = require('../database/cloudinary.config');

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
  updateProfilePic,
} = require('../queries/userQueries');

router.get('/get-info/:id', userAuthentication, getSingleUser);
router.get('/get-all/', adminAuthentication, getAllUsers);
router.delete('/delete/:id', userAuthentication, deleteSingleUser);
router.patch('/update/:id', userAuthentication, updateSingleUser);
router.patch(
  '/reset-password/:id',
  userAuthentication,
  updateSingleUserPassword
);
router.patch(
  '/profile-pic/:id',
  profileParser.single('image'),
  updateProfilePic
);

module.exports = router;
