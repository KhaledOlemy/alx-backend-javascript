const fs = require('fs');

const processStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const fileLines = data.trim().split('\n');
    const headers = fileLines[0].split(',');
    const studentFields = headers.slice(0, headers.length - 1);
    const studentData = {};

    fileLines.slice(1).forEach((line) => {
      const record = line.split(',');
      const field = record[record.length - 1];
      const studentDetails = studentFields.reduce((acc, fieldName, index) => {
        acc[fieldName] = record[index];
        return acc;
      }, {});

      if (!studentData[field]) {
        studentData[field] = [];
      }
      studentData[field].push(studentDetails);
    });

    const totalStudents = Object.values(studentData).reduce((acc, group) => acc + group.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    Object.entries(studentData).forEach(([field, group]) => {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    });

    resolve(true);
  });
});

module.exports = processStudents;
