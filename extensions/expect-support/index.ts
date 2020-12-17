import expect from 'expect';
import { BigNumber, BigNumberish, constants } from 'ethers';
import { extendEnvironment } from 'hardhat/config';

function createBNCondition(method: keyof BigNumber, description: string) {
  return (received: BigNumber, expected: BigNumberish) => {
    let result: any;

    switch (typeof expected) {
      case 'number':
      case 'string':
        // eslint-disable-next-line no-param-reassign
        expected = BigNumber.from(expected);
        break;
      default:
    }

    if (!BigNumber.isBigNumber(received)) {
      result = {
        message: () => `received ${received} is not BN`,
        pass: false,
      };
    }

    if (!BigNumber.isBigNumber(expected)) {
      result = {
        message: () => `expected ${expected} is not BN`,
        pass: false,
      };
    }

    if (!result) {
      if (received[method as any](expected)) {
        result = {
          message: () => `expected ${received} is ${description} ${expected}`,
          pass: true,
        };
      } else {
        result = {
          message: () =>
            `expected ${received} is not ${description} ${expected}`,
          pass: false,
        };
      }
    }
    return result;
  };
}

extendEnvironment((env: any) => {
  expect.extend({
    toBeBN: createBNCondition('eq', 'equal'),
    toBeGreaterThanBN: createBNCondition('gt', 'greater than'),
    toBeGreaterThanOrEqualBN: createBNCondition('gte', 'greater than or equal'),
    toBeLessThanBN: createBNCondition('lt', 'less than'),
    toBeLessThanOrEqualBN: createBNCondition('lte', 'less than or equal'),
    toBeZeroAddress(received: any) {
      let result;

      if (received === constants.AddressZero) {
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

  env.expect = expect;
});
