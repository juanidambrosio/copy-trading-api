const dotenv = require("dotenv");

dotenv.config();

const server = () => {
  const fastify = require("fastify")({
    logger: true,
  });

  fastify.register(require("fastify-mongodb"), {
    url: process.env.MONGO_URL,
    forceClose: true,
  });

  fastify.register(require("./routes/subscriptions"), {
    prefix: "/api",
  });

  return fastify;
};

module.exports = server;
