const express = require('express');
const PORT = 7865;
const app = express();

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.post('/login', (req, res) => {
  if (req.body) {
    const username = req.body.userName;
  }
  else {
    const usename = '';
  }

  res.send(`Welcome ${username}`);
});

app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port 7865`);
});

module.exports = app;
