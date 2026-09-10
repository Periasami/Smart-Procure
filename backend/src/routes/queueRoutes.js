const express = require("express");

const {
  getQueueStatus,
  getMyQueuePosition,
  updateQueueStatus,
} = require("../controllers/queueController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const { ROLES } = require("../utils/constants");

const router = express.Router();

// Get queue status for a procurement centre
router.get(
  "/centre/:centreId",
  authMiddleware,
  getQueueStatus
);

// Get farmer's queue position
router.get(
  "/token/:tokenId",
  authMiddleware,
  getMyQueuePosition
);

// Update queue status - Centre Admin/System Admin
router.put(
  "/token/:tokenId",
  authMiddleware,
  authorizeRoles(ROLES.CENTRE_ADMIN, ROLES.SYSTEM_ADMIN),
  updateQueueStatus
);

module.exports = router;