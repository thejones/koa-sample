const server = require("../server/index");
// require supertest
const request = require("supertest");
// close the server after each test
afterEach(() => {
  server.close();
});

describe("post: messages/", () => {
  test("should validate message", async () => {
    const response = await request(server).post("/messages");
    expect(response.status).toEqual(400);
    expect(response.body.name).toEqual("ValidationError");
  });

  test("should post message", async () => {
    const response = await request(server)
      .post("/messages")
      .send({
        from: "Mel Gibson",
        to: "A theatre near you - 1995",
        message: "They may take our lives, but they'll never take our freedom!"
      });

    expect(response.status).toEqual(201);
  });
});
