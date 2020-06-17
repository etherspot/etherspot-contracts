/* eslint-env node, mocha */

const expect = require('expect');
const {
  logGasUsage,
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

  /**
   * @type Contract
   */
  let accountOwnerRegistry;

  before(async () => {
    accountOwnerRegistry = await AccountOwnerRegistry.new();
  });

  context('addAccountOwner()', () => {
    const account = addresses.pop();
    const owner = randomAddress();

    it('expect to add account owner', async () => {
      const output = await accountOwnerRegistry.addAccountOwner(owner, {
        from: account,
      });

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event).toBe('AccountOwnerAdded');
      expect(log.args.account).toBe(account);
      expect(log.args.owner).toBe(owner);
    });

    it('expect to revert when account owner exists', async () => {
      await expect(accountOwnerRegistry.addAccountOwner(owner, {
        from: account,
      })).rejects.toThrow(/revert/);
    });
  });

  context('removeAccountOwner()', () => {
    const account = addresses.pop();
    const owner = randomAddress();

    before(async () => {
      await accountOwnerRegistry.addAccountOwner(owner, {
        from: account,
      });
    });

    it('expect to revert when account owner doesn\'t exist', async () => {
      await expect(accountOwnerRegistry.removeAccountOwner(randomAddress(), {
        from: account,
      })).rejects.toThrow(/revert/);
    });

    it('expect to remove account owner', async () => {
      const output = await accountOwnerRegistry.removeAccountOwner(owner, {
        from: account,
      });

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event).toBe('AccountOwnerRemoved');
      expect(log.args.account).toBe(account);
      expect(log.args.owner).toBe(owner);
    });
  });

  context('verifyAccountOwner()', () => {
    const account = addresses.pop();
    const ownerAdded = randomAddress();
    const ownerRemoved = randomAddress();

    before(async () => {
      await accountOwnerRegistry.addAccountOwner(ownerAdded, {
        from: account,
      });
      await accountOwnerRegistry.addAccountOwner(ownerRemoved, {
        from: account,
      });
      await accountOwnerRegistry.removeAccountOwner(ownerRemoved, {
        from: account,
      });
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
    const account = addresses.pop();
    const ownerAdded = randomAddress();
    const ownerRemoved = randomAddress();
    let ownerRemovedAt;
    let blockNumber;

    before(async () => {
      blockNumber = await getBlockNumber();
      await accountOwnerRegistry.addAccountOwner(ownerAdded, {
        from: account,
      });
      await accountOwnerRegistry.addAccountOwner(ownerRemoved, {
        from: account,
      });
      ownerRemovedAt = parseBlockNumber(await accountOwnerRegistry.removeAccountOwner(ownerRemoved, {
        from: account,
      }));
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
