const fs = require('fs');

const processStudents = (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }

  if (!fs.statSync(filePath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const fileLines = fileContent.trim().split('\n');

  const studentData = {};
  const headers = fileLines[0].split(',');
  const studentFields = headers.slice(0, headers.length - 1);

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
};

module.exports = processStudents;
