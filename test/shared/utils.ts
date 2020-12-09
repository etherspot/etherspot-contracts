import { ethers } from 'hardhat';

const { utils } = ethers;

export function randomAddress(): string {
  let result: string;

  for (;;) {
    try {
      result = utils.getAddress(utils.hexlify(utils.randomBytes(20)));
      break;
    } catch (err) {
      result = null;
    }
  }

  return result;
}

export function randomHex32(): string {
  return utils.hexlify(utils.randomBytes(32));
}
