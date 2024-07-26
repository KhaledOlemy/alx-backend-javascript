const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let tester;

  beforeEach(() => {
    if (!tester) {
      tester = sinon.spy(console);
    }
  });

  afterEach(() => {
    tester.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(tester.log.calledWith('The total is: 120')).to.be.true;
    expect(tester.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(tester.log.calledWith('The total is: 20')).to.be.true;
    expect(tester.log.calledOnce).to.be.true;
  });
});
