const express = require("express");

const {
  getCentres,
  getCentreById,
  createCentre,
  updateCentre,
  updateCentreStatus,
} = require("../controllers/centreController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const { ROLES } = require("../utils/constants");

const router = express.Router();

// Get all procurement centres
router.get("/", authMiddleware, getCentres);

// Get procurement centre by ID
router.get("/:id", authMiddleware, getCentreById);

// Create procurement centre
router.post(
  "/",
  authMiddleware,
  authorizeRoles(ROLES.SYSTEM_ADMIN),
  createCentre
);

// Update procurement centre
router.put(
  "/:id",
  authMiddleware,
  authorizeRoles(ROLES.CENTRE_ADMIN, ROLES.SYSTEM_ADMIN),
  updateCentre
);

// Update procurement centre status
router.patch(
  "/:id/status",
  authMiddleware,
  authorizeRoles(ROLES.CENTRE_ADMIN, ROLES.SYSTEM_ADMIN),
  updateCentreStatus
);

module.exports = router;