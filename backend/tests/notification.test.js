const request = require("supertest");
const app = require("../src/app");

describe("Notification API", () => {
  test("should reject unauthenticated notification request", async () => {
    const response = await request(app)
      .post("/api/v1/notifications/send")
      .send({
        userId: 1,
        message: "Your token has been called",
      });

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe("UNAUTHORIZED");
  });
});