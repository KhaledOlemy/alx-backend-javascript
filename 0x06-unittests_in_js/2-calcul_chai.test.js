const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUM', 2.4, 2.0)).to.equal(4);
    });

    it('equal positive numbers (alternate)', () => {
      expect(calculateNumber('SUM', 2.1, 1.9)).to.equal(4);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('SUM', -2.4, -2.1)).to.equal(-4);
    });

    it('equal negative numbers (alternate)', () => {
      expect(calculateNumber('SUM', -2.0, -1.7)).to.equal(-4);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber('SUM', -2.4, 2.4)).to.equal(0);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUM', 2.3, -2.2)).to.equal(0);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.1, 2.1)).to.equal(0);
    });

    it('equal positive numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', 2.4, 1.9)).to.equal(0);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    });

    it('equal negative numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', -2.1, -1.9)).to.equal(0);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.3, 2.4)).to.equal(-4.0);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.4, -2.2)).to.equal(4.0);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('positive numbers', () => {
      expect(calculateNumber('DIVIDE', 8.4, 2.0)).to.equal(4.0);
    });

    it('numbers with different signs', () => {
      expect(calculateNumber('DIVIDE', -7.3, 2.0)).to.equal(-3.5);
    });

    it('numbers with different signs (alternate)', () => {
      expect(calculateNumber('DIVIDE', 7.2, -2.0)).to.equal(-3.5);
    });

    it('negative numbers', () => {
      expect(calculateNumber('DIVIDE', -7.1, -2.3)).to.equal(3.5);
    });

    it('equal positive numbers', () => {
      expect(calculateNumber('DIVIDE', 3.0, 3.0)).to.equal(1);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('DIVIDE', -1.0, -1.0)).to.equal(1);
    });

    it('equal rounded up numbers', () => {
      expect(calculateNumber('DIVIDE', 2.8, 3.2)).to.equal(1);
    });

    it('equal rounded down numbers', () => {
      expect(calculateNumber('DIVIDE', 2.4, 2.1)).to.equal(1);
    });

    it('0 and positive number', () => {
      expect(calculateNumber('DIVIDE', 0.3, 5.4)).to.equal(0);
    });

    it('0 and negative number', () => {
      expect(calculateNumber('DIVIDE', 0.2, -5.4)).to.equal(-0);
    });

    it('positive number and 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('positive number and number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.4)).to.equal('Error');
    });

    it('positive number and number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.3)).to.equal('Error');
    });

    it('negative number and 0', () => {
      expect(calculateNumber('DIVIDE', -5.2, 0)).to.equal('Error');
    });

    it('negative number and number rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', -5.3, 0.2)).to.equal('Error');
    });

    it('negative number and number rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', -5.1, -0.2)).to.equal('Error');
    });

    it('0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});