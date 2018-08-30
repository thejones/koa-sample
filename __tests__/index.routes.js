const app = require("../server/app");
// require supertest
const request = require("supertest");

describe("routes: index smoketest", () => {
  test("should respond with 200", async () => {
    const response = await request(app.callback()).get("/");
    expect(response.status).toEqual(200);
  });
});
