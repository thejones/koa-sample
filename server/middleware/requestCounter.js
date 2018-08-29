let _requestCount = 0;

const addCount = async (ctx, next) => {
  _requestCount += 1;
  if (_requestCount === 15) {
    console.log("We reached 15 requests. Check inbox for series A funding");
  }
  next();
};

const getCurrentRequestCount = () => {
  return _requestCount;
};

module.exports = {
  addCount,
  getCurrentRequestCount
};
