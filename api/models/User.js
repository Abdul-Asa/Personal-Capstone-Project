const mongoose = require('mongoose');
//Add the profile stuffs
//See how you can store files/images

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: { unique: true },
      lowercase: true,
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
    // phoneNumber: {
    //   type: Number,
    // },
    // homeAddress: {
    //   type: String,
    // },
    // dateOfBirth: {
    //   type: Date,
    // },
    hasAgreed: {
      type: Boolean,
      default: false,
    },
    // token: {
    //   type: String,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Users', userSchema);
