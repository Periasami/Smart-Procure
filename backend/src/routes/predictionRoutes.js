const express = require("express");

const {
  getWaitingTimePrediction,
} = require("../controllers/predictionController");

const authMiddleware = require("../middleware/authMiddleware");
const validate = require("../validators/validate");
const predictionValidator = require("../validators/predictionValidator");

const router = express.Router();

router.post(
  "/waiting-time",
  authMiddleware,
  validate(predictionValidator),
  getWaitingTimePrediction
);

module.exports = router;