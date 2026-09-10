const { successResponse } = require("../utils/response");

const {
  QUEUE_STATUSES,
  calculateQueueMetrics,
  getTokenPosition,
  validateQueueStatus,
} = require("../services/queueService");

// Temporary in-memory queue.
// This will be replaced with PostgreSQL/Prisma after the DB schema is finalized.
const queueStore = new Map();

const getQueueStatus = async (req, res, next) => {
  try {
    const centreId = req.params.centreId;
    const tokens = queueStore.get(centreId) || [];

    const metrics = calculateQueueMetrics(tokens, 100, 10);

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

const getMyQueuePosition = async (req, res, next) => {
  try {
    const tokenId = req.params.tokenId;

    let position = null;
    let token = null;

    for (const tokens of queueStore.values()) {
      const found = tokens.find(
        (item) => String(item.id) === String(tokenId)
      );

      if (found) {
        token = found;
        position = getTokenPosition(tokens, tokenId);
        break;
      }
    }

    return successResponse(
      res,
      {
        tokenId,
        position,
        status: token ? token.status : "NOT_FOUND",
      },
      "Queue position retrieved successfully"
    );
  } catch (error) {
    next(error);
  }
};

const updateQueueStatus = async (req, res, next) => {
  try {
    const tokenId = req.params.tokenId;
    const { status } = req.body;

    if (!validateQueueStatus(status)) {
      return res.status(400).json({
        success: false,
        error: {
          code: "INVALID_QUEUE_STATUS",
          message: `Invalid queue status. Allowed values: ${QUEUE_STATUSES.join(", ")}`,
        },
      });
    }

    let updatedToken = null;

    for (const [centreId, tokens] of queueStore.entries()) {
      const token = tokens.find(
        (item) => String(item.id) === String(tokenId)
      );

      if (token) {
        token.status = status;
        updatedToken = {
          ...token,
          centreId,
        };
        break;
      }
    }

    if (!updatedToken) {
      return res.status(404).json({
        success: false,
        error: {
          code: "TOKEN_NOT_FOUND",
          message: "Token was not found in the queue",
        },
      });
    }

    return successResponse(
      res,
      updatedToken,
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