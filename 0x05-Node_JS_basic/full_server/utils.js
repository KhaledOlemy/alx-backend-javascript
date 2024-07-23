import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    const header = lines[0].split(',');
    const students = {};

    lines.slice(1).forEach((line) => {
      const student = line.split(',');
      const major = student[header.length - 1];

      if (!students[major]) {
        students[major] = [];
      }
      students[major].push(student[0]);
    });

    resolve(students);
  });
});

export default readDatabase;
