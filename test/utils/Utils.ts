import { ethers } from 'hardhat';
import { BigNumber } from 'ethers';
import { Utils, WrappedWeiToken } from '../../typings';
import {
  deployContract,
  SignerWithAddress,
  randomAddress,
  processTx,
} from '../shared';

const { getSigners, constants } = ethers;

describe('Utils', () => {
  let signers: SignerWithAddress[];
  let utils: Utils;
  let wrappedWeiToken: WrappedWeiToken;

  before(async () => {
    signers = await getSigners();

    utils = await deployContract('Utils');
    wrappedWeiToken = await deployContract('WrappedWeiToken');
  });

  context('getBalances()', () => {
    const amount = 1000;
    let owner: SignerWithAddress;
    let balance: BigNumber;

    before(async () => {
      owner = signers.pop();

      await processTx(
        owner.sendTransaction({
          to: wrappedWeiToken.address,
          value: amount,
        }),
      );

      balance = await owner.getBalance();
    });

    it('expect to return correct balance list', async () => {
      const randomOwner = randomAddress();
      const randomToken = randomAddress();

      const output: BigNumber[] = await utils.getBalances(
        [owner.address, randomOwner],
        [wrappedWeiToken.address, randomToken, constants.AddressZero],
      );

      expect(output[0]).toBeBN(amount);
      expect(output[1]).toBeBN(0);
      expect(output[2]).toBeBN(balance);
      expect(output[3]).toBeBN(0);
      expect(output[4]).toBeBN(0);
      expect(output[5]).toBeBN(0);
    });
  });
});
