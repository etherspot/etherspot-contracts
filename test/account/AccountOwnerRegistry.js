/* eslint-env node, mocha */

const expect = require('expect');
const {
  logGasUsed,
  parseBlockNumber,
  randomAddress,
} = require('../utils');

const AccountOwnerRegistry = artifacts.require('AccountOwnerRegistry');

contract('AccountOwnerRegistry', (addresses) => {
  const {
    eth: {
      getBlockNumber,
    },
  } = web3;
  const account = addresses[0];
  let accountOwnerRegistry;

  before(async () => {
    accountOwnerRegistry = await AccountOwnerRegistry.new();
  });

  context('addAccountOwner()', () => {
    const owner = randomAddress();

    it('expect to add account owner', async () => {
      const output = await accountOwnerRegistry.addAccountOwner(owner);

      logGasUsed(output);

      const { logs: [log] } = output;

      expect(log.event).toBe('AccountOwnerAdded');
      expect(log.args.account).toBe(account);
      expect(log.args.owner).toBe(owner);
    });

    it('expect to revert when account owner exists', async () => {
      await expect(accountOwnerRegistry.addAccountOwner(owner)).rejects.toThrow(/revert/);
    });
  });

  context('removeAccountOwner()', () => {
    const owner = randomAddress();

    before(async () => {
      await accountOwnerRegistry.addAccountOwner(owner);
    });

    it('expect to revert when account owner doesn\'t exist', async () => {
      await expect(accountOwnerRegistry.removeAccountOwner(randomAddress())).rejects.toThrow(/revert/);
    });

    it('expect to remove account owner', async () => {
      const output = await accountOwnerRegistry.removeAccountOwner(owner);

      logGasUsed(output);

      const { logs: [log] } = output;

      expect(log.event).toBe('AccountOwnerRemoved');
      expect(log.args.account).toBe(account);
      expect(log.args.owner).toBe(owner);
    });
  });

  context('verifyAccountOwner()', () => {
    const ownerAdded = randomAddress();
    const ownerRemoved = randomAddress();

    before(async () => {
      await accountOwnerRegistry.addAccountOwner(ownerAdded);
      await accountOwnerRegistry.addAccountOwner(ownerRemoved);
      await accountOwnerRegistry.removeAccountOwner(ownerRemoved);
    });

    it('expect to return true when account owner exists', async () => {
      await expect(accountOwnerRegistry.verifyAccountOwner(account, ownerAdded)).resolves.toBeTruthy();
    });

    it('expect to return false when account owner doesn\'t exist', async () => {
      await expect(accountOwnerRegistry.verifyAccountOwner(account, randomAddress())).resolves.toBeFalsy();
    });

    it('expect to return false when account owner was removed', async () => {
      await expect(accountOwnerRegistry.verifyAccountOwner(account, ownerRemoved)).resolves.toBeFalsy();
    });
  });

  context('verifyAccountOwnerAtBlock()', () => {
    const ownerAdded = randomAddress();
    const ownerRemoved = randomAddress();
    let ownerRemovedAt;
    let blockNumber;

    before(async () => {
      blockNumber = await getBlockNumber();
      await accountOwnerRegistry.addAccountOwner(ownerAdded);
      await accountOwnerRegistry.addAccountOwner(ownerRemoved);
      ownerRemovedAt = parseBlockNumber(await accountOwnerRegistry.removeAccountOwner(ownerRemoved));
    });

    it('expect to return true when account owner exists', async () => {
      await expect(accountOwnerRegistry.verifyAccountOwnerAtBlock(account, ownerAdded, blockNumber)).resolves.toBeTruthy();
    });

    it('expect to return true when account owner exists at block', async () => {
      await expect(accountOwnerRegistry.verifyAccountOwner(account, ownerRemoved, ownerRemovedAt - 1)).resolves.toBeTruthy();
    });

    it('expect to return false when account owner doesn\'t exist', async () => {
      await expect(accountOwnerRegistry.verifyAccountOwnerAtBlock(account, randomAddress(), blockNumber)).resolves.toBeFalsy();
    });

    it('expect to return false when account owner doesn\'t exist at block', async () => {
      await expect(accountOwnerRegistry.verifyAccountOwner(account, ownerRemoved, blockNumber)).resolves.toBeFalsy();
    });
  });
});
