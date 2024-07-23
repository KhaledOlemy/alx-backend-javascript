const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const databaseFile = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Retrieves and counts students from a CSV file.
 * @param {String} filePath The path to the CSV data file.
 * @returns {Promise<string>} A promise that resolves to the student count and details.
 */
const retrieveStudentData = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n').filter((line) => line.length > 0);
    const headers = lines[0].split(',');
    const studentAttributes = headers.slice(0, headers.length - 1);
    const studentGroups = {};

    lines.slice(1).forEach((line) => {
      const studentInfo = line.split(',');
      const studentProps = studentInfo.slice(0, studentInfo.length - 1);
      const department = studentInfo[studentInfo.length - 1];

      if (!studentGroups[department]) {
        studentGroups[department] = [];
      }

      const studentDetails = studentAttributes.reduce((acc, attr, index) => {
        acc[attr] = studentProps[index];
        return acc;
      }, {});

      studentGroups[department].push(studentDetails);
    });

    const totalStudents = Object.values(studentGroups).reduce((acc, group) => acc + group.length, 0);
    const report = [`Number of students: ${totalStudents}`];

    Object.entries(studentGroups).forEach(([department, students]) => {
      const studentNames = students.map((student) => student.firstname).join(', ');
      report.push(`Number of students in ${department}: ${students.length}. List: ${studentNames}`);
    });

    resolve(report.join('\n'));
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const responseParts = ['This is the list of our students'];

  retrieveStudentData(databaseFile)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', Buffer.byteLength(responseText));
      res.status(200).end(responseText);
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', Buffer.byteLength(responseText));
      res.status(500).end(responseText);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
