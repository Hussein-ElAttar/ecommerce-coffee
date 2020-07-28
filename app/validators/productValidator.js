const Joi = require("joi");

module.exports.IndexValidator = {
  filters: Joi.object().pattern(/\w+/, Joi.string()),
  categoryName: Joi.string().min(2).max(100),
};