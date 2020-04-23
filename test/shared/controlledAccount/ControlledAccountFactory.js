/* eslint-env node, mocha */

const expect = require('expect');
const {
  logGasUsed,
  randomBytes32,
  getBalance,
  computeCreate2Address,
} = require('../../utils');

const Account = artifacts.require('ControlledAccount');
const AccountFactory = artifacts.require('ControlledAccountFactoryMock');

contract('ControlledAccountFactory (using mock)', () => {
  const {
    utils: {
      toWei,
    },
  } = web3;

  let accountFactory;

  before(async () => {
    accountFactory = await AccountFactory.new();
  });

  context('views', () => {
    describe('computeControlledAccountAddress()', () => {
      it('expect to compute correct address', async () => {
        const salt = randomBytes32();
        const expectedAddress = computeCreate2Address(
          accountFactory.address,
          salt,
          Account.bytecode,
        );

        await expect(accountFactory.computeControlledAccountAddressMock(salt))
          .resolves
          .toBe(expectedAddress);
      });
    });
  });

  context('methods', () => {
    describe('createControlledAccount()', () => {
      const salt = randomBytes32();
      let expectedAddress;

      before(() => {
        expectedAddress = computeCreate2Address(
          accountFactory.address,
          salt,
          Account.bytecode,
        );
      });

      it('expect to create contract', async () => {
        const output = await accountFactory.createControlledAccountMock(salt);

        logGasUsed(output);

        const { logs: [log] } = output;

        expect(log.event).toEqual('ControlledAccountCreated');
        expect(log.args.account).toEqual(expectedAddress);
      });

      it('expect to create contract with initial balance', async () => {
        const salt = randomBytes32();
        const value = toWei('1');
        const output = await accountFactory.createControlledAccountMock(salt, {
          value,
        });

        logGasUsed(output);

        const { logs: [{ args: { account } }] } = output;

        await expect(getBalance(account)).resolves.toBe(value);
      });

      it('expect to revert when contract is created', async () => {
        const promise = accountFactory.createControlledAccountMock(salt);

        await expect(promise).rejects.toThrow(/revert/);
      });
    });
  });
});
