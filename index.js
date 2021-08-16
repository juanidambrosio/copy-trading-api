const server = require("./server");
const boot = require("./boot");
const fastify = server();

const run = async () => {
  try {
    await fastify.listen(3000, "0.0.0.0");
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (error) {
    //boot();
    fastify.log.error(error);
    throw new Error(error);
  }
};

run();
