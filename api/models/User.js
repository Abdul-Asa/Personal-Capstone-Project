const mongoose = require('mongoose');
//Add the profile stuffs
//See how you can store files/images

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
      match: new RegExp('/S+@S+.S+/'),
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
      match: new RegExp('^[0-9]+$'),
      trim: true,
    },
    homeAddress: {
      type: String,
    },
    baseState: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    hasAgreed: {
      type: Boolean,
      default: false,
    },
    myProfile: {
      type: String,
    },
    // token: {
    //   type: String,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Users', userSchema);
