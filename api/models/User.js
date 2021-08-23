const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: { unique: true },
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    phoneNumber: {
      type: Number,
    },
    homeAddress: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    hasAgreed: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Users', userSchema);
