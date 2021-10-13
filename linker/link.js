const { Spot } = require("@binance/connector");
const mockSubscriptions = require("../mock-subscriptions");
const {
  masterApiKey,
  masterSecretKey,
  webSocketUrl,
  baseUrlApiBinance,
} = require("../config");

const masterClient = new Spot(masterApiKey, masterSecretKey, {
  wsURL: webSocketUrl,
  baseURL: baseUrlApiBinance,
});

// TBD: Trigger a function to copy trades
const callbacks = {
  open: () => console.log("Stream Opened"),
  close: () => console.log("Stream Closed"),
  message: (data) => console.log(data),
};

// TBD: Fetch subscriptions from Fastify or Lambda
const userClients = mockSubscriptions.map(
  (subscription) =>
    new Spot(subscription.api_key, subscription.secret_key, {
      wsURL: webSocketUrl,
      baseURL: baseUrlApiBinance,
    })
);

const link = async () => {
  const response = await masterClient.createListenKey();
  const masterListenKey = response ? response.data.listenKey : undefined;
  userClients.forEach((client) => client.userData(masterListenKey, callbacks));
};

module.exports = link;
