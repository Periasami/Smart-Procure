const express = require("express");

const {
  getWaitingTimePrediction,
} = require("../controllers/predictionController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/waiting-time",
  authMiddleware,
  getWaitingTimePrediction
);

module.exports = router;