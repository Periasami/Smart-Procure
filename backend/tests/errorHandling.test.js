const request = require("supertest");
const app = require("../src/app");

describe("Error Handling", () => {
  test("unknown route should return 404 NOT_FOUND", async () => {
    const response = await request(app).get("/api/v1/this-route-does-not-exist");

    expect(response.statusCode).toBe(404);
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe("NOT_FOUND");
    expect(response.body.error.message).toBe("Route not found");
  });
});
