import { ethers } from 'hardhat';
import { AccountOwnerRegistry } from '../../typings';
import { SignerWithAddress, randomAddress, processTx } from '../shared';

const { getSigners, provider } = ethers;

describe('AccountOwnerRegistry', () => {
  let signers: SignerWithAddress[];
  let accountOwnerRegistry: AccountOwnerRegistry;

  before(async () => {
    signers = await getSigners();

    accountOwnerRegistry = (await ethers
      .getContractFactory('AccountOwnerRegistry')
      .then(factory => factory.deploy())) as AccountOwnerRegistry;
  });

  context('addAccountOwner()', () => {
    let account: SignerWithAddress;
    const owner = randomAddress();

    before(async () => {
      account = signers.pop();
      accountOwnerRegistry = accountOwnerRegistry.connect(account);
    });

    it('expect to add account owner', async () => {
      const {
        events: [event],
      } = await processTx(accountOwnerRegistry.addAccountOwner(owner));

      expect(event.event).toBe('AccountOwnerAdded');
      expect(event.args.account).toBe(account.address);
      expect(event.args.owner).toBe(owner);
    });

    it('expect to revert when account owner exists', async () => {
      await expect(accountOwnerRegistry.addAccountOwner(owner)).rejects.toThrow(
        /revert/,
      );
    });
  });

  context('removeAccountOwner()', () => {
    const owner = randomAddress();
    let account: SignerWithAddress;

    before(async () => {
      account = signers.pop();
      accountOwnerRegistry = accountOwnerRegistry.connect(account);

      await processTx(accountOwnerRegistry.addAccountOwner(owner));
    });

    it("expect to revert when account owner doesn't exist", async () => {
      await expect(
        accountOwnerRegistry.removeAccountOwner(randomAddress()),
      ).rejects.toThrow(/revert/);
    });

    it('expect to remove account owner', async () => {
      const {
        events: [event],
      } = await processTx(accountOwnerRegistry.removeAccountOwner(owner));

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
      accountOwnerRegistry = accountOwnerRegistry.connect(account);

      await processTx(accountOwnerRegistry.addAccountOwner(ownerAdded));
      await processTx(accountOwnerRegistry.addAccountOwner(ownerRemoved));
      await processTx(accountOwnerRegistry.removeAccountOwner(ownerRemoved));
    });

    it('expect to return true when account owner exists', async () => {
      await expect(
        accountOwnerRegistry.verifyAccountOwner(account.address, ownerAdded),
      ).resolves.toBeTruthy();
    });

    it("expect to return false when account owner doesn't exist", async () => {
      await expect(
        accountOwnerRegistry.verifyAccountOwner(
          account.address,
          randomAddress(),
        ),
      ).resolves.toBeFalsy();
    });

    it('expect to return false when account owner was removed', async () => {
      await expect(
        accountOwnerRegistry.verifyAccountOwner(account.address, ownerRemoved),
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
      accountOwnerRegistry = accountOwnerRegistry.connect(account);

      blockNumber = await provider.getBlockNumber();

      await processTx(accountOwnerRegistry.addAccountOwner(ownerAdded));
      await processTx(accountOwnerRegistry.addAccountOwner(ownerRemoved));

      ({ blockNumber: ownerRemovedAt } = await processTx(
        accountOwnerRegistry.removeAccountOwner(ownerRemoved),
      ));
    });

    it('expect to return true when account owner exists', async () => {
      await expect(
        accountOwnerRegistry.verifyAccountOwnerAtBlock(
          account.address,
          ownerAdded,
          blockNumber,
        ),
      ).resolves.toBeTruthy();
    });

    it('expect to return true when account owner exists at block', async () => {
      await expect(
        accountOwnerRegistry.verifyAccountOwnerAtBlock(
          account.address,
          ownerRemoved,
          ownerRemovedAt - 1,
        ),
      ).resolves.toBeTruthy();
    });

    it("expect to return false when account owner doesn't exist", async () => {
      await expect(
        accountOwnerRegistry.verifyAccountOwnerAtBlock(
          account.address,
          randomAddress(),
          blockNumber,
        ),
      ).resolves.toBeFalsy();
    });

    it("expect to return false when account owner doesn't exist at block", async () => {
      await expect(
        accountOwnerRegistry.verifyAccountOwnerAtBlock(
          account.address,
          ownerRemoved,
          ownerRemovedAt + 1,
        ),
      ).resolves.toBeFalsy();
    });
  });
});
