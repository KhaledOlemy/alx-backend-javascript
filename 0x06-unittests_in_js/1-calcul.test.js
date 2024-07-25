const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 3.0, 3.0), 6);
    });

    it('equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.5, 1.7), 4);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -3.0, -3.0), -6);
    });

    it('equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUM', -2.5, -1.7), -4);
    });

    it('negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -3.0, 3.0), 0);
    });

    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 3.0, -3.0), 0);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.0, 3.0), 0);
    });

    it('equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 1.7), 0);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3.0, -3.0), 0);
    });

    it('equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.5, -1.7), 0);
    });

    it('negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3.0, 3.0), -6.0);
    });

    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.0, -3.0), 6.0);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9.0, 3.0), 3.0);
    });

    it('numbers with different signs', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.0, 2.0), -4.0);
    });

    it('numbers with different signs (alternate)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, -2.0), -4.0);
    });

    it('negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.0, -2.0), 4.0);
    });

    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 3.0), 1);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3.0, -3.0), 1);
    });

    it('equal rounded up numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.6, 4.0), 1);
    });

    it('equal rounded down numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.4, 3.0), 1);
    });

    it('0 and positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 6.0), 0);
    });

    it('0 and negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -6.0), -0);
    });

    it('positive number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.0, 0), 'Error');
    });

    it('positive number and number rounded down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.0, 0.3), 'Error');
    });

    it('positive number and number rounded up to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.0, -0.3), 'Error');
    });

    it('negative number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6.0, 0), 'Error');
    });

    it('negative number and number rounded down to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6.0, 0.3), 'Error');
    });

    it('negative number and number rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6.0, -0.3), 'Error');
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
