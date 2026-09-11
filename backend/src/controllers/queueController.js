const prisma = require("../config/prisma");
const { successResponse, errorResponse } = require("../utils/response");

const {
  QUEUE_STATUSES,
  calculateQueueMetrics,
  getTokenPosition,
  validateQueueStatus,
} = require("../services/queueService");

// Get queue status for a procurement centre
const getQueueStatus = async (req, res, next) => {
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

    // Get centre information
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

    // Get queue entries from PostgreSQL
    const queueEntries = await prisma.queue_entries.findMany({
      where: {
        centre_id: centreId,
      },
      orderBy: {
        position: "asc",
      },
      include: {
        tokens: true,
      },
    });

    // Convert DB queue entries into the format expected by queueService
    const tokens = queueEntries.map((entry) => ({
      id: entry.token_id,
      status: entry.status,
      createdAt: entry.joined_at,
      position: entry.position,
    }));

    const metrics = calculateQueueMetrics(
      tokens,
      centre.capacity,
      centre.processing_rate
    );

    return successResponse(
      res,
      {
        centreId,
        ...metrics,
        tokens,
      },
      "Queue status retrieved successfully"
    );
  } catch (error) {
    next(error);
  }
};

// Get current user's queue position
const getMyQueuePosition = async (req, res, next) => {
  try {
    const tokenId = Number(req.params.tokenId);
    const userId = Number(req.user.userId);

    if (!tokenId || !userId) {
      return errorResponse(
        res,
        "INVALID_REQUEST",
        "Invalid token or user information",
        400
      );
    }

    // Find token and verify ownership
    const token = await prisma.tokens.findUnique({
      where: {
        id: tokenId,
      },
      include: {
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

    if (token.farmer_id !== userId) {
      return errorResponse(
        res,
        "FORBIDDEN",
        "You do not have permission to view this token",
        403
      );
    }

    if (!token.queue_entries) {
      return successResponse(
        res,
        {
          tokenId,
          position: null,
          status: token.status,
        },
        "Queue position retrieved successfully"
      );
    }

    // Get all queue entries for the centre
    const queueEntries = await prisma.queue_entries.findMany({
      where: {
        centre_id: token.centre_id,
      },
      orderBy: {
        position: "asc",
      },
    });

    const tokens = queueEntries.map((entry) => ({
      id: entry.token_id,
      status: entry.status,
      createdAt: entry.joined_at,
      position: entry.position,
    }));

    const position = getTokenPosition(tokens, tokenId);

    return successResponse(
      res,
      {
        tokenId,
        position,
        status: token.queue_entries.status,
      },
      "Queue position retrieved successfully"
    );
  } catch (error) {
    next(error);
  }
};

// Update queue status
const updateQueueStatus = async (req, res, next) => {
  try {
    const tokenId = Number(req.params.tokenId);
    const { status } = req.body;

    if (!tokenId) {
      return errorResponse(
        res,
        "INVALID_TOKEN_ID",
        "Invalid token ID",
        400
      );
    }

    if (!validateQueueStatus(status)) {
      return errorResponse(
        res,
        "INVALID_QUEUE_STATUS",
        `Invalid queue status. Allowed values: ${QUEUE_STATUSES.join(", ")}`,
        400
      );
    }

    // Find queue entry
    const queueEntry = await prisma.queue_entries.findUnique({
      where: {
        token_id: tokenId,
      },
    });

    if (!queueEntry) {
      return errorResponse(
        res,
        "QUEUE_ENTRY_NOT_FOUND",
        "Queue entry was not found",
        404
      );
    }

    // Update queue entry and token together
    const updatedQueue = await prisma.$transaction(async (tx) => {
      const updatedEntry = await tx.queue_entries.update({
        where: {
          token_id: tokenId,
        },
        data: {
          status,
          ...(status === "CALLED" && {
            called_at: new Date(),
          }),
          ...(status === "COMPLETED" && {
            completed_at: new Date(),
          }),
        },
      });

      // Keep token status synchronized with queue status
      await tx.tokens.update({
        where: {
          id: tokenId,
        },
        data: {
          status,
        },
      });

      return updatedEntry;
    });

    return successResponse(
      res,
      {
        queueEntry: updatedQueue,
      },
      "Queue status updated successfully"
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