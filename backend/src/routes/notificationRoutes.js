const express = require("express");

const {
  sendUserNotification,
} = require("../controllers/notificationController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const { ROLES } = require("../utils/constants");

const router = express.Router();

router.post(
  "/send",
  authMiddleware,
  authorizeRoles(ROLES.CENTRE_ADMIN, ROLES.SYSTEM_ADMIN),
  sendUserNotification
);

module.exports = router;