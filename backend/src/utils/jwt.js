const jwt = require("jsonwebtoken");

const env = require("../config/env");

const generateToken = (payload) => {
  if (!env.jwtSecret) {
    throw new Error("JWT_SECRET is not configured");
  }

  return jwt.sign(
    {
      ...payload,
      type: "access",
    },
    env.jwtSecret,
    {
      expiresIn: env.jwtExpiresIn,
    }
  );
};

const verifyToken = (token) => {
  if (!env.jwtSecret) {
    throw new Error("JWT_SECRET is not configured");
  }

  return jwt.verify(token, env.jwtSecret);
};

const generateRefreshToken = (payload) => {
  if (!env.jwtRefreshSecret) {
    throw new Error("JWT_REFRESH_SECRET is not configured");
  }

  return jwt.sign(
    {
      ...payload,
      type: "refresh",
    },
    env.jwtRefreshSecret,
    {
      expiresIn: env.jwtRefreshExpiresIn,
    }
  );
};

const verifyRefreshToken = (token) => {
  if (!env.jwtRefreshSecret) {
    throw new Error("JWT_REFRESH_SECRET is not configured");
  }

  const decoded = jwt.verify(token, env.jwtRefreshSecret);

  if (decoded.type !== "refresh") {
    throw new Error("Invalid refresh token");
  }

  return decoded;
};

module.exports = {
  generateToken,
  verifyToken,
  generateRefreshToken,
  verifyRefreshToken,
};