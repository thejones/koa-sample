const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const { executionTime } = require("./middleware/executionTime");
const { addCount } = require("./middleware/requestCounter");
// Routers
const messagesRouter = require("./messages/messages.router");
const statsRouter = require("./stats/stats.router");
// This one is not for the example - just lets me see something on the main index...
const router = new Router();

const app = new Koa();
const PORT = process.env.PORT || 8081;

// Checking how Koa wants to handle errors.
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 400;
    ctx.body = err.message;
    console.log("Error handler:", err.message);
  }
});

app.use(executionTime);
app.use(bodyParser());
app.use(addCount);

router.get("/", async ctx => {
  ctx.body = "Sample Koa application";
});

app.use(router.routes());
app.use(messagesRouter.routes());
app.use(statsRouter.routes());

module.exports = app;
