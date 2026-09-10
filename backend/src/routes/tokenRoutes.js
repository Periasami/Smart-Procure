const express = require("express");

const {
  createToken,
  getMyTokens,
  getTokenById,
} = require("../controllers/tokenController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const { ROLES } = require("../utils/constants");

const {
  createTokenSchema,
  tokenIdSchema,
} = require("../validators/tokenValidator");

const router = express.Router();

const validateBody = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      error: {
        code: "VALIDATION_ERROR",
        message: result.error.issues
          .map((issue) => issue.message)
          .join(", "),
      },
    });
  }

  req.body = result.data;
  next();
};

const validateParams = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.params);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      error: {
        code: "VALIDATION_ERROR",
        message: result.error.issues
          .map((issue) => issue.message)
          .join(", "),
      },
    });
  }

  req.params = result.data;
  next();
};

// Create procurement token
router.post(
  "/",
  authMiddleware,
  authorizeRoles(ROLES.FARMER),
  validateBody(createTokenSchema),
  createToken
);

// Get logged-in farmer's tokens
router.get(
  "/my",
  authMiddleware,
  authorizeRoles(ROLES.FARMER),
  getMyTokens
);

// Get token by ID
router.get(
  "/:id",
  authMiddleware,
  validateParams(tokenIdSchema),
  getTokenById
);

module.exports = router;