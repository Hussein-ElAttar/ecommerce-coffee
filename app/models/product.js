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
  attributes: [
    {
      type: String,
      required: true,
    },
  ],
},{versionKey: false });

module.exports = mongoose.model("Product", productSchema);
