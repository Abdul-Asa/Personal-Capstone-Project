const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      index: { unique: true },
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    status: {
      type: String,
      enum: ['Pending', 'Active'],
      default: 'Pending',
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    confirmationCode: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    homeAddress: {
      type: String,
    },
    baseState: {
      type: String,
    },
    over18: {
      type: Boolean,
      required: true,
      default: false,
    },
    hasAgreed: {
      type: Boolean,
      default: false,
      required: true,
    },
    myProfile: {
      type: String,
    },
    myProfession: {
      type: String,
    },
    myProfession2: {
      type: String,
    },
    myProfession3: {
      type: String,
    },

    highestDegree: {
      type: String,
    },
    image: {
      type: String,
    },
    // token: {
    //   type: String,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Users', userSchema);
