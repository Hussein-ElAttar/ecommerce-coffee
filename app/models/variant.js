const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: true,
      index: { unique: true },
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { strict: false, versionKey: false }
);

module.exports = mongoose.model("Variant", variantSchema);
