const express = require("express");

const {
  createToken,
  getMyTokens,
  getTokenById,
} = require("../controllers/tokenController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const { ROLES } = require("../utils/constants");

const router = express.Router();

// Create procurement token
router.post(
  "/",
  authMiddleware,
  authorizeRoles(ROLES.FARMER),
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
  getTokenById
);

module.exports = router;