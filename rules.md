Challenge Rules:

- For this challenge please create a public repo on GitHub. 


Challenge Details:

Create a new REST API application using Koa (https://github.com/koajs/koa) and modern Javascript (ES6) with 2 end points.

- POST /message
{
  "from": string,
  "to": string,
  "message": string
}

- GET  /stats
{
  "numberOfCalls": Number,
  "lastMessage": Object
}

Every 30 seconds the application should preserve the messages in a JSON file and on restart the application previously saved messages should be retrieved from the JSON file.

Each endpoint should log to the console the time it took to execute.

Please give thought to code maintainability and reuse.
