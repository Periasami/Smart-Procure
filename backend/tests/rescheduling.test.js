const request = require("supertest");
const app = require("../src/app");

describe("Rescheduling API", () => {
  test("should reject unauthenticated rescheduling recommendation", async () => {
    const response = await request(app)
      .post("/api/v1/rescheduling/recommend")
      .send({
        tokenId: 1,
      });

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe("UNAUTHORIZED");
  });

  test("should reject unauthenticated rescheduling apply request", async () => {
    const response = await request(app)
      .post("/api/v1/rescheduling/apply")
      .send({
        tokenId: 1,
        scheduleId: 2,
      });

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe("UNAUTHORIZED");
  });
});