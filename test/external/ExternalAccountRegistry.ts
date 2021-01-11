import { ethers } from 'hardhat';
import { ExternalAccountRegistry } from '../../typings';
import {
  SignerWithAddress,
  randomAddress,
  processTx,
  randomHex32,
  deployContract,
} from '../shared';

const { getSigners, provider } = ethers;

describe('ExternalAccountRegistry', () => {
  let signers: SignerWithAddress[];
  let externalAccountRegistry: ExternalAccountRegistry;

  before(async () => {
    signers = await getSigners();

    externalAccountRegistry = await deployContract('ExternalAccountRegistry');
  });

  context('addAccountOwner()', () => {
    let account: SignerWithAddress;
    const owner = randomAddress();

    before(async () => {
      account = signers.pop();
      externalAccountRegistry = externalAccountRegistry.connect(account);
    });

    it('expect to add account owner', async () => {
      const {
        events: [event],
      } = await processTx(externalAccountRegistry.addAccountOwner(owner));

      expect(event.event).toBe('AccountOwnerAdded');
      expect(event.args.account).toBe(account.address);
      expect(event.args.owner).toBe(owner);
    });

    it('expect to revert when account owner exists', async () => {
      await expect(
        externalAccountRegistry.addAccountOwner(owner),
      ).rejects.toThrow(/revert/);
    });
  });

  context('removeAccountOwner()', () => {
    const owner = randomAddress();
    let account: SignerWithAddress;

    before(async () => {
      account = signers.pop();
      externalAccountRegistry = externalAccountRegistry.connect(account);

      await processTx(externalAccountRegistry.addAccountOwner(owner));
    });

    it("expect to revert when account owner doesn't exist", async () => {
      await expect(
        externalAccountRegistry.removeAccountOwner(randomAddress()),
      ).rejects.toThrow(/revert/);
    });

    it('expect to remove account owner', async () => {
      const {
        events: [event],
      } = await processTx(externalAccountRegistry.removeAccountOwner(owner));

      expect(event.event).toBe('AccountOwnerRemoved');
      expect(event.args.account).toBe(account.address);
      expect(event.args.owner).toBe(owner);
    });
  });

  context('addAccountProof()', () => {
    let account: SignerWithAddress;
    const hash = randomHex32();

    before(async () => {
      account = signers.pop();
      externalAccountRegistry = externalAccountRegistry.connect(account);
    });

    it('expect to add account proof', async () => {
      const {
        events: [event],
      } = await processTx(externalAccountRegistry.addAccountProof(hash));

      expect(event.event).toBe('AccountProofAdded');
      expect(event.args.account).toBe(account.address);
      expect(event.args.hash).toBe(hash);
    });

    it('expect to revert when account proof exists', async () => {
      await expect(
        externalAccountRegistry.addAccountProof(hash),
      ).rejects.toThrow(/revert/);
    });
  });

  context('removeAccountProof()', () => {
    let account: SignerWithAddress;
    const hash = randomHex32();

    before(async () => {
      account = signers.pop();
      externalAccountRegistry = externalAccountRegistry.connect(account);

      await processTx(externalAccountRegistry.addAccountProof(hash));
    });

    it("expect to revert when account proof doesn't exist", async () => {
      await expect(
        externalAccountRegistry.removeAccountProof(randomHex32()),
      ).rejects.toThrow(/revert/);
    });

    it('expect to remove account proof', async () => {
      const {
        events: [event],
      } = await processTx(externalAccountRegistry.removeAccountProof(hash));

      expect(event.event).toBe('AccountProofRemoved');
      expect(event.args.account).toBe(account.address);
      expect(event.args.hash).toBe(hash);
    });
  });

  context('verifyAccountOwner()', () => {
    const ownerAdded = randomAddress();
    const ownerRemoved = randomAddress();
    let account: SignerWithAddress;

    before(async () => {
      account = signers.pop();
      externalAccountRegistry = externalAccountRegistry.connect(account);

      await processTx(externalAccountRegistry.addAccountOwner(ownerAdded));
      await processTx(externalAccountRegistry.addAccountOwner(ownerRemoved));
      await processTx(externalAccountRegistry.removeAccountOwner(ownerRemoved));
    });

    it('expect to return true when account owner exists', async () => {
      await expect(
        externalAccountRegistry.verifyAccountOwner(account.address, ownerAdded),
      ).resolves.toBeTruthy();
    });

    it("expect to return false when account owner doesn't exist", async () => {
      await expect(
        externalAccountRegistry.verifyAccountOwner(
          account.address,
          randomAddress(),
        ),
      ).resolves.toBeFalsy();
    });

    it('expect to return false when account owner was removed', async () => {
      await expect(
        externalAccountRegistry.verifyAccountOwner(
          account.address,
          ownerRemoved,
        ),
      ).resolves.toBeFalsy();
    });
  });

  context('verifyAccountOwnerAtBlock()', () => {
    const ownerAdded = randomAddress();
    const ownerRemoved = randomAddress();
    let account: SignerWithAddress;
    let ownerRemovedAt;
    let blockNumber;

    before(async () => {
      account = signers.pop();
      externalAccountRegistry = externalAccountRegistry.connect(account);

      blockNumber = await provider.getBlockNumber();

      await processTx(externalAccountRegistry.addAccountOwner(ownerAdded));
      await processTx(externalAccountRegistry.addAccountOwner(ownerRemoved));

      ({ blockNumber: ownerRemovedAt } = await processTx(
        externalAccountRegistry.removeAccountOwner(ownerRemoved),
      ));
    });

    it('expect to return true when account owner exists', async () => {
      await expect(
        externalAccountRegistry.verifyAccountOwnerAtBlock(
          account.address,
          ownerAdded,
          blockNumber,
        ),
      ).resolves.toBeTruthy();
    });

    it('expect to return true when account owner exists at block', async () => {
      await expect(
        externalAccountRegistry.verifyAccountOwnerAtBlock(
          account.address,
          ownerRemoved,
          ownerRemovedAt - 1,
        ),
      ).resolves.toBeTruthy();
    });

    it("expect to return false when account owner doesn't exist", async () => {
      await expect(
        externalAccountRegistry.verifyAccountOwnerAtBlock(
          account.address,
          randomAddress(),
          blockNumber,
        ),
      ).resolves.toBeFalsy();
    });

    it("expect to return false when account owner doesn't exist at block", async () => {
      await expect(
        externalAccountRegistry.verifyAccountOwnerAtBlock(
          account.address,
          ownerRemoved,
          ownerRemovedAt + 1,
        ),
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
      externalAccountRegistry = externalAccountRegistry.connect(account);

      blockNumber = await provider.getBlockNumber();

      await processTx(externalAccountRegistry.addAccountProof(hashAdded));
      await processTx(externalAccountRegistry.addAccountProof(hashRemoved));

      ({ blockNumber: hashRemovedAt } = await processTx(
        externalAccountRegistry.removeAccountProof(hashRemoved),
      ));
    });

    it('expect to return true when account proof exists', async () => {
      await expect(
        externalAccountRegistry.verifyAccountProofAtBlock(
          account.address,
          hashAdded,
          blockNumber,
        ),
      ).resolves.toBeTruthy();
    });

    it('expect to return true when account proof exists at block', async () => {
      await expect(
        externalAccountRegistry.verifyAccountProofAtBlock(
          account.address,
          hashRemoved,
          hashRemovedAt - 1,
        ),
      ).resolves.toBeTruthy();
    });

    it("expect to return false when account proof doesn't exist", async () => {
      await expect(
        externalAccountRegistry.verifyAccountProofAtBlock(
          account.address,
          randomHex32(),
          blockNumber,
        ),
      ).resolves.toBeFalsy();
    });

    it("expect to return false when account proof doesn't exist at block", async () => {
      await expect(
        externalAccountRegistry.verifyAccountProofAtBlock(
          account.address,
          hashRemoved,
          hashRemovedAt + 1,
        ),
      ).resolves.toBeFalsy();
    });
  });
});
