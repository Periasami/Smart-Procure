const prisma = require("../config/prisma");
const { successResponse, errorResponse } = require("../utils/response");

// Create a new procurement token
const createToken = async (req, res, next) => {
  try {
    const userId = Number(req.user.userId);
    const { centreId, scheduleId, cropType, quantity } = req.body;

    if (!userId) {
      return errorResponse(
        res,
        "INVALID_USER",
        "Invalid user information",
        401
      );
    }

    // Verify farmer
    const farmer = await prisma.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        role: true,
      },
    });

    if (!farmer || farmer.role !== "FARMER") {
      return errorResponse(
        res,
        "FARMER_NOT_FOUND",
        "Farmer profile not found",
        404
      );
    }

    // Verify procurement centre
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

    if (centre.status !== "OPEN") {
      return errorResponse(
        res,
        "CENTRE_CLOSED",
        "Procurement centre is currently closed",
        400
      );
    }

    // Verify schedule
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

    if (schedule.centre_id !== centreId) {
      return errorResponse(
        res,
        "INVALID_SCHEDULE",
        "Schedule does not belong to the selected centre",
        400
      );
    }

    if (schedule.available_slots <= 0) {
      return errorResponse(
        res,
        "SCHEDULE_FULL",
        "No available slots for this schedule",
        400
      );
    }

    // Find crop
    const crop = await prisma.crops.findUnique({
      where: {
        name: cropType,
      },
    });

    if (!crop) {
      return errorResponse(
        res,
        "CROP_NOT_FOUND",
        "Crop type not found",
        404
      );
    }

    // Prevent duplicate active booking
    const existingToken = await prisma.tokens.findFirst({
      where: {
        farmer_id: userId,
        schedule_id: scheduleId,
        status: {
          in: ["BOOKED", "WAITING", "CALLED", "PROCESSING"],
        },
      },
    });

    if (existingToken) {
      return errorResponse(
        res,
        "DUPLICATE_BOOKING",
        "You already have an active token for this schedule",
        409
      );
    }

    // Find the last token number for this centre
    const lastToken = await prisma.tokens.findFirst({
      where: {
        centre_id: centreId,
      },
      orderBy: {
        token_number: "desc",
      },
    });

    const tokenNumber = lastToken
      ? lastToken.token_number + 1
      : centreId * 100 + 1;

    // Create token + queue entry + update available slots
    const token = await prisma.$transaction(async (tx) => {
      const newToken = await tx.tokens.create({
        data: {
          farmer_id: userId,
          centre_id: centreId,
          schedule_id: scheduleId,
          crop_id: crop.id,
          token_number: tokenNumber,
          status: "WAITING",
        },
        include: {
          procurement_centres: true,
          crops: true,
          schedules: true,
        },
      });

      // Find current last queue position
      const lastQueueEntry = await tx.queue_entries.findFirst({
        where: {
          centre_id: centreId,
        },
        orderBy: {
          position: "desc",
        },
      });

      const position = lastQueueEntry?.position
        ? lastQueueEntry.position + 1
        : 1;

      // Add token to queue
      await tx.queue_entries.create({
        data: {
          token_id: newToken.id,
          centre_id: centreId,
          position,
          status: "WAITING",
        },
      });

      // Reduce available schedule slots
      await tx.schedules.update({
        where: {
          id: scheduleId,
        },
        data: {
          available_slots: {
            decrement: 1,
          },
        },
      });

      return newToken;
    });

    return successResponse(
      res,
      {
        token,
        quantity,
      },
      "Procurement token created successfully"
    );
  } catch (error) {
    next(error);
  }
};

// Get farmer's tokens
const getMyTokens = async (req, res, next) => {
  try {
    const userId = Number(req.user.userId);

    if (!userId) {
      return errorResponse(
        res,
        "INVALID_USER",
        "Invalid user information",
        401
      );
    }

    const tokens = await prisma.tokens.findMany({
      where: {
        farmer_id: userId,
      },
      orderBy: {
        booking_time: "desc",
      },
      include: {
        procurement_centres: true,
        crops: true,
        schedules: true,
        queue_entries: true,
      },
    });

    return successResponse(
      res,
      {
        tokens,
      },
      "Farmer tokens retrieved successfully"
    );
  } catch (error) {
    next(error);
  }
};

// Get token by ID
const getTokenById = async (req, res, next) => {
  try {
    const tokenId = Number(req.params.id);

    if (!tokenId) {
      return errorResponse(
        res,
        "INVALID_TOKEN_ID",
        "Invalid token ID",
        400
      );
    }

    const token = await prisma.tokens.findUnique({
      where: {
        id: tokenId,
      },
      include: {
        procurement_centres: true,
        crops: true,
        schedules: true,
        queue_entries: true,
      },
    });

    if (!token) {
      return errorResponse(
        res,
        "TOKEN_NOT_FOUND",
        "Token not found",
        404
      );
    }

    return successResponse(
      res,
      {
        token,
      },
      "Token retrieved successfully"
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