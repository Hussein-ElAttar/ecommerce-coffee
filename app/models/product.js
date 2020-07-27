const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    index: { unique: true },
  },
  attributes: {
    type: mongoose.Schema.Types.Mixed
  },
},{versionKey: false });

module.exports = mongoose.model("Product", productSchema);
