const server = require("../server/index");
// require supertest
const request = require("supertest");
// close the server after each test
afterEach(() => {
  server.close();
});
describe("routes: index smoketest", () => {
  test("should respond with 200", async () => {
    const response = await request(server).get("/");
    expect(response.status).toEqual(200);
  });
});
