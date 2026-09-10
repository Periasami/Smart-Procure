const request = require("supertest");
const app = require("../src/app");

describe("JWT Authorization", () => {
  test("protected endpoint should reject invalid JWT", async () => {
    const response = await request(app)
      .get("/api/v1/gps/nearby?latitude=13.0827&longitude=80.2707")
      .set("Authorization", "Bearer invalid-token");

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
  });
});
