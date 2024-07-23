const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DATABASE_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Retrieves and counts the students from a CSV file.
 * @param {string} filePath The path to the CSV file.
 * @returns {Promise<string>} A promise that resolves to the student count and details.
 */
const getStudentCounts = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n').filter(line => line.length > 0);
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

const ROUTE_HANDLERS = [
  {
    path: '/',
    handle: (req, res) => {
      const responseText = 'Hello Holberton School!';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', Buffer.byteLength(responseText));
      res.statusCode = 200;
      res.end(responseText);
    },
  },
  {
    path: '/students',
    handle: (req, res) => {
      const responseParts = ['This is the list of our students'];

      getStudentCounts(DATABASE_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', Buffer.byteLength(responseText));
          res.statusCode = 200;
          res.end(responseText);
        })
        .catch((error) => {
          responseParts.push(error.message);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', Buffer.byteLength(responseText));
          res.statusCode = 500;  // Set status code to 500 for error
          res.end(responseText);
        });
    },
  },
];

app.on('request', (req, res) => {
  const handler = ROUTE_HANDLERS.find((route) => route.path === req.url);
  if (handler) {
    handler.handle(req, res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
