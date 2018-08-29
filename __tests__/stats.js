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

    // Mock this as a factory in future
    // I am just making the actual call here to be lazy
    const postResponse = await request(server)
      .post("/messages")
      .send({
        from: "Test Message",
        to: "Test User",
        message: "Test Message"
      });

    expect(Object.keys(postResponse.body.data)).toEqual(
      expect.arrayContaining(["from", "to", "message"])
    );
  });

  test("Counter should count", async () => {
    const response = await request(server).get("/stats");
    expect(response.body.requestCount).toEqual(3);

    [0, 1, 2].forEach(async idx => {
      await request(server).get("/stats");
    });

    const afterRequests = await request(server).get("/stats");
    expect(afterRequests.body.requestCount).toEqual(7);
  });
});
