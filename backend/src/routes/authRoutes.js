const express = require("express");

const {
  register,
  login,
  refreshToken,
  logout,
  getMe,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const validate = require("../validators/validate");

const {
  registerValidator,
  loginValidator,
} = require("../validators/authValidator");

const router = express.Router();

router.post("/register", validate(registerValidator), register);

router.post("/login", validate(loginValidator), login);

router.post("/refresh", refreshToken);

router.post("/logout", logout);

router.get(
  "/me",
  authMiddleware,
  authorizeRoles("FARMER", "CENTRE_ADMIN", "SYSTEM_ADMIN"),
  getMe
);

module.exports = router;