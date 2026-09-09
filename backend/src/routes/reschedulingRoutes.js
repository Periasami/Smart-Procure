const express = require("express");

const {
  recommendRescheduling,
  applyRescheduling,
} = require("../controllers/reschedulingController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/recommend",
  authMiddleware,
  recommendRescheduling
);

router.post(
  "/apply",
  authMiddleware,
  applyRescheduling
);

module.exports = router;