const dotenv = require("dotenv");
dotenv.config();

const config = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  masterApiKey: process.env.MASTER_API_KEY,
  masterSecretKey: process.env.MASTER_SECRET_KEY,
  userApiKey: process.env.USER_API_KEY,
  userSecretKey: process.env.USER_SECRET_KEY,
  baseUrlApiBinance: process.env.BASE_URL_API_BINANCE,
  webSocketUrl: process.env.WEBSOCKET_URL,
};

module.exports = config;