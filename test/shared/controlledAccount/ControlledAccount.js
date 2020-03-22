/* eslint-env node, mocha */

const expect = require('expect');
const {
  logGasUsed,
  getBalance,
  randomAddress,
} = require('../../utils');

const Account = artifacts.require('ControlledAccount');

contract('ControlledAccount', (addresses) => {
  const {
    utils: {
      toWei,
    },
  } = web3;

  const from = addresses[0];

  describe('constructor', () => {
    it('expect to deploy contract', async () => {
      await Account.new({
        from,
      });

      logGasUsed(await Account.new.estimateGas({
        from,
      }));
    });

    it('expect to deploy contract with initial balance', async () => {
      const value = toWei('1');
      const account = await Account.new({
        from,
        value,
      });

      logGasUsed(await Account.new.estimateGas({
        from,
      }));

      await expect(getBalance(account)).resolves.toBe(value);
    });
  });

  context('views', () => {
    let account;

    before(async () => {
      account = await Account.new({
        from,
      });
    });

    describe('controller()', () => {
      it('expect to return valid controller', async () => {
        await expect(account.controller()).resolves.toBe(from);
      });
    });
  });

  context('methods', () => {
    let account;

    before(async () => {
      account = await Account.new({
        from,
      });
    });

    describe('executeTransaction()', () => {
      it('expect to revert when sender is not a controller', async () => {
        const to = randomAddress();
        const value = 0;
        const data = '0x';
        const promise = account.executeTransaction(to, value, data, {
          from: addresses[1],
        });

        await expect(promise).rejects.toThrow(/revert/);
      });

      it('expect to execute transaction', async () => {
        const to = randomAddress();
        const value = 0;
        const data = '0x';
        const output = await account.executeTransaction(to, value, data, {
          from,
        });

        logGasUsed(output);
      });
    });
  });
});
