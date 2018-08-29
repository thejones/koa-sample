const Joi = require("joi");

const messageSchema = Joi.object().keys({
  from: Joi.string().required(),
  to: Joi.string().required(),
  message: Joi.string().required()
});

const validateMessage = async (ctx, next) => {
  const result = Joi.validate(ctx.request.body, messageSchema);
  if (result.error) {
    console.error("Error in validateMessage middleware ☹");
    ctx.status = 400;
    ctx.body = result.error;
  } else {
    next();
  }
};

module.exports = {
  validateMessage
};
