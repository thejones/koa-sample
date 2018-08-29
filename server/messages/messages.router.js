const Router = require("koa-router");
const { validateMessage } = require("../middleware/validateMessage");
const { createMessage } = require("./messages.controller");
const router = new Router({
  prefix: "/messages"
});

router.post("/", validateMessage, async ctx => {
  try {
    const message = await createMessage(ctx.request.body);
    if (message) {
      ctx.status = 201;
      ctx.body = {
        status: "success",
        data: message
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: "error",
        message: "Something went wrong."
      };
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
