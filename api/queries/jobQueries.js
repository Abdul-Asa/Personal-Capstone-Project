const Job = require('../models/Job');
const User = require('../models/User');
const { createJobValidation } = require('../authentication/validation');

const createJob = async (req, res) => {
  try {
    const user_id = req.params.id;
    const existUser = await User.findOne({ _id: user_id });
    if (!existUser) return res.send({ message: "User with id doesn't exist" });

    const maxPosted = await Job.find({ postedBy: user_id });
    if (maxPosted.length >= 3) {
      res.send({ message: ' user has posted the maximum number of jobs (3)' });
    } else {
      const { error } = createJobValidation(req.body);
      if (error) {
        return res.send({
          err: error.details[0],
          message: error.details[0].message,
        });
      }

      const job = new Job({
        ...req.body,
        postedBy: user_id,
        nameOfEmployer: existUser.firstName + ' ' + existUser.lastName,
        image: '',
      });
      const createdJob = await job.save();
      res.json({
        message: 'success',
        job: createdJob,
        jobsPosted: maxPosted.length,
      });
    }
  } catch (err) {
    return res.send({ message: err.message, error: err });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const allJobs = await Job.find();
    res.json({ message: 'success', jobs: allJobs });
  } catch (err) {
    return res.json({ message: err.message, error: err });
  }
};

const getJobsPostedBySingleUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const existUser = await User.findOne({ _id: user_id });
    if (!existUser) return res.send({ message: "User with id doesn't exist" });

    const postedJobs = await Job.find({ postedBy: user_id });
    res.json({ message: 'success', jobs: postedJobs });
  } catch (err) {
    return res.json({ message: err.message, error: err });
  }
};

const applyToJob = async (req, res) => {
  try {
    const applicantId = req.params.id;
    const existUser = await User.findOne({ _id: applicantId });
    if (!existUser) return res.send({ message: "User with id doesn't exist" });
    const jobId = req.body.jobId;

    const application = await Job.findOne({ _id: jobId });
    if (!application) return res.send({ message: "Job doesn't doesn't exist" });

    if (applicantId === application.postedBy) {
      return res.send({ message: "You can't apply  to a job posted by you" });
    } else {
      if (application.applicants.includes(applicantId))
        return res.send({ message: 'You have already applied to this job' });
      else {
        const applied = await Job.updateOne(
          { _id: jobId },
          { $push: { applicants: applicantId } },
          { $currentDate: { lastUpdated: true } }
        );

        res.json({ message: 'success', job: applied });
      }
    }
  } catch (err) {
    return res.json({ message: err.message, error: err });
  }
};

const unApplyToJob = async (req, res) => {
  try {
    const applicantId = req.params.id;
    const existUser = await User.findOne({ _id: applicantId });
    if (!existUser) return res.send({ message: "User with id doesn't exist" });
    const jobId = req.body.jobId;

    const application = await Job.findOne({ _id: jobId });
    if (!application) return res.send({ message: "Job doesn't doesn't exist" });

    if (applicantId === application.postedBy) {
      return res.send({
        message: "You can't unapply from a job posted by you",
      });
    } else {
      if (!application.applicants.includes(applicantId))
        return res.send({ message: 'You have not applied to this job' });
      else {
        const applied = await Job.updateOne(
          { _id: jobId },
          { $pull: { applicants: applicantId } },
          { $currentDate: { lastUpdated: true } }
        );

        res.json({ message: 'success', job: applied });
      }
    }
  } catch (err) {
    return res.json({ message: err.message, error: err });
  }
};

const getJobsAppliedToBySingleUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const existUser = await User.findOne({ _id: user_id });
    if (!existUser) return res.send({ message: "User with id doesn't exist" });

    const appliedJobs = await Job.find({ applicants: user_id });
    res.json({ message: 'success', jobs: appliedJobs });
  } catch (err) {
    return res.json({ message: err.message, error: err });
  }
};

const getJobApplicants = async (req, res) => {
  try {
    const user_id = req.params.id;
    const existUser = await User.findOne({ _id: user_id });
    if (!existUser) return res.send({ message: "User with id doesn't exist" });

    const jobId = req.body.jobId;
    const application = await Job.findOne({ _id: jobId });
    if (!application) return res.send({ message: "Job doesn't doesn't exist" });

    if (application.postedBy !== user_id) {
      return res.send({ message: 'You did not create this job' });
    } else {
      const applicantUser = await User.find({
        _id: { $in: application.applicants },
      });
      res.json({ message: 'success', applicants: applicantUser });
    }
  } catch (err) {
    return res.json({ message: err.message, error: err });
  }
};

const deleteJob = async (req, res) => {
  try {
    const user_id = req.params.id;
    const existUser = await User.findOne({ _id: user_id });
    if (!existUser) return res.send({ message: "User with id doesn't exist" });

    const jobId = req.body.jobId;

    const toBeDeleted = await Job.findOne({ _id: jobId });
    if (!toBeDeleted) return res.send({ message: "Job with id doesn't exist" });

    if (toBeDeleted.postedBy !== user_id) {
      return res.send({ message: 'You did not create this job' });
    } else {
      const deleted = await Job.deleteOne({ _id: jobId });
      res.json({ message: 'success', deletedJob: deleted });
    }
  } catch (err) {
    return res.json({ message: err.message, error: err });
  }
};

const addJobImage = async (req, res) => {
  try {
    const jobId = req.params.id;
    const existJob = await Job.findOne({ _id: jobId });
    if (!existJob) return res.send("User with id doesn't exist");

    const image = req.file.path;

    const addImage = await Job.updateOne(
      { _id: jobId },
      { $set: { image: image } },
      { $currentDate: { lastUpdated: true } }
    );
    res.json({ message: 'success', job: addImage });
  } catch (err) {
    return res.json({ message: err.message, error: err });
  }
};

// const updateSingleUser = async (req, res) => {
//   try {
//     const user_id = req.params.id;
//     const existUser = await User.findOne({ _id: user_id });
//     if (!existUser) return res.send({ message: "User with id doesn't exist" });
//     const { error } = updateUserValidation(req.body);
//     if (error) {
//       return res.send({
//         err: error.details[0],
//         message: error.details[0].message,
//       });
//     }
//     const keyObj = Object.keys(req.body);
//     const updatedFields = {};
//     keyObj.map(async (index) => {
//       if (index === 'password') {
//         return res.json({ message: "Can't update password on this route" });
//       }
//       updatedFields[index] = req.body[index];
//     });

//     const updatedUser = await User.updateOne(
//       { _id: user_id },
//       { $set: updatedFields },
//       { $currentDate: { lastUpdated: true } }
//     );
//     res.json({ message: 'success', user: updatedUser });
//   } catch (err) {
//     return res.json({ message: err.message, error: err });
//   }
// };

// const updateSingleUserPassword = async (req, res) => {
//   try {
//     const user_id = req.params.id;
//     const existUser = await User.findOne({ _id: user_id });
//     if (!existUser) return res.send({ message: "User with id doesn't exist" });
//     // const { oldPassword, newPassword } = req.body;

//     const { error } = changePasswordValidation(req.body);
//     if (error) {
//       return res.send({
//         err: error.details[0],
//         message: error.details[0].message,
//       });
//     }
//     //Move this to validation file
//     const validPassword = await bcrypt.compare(
//       req.body.oldPassword,
//       existUser.password
//     );
//     if (!validPassword) return res.send({ message: 'Old password is wrong' });
//     if (req.body.oldPassword === req.body.newPassword)
//       return res.send({ message: 'You must enter a different password' });

//     const salt = await bcrypt.genSalt(10);
//     const hashPassword = await bcrypt.hash(req.body.newPassword, salt);
//     const updatedUser = await User.updateOne(
//       { _id: user_id },
//       { $set: { password: hashPassword } },
//       { $currentDate: { lastUpdated: true } }
//     );
//     res.json({ message: 'success', user: updatedUser });
//   } catch (err) {
//     return res.json({ message: err.message, error: err });
//   }
// };

// const updateProfilePic = async (req, res) => {
//   try {
//     const user_id = req.params.id;
//     const existUser = await User.findOne({ _id: user_id });
//     if (!existUser) return res.send("User with id doesn't exist");

//     const image = req.file.path;

//     const updatedUser = await User.updateOne(
//       { _id: user_id },
//       { $set: { image: image } },
//       { $currentDate: { lastUpdated: true } }
//     );
//     res.json({ message: 'success', user: updatedUser });
//   } catch (err) {
//     return res.json({ message: err.message, error: err });
//   }
// };

module.exports = {
  createJob,
  getAllJobs,
  getJobsPostedBySingleUser,
  applyToJob,
  unApplyToJob,
  getJobsAppliedToBySingleUser,
  getJobApplicants,
  deleteJob,
  addJobImage,
};
