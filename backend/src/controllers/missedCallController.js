const { successResponse } = require("../utils/response");

const handleMissedCall = async (req, res, next) => {
  try {
    const { phoneNumber, reason = "MISSED_CALL" } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({
        success: false,
        error: {
          code: "PHONE_NUMBER_REQUIRED",
          message: "phoneNumber is required",
        },
      });
    }

    return successResponse(
      res,
      {
        phoneNumber,
        reason,
        status: "MISSED_CALL_RECEIVED",
        callbackRequested: true,
      },
      "Missed call request received successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleMissedCall,
};