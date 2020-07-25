const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: true,
      index: { unique: true },
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { strict: false, _id: false }
);

module.exports = mongoose.model("Variant", variantSchema);
