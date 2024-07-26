const express = require('express');
const PORT = 7865;
const app = express();

app.use(express.json());

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.post('/login', (req, res) => {
  let username;
  if (req.body) {
    username = req.body.userName;
  }
  else {
    usename = '';
  }

  res.send(`Welcome ${username}`);
});

app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port 7865`);
});

module.exports = app;
