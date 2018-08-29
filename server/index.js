const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const { executionTime } = require("./middleware/executionTime");
// const { slowDown } = require("./middleware/slowDown");
const { addCount } = require("./middleware/requestCounter");
// Routers
const messagesRouter = require("./messages/messages.router");
const statsRouter = require("./stats/stats.router");
// This one is not for the example - just lets me see something on the main index...
const router = new Router();

const app = new Koa();
const PORT = process.env.PORT || 8081;

app.use(executionTime);
app.use(bodyParser());
// Just to help test logging response time.
// app.use(slowDown);
app.use(addCount);

router.get("/", async ctx => {
  ctx.body = "Sample Koa application";
});

app.use(router.routes());
app.use(messagesRouter.routes());
app.use(statsRouter.routes());

// Not 100% on Koa error handling.
const server = app
  .listen(PORT, () => {
    console.log(`Koa server running on ${PORT} ✔`);
  })
  .on("error", err => {
    console.error(err);
  });

module.exports = server;
