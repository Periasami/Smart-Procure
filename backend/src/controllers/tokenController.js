const { successResponse } = require("../utils/response");

// Create a new procurement token
const createToken = async (req, res, next) => {
  try {
    // Database schema is not finalized yet.
    return successResponse(
      res,
      {
        status: "PENDING_DATABASE_INTEGRATION",
      },
      "Token creation service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

// Get farmer's tokens
const getMyTokens = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        status: "PENDING_DATABASE_INTEGRATION",
      },
      "Token retrieval service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

// Get token by ID
const getTokenById = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        tokenId: req.params.id,
        status: "PENDING_DATABASE_INTEGRATION",
      },
      "Token retrieval service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createToken,
  getMyTokens,
  getTokenById,
};