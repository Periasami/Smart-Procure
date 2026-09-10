const { z } = require("zod");

const healthValidator = z.object({
  body: z.object({}),
  params: z.object({}),
  query: z.object({}),
});

module.exports = healthValidator;