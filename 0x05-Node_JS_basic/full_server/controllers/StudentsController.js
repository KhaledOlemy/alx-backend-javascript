import readDatabase from '../utils/readDatabase.js';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        let responseText = 'This is the list of our students\n';
        const fields = Object.keys(data);
        fields.forEach((field) => {
          responseText += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
        });
        res.status(200).send(responseText);
      })
      .catch((error) => {
        res.status(500).send(`Cannot load the database: ${error.message}`);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    readDatabase(process.argv[2])
      .then((data) => {
        if (!data[major]) {
          res.status(400).send('Major parameter must be CS or SWE');
        } else {
          const studentList = data[major].join(', ');
          res.status(200).send(`List: ${studentList}`);
        }
      })
      .catch((error) => {
        res.status(500).send(`Cannot load the database: ${error.message}`);
      });
  }
}

export default StudentsController;
