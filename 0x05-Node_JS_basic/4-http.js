const http = require('http');

const host = 'localhost';
const port = 1245;
const app = http.createServer();

app.on('request', (req, res) => {
  const responseText = 'Hello Holberton School!';
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
  res.end();
});

app.listen(port, host, () => {
  console.log('Server up!');
});

module.exports = app;
