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
});
