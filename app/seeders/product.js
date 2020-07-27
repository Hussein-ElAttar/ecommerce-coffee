const Product = require("../models/product");
const Category = require("../models/category");

module.exports.drop = async () => {
  return Product.deleteMany();
}

module.exports.seed = async () => {
  const coffeeMachineCategory = await Category.findOne({ path: "machines/coffee-machines" });
  const espressoMachineCategory = await Category.findOne({ path: "machines/espresso-machines" });

  return Product.insertMany([
    {
      category: coffeeMachineCategory,
      name: "Coffee Machine",
      attributes: ["size", "model", "water_line_compatible"],
    },
    {
      category: espressoMachineCategory,
      name: "Espresso Machine",
      attributes: ["model", "water_line_compatible"],
    }
  ]);
}