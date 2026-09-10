const { z } = require("zod");

const createTokenSchema = z.object({
  centreId: z.coerce.number().int().positive(),
  scheduleId: z.coerce.number().int().positive(),
  cropType: z.string().trim().min(1).max(100),
  quantity: z.coerce.number().positive(),
});

const tokenIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

module.exports = {
  createTokenSchema,
  tokenIdSchema,
};