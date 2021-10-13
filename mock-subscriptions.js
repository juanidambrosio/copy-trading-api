const { userApiKey, userSecretKey } = require("./config");

const subscriptions = [
  {
    api_key: userApiKey,
    secret_key: userSecretKey,
  },
];

module.exports = subscriptions;
