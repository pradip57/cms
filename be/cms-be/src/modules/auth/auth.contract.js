const Joi = require("joi");

const registerDTO = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
  role: Joi.string()
    .pattern(/^(teacher|accountant|frontdesk)$/)
    .required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
});

module.exports = { registerDTO };
