const express = require("express");

const {
  getCentreRecommendations,
} = require("../controllers/recommendationController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get(
  "/centres",
  authMiddleware,
  getCentreRecommendations
);

module.exports = router;