const prisma = require("../config/prisma");
const { successResponse, errorResponse } = require("../utils/response");

const NOTIFICATION_TYPES = [
  "TOKEN_CREATED",
  "TOKEN_CALLED",
  "TOKEN_COMPLETED",
  "QUEUE_UPDATE",
  "SCHEDULE_CHANGED",
  "RESCHEDULED",
  "GENERAL",
];

const sendUserNotification = async (req, res, next) => {
  try {
    const {
      userId,
      tokenId,
      type,
      title,
      message,
    } = req.body;

    const receiverId = Number(userId);

    if (!receiverId || !title || !message) {
      return errorResponse(
        res,
        "INVALID_NOTIFICATION_REQUEST",
        "userId, title and message are required",
        400
      );
    }

    if (type && !NOTIFICATION_TYPES.includes(type)) {
      return errorResponse(
        res,
        "INVALID_NOTIFICATION_TYPE",
        `Invalid notification type. Allowed values: ${NOTIFICATION_TYPES.join(", ")}`,
        400
      );
    }

    const user = await prisma.users.findUnique({
      where: { id: receiverId },
      select: { id: true },
    });

    if (!user) {
      return errorResponse(
        res,
        "USER_NOT_FOUND",
        "Notification recipient not found",
        404
      );
    }

    if (tokenId !== undefined && tokenId !== null) {
      const token = await prisma.tokens.findUnique({
        where: { id: Number(tokenId) },
        select: { id: true },
      });

      if (!token) {
        return errorResponse(
          res,
          "TOKEN_NOT_FOUND",
          "Related token not found",
          404
        );
      }
    }

    const notification = await prisma.notifications.create({
      data: {
        user_id: receiverId,
        token_id:
          tokenId !== undefined && tokenId !== null
            ? Number(tokenId)
            : null,
        title,
        message,
        type: type || "GENERAL",
        is_read: false,
      },
    });

    return successResponse(
      res,
      { notification },
      "Notification created successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sendUserNotification,
};