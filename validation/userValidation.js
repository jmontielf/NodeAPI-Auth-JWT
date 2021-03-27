const Joi = require("@hapi/joi");

const RegisterValidation = (data) => {
  // Validation schema
  const schema = Joi.object({
    name: Joi.string().max(255).required(),
    email: Joi.string().max(255).email().required(),
    password: Joi.string().max(1024).required(),
  });
  return schema.validate(data);
};

const LoginValidation = (data) => {
  // Validation schema
  const schema = Joi.object({
    email: Joi.string().max(255).email().required(),
    password: Joi.string().max(1024).required(),
  });
  return schema.validate(data);
};

module.exports = {
  RegisterValidation,
  LoginValidation,
};
