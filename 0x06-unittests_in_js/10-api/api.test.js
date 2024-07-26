const { expect } = require('chai');
const request = require('request');

describe('API integration testing', () => {
  const API_URL = 'http://127.0.0.1:7865';

  it('GET root `/` returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns the correct response for a valid :id', (done) => {
    request.get(`${API_URL}/cart/11`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 11');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number value in :id', (done) => {
    request.get(`${API_URL}/cart/-5`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns a 404 response for non-numeric value in :id', (done) => {
    request.get(`${API_URL}/cart/x8z9-01X21-5c89`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login returns a valid resp', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'DummyUser'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome DummyUser');
      done();
    });
  });

  it('GET /available_payments returns a valid resp', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
