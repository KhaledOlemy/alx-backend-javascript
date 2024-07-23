const express = require('express');

const app = express();
const host = 'localhost';
const port = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, host, () => {
  console.log(`Server listening on PORT ${port}`);
});

module.exports = app;
