const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const testerOne = sinon.spy(console);
    const testerTwo = sinon.stub(Utils, 'calculateNumber');

    testerTwo.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(testerTwo.calledWith('SUM', 100, 20)).to.be.true;
    expect(testerTwo.callCount).to.be.equal(1);
    expect(testerOne.log.calledWith('The total is: 10')).to.be.true;
    expect(testerOne.log.callCount).to.be.equal(1);
    testerTwo.restore();
    testerOne.log.restore();
  });
});
