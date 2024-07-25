import fs from 'fs'

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        return reject(error);
      }

      const lines = data.split('\n').slice(1).filter(Boolean);

      const fields = lines.reduce((acc, line) => {
        const [name, , , field] = line.split(',');
        if (!acc[field]) {
          acc[field] = [];
        }
        acc[field].push(name);
        return acc;
      }, {});

      return resolve(fields);
    });
  });
}
