const { successResponse } = require("../utils/response");

const {
  createNotification,
  sendNotification,
} = require("../services/notificationService");

const sendUserNotification = async (req, res, next) => {
  try {
    const {
      userId,
      type,
      title,
      message,
      channel,
    } = req.body;

    const notification = createNotification({
      userId,
      type,
      title,
      message,
      channel,
    });

    const result = await sendNotification(notification);

    return successResponse(
      res,
      result,
      "Notification sent successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sendUserNotification,
};