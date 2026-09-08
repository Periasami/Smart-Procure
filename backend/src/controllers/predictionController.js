const { predictWaitingTime } = require("../services/mlService");
const { successResponse, errorResponse } = require("../utils/response");

const getWaitingTimePrediction = async (req, res, next) => {
  try {
    const prediction = await predictWaitingTime(req.body);

    return successResponse(
      res,
      prediction,
      "Waiting time prediction retrieved successfully"
    );
  } catch (error) {
    error.code = "ML_SERVICE_ERROR";
    error.statusCode = 502;

    return next(error);
  }
};

module.exports = {
  getWaitingTimePrediction,
};