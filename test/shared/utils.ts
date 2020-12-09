import { ethers } from 'hardhat';
import { providers } from 'ethers';
import { ProcessedTx } from './interfaces';

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

export async function processTx(
  txPromise: Promise<providers.TransactionResponse>,
): Promise<ProcessedTx> {
  const tx = await txPromise;
  const { gasPrice } = tx;
  const receipt = await tx.wait();
  const { gasUsed } = receipt;

  return {
    ...receipt,
    totalCost: gasPrice.mul(gasUsed),
  };
}
