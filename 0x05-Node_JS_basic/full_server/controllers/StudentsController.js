import readDatabase from "../utils.js";

export default class StudentsController {
  static getAllStudents(request, response) {
    const PATH = process.argv.length > 2 ? process.argv[2] : "";
    readDatabase(PATH)
      .then((result) => {
        let message = "This is the list of our students\n";
        Object.keys(result).sort().forEach((field) => {
          const list = result[field];
          message += `Number of students in ${field}: ${list.length}. List: ${list.join(", ")}\n`;
        });
        response.status(200);
        response.send(message.slice(0, -1));
      })
      .catch((error) => {
        response.status(500);
        response.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    if (major !== "CS" && major !== "SWE") {
      response.status(500);
      response.send("Major parameter must be CS or SWE");
    } else {
      const PATH = process.argv.length > 2 ? process.argv[2] : "";
      readDatabase(PATH)
        .then((result) => {
          const message = `List: ${result[major].join(", ")}`;
          response.status(200);
          response.send(message);
        })
        .catch((error) => {
          response.status(500);
          response.send("Cannot load the database");
        });
    }
  }
}
