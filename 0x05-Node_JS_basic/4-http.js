const http = require('http');

const host = 'localhost';
const port = 1245;
const app = http.createServer();

app.on('request', (_, response) => {
  const responseText = 'Hello Holberton School!';
  response.setHeader('Content-Length', responseText.length);
  response.statusCode = 200;
  response.write(Buffer.from(responseText));
});

app.listen(port, host, () => {
  process.stdout.write('Server up!');
})

module.exports = app;
