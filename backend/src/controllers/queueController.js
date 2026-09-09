const { successResponse } = require("../utils/response");

// Get current queue status
const getQueueStatus = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        centreId: req.params.centreId,
        status: "PENDING_DATABASE_INTEGRATION",
      },
      "Queue status service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

// Get farmer's queue position
const getMyQueuePosition = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        tokenId: req.params.tokenId,
        status: "PENDING_DATABASE_INTEGRATION",
      },
      "Queue position service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

// Update queue status
const updateQueueStatus = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        tokenId: req.params.tokenId,
        status: req.body.status || "PENDING_DATABASE_INTEGRATION",
      },
      "Queue update service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getQueueStatus,
  getMyQueuePosition,
  updateQueueStatus,
};