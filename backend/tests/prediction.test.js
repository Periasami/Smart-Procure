const request = require("supertest");
const app = require("../src/app");

describe("Prediction API", () => {
  test("should reject unauthenticated prediction request", async () => {
    const response = await request(app)
      .post("/api/v1/prediction/waiting-time")
      .send({
        centreId: 1,
        scheduleId: 1,
        cropType: "Rice",
        quantity: 100,
      });

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe("UNAUTHORIZED");
  });

  test("should reject unauthenticated request even with invalid data", async () => {
    const response = await request(app)
      .post("/api/v1/prediction/waiting-time")
      .send({
        centreId: -1,
        scheduleId: 0,
        cropType: "",
        quantity: -100,
      });

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe("UNAUTHORIZED");
  });
});