/* eslint-env node, mocha */

const expect = require('expect');
const {
  logGasUsed,
  parseBlockNumber,
  randomBytes32,
} = require('../utils');

const AccountProofRegistry = artifacts.require('AccountProofRegistry');

contract('AccountProofRegistry', (addresses) => {
  const {
    eth: {
      getBlockNumber,
    }
  } = web3;
  const account = addresses[0];
  let accountProofRegistry;

  before(async () => {
    accountProofRegistry = await AccountProofRegistry.new();
  });

  context('addAccountProof()', () => {
    const hash = randomBytes32();

    it('expect to add account proof', async () => {
      const output = await accountProofRegistry.addAccountProof(hash)

      logGasUsed(output);

      const { logs: [log] } = output;

      expect(log.event).toBe('AccountProofAdded');
      expect(log.args.account).toBe(account);
      expect(log.args.hash).toBe(hash);
    });

    it('expect to revert when account proof exists', async () => {
      await expect(accountProofRegistry.addAccountProof(hash)).rejects.toThrow(/revert/);
    });
  });

  context('removeAccountProof()', () => {
    const hash = randomBytes32();

    before(async () => {
      await accountProofRegistry.addAccountProof(hash);
    });

    it('expect to revert when account proof doesn\'t exist', async () => {
      await expect(accountProofRegistry.removeAccountProof(randomBytes32())).rejects.toThrow(/revert/);
    });

    it('expect to remove account proof', async () => {
      const output = await accountProofRegistry.removeAccountProof(hash)

      logGasUsed(output);

      const { logs: [log] } = output;

      expect(log.event).toBe('AccountProofRemoved');
      expect(log.args.account).toBe(account);
      expect(log.args.hash).toBe(hash);
    });
  });

  context('verifyAccountProof()', () => {
    const hashAdded = randomBytes32();
    const hashRemoved = randomBytes32();

    before(async () => {
      await accountProofRegistry.addAccountProof(hashAdded);
      await accountProofRegistry.addAccountProof(hashRemoved);
      await accountProofRegistry.removeAccountProof(hashRemoved);
    });

    it('expect to return true when account proof exists', async () => {
      await expect(accountProofRegistry.verifyAccountProof(account, hashAdded)).resolves.toBeTruthy();
    });

    it('expect to return false when account proof doesn\'t exist', async () => {
      await expect(accountProofRegistry.verifyAccountProof(account, randomBytes32())).resolves.toBeFalsy();
    });

    it('expect to return false when account proof was removed', async () => {
      await expect(accountProofRegistry.verifyAccountProof(account, hashRemoved)).resolves.toBeFalsy();
    });
  });

  context('verifyAccountProofAtBlock()', () => {
    const hashAdded = randomBytes32();
    const hashRemoved = randomBytes32();
    let hashRemovedAt;
    let blockNumber;

    before(async () => {
      blockNumber = await getBlockNumber();
      await accountProofRegistry.addAccountProof(hashAdded);
      await accountProofRegistry.addAccountProof(hashRemoved);
      hashRemovedAt = parseBlockNumber(await accountProofRegistry.removeAccountProof(hashRemoved));
    });

    it('expect to return true when account proof exists', async () => {
      await expect(accountProofRegistry.verifyAccountProofAtBlock(account, hashAdded, blockNumber)).resolves.toBeTruthy();
    });

    it('expect to return true when account proof exists at block', async () => {
      await expect(accountProofRegistry.verifyAccountProof(account, hashRemoved, hashRemovedAt - 1)).resolves.toBeTruthy();
    });

    it('expect to return false when account proof doesn\'t exist', async () => {
      await expect(accountProofRegistry.verifyAccountProofAtBlock(account, randomBytes32(), blockNumber)).resolves.toBeFalsy();
    });

    it('expect to return false when account proof doesn\'t exist at block', async () => {
      await expect(accountProofRegistry.verifyAccountProof(account, hashRemoved, blockNumber)).resolves.toBeFalsy();
    });
  });
});
