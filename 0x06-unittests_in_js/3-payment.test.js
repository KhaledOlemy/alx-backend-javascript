const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses method of Utils: calculateNumber', () => {
    const checker = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(checker.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(checker.calculateNumber.calledWith('SUM', 50, 4)).to.be.true;
    expect(checker.calculateNumber.callCount).to.be.equal(2);
    checker.calculateNumber.restore();
  });
});
