const executionTime = async function executionTime(ctx, next) {
  const started = Date.now();
  await next();
  const ellapsed = Date.now() - started + "ms";
  console.info("Response time is:", ellapsed);
};

module.exports = {
  executionTime
};
