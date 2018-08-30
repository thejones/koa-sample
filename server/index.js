const app = require("./app");

const port = process.env.PORT || 8081;
const server = app.listen(port);
console.info(`Listening to http://localhost:${port} 🚀`);
