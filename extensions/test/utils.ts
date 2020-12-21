import { BigNumber, BigNumberish } from 'ethers';

export function createBNCondition(
  method: keyof BigNumber,
  description: string,
) {
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
