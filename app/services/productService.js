const Category = require("../models/category");

module.exports.mapProductListFilters = async (filters, categoryName) => {
  const mappedFilters = {};

  if (categoryName) {
    const category = await Category.findByName(categoryName);
    mappedFilters["category"] = category;
  }

  if (filters) {
    for (const [attributeName, value] of Object.entries(filters)) {
      mappedFilters[`attributes.${attributeName}`] = value;
    }
  }

  return mappedFilters;
};
