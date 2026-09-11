const { z } = require("zod");

const registerValidator = z.object({
  body: z.object({
    name: z.string().min(2).max(100),
    phone: z.string().min(10).max(15),
    password: z.string().min(6).max(100),
  }),
  params: z.object({}),
  query: z.object({}),
});

const loginValidator = z.object({
  body: z.object({
    phone: z.string().min(10).max(15),
    password: z.string().min(6).max(100),
  }),
  params: z.object({}),
  query: z.object({}),
});

module.exports = {
  registerValidator,
  loginValidator,
};