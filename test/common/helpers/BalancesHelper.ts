import { ethers } from 'hardhat';
import { BigNumber } from 'ethers';
import { BalancesHelper, WrappedWeiToken } from '../../../typings';
import {
  deployContract,
  SignerWithAddress,
  randomAddress,
  processTx,
} from '../../shared';

const { getSigners, constants } = ethers;

describe('BalancesHelper', () => {
  let signers: SignerWithAddress[];
  let balancesHelper: BalancesHelper;
  let wrappedWeiToken: WrappedWeiToken;

  before(async () => {
    signers = await getSigners();

    balancesHelper = await deployContract('BalancesHelper');
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

      const output: BigNumber[] = await balancesHelper.getBalances(
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
