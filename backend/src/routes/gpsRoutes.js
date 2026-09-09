const express = require("express");

const {
  getNearbyCentres,
} = require("../controllers/gpsController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get(
  "/nearby",
  authMiddleware,
  getNearbyCentres
);

module.exports = router;