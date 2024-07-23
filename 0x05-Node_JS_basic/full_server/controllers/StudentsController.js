import readDatabase from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((data) => {
        let responseText = 'This is the list of our students\n';
        const fields = Object.keys(data).sort();
        fields.forEach((field) => {
          responseText += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
        });
        res.status(200).send(responseText.trim());
      })
      .catch((error) => {
        res.status(500).send(`Cannot load the database: ${error.message}`);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const databaseFile = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      res.status(400).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databaseFile)
      .then((data) => {
        if (!data[major]) {
          res.status(404).send(`No students in the ${major} major`);
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
