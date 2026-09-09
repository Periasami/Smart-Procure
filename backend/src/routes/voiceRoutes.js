const express = require("express");

const {
  processVoiceRequest,
} = require("../controllers/voiceController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/process",
  authMiddleware,
  processVoiceRequest
);

module.exports = router;