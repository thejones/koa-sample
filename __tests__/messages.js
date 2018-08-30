const app = require("../server/app");
// require supertest
const request = require("supertest");

describe("post: messages/", () => {
  test("should validate message", async () => {
    const response = await request(app.callback()).post("/messages");
    expect(response.status).toEqual(400);
    expect(response.body.name).toEqual("ValidationError");
  });

  test("should post message", async () => {
    const response = await request(app.callback())
      .post("/messages")
      .send({
        from: "Mel Gibson",
        to: "A theatre near you - 1995",
        message: "They may take our lives, but they'll never take our freedom!"
      });

    expect(response.status).toEqual(201);
  });
});
