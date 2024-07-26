const Utils = require('./utils');

const sendPaymentRequestToApi = (tAmount, tShipping) => {
  const cost = Utils.calculateNumber('SUM', tAmount, tShipping);
  console.log(`The total is: ${cost}`);
};

module.exports = sendPaymentRequestToApi;
