const Product = require("../models/product");
const Category = require("../models/category");

module.exports.drop = async () => {
  return Product.deleteMany();
}

module.exports.seed = async () => {
  // No need to load all at once since this is a seeder file.
  const coffeeMachineCategory = await Category.findOne({ path: "machines/coffee-machines" });
  const espressoMachineCategory = await Category.findOne({ path: "machines/espresso-machines" });
  const coffeePodsCategory = await Category.findOne({ path: "pods/coffee-pods" });
  const espressoPodsCategory = await Category.findOne({ path: "pods/espresso-pods" });

  return Product.insertMany([
    // CM001 – small machine, base model
    {
      category: coffeeMachineCategory,
      sku: "CM001",
      name: "Coffee - small machine, base model",
      attributes: {
        size: "small",
        model: "base",
        water_line_compatible: "0",
      },
    },
    // CM002 – small machine, premium model
    {
      category: coffeeMachineCategory,
      sku: "CM002",
      name: "Coffee - small machine, premium model",
      attributes: {
        size: "small",
        model: "premium",
        water_line_compatible: "0",
      },
    },
    // CM003 – small machine, deluxe model, water line compatible    
    {
      sku: "CM003",
      category: coffeeMachineCategory,
      name: "Coffee - small machine, deluxe model, water line compatible",
      attributes: {
        size: "small",
        model: "deluxe",
        water_line_compatible: "1",
      },
    },
    // CM101 – large machine, base model
    {
      sku: "CM101",
      category: coffeeMachineCategory,
      name: "Coffee - large machine, base model",
      attributes: {
        size: "large",
        model: "base",
        water_line_compatible: "1",
      },
    },
    // CM102 – large machine, premium model, water line compatible
    {
      sku: "CM102",
      category: coffeeMachineCategory,
      name: "Coffee - large machine, premium model, water line compatible",
      attributes: {
        size: "large",
        model: "premium",
        water_line_compatible: "1",
      },
    },
    // · CM103 – large machine, deluxe model, water line compatible
    {
      sku: "CM103",
      name: "Coffee - large machine, deluxe model, water line compatible",
      category: coffeeMachineCategory,
      attributes: {
        size: "large",
        model: "deluxe",
        water_line_compatible: "1",
      }
    },
    // · EM001 – espresso machine, base model
    {
      sku: "EM001",
      name: "Espresso - base model",
      category: espressoMachineCategory,
      attributes: {
        model: "base",
        water_line_compatible: "1",
      }
    },
    // · EM002 – espresso machine, premium model
    {
      sku: "EM002",
      name: "Espresso - premium model",
      category: espressoMachineCategory,
      attributes: {
        model: "premium",
        water_line_compatible: "1",
      }
    },
    // · EM003 – espresso machine, deluxe model, water line compatible
    {
      sku: "EM003",
      name: "Espresso - deluxe model, water line compatible",
      category: espressoMachineCategory,
      attributes: {
        model: "deluxe",
        water_line_compatible: "1",
      }
    },
    // CP001 – small coffee pod, 1 dozen, vanilla
    {
      sku: "CP001",
      name: "Coffee pod - small coffee pod, 1 dozen, vanilla",
      category: coffeePodsCategory,
      attributes: {
        flavor: "vanilla",
        packsize: "1 dozen",
        size: "small",
      }
    },
    // CP011 – small coffee pod, 1 dozen, caramel
    {
      sku: "CP011",
      name: "Coffee pod - small coffee pod, 1 dozen, caramel",
      category: espressoPodsCategory,
      attributes: {
        flavor: "caramel",
        packsize: "1 dozen",
        size: "small",
      }
    },
    // EP003 – espresso pod, 3 dozen, vanilla
    {
      sku: "EP003",
      name: "Coffee pod - small coffee pod, 1 dozen, vanilla",
      category: espressoPodsCategory,
      attributes: {
        flavor: "vanilla",
        packsize: "3 dozen",
      }
    },
  ]);
}