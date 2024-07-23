const fs = require("fs");

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf8");
    const lines = data.split("\n");
    lines.shift();
    let fields = {};
    let numOfStudents = 0;

    lines.forEach((line) => {
      if (line) {
        let columns = line.split(",");
        let field = columns[3];
        if (field in fields) {
          fields[field].count += 1;
          fields[field].list.push(columns[0]);
        } else {
          fields[field] = { count: 1, list: [columns[0]] };
        }
        numOfStudents += 1;
      }
    });

    console.log(`Number of students: ${numOfStudents}`);
    for (let field in fields) {
      let fieldCount = fields[field].count;
      let fieldList = fields[field].list.join(", ");
      console.log(
        `Number of students in ${field}: ${fieldCount}. List: ${fieldList}`,
      );
    }
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
