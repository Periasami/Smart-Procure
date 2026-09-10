const express = require("express");
const { z } = require("zod");

const validate = require("../validators/validate");

const router = express.Router();

const testSchema = z.object({
  body: z.object({
    name: z.string().min(2, "Name must contain at least 2 characters"),
  }),
  params: z.object({}),
  query: z.object({}),
});

router.post("/test-validation", validate(testSchema), (req, res) => {
  res.status(200).json({
    success: true,
    data: req.validated.body,
    message: "Validation successful",
  });
});

module.exports = router;