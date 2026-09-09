const express = require("express");

const {
  handleMissedCall,
} = require("../controllers/missedCallController");

const router = express.Router();

router.post("/handle", handleMissedCall);

module.exports = router;