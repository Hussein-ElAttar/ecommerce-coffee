const Variant = require("../models/variant");
const Product = require("../models/product");

module.exports.drop = async () => {
  return Variant.deleteMany();
};

module.exports.seed = async () => {
  const coffeeMachine = await Product.findOne({ name: "Coffee Machine" });
  const espressoMachine = await Product.findOne({ name: "Espresso Machine" });

  Variant.insertMany([
    // · CM001 – small machine, base model
    {
      sku: "CM001",
      product: coffeeMachine,
      size: "small",
      model: "base",
      water_line_compatible: false,
    },
    // // · CM002 – small machine, premium model
    {
      sku: "CM002",
      product: coffeeMachine,
      size: "small",
      model: "premium",
      water_line_compatible: false,
    },
    // // · CM003 – small machine, deluxe model, water line compatible
    {
      sku: "CM003",
      product: coffeeMachine,
      size: "small",
      model: "deluxe",
      water_line_compatible: true,
    },
    // · CM101 – large machine, base model
    {
      sku: "CM101",
      product: coffeeMachine,
      size: "large",
      model: "base",
      water_line_compatible: true,
    },
    // · CM102 – large machine, premium model, water line compatible
    {
      sku: "CM102",
      product: coffeeMachine,
      size: "large",
      model: "premium",
      water_line_compatible: true,
    },
    // · CM103 – large machine, deluxe model, water line compatible
    {
      sku: "CM103",
      product: coffeeMachine,
      size: "large",
      model: "deluxe",
      water_line_compatible: true,
    },
    // · EM001 – espresso machine, base model
    {
      sku: "EM001",
      product: espressoMachine,
      model: "base",
      water_line_compatible: true,
    },
    // · EM002 – espresso machine, premium model
    {
      sku: "EM002",
      product: espressoMachine,
      model: "premium",
      water_line_compatible: true,
    },
    // · EM003 – espresso machine, deluxe model, water line compatible
    {
      sku: "EM003",
      product: espressoMachine,
      model: "deluxe",
      water_line_compatible: true,
    },
  ]);
};
