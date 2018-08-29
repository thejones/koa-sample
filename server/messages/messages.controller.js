const { writeMessage, getLastMessage } = require("../db/index.js");
const createMessage = async body => {
  await writeMessage(body);
  return body;
};

module.exports = {
  createMessage
};
