import { ethers } from 'hardhat';
import { BigNumber } from 'ethers';
import { BalanceChecker, WrappedWeiToken } from '../../types';
import { SignerWithAddress, randomAddress } from '../shared';

const { getSigners, constants } = ethers;

describe('AccountOwnerRegistry', () => {
  let signers: SignerWithAddress[] = [];
  let balanceChecker: BalanceChecker;
  let wrappedWeiToken: WrappedWeiToken;

  before(async () => {
    signers = await getSigners();

    balanceChecker = (await ethers
      .getContractFactory('BalanceChecker')
      .then(factory => factory.deploy())) as BalanceChecker;

    wrappedWeiToken = (await ethers
      .getContractFactory('WrappedWeiToken')
      .then(factory => factory.deploy())) as WrappedWeiToken;
  });

  context('getBalances()', () => {
    const amount = 1000;
    let owner: SignerWithAddress;
    let balance: BigNumber;

    before(async () => {
      owner = signers.pop();

      const tx = await owner.sendTransaction({
        to: wrappedWeiToken.address,
        value: amount,
      });

      await tx.wait();

      balance = await owner.getBalance();
    });

    it('expect to return correct balance list', async () => {
      const randomOwner = randomAddress();
      const randomToken = randomAddress();

      const output: BigNumber[] = await balanceChecker.getBalances(
        [owner.address, randomOwner],
        [wrappedWeiToken.address, randomToken, constants.AddressZero],
      );

      expect(output[0].eq(amount)).toBeTruthy();
      expect(output[1].eq(0)).toBeTruthy();
      expect(output[2].eq(balance)).toBeTruthy();
      expect(output[3].eq(0)).toBeTruthy();
      expect(output[4].eq(0)).toBeTruthy();
      expect(output[5].eq(0)).toBeTruthy();
    });
  });
});
