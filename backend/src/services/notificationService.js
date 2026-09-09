const NOTIFICATION_TYPES = [
  "TOKEN_CREATED",
  "TOKEN_CALLED",
  "TOKEN_COMPLETED",
  "QUEUE_UPDATE",
  "SCHEDULE_CHANGED",
  "RESCHEDULED",
  "GENERAL",
];

const createNotification = ({
  userId,
  type,
  title,
  message,
  channel = "IN_APP",
}) => {
  if (!userId) {
    throw new Error("userId is required");
  }

  if (!NOTIFICATION_TYPES.includes(type)) {
    throw new Error("Invalid notification type");
  }

  return {
    id: `notification-${Date.now()}`,
    userId,
    type,
    title,
    message,
    channel,
    status: "PENDING",
    createdAt: new Date().toISOString(),
  };
};

const sendNotification = async (notification) => {
  return {
    ...notification,
    status: "SENT",
    sentAt: new Date().toISOString(),
  };
};

module.exports = {
  NOTIFICATION_TYPES,
  createNotification,
  sendNotification,
};