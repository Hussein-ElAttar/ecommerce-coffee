const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    lowercase: true,
    required: true,
    index: { unique: true },
  },
});

module.exports = mongoose.model("Category", categorySchema);
