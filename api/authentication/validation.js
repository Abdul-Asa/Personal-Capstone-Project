const Joi = require('@hapi/joi');
//Upgrade the validation schemas

//sign up validation
const signUpValidation = (data) => {
  const validationSchema = Joi.object({
    firstName: Joi.string().required().min(3),
    lastName: Joi.string().required().min(3),
    email: Joi.string().email().required(),
    password: Joi.string()
      .required()
      .min(8)
      .max(1024)
      .pattern(new RegExp('^[a-zA-Z0-9]{3,1024}$')),
    hasAgreed: Joi.boolean().required(),
    over18: Joi.boolean().required(),
  });

  return validationSchema.validate(data);
};

const loginValidation = (data) => {
  const validationSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .required()
      .min(8)
      .max(1024)
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });

  return validationSchema.validate(data);
};

const updateUserValidation = (data) => {
  const validationSchema = Joi.object({
    firstName: Joi.string().required().min(3),
    lastName: Joi.string().required().min(3),
    phoneNumber: Joi.string().trim().min(10).max(10),
    homeAddress: Joi.string(),
    baseState: Joi.string(),
    myProfile: Joi.string().allow(''),
    myProfession: Joi.string().required(),
    myProfession2: Joi.string().allow(''),
    myProfession3: Joi.string().allow(''),
    highestDegree: Joi.string(),
    over18: Joi.boolean(),
    hasAgreed: Joi.boolean(),
    status: Joi.string(),
    role: Joi.string(),
  });

  return validationSchema.validate(data);
};

const changePasswordValidation = (data) => {
  const validationSchema = Joi.object({
    oldPassword: Joi.string()
      .required()
      .min(8)
      .max(1024)
      .pattern(new RegExp('^[a-zA-Z0-9]{3,1024}$')),
    newPassword: Joi.string()
      .required()
      .min(8)
      .max(1024)
      .pattern(new RegExp('^[a-zA-Z0-9]{3,1024}$')),
  });

  return validationSchema.validate(data);
};
const createJobValidation = (data) => {
  const validationSchema = Joi.object({
    title: Joi.string().required().min(3),
    jobDescription: Joi.string().required().min(10),
    preferredProfessional: Joi.string(),
    priceRange: Joi.string(),
  });

  return validationSchema.validate(data);
};

module.exports = {
  signUpValidation,
  loginValidation,
  updateUserValidation,
  changePasswordValidation,
  createJobValidation,
};
