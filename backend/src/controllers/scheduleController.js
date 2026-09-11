const prisma = require("../config/prisma");
const { successResponse, errorResponse } = require("../utils/response");

// Get schedules for a procurement centre
const getSchedules = async (req, res, next) => {
  try {
    const centreId = Number(req.params.centreId);

    if (!centreId) {
      return errorResponse(
        res,
        "INVALID_CENTRE_ID",
        "Invalid centre ID",
        400
      );
    }

    const centre = await prisma.procurement_centres.findUnique({
      where: {
        id: centreId,
      },
    });

    if (!centre) {
      return errorResponse(
        res,
        "CENTRE_NOT_FOUND",
        "Procurement centre not found",
        404
      );
    }

    const schedules = await prisma.schedules.findMany({
      where: {
        centre_id: centreId,
      },
      orderBy: {
        start_time: "asc",
      },
    });

    return successResponse(
      res,
      {
        centreId,
        schedules,
      },
      "Schedules retrieved successfully"
    );
  } catch (error) {
    next(error);
  }
};

// Get schedule by ID
const getScheduleById = async (req, res, next) => {
  try {
    const scheduleId = Number(req.params.id);

    if (!scheduleId) {
      return errorResponse(
        res,
        "INVALID_SCHEDULE_ID",
        "Invalid schedule ID",
        400
      );
    }

    const schedule = await prisma.schedules.findUnique({
      where: {
        id: scheduleId,
      },
    });

    if (!schedule) {
      return errorResponse(
        res,
        "SCHEDULE_NOT_FOUND",
        "Schedule not found",
        404
      );
    }

    return successResponse(
      res,
      {
        schedule,
      },
      "Schedule retrieved successfully"
    );
  } catch (error) {
    next(error);
  }
};

// Create schedule
const createSchedule = async (req, res, next) => {
  try {
    const {
      centre_id,
      schedule_date,
      start_time,
      end_time,
      capacity,
    } = req.body;

    const centre = await prisma.procurement_centres.findUnique({
      where: {
        id: Number(centre_id),
      },
    });

    if (!centre) {
      return errorResponse(
        res,
        "CENTRE_NOT_FOUND",
        "Procurement centre not found",
        404
      );
    }

    const schedule = await prisma.schedules.create({
      data: {
        centre_id: Number(centre_id),
        schedule_date: new Date(schedule_date),
        start_time: new Date(start_time),
        end_time: new Date(end_time),
        capacity: Number(capacity),
        available_slots: Number(capacity),
      },
    });

    return successResponse(
      res,
      {
        schedule,
      },
      "Schedule created successfully"
    );
  } catch (error) {
    next(error);
  }
};

// Update schedule
const updateSchedule = async (req, res, next) => {
  try {
    const scheduleId = Number(req.params.id);

    if (!scheduleId) {
      return errorResponse(
        res,
        "INVALID_SCHEDULE_ID",
        "Invalid schedule ID",
        400
      );
    }

    const existingSchedule = await prisma.schedules.findUnique({
      where: {
        id: scheduleId,
      },
    });

    if (!existingSchedule) {
      return errorResponse(
        res,
        "SCHEDULE_NOT_FOUND",
        "Schedule not found",
        404
      );
    }

    const {
      schedule_date,
      start_time,
      end_time,
      capacity,
      available_slots,
    } = req.body;

    const schedule = await prisma.schedules.update({
      where: {
        id: scheduleId,
      },
      data: {
        ...(schedule_date !== undefined && {
          schedule_date: new Date(schedule_date),
        }),
        ...(start_time !== undefined && {
          start_time: new Date(start_time),
        }),
        ...(end_time !== undefined && {
          end_time: new Date(end_time),
        }),
        ...(capacity !== undefined && {
          capacity: Number(capacity),
        }),
        ...(available_slots !== undefined && {
          available_slots: Number(available_slots),
        }),
      },
    });

    return successResponse(
      res,
      {
        schedule,
      },
      "Schedule updated successfully"
    );
  } catch (error) {
    next(error);
  }
};

// Delete schedule
const deleteSchedule = async (req, res, next) => {
  try {
    const scheduleId = Number(req.params.id);

    if (!scheduleId) {
      return errorResponse(
        res,
        "INVALID_SCHEDULE_ID",
        "Invalid schedule ID",
        400
      );
    }

    const existingSchedule = await prisma.schedules.findUnique({
      where: {
        id: scheduleId,
      },
    });

    if (!existingSchedule) {
      return errorResponse(
        res,
        "SCHEDULE_NOT_FOUND",
        "Schedule not found",
        404
      );
    }

    const activeTokens = await prisma.tokens.count({
      where: {
        schedule_id: scheduleId,
        status: {
          in: ["BOOKED", "WAITING", "CALLED", "PROCESSING"],
        },
      },
    });

    if (activeTokens > 0) {
      return errorResponse(
        res,
        "SCHEDULE_HAS_ACTIVE_TOKENS",
        "Cannot delete a schedule with active tokens",
        409
      );
    }

    await prisma.schedules.delete({
      where: {
        id: scheduleId,
      },
    });

    return successResponse(
      res,
      {
        scheduleId,
      },
      "Schedule deleted successfully"
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