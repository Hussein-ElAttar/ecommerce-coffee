const Product = require("../models/product");
const Joi = require("joi");
const responseHandler = require("../helpers/responseHandler");
const Category = require("../models/category");
const {IndexValidator} = require("../validators/productValidator");
const {VALIDATION_ERROR} = require('../constants/errors')

exports.index = async (req, res) => {
  const filters = req.query.filters;
  const categoryName = req.query.categoryName;
  let queryFilters = {};

  const { error } = Joi.validate(req.query, IndexValidator);
  if (error)
    return res
      .status(400)
      .json(
        responseHandler.getFailureResponse([], VALIDATION_ERROR, error.message)
      );

  if (categoryName) {
    const category = await Category.findByName(categoryName);
    queryFilters["category"] = category;
  }

  if (filters) {
    for (const [attributeName, value] of Object.entries(filters)) {
      queryFilters[`attributes.${attributeName}`] = value;
    }
  }

  const products = await Product.find(queryFilters);
  return res.json(responseHandler.getSuccessResponse(products));
};
