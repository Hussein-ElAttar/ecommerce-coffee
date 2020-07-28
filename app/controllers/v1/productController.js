const Product = require("../../models/product");
const Joi = require("joi");
const responseHandler = require("../../helpers/responseHandler");
const productService = require("../../services/productService");
const { IndexValidator } = require("../../validators/productValidator");
const { VALIDATION_ERROR } = require("../../constants/errors");

exports.index = async (req, res) => {
  const { error } = Joi.validate(req.query, IndexValidator);
  if (error)
    return res
      .status(400)
      .json(
        responseHandler.getFailureResponse([], VALIDATION_ERROR, error.message)
      );

  const filters = await productService.mapProductListFilters(req.query.filters, req.query.categoryName);

  const products = await Product.find(filters).populate('category');

  return res.json(responseHandler.getSuccessResponse(products));
};
