const request = require("supertest");
const app = require("../src/app");

describe("Authentication Middleware", () => {
  test("protected GPS endpoint should reject unauthenticated request", async () => {
    const response = await request(app)
      .get("/api/v1/gps/nearby?latitude=13.0827&longitude=80.2707");

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe("UNAUTHORIZED");
    expect(response.body.error.message).toBe("Authentication token is required");
  });
});
