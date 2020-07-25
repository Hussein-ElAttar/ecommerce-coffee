const Category = require("../models/category");

module.exports.drop = async () => {
  return Category.deleteMany();
}

module.exports.seed = async () => {
  return Category.insertMany([
    { name: "Coffee-Machines", path: "machines/coffee-machines" },
    { name: "Espresso-Machines", path: "machines/espresso-machines" },

    { name: "Coffee-Pods", path: "pods/coffee-pods" },
    { name: "Espresso-Pods", path: "pods/espresso-pods" },
  ]);
}