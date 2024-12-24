const request = require("supertest");
const app = require("./app");
//5533
describe("Integration Test for app.js", () => {
  it("should return 'Hello, World!' for GET /", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello, World!");
  });

  it("should return 404 for unknown routes", async () => {
    const response = await request(app).get("/unknown");
    expect(response.statusCode).toBe(404);
  });

  it("should handle query parameters correctly", async () => {
    const response = await request(app).get("/query?name=John");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Hello, John");
  });

  it("should respond with JSON for /json", async () => {
    const response = await request(app).get("/json");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "This is a JSON response" });
  });
});