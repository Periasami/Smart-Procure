const express = require("express");

const { getMyProfile } = require("../controllers/farmerController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
  "/me",
  authMiddleware,
  authorizeRoles("FARMER"),
  getMyProfile
);

module.exports = router;