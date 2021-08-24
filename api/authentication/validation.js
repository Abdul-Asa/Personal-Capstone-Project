const Joi = require('@hapi/joi');

//sign up validation
const signUpValidation = (data) => {
  const validationSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .required()
      .min(8)
      .max(1024)
      .pattern(new RegExp('^[a-zA-Z0-9]{3,1024}$')),
    hasAgreed: Joi.boolean().required(),
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

module.exports = {
  signUpValidation,
  loginValidation,
};
