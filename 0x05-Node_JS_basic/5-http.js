const { createServer } = require("http");
const fs = require("fs");

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (error, data) => {
      if (error) {
        return reject(new Error("Cannot load the database"));
      }
      const lines = data.split("\n").slice(1).filter(Boolean);

      const fields = lines.reduce((acc, line) => {
        const [name, , , field] = line.split(",");
        if (!acc[field]) {
          acc[field] = { count: 0, list: [] };
        }
        acc[field].count += 1;
        acc[field].list.push(name);
        return acc;
      }, {});
      resolve({ fields, numOfStudents: lines.length });
    });
  });
}

const app = createServer((request, response) => {
  response.setHeader("Content-Type", "text/plain");
  response.statusCode = 200;
  const { url } = request;

  if (url === "/") {
    response.end("Hello Holberton School!");
  } else if (url === "/students") {
    const PATH = process.argv.length > 2 ? process.argv[2] : "";
    countStudents(PATH)
      .then((result) => {
        let message = "This is the list of our students\n";
        message += `Number of students: ${result.numOfStudents}\n`;
        for (const [field, { count, list }] of Object.entries(result.fields)) {
          message += `Number of students in ${field}: ${count}. List: ${list.join(", ")}\n`;
        }
        response.end(message);
      })
      .catch((error) => {
        response.end(`This is the list of our students\n${error}\n`);
      });
  }
});

app.listen(1245, () => {
  console.log("Server is listening on port 1245");
});

module.exports = app;
