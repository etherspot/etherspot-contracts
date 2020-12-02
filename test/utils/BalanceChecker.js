/* eslint-env node, mocha */

const expect = require('expect');
const { ZERO_ADDRESS } = require('../constants');
const {
  randomAddress,
  getBalance,
} = require('../utils');

const BalanceChecker = artifacts.require('BalanceChecker');
const WrappedWeiToken = artifacts.require('WrappedWeiToken');

contract('BalanceChecker', ([...addresses]) => {
  /**
   * @type Contract
   */
  let token;

  /**
   * @type Contract
   */
  let balanceChecker;

  before(async () => {
    balanceChecker = await BalanceChecker.new();
    token = await WrappedWeiToken.new();
  });

  context('getBalances()', () => {
    const owner = addresses.pop();
    const amount = 1000;
    let balance;

    before(async () => {
      await token.sendTransaction({
        from: owner,
        value: amount,
      });

      balance = await getBalance(owner);
    });

    it('expect to return correct balance list', async () => {
      const randomOwner = randomAddress();
      const randomToken = randomAddress();

      const output = await balanceChecker.getBalances(
        [owner, randomOwner],
        [token.address, randomToken, ZERO_ADDRESS],
      );

      expect(output[0])
        .toBeBN(amount);
      expect(output[1])
        .toBeBN(0);
      expect(output[2])
        .toBeBN(balance);
      expect(output[3])
        .toBeBN(0);
      expect(output[4])
        .toBeBN(0);
      expect(output[5])
        .toBeBN(0);
    });
  });
});
