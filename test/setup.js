const BN = require('bn.js');
const expect = require('expect');
const { ZERO_ADDRESS } = require('./constants');

function createBNCondition(method, description) {
  return (received, expected) => {
    let result;

    switch (typeof expected) {
      case 'number':
      case 'string':
        // eslint-disable-next-line no-param-reassign
        expected = new BN(expected, 10);
        break;
      default:
    }

    if (!BN.isBN(received)) {
      result = {
        message: () => `received ${received} is not BN`,
        pass: false,
      };
    }

    if (!BN.isBN(expected)) {
      result = {
        message: () => `expected ${expected} is not BN`,
        pass: false,
      };
    }

    if (received[method](expected)) {
      result = {
        message: () => `expected ${received} is ${description} ${expected}`,
        pass: true,
      };
    } else {
      result = {
        message: () => `expected ${received} is not ${description} ${expected}`,
        pass: false,
      };
    }

    return result;
  };
}

expect.extend({
  toBeBN: createBNCondition('eq', 'equal'),
  toBeGreaterThanBN: createBNCondition('gt', 'greater than'),
  toBeGreaterThanOrEqualBN: createBNCondition('gte', 'greater than or equal'),
  toBeLessThanBN: createBNCondition('lt', 'less than'),
  toBeLessThanOrEqualBN: createBNCondition('lte', 'less than or equal'),
  toBeZeroAddress(received) {
    let result;

    if (received === ZERO_ADDRESS) {
      result = {
        message: () => `expected ${received} is zero address`,
        pass: true,
      };
    } else {
      result = {
        message: () => `expected ${received} is not zero address`,
        pass: false,
      };
    }

    return result;
  },
});
