import { ethers } from 'hardhat';
import { ExternalAccountOwnerRegistry } from '../../typings';
import { SignerWithAddress, randomAddress, processTx } from '../shared';

const { getSigners, provider } = ethers;

describe('ExternalAccountOwnerRegistry', () => {
  let signers: SignerWithAddress[];
  let externalAccountOwnerRegistry: ExternalAccountOwnerRegistry;

  before(async () => {
    signers = await getSigners();

    externalAccountOwnerRegistry = (await ethers
      .getContractFactory('ExternalAccountOwnerRegistry')
      .then(factory => factory.deploy())) as ExternalAccountOwnerRegistry;
  });

  context('addAccountOwner()', () => {
    let account: SignerWithAddress;
    const owner = randomAddress();

    before(async () => {
      account = signers.pop();
      externalAccountOwnerRegistry = externalAccountOwnerRegistry.connect(
        account,
      );
    });

    it('expect to add account owner', async () => {
      const {
        events: [event],
      } = await processTx(externalAccountOwnerRegistry.addAccountOwner(owner));

      expect(event.event).toBe('AccountOwnerAdded');
      expect(event.args.account).toBe(account.address);
      expect(event.args.owner).toBe(owner);
    });

    it('expect to revert when account owner exists', async () => {
      await expect(
        externalAccountOwnerRegistry.addAccountOwner(owner),
      ).rejects.toThrow(/revert/);
    });
  });

  context('removeAccountOwner()', () => {
    const owner = randomAddress();
    let account: SignerWithAddress;

    before(async () => {
      account = signers.pop();
      externalAccountOwnerRegistry = externalAccountOwnerRegistry.connect(
        account,
      );

      await processTx(externalAccountOwnerRegistry.addAccountOwner(owner));
    });

    it("expect to revert when account owner doesn't exist", async () => {
      await expect(
        externalAccountOwnerRegistry.removeAccountOwner(randomAddress()),
      ).rejects.toThrow(/revert/);
    });

    it('expect to remove account owner', async () => {
      const {
        events: [event],
      } = await processTx(
        externalAccountOwnerRegistry.removeAccountOwner(owner),
      );

      expect(event.event).toBe('AccountOwnerRemoved');
      expect(event.args.account).toBe(account.address);
      expect(event.args.owner).toBe(owner);
    });
  });

  context('verifyAccountOwner()', () => {
    const ownerAdded = randomAddress();
    const ownerRemoved = randomAddress();
    let account: SignerWithAddress;

    before(async () => {
      account = signers.pop();
      externalAccountOwnerRegistry = externalAccountOwnerRegistry.connect(
        account,
      );

      await processTx(externalAccountOwnerRegistry.addAccountOwner(ownerAdded));
      await processTx(
        externalAccountOwnerRegistry.addAccountOwner(ownerRemoved),
      );
      await processTx(
        externalAccountOwnerRegistry.removeAccountOwner(ownerRemoved),
      );
    });

    it('expect to return true when account owner exists', async () => {
      await expect(
        externalAccountOwnerRegistry.verifyAccountOwner(
          account.address,
          ownerAdded,
        ),
      ).resolves.toBeTruthy();
    });

    it("expect to return false when account owner doesn't exist", async () => {
      await expect(
        externalAccountOwnerRegistry.verifyAccountOwner(
          account.address,
          randomAddress(),
        ),
      ).resolves.toBeFalsy();
    });

    it('expect to return false when account owner was removed', async () => {
      await expect(
        externalAccountOwnerRegistry.verifyAccountOwner(
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
      externalAccountOwnerRegistry = externalAccountOwnerRegistry.connect(
        account,
      );

      blockNumber = await provider.getBlockNumber();

      await processTx(externalAccountOwnerRegistry.addAccountOwner(ownerAdded));
      await processTx(
        externalAccountOwnerRegistry.addAccountOwner(ownerRemoved),
      );

      ({ blockNumber: ownerRemovedAt } = await processTx(
        externalAccountOwnerRegistry.removeAccountOwner(ownerRemoved),
      ));
    });

    it('expect to return true when account owner exists', async () => {
      await expect(
        externalAccountOwnerRegistry.verifyAccountOwnerAtBlock(
          account.address,
          ownerAdded,
          blockNumber,
        ),
      ).resolves.toBeTruthy();
    });

    it('expect to return true when account owner exists at block', async () => {
      await expect(
        externalAccountOwnerRegistry.verifyAccountOwnerAtBlock(
          account.address,
          ownerRemoved,
          ownerRemovedAt - 1,
        ),
      ).resolves.toBeTruthy();
    });

    it("expect to return false when account owner doesn't exist", async () => {
      await expect(
        externalAccountOwnerRegistry.verifyAccountOwnerAtBlock(
          account.address,
          randomAddress(),
          blockNumber,
        ),
      ).resolves.toBeFalsy();
    });

    it("expect to return false when account owner doesn't exist at block", async () => {
      await expect(
        externalAccountOwnerRegistry.verifyAccountOwnerAtBlock(
          account.address,
          ownerRemoved,
          ownerRemovedAt + 1,
        ),
      ).resolves.toBeFalsy();
    });
  });
});
