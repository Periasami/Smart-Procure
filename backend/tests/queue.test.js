const {
  QUEUE_STATUSES,
  calculateQueueMetrics,
  getTokenPosition,
  validateQueueStatus,
} = require("../src/services/queueService");

describe("Queue Service", () => {
  test("should calculate queue metrics correctly", () => {
    const tokens = [
      { id: 1, status: "WAITING", createdAt: "2026-09-09T10:00:00Z" },
      { id: 2, status: "WAITING", createdAt: "2026-09-09T10:05:00Z" },
      { id: 3, status: "PROCESSING", createdAt: "2026-09-09T10:10:00Z" },
      { id: 4, status: "COMPLETED", createdAt: "2026-09-09T09:00:00Z" },
    ];

    const metrics = calculateQueueMetrics(tokens, 5, 2);

    expect(metrics.totalActive).toBe(3);
    expect(metrics.waitingCount).toBe(2);
    expect(metrics.processingCount).toBe(1);
    expect(metrics.capacity).toBe(5);
    expect(metrics.processingRate).toBe(2);
    expect(metrics.estimatedWaitMinutes).toBe(60);
  });

  test("should calculate token position correctly", () => {
    const tokens = [
      { id: 1, status: "WAITING", createdAt: "2026-09-09T10:00:00Z" },
      { id: 2, status: "WAITING", createdAt: "2026-09-09T10:05:00Z" },
      { id: 3, status: "PROCESSING", createdAt: "2026-09-09T10:10:00Z" },
    ];

    expect(getTokenPosition(tokens, 1)).toBe(1);
    expect(getTokenPosition(tokens, 2)).toBe(2);
    expect(getTokenPosition(tokens, 3)).toBeNull();
  });

  test("should validate queue statuses", () => {
    expect(validateQueueStatus("WAITING")).toBe(true);
    expect(validateQueueStatus("PROCESSING")).toBe(true);
    expect(validateQueueStatus("COMPLETED")).toBe(true);
    expect(validateQueueStatus("INVALID")).toBe(false);
  });

  test("should contain all required queue statuses", () => {
    expect(QUEUE_STATUSES).toEqual([
      "WAITING",
      "CALLED",
      "PROCESSING",
      "COMPLETED",
      "CANCELLED",
      "NO_SHOW",
    ]);
  });
});