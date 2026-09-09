const request = require("supertest");
const app = require("../src/app");

describe("Recommendation API", () => {
  test("should reject unauthenticated centre recommendation request", async () => {
    const response = await request(app)
      .get("/api/v1/recommendations/centres");

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe("UNAUTHORIZED");
  });
});