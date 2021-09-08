const express = require('express');
const router = express.Router();
const { jobParser } = require('../database/cloudinary.config');

const {
  userAuthentication,
  // adminAuthentication,
} = require('../authentication/authentication');
const {
  createJob,
  getAllJobs,
  getJobsPostedBySingleUser,
  applyToJob,
  unApplyToJob,
  getJobsAppliedToBySingleUser,
  getJobApplicants,
  deleteJob,
  addJobImage,
} = require('../queries/jobQueries');

router.post('/post/:id', userAuthentication, createJob);
router.get('/', getAllJobs);
router.get('/posted/:id', userAuthentication, getJobsPostedBySingleUser);
router.get('/applied/:id', userAuthentication, getJobsAppliedToBySingleUser);
router.patch('/post/image/:id', jobParser.single('image'), addJobImage);
router.patch('/applicants/:id', userAuthentication, getJobApplicants);
router.patch('/apply/:id', userAuthentication, applyToJob);
router.patch('/unapply/:id', userAuthentication, unApplyToJob);
router.delete('/delete/:id', userAuthentication, deleteJob);

// router.delete('/:id', userAuthentication, deleteSingleUser);
// router.patch('/:id', userAuthentication, updateSingleUser);
// router.patch(
//   '/reset-password/:id',
//   userAuthentication,
//   updateSingleUserPassword
// );
// router.patch('/profile-pic/:id', parser.single('image'), updateProfilePic);

module.exports = router;
