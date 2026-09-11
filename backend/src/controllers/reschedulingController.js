const prisma = require("../config/prisma");
const { successResponse, errorResponse } = require("../utils/response");

const {
  recommendReschedule,
} = require("../services/reschedulingService");

const recommendRescheduling = async (req, res, next) => {
  try {
    const options = req.body.options || [];

    const recommendations = recommendReschedule(options);

    return successResponse(
      res,
      { recommendations },
      "Rescheduling recommendations generated successfully"
    );
  } catch (error) {
    next(error);
  }
};

const applyRescheduling = async (req, res, next) => {
  try {
    const tokenId = Number(req.body.tokenId);
    const newScheduleId = Number(req.body.scheduleId);
    const userId = Number(req.user.userId);

    if (!tokenId || !newScheduleId || !userId) {
      return errorResponse(
        res,
        "INVALID_RESCHEDULE_REQUEST",
        "tokenId and scheduleId are required",
        400
      );
    }

    const token = await prisma.tokens.findUnique({
      where: { id: tokenId },
    });

    if (!token) {
      return errorResponse(
        res,
        "TOKEN_NOT_FOUND",
        "Token not found",
        404
      );
    }

    // Farmer can reschedule only their own token
    if (token.farmer_id !== userId) {
      return errorResponse(
        res,
        "FORBIDDEN",
        "You do not have permission to reschedule this token",
        403
      );
    }

    // Only active tokens can be rescheduled
    if (
      !["BOOKED", "WAITING", "CALLED", "PROCESSING"].includes(
        token.status
      )
    ) {
      return errorResponse(
        res,
        "INVALID_TOKEN_STATUS",
        "Only active tokens can be rescheduled",
        400
      );
    }

    // Cannot reschedule to the same schedule
    if (token.schedule_id === newScheduleId) {
      return errorResponse(
        res,
        "SAME_SCHEDULE",
        "Token is already booked for this schedule",
        400
      );
    }

    const newSchedule = await prisma.schedules.findUnique({
      where: { id: newScheduleId },
    });

    if (!newSchedule) {
      return errorResponse(
        res,
        "SCHEDULE_NOT_FOUND",
        "New schedule not found",
        404
      );
    }

    if (newSchedule.available_slots <= 0) {
      return errorResponse(
        res,
        "SCHEDULE_FULL",
        "No available slots for the selected schedule",
        400
      );
    }

    const oldSchedule = await prisma.schedules.findUnique({
      where: { id: token.schedule_id },
    });

    if (!oldSchedule) {
      return errorResponse(
        res,
        "OLD_SCHEDULE_NOT_FOUND",
        "Current schedule not found",
        404
      );
    }

    const result = await prisma.$transaction(async (tx) => {
      // Move token to new schedule
      const updatedToken = await tx.tokens.update({
        where: { id: tokenId },
        data: {
          schedule_id: newScheduleId,
        },
      });

      // Return slot to old schedule
      await tx.schedules.update({
        where: { id: oldSchedule.id },
        data: {
          available_slots: {
            increment: 1,
          },
        },
      });

      // Consume slot from new schedule
      await tx.schedules.update({
        where: { id: newScheduleId },
        data: {
          available_slots: {
            decrement: 1,
          },
        },
      });

      return updatedToken;
    });

    return successResponse(
      res,
      {
        token: result,
        previousScheduleId: oldSchedule.id,
        newScheduleId,
        status: "RESCHEDULED",
      },
      "Token rescheduled successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  recommendRescheduling,
  applyRescheduling,
};