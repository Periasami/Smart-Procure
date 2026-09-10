const { successResponse } = require("../utils/response");

// Get schedules for a procurement centre
const getSchedules = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        centreId: req.params.centreId,
        status: "PENDING_DATABASE_INTEGRATION",
        schedules: [],
      },
      "Schedule retrieval service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

// Get schedule by ID
const getScheduleById = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        scheduleId: req.params.id,
        status: "PENDING_DATABASE_INTEGRATION",
      },
      "Schedule retrieval service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

// Create schedule
const createSchedule = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        status: "PENDING_DATABASE_INTEGRATION",
        data: req.body,
      },
      "Schedule creation service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

// Update schedule
const updateSchedule = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        scheduleId: req.params.id,
        status: "PENDING_DATABASE_INTEGRATION",
        data: req.body,
      },
      "Schedule update service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

// Delete schedule
const deleteSchedule = async (req, res, next) => {
  try {
    return successResponse(
      res,
      {
        scheduleId: req.params.id,
        status: "PENDING_DATABASE_INTEGRATION",
      },
      "Schedule deletion service is ready for database integration"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule,
};