const { createServer } = require("http");

const app = createServer((request, response) => {
  response.statusCode = 200;
  response.end("Hello Holberton School!");
});

app.listen(1245, () => {});

module.exports = app;
