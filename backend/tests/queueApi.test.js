const request = require("supertest");
const app = require("../src/app");

describe("Queue API", () => {
  test("should reject unauthenticated queue status request", async () => {
    const response = await request(app)
      .get("/api/v1/queue/centre/1");

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe("UNAUTHORIZED");
  });

  test("should reject unauthenticated queue position request", async () => {
    const response = await request(app)
      .get("/api/v1/queue/token/1");

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe("UNAUTHORIZED");
  });

  test("should reject unauthenticated queue status update", async () => {
    const response = await request(app)
      .put("/api/v1/queue/token/1")
      .send({
        status: "PROCESSING",
      });

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe("UNAUTHORIZED");
  });
});