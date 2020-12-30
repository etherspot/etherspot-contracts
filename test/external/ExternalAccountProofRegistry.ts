import { ethers } from 'hardhat';
import { ExternalAccountProofRegistry } from '../../typings';
import { SignerWithAddress, randomHex32, processTx } from '../shared';

const { getSigners, provider } = ethers;

describe('ExternalAccountProofRegistry', () => {
  let signers: SignerWithAddress[];
  let externalAccountProofRegistry: ExternalAccountProofRegistry;

  before(async () => {
    signers = await getSigners();

    externalAccountProofRegistry = (await ethers
      .getContractFactory('ExternalAccountProofRegistry')
      .then(factory => factory.deploy())) as ExternalAccountProofRegistry;
  });

  context('addAccountProof()', () => {
    let account: SignerWithAddress;
    const hash = randomHex32();

    before(async () => {
      account = signers.pop();
      externalAccountProofRegistry = externalAccountProofRegistry.connect(
        account,
      );
    });

    it('expect to add account proof', async () => {
      const {
        events: [event],
      } = await processTx(externalAccountProofRegistry.addAccountProof(hash));

      expect(event.event).toBe('AccountProofAdded');
      expect(event.args.account).toBe(account.address);
      expect(event.args.hash).toBe(hash);
    });

    it('expect to revert when account proof exists', async () => {
      await expect(
        externalAccountProofRegistry.addAccountProof(hash),
      ).rejects.toThrow(/revert/);
    });
  });

  context('removeAccountProof()', () => {
    let account: SignerWithAddress;
    const hash = randomHex32();

    before(async () => {
      account = signers.pop();
      externalAccountProofRegistry = externalAccountProofRegistry.connect(
        account,
      );

      await processTx(externalAccountProofRegistry.addAccountProof(hash));
    });

    it("expect to revert when account proof doesn't exist", async () => {
      await expect(
        externalAccountProofRegistry.removeAccountProof(randomHex32()),
      ).rejects.toThrow(/revert/);
    });

    it('expect to remove account proof', async () => {
      const {
        events: [event],
      } = await processTx(
        externalAccountProofRegistry.removeAccountProof(hash),
      );

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
      externalAccountProofRegistry = externalAccountProofRegistry.connect(
        account,
      );

      await processTx(externalAccountProofRegistry.addAccountProof(hashAdded));
      await processTx(
        externalAccountProofRegistry.addAccountProof(hashRemoved),
      );
      await processTx(
        externalAccountProofRegistry.removeAccountProof(hashRemoved),
      );
    });

    it('expect to return true when account proof exists', async () => {
      await expect(
        externalAccountProofRegistry.verifyAccountProof(
          account.address,
          hashAdded,
        ),
      ).resolves.toBeTruthy();
    });

    it("expect to return false when account proof doesn't exist", async () => {
      await expect(
        externalAccountProofRegistry.verifyAccountProof(
          account.address,
          randomHex32(),
        ),
      ).resolves.toBeFalsy();
    });

    it('expect to return false when account proof was removed', async () => {
      await expect(
        externalAccountProofRegistry.verifyAccountProof(
          account.address,
          hashRemoved,
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
      externalAccountProofRegistry = externalAccountProofRegistry.connect(
        account,
      );

      blockNumber = await provider.getBlockNumber();

      await processTx(externalAccountProofRegistry.addAccountProof(hashAdded));
      await processTx(
        externalAccountProofRegistry.addAccountProof(hashRemoved),
      );

      ({ blockNumber: hashRemovedAt } = await processTx(
        externalAccountProofRegistry.removeAccountProof(hashRemoved),
      ));
    });

    it('expect to return true when account proof exists', async () => {
      await expect(
        externalAccountProofRegistry.verifyAccountProofAtBlock(
          account.address,
          hashAdded,
          blockNumber,
        ),
      ).resolves.toBeTruthy();
    });

    it('expect to return true when account proof exists at block', async () => {
      await expect(
        externalAccountProofRegistry.verifyAccountProofAtBlock(
          account.address,
          hashRemoved,
          hashRemovedAt - 1,
        ),
      ).resolves.toBeTruthy();
    });

    it("expect to return false when account proof doesn't exist", async () => {
      await expect(
        externalAccountProofRegistry.verifyAccountProofAtBlock(
          account.address,
          randomHex32(),
          blockNumber,
        ),
      ).resolves.toBeFalsy();
    });

    it("expect to return false when account proof doesn't exist at block", async () => {
      await expect(
        externalAccountProofRegistry.verifyAccountProofAtBlock(
          account.address,
          hashRemoved,
          hashRemovedAt + 1,
        ),
      ).resolves.toBeFalsy();
    });
  });
});
