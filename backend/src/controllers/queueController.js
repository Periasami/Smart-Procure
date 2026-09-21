const prisma = require("../config/prisma");
const { successResponse, errorResponse } = require("../utils/response");

const {
  QUEUE_STATUSES,
  calculateQueueMetrics,
  getTokenPosition,
  validateQueueStatus,
} = require("../services/queueService");

const {
  emitQueueUpdate,
  emitQueuePosition,
  emitQueueStatus,
  emitCentreCongestion,
  emitTokenCalled,
  emitTokenCompleted,
} = require("../websocket/socketHandler");

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

    const centre = await prisma.procurement_centres.findUnique({
      where: { id: centreId },
    });

    if (!centre) {
      return errorResponse(
        res,
        "CENTRE_NOT_FOUND",
        "Procurement centre not found",
        404
      );
    }

    const queueEntries = await prisma.queue_entries.findMany({
      where: { centre_id: centreId },
      orderBy: { position: "asc" },
      include: { tokens: true },
    });

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

    const token = await prisma.tokens.findUnique({
      where: { id: tokenId },
      include: { queue_entries: true },
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

    const queueEntries = await prisma.queue_entries.findMany({
      where: { centre_id: token.centre_id },
      orderBy: { position: "asc" },
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

    const queueEntry = await prisma.queue_entries.findUnique({
      where: { token_id: tokenId },
    });

    if (!queueEntry) {
      return errorResponse(
        res,
        "QUEUE_ENTRY_NOT_FOUND",
        "Queue entry was not found",
        404
      );
    }

    const updatedQueue = await prisma.$transaction(async (tx) => {
      const updatedEntry = await tx.queue_entries.update({
        where: { token_id: tokenId },
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

      await tx.tokens.update({
        where: { id: tokenId },
        data: { status },
      });

      return updatedEntry;
    });

    // Socket.IO realtime notifications
    const io = req.app.get("io");

    if (io) {
      // Every queue status change
      emitQueueStatus(io, tokenId, status);

      // Token-specific events
      if (status === "CALLED") {
        emitTokenCalled(io, tokenId, {
          centreId: updatedQueue.centre_id,
        });
      }

      if (status === "COMPLETED") {
        emitTokenCompleted(io, tokenId, {
          centreId: updatedQueue.centre_id,
        });
      }

      // Calculate current position
      const queueEntries = await prisma.queue_entries.findMany({
        where: {
          centre_id: updatedQueue.centre_id,
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

      emitQueuePosition(io, tokenId, {
        centreId: updatedQueue.centre_id,
        position,
        status,
      });

      // Updated queue metrics
      const centre = await prisma.procurement_centres.findUnique({
        where: {
          id: updatedQueue.centre_id,
        },
      });

      if (centre) {
        const metrics = calculateQueueMetrics(
          tokens,
          centre.capacity,
          centre.processing_rate
        );

        emitQueueUpdate(io, updatedQueue.centre_id, {
          centreId: updatedQueue.centre_id,
          ...metrics,
          tokens,
        });

        emitCentreCongestion(io, updatedQueue.centre_id, {
          centreId: updatedQueue.centre_id,
          congestion: metrics.congestion,
          totalActive: metrics.totalActive,
          waitingCount: metrics.waitingCount,
          processingCount: metrics.processingCount,
        });
      }
    }

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