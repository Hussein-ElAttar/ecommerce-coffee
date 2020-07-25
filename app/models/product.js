const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  name: {
    type: String,
    required: true,
  },
  attributes: [{
      type: String,
      required: true,
  }],
});

module.exports = mongoose.model("Product", productSchema);
