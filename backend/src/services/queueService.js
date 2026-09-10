const QUEUE_STATUSES = [
  "WAITING",
  "CALLED",
  "PROCESSING",
  "COMPLETED",
  "CANCELLED",
  "NO_SHOW",
];

const calculateQueueMetrics = (tokens = [], capacity = 0, processingRate = 0) => {
  const activeTokens = tokens.filter(
    (token) =>
      !["COMPLETED", "CANCELLED", "NO_SHOW"].includes(token.status)
  );

  const waitingTokens = activeTokens.filter(
    (token) => token.status === "WAITING"
  );

  const processingTokens = activeTokens.filter(
    (token) => token.status === "PROCESSING"
  );

  const estimatedWait =
    processingRate > 0
      ? Math.ceil((waitingTokens.length / processingRate) * 60)
      : 0;

  return {
    totalActive: activeTokens.length,
    waitingCount: waitingTokens.length,
    processingCount: processingTokens.length,
    capacity,
    processingRate,
    estimatedWaitMinutes: estimatedWait,
    congestion:
      capacity > 0 && activeTokens.length >= capacity
        ? "HIGH"
        : activeTokens.length >= capacity * 0.75
          ? "MEDIUM"
          : "LOW",
  };
};

const getTokenPosition = (tokens = [], tokenId) => {
  const waitingTokens = tokens
    .filter((token) => token.status === "WAITING")
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  const index = waitingTokens.findIndex(
    (token) => String(token.id) === String(tokenId)
  );

  return index === -1 ? null : index + 1;
};

const validateQueueStatus = (status) => {
  return QUEUE_STATUSES.includes(status);
};

module.exports = {
  QUEUE_STATUSES,
  calculateQueueMetrics,
  getTokenPosition,
  validateQueueStatus,
};