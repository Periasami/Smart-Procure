const { successResponse } = require("../utils/response");

const {
  recommendReschedule,
} = require("../services/reschedulingService");

const recommendRescheduling = async (req, res, next) => {
  try {
    const options = req.body.options || [];

    const recommendations = recommendReschedule(options);

    return successResponse(
      res,
      {
        recommendations,
      },
      "Rescheduling recommendations generated successfully"
    );
  } catch (error) {
    next(error);
  }
};

const applyRescheduling = async (req, res, next) => {
  try {
    const { tokenId, scheduleId } = req.body;

    if (!tokenId || !scheduleId) {
      return res.status(400).json({
        success: false,
        error: {
          code: "INVALID_RESCHEDULE_REQUEST",
          message: "tokenId and scheduleId are required",
        },
      });
    }

    return successResponse(
      res,
      {
        tokenId,
        scheduleId,
        status: "RESCHEDULE_REQUESTED",
      },
      "Rescheduling request accepted"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  recommendRescheduling,
  applyRescheduling,
};