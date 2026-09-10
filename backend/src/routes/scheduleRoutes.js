const express = require("express");

const {
  getSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} = require("../controllers/scheduleController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const { ROLES } = require("../utils/constants");

const router = express.Router();

// Get schedules for a procurement centre
router.get(
  "/centre/:centreId",
  authMiddleware,
  getSchedules
);

// Get schedule by ID
router.get(
  "/:id",
  authMiddleware,
  getScheduleById
);

// Create schedule
router.post(
  "/",
  authMiddleware,
  authorizeRoles(ROLES.CENTRE_ADMIN, ROLES.SYSTEM_ADMIN),
  createSchedule
);

// Update schedule
router.put(
  "/:id",
  authMiddleware,
  authorizeRoles(ROLES.CENTRE_ADMIN, ROLES.SYSTEM_ADMIN),
  updateSchedule
);

// Delete schedule
router.delete(
  "/:id",
  authMiddleware,
  authorizeRoles(ROLES.CENTRE_ADMIN, ROLES.SYSTEM_ADMIN),
  deleteSchedule
);

module.exports = router;