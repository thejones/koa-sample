function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

const slowDown = async function slowDown(ctx, next) {
  await sleep(Math.random() * 1000 + 10);

  console.log("Calling next");
  next();
};

module.exports = {
  slowDown
};
