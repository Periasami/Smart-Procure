const jwt = require("jsonwebtoken");

const env = require("../config/env");

const generateToken = (payload) => {
  if (!env.jwtSecret) {
    throw new Error("JWT_SECRET is not configured");
  }

  return jwt.sign(payload, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn,
  });
};

const verifyToken = (token) => {
  if (!env.jwtSecret) {
    throw new Error("JWT_SECRET is not configured");
  }

  return jwt.verify(token, env.jwtSecret);
};

module.exports = {
  generateToken,
  verifyToken,
};