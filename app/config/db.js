const DEFAULT_DB_URI = "mongodb://mongo:27017/ecommerce";
const MONGO_DB_CONNECTION_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

module.exports = {
  MONGO_DB_URI: process.env.MONGO_DB_URI || DEFAULT_DB_URI,
  MONGO_DB_CONNECTION_OPTIONS
};
