import readDatabase from '../utils';

const PATH = process.argv[2] || '';

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(PATH);
      const messages = ['This is the list of our students'];

      Object.keys(data).sort().forEach((field) => {
        messages.push(
          `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`,
        );
      });

      response.status(200).send(messages.join('\n'));
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      return response.status(400).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(PATH);
      return response.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }
}
