const routes = async (fastify, options) => {
  const subscriptions = fastify.mongo.db.collection("subscriptions");

  fastify.get("/", async (request, reply) => {
    try {
      const result = await subscriptions.find().toArray();
      if (result.length === 0) {
        return reply.code(404).send({ message: "Subscriptions not found" });
      }
      reply.code(200).send(result);
    } catch (error) {
      reply.code(500).send(error.message);
    }
  });
};

module.exports = routes;
