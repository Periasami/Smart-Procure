const request = require("supertest");
const app = require("../src/app");

describe("Token API", () => {
  test("create token should reject unauthenticated request", async () => {
    const response = await request(app)
      .post("/api/v1/tokens")
      .send({
        centreId: 1,
        scheduleId: 1,
        cropType: "Rice",
        quantity: 100
      });

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe("UNAUTHORIZED");
  });
});
