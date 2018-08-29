const Router = require("koa-router");
const { getLastMessage } = require("../db");
const { getCurrentRequestCount } = require("../middleware/requestCounter");
const router = new Router({
  prefix: "/stats"
});

// If this was more complex I would handle in a seperate controller/handlers file.
router.get("/", async ctx => {
  const lastMessage = getLastMessage();
  const numberOfCalls = getCurrentRequestCount();

  // Handle errors here. I am not doing that right now in the interest of time
  ctx.status = 200;
  ctx.body = {
    numberOfCalls,
    lastMessage
  };
});

module.exports = router;
