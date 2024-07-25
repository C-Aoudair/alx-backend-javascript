const fs = require("fs");

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (error, data) => {
      if (error) {
        reject(new Error("Cannot load the database"));
        return;
      }
      const lines = data
        .split("\n")
        .slice(1)
        .filter((line) => line);

      const fields = lines.reduce((acc, line) => {
        const [name, , , field] = line.split(",");
        if (!acc[field]) {
          acc[field] = { count: 0, list: [] };
        }
        acc[field].count += 1;
        acc[field].list.push(name);
        return acc;
      }, {});

      const numOfStudents = lines.length;

      console.log(`Number of students: ${numOfStudents}`);
      for (const [field, { count, list }] of Object.entries(fields)) {
        console.log(
          `Number of students in ${field}: ${count}. List: ${list.join(", ")}`,
        );
      }
      resolve();
    });
  });
}

module.exports = countStudents;
