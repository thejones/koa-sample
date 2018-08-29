const server = require("../server/index");
// require supertest
const request = require("supertest");
// close the server after each test
afterEach(() => {
  server.close();
});

describe("get: stats/", () => {
  test("should respond with numberOfCalls & message", async () => {
    const response = await request(server).get("/stats");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.requestCount).toEqual(1);
    expect(Object.keys(response.body.message)).toEqual(
      expect.arrayContaining(["from", "to", "message"])
    );
  });

  test("Counter should count", async () => {
    const response = await request(server).get("/stats");
    expect(response.body.requestCount).toEqual(2);

    [0, 1, 2].forEach(async idx => {
      await request(server).get("/stats");
    });

    const afterRequests = await request(server).get("/stats");
    expect(afterRequests.body.requestCount).toEqual(6);
  });
});
