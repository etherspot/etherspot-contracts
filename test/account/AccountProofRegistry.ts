import { ethers } from 'hardhat';
import { AccountProofRegistry } from '../../types';
import { SignerWithAddress, randomHex32 } from '../shared';

const { getSigners, provider } = ethers;

describe('AccountProofRegistry', () => {
  let signers: SignerWithAddress[] = [];
  let accountProofRegistry: AccountProofRegistry;

  before(async () => {
    signers = await getSigners();

    accountProofRegistry = (await ethers
      .getContractFactory('AccountProofRegistry')
      .then(factory => factory.deploy())) as AccountProofRegistry;
  });

  context('addAccountProof()', () => {
    let account: SignerWithAddress;
    const hash = randomHex32();

    before(async () => {
      account = signers.pop();
      accountProofRegistry = accountProofRegistry.connect(account);
    });

    it('expect to add account proof', async () => {
      const tx = await accountProofRegistry.addAccountProof(hash);

      const {
        events: [event],
      } = await tx.wait();

      expect(event.event).toBe('AccountProofAdded');
      expect(event.args.account).toBe(account.address);
      expect(event.args.hash).toBe(hash);
    });

    it('expect to revert when account proof exists', async () => {
      await expect(accountProofRegistry.addAccountProof(hash)).rejects.toThrow(
        /revert/,
      );
    });
  });

  context('removeAccountProof()', () => {
    let account: SignerWithAddress;
    const hash = randomHex32();

    before(async () => {
      account = signers.pop();
      accountProofRegistry = accountProofRegistry.connect(account);

      const tx = await accountProofRegistry.addAccountProof(hash);

      await tx.wait();
    });

    it("expect to revert when account proof doesn't exist", async () => {
      await expect(
        accountProofRegistry.removeAccountProof(randomHex32()),
      ).rejects.toThrow(/revert/);
    });

    it('expect to remove account proof', async () => {
      const tx = await accountProofRegistry.removeAccountProof(hash);

      const {
        events: [event],
      } = await tx.wait();

      expect(event.event).toBe('AccountProofRemoved');
      expect(event.args.account).toBe(account.address);
      expect(event.args.hash).toBe(hash);
    });
  });

  context('verifyAccountProof()', () => {
    let account: SignerWithAddress;
    const hashAdded = randomHex32();
    const hashRemoved = randomHex32();

    before(async () => {
      account = signers.pop();
      accountProofRegistry = accountProofRegistry.connect(account);

      let tx = await accountProofRegistry.addAccountProof(hashAdded);

      await tx.wait();

      tx = await accountProofRegistry.addAccountProof(hashRemoved);

      await tx.wait();

      tx = await accountProofRegistry.removeAccountProof(hashRemoved);

      await tx.wait();
    });

    it('expect to return true when account proof exists', async () => {
      await expect(
        accountProofRegistry.verifyAccountProof(account.address, hashAdded),
      ).resolves.toBeTruthy();
    });

    it("expect to return false when account proof doesn't exist", async () => {
      await expect(
        accountProofRegistry.verifyAccountProof(account.address, randomHex32()),
      ).resolves.toBeFalsy();
    });

    it('expect to return false when account proof was removed', async () => {
      await expect(
        accountProofRegistry.verifyAccountProof(account.address, hashRemoved),
      ).resolves.toBeFalsy();
    });
  });

  context('verifyAccountProofAtBlock()', () => {
    let account: SignerWithAddress;

    const hashAdded = randomHex32();
    const hashRemoved = randomHex32();
    let hashRemovedAt;
    let blockNumber;

    before(async () => {
      account = signers.pop();
      accountProofRegistry = accountProofRegistry.connect(account);

      blockNumber = await provider.getBlockNumber();

      let tx = await accountProofRegistry.addAccountProof(hashAdded);

      await tx.wait();

      tx = await accountProofRegistry.addAccountProof(hashRemoved);

      await tx.wait();

      tx = await accountProofRegistry.removeAccountProof(hashRemoved);

      ({ blockNumber: hashRemovedAt } = await tx.wait());
    });

    it('expect to return true when account proof exists', async () => {
      await expect(
        accountProofRegistry.verifyAccountProofAtBlock(
          account.address,
          hashAdded,
          blockNumber,
        ),
      ).resolves.toBeTruthy();
    });

    it('expect to return true when account proof exists at block', async () => {
      await expect(
        accountProofRegistry.verifyAccountProofAtBlock(
          account.address,
          hashRemoved,
          hashRemovedAt - 1,
        ),
      ).resolves.toBeTruthy();
    });

    it("expect to return false when account proof doesn't exist", async () => {
      await expect(
        accountProofRegistry.verifyAccountProofAtBlock(
          account.address,
          randomHex32(),
          blockNumber,
        ),
      ).resolves.toBeFalsy();
    });

    it("expect to return false when account proof doesn't exist at block", async () => {
      await expect(
        accountProofRegistry.verifyAccountProofAtBlock(
          account.address,
          hashRemoved,
          hashRemovedAt + 1,
        ),
      ).resolves.toBeFalsy();
    });
  });
});
