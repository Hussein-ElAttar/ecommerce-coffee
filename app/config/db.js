const DEFAULT_DB_URI = "mongodb://localhost:27017/ecommerce";

module.exports = {
  MONGO_DB_URI: process.env.MONGO_DB_URI || DEFAULT_DB_URI,
};
