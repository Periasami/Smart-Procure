const { z } = require("zod");

const predictionValidator = z.object({
  body: z.record(z.string(), z.unknown()),
  params: z.object({}),
  query: z.object({}),
});

module.exports = predictionValidator;