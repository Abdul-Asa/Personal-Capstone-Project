const mongoose = require('mongoose');
//Add the profile stuffs
//See how you can store files/images

const jobSchema = new mongoose.Schema(
  {
    postedBy: {
      type: String,
      required: true,
    },
    nameOfEmployer: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
      min: 10,
    },
    preferredProfessional: {
      type: String,
    },
    priceRange: {
      type: String,
    },
    applicants: [
      {
        type: String,
      },
    ],
    chosenApplicant: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Jobs', jobSchema);
