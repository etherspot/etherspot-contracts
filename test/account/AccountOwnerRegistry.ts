import { ethers } from 'hardhat';
import { AccountOwnerRegistry } from '../../types';
import { SignerWithAddress, randomAddress } from '../shared';

const { getSigners, provider } = ethers;

describe('AccountOwnerRegistry', () => {
  let signers: SignerWithAddress[] = [];
  let accountOwnerRegistry: AccountOwnerRegistry;

  before(async () => {
    signers = await getSigners();

    const accountOwnerRegistryFactory = await ethers.getContractFactory(
      'AccountOwnerRegistry',
    );

    accountOwnerRegistry = (await accountOwnerRegistryFactory.deploy()) as AccountOwnerRegistry;
  });

  context('addAccountOwner()', () => {
    let account: SignerWithAddress;
    const owner = randomAddress();

    before(async () => {
      account = signers.pop();
      accountOwnerRegistry = accountOwnerRegistry.connect(account);
    });

    it('expect to add account owner', async () => {
      const tx = await accountOwnerRegistry.addAccountOwner(owner);

      const {
        events: [event],
      } = await tx.wait();

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

      const tx = await accountOwnerRegistry.addAccountOwner(owner);

      await tx.wait();
    });

    it("expect to revert when account owner doesn't exist", async () => {
      await expect(
        accountOwnerRegistry.removeAccountOwner(randomAddress()),
      ).rejects.toThrow(/revert/);
    });

    it('expect to remove account owner', async () => {
      const tx = await accountOwnerRegistry.removeAccountOwner(owner);

      const {
        events: [event],
      } = await tx.wait();

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

      let tx = await accountOwnerRegistry.addAccountOwner(ownerAdded);

      await tx.wait();

      tx = await accountOwnerRegistry.addAccountOwner(ownerRemoved);

      await tx.wait();

      tx = await accountOwnerRegistry.removeAccountOwner(ownerRemoved);

      await tx.wait();
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

      let tx = await accountOwnerRegistry.addAccountOwner(ownerAdded);

      await tx.wait();

      tx = await accountOwnerRegistry.addAccountOwner(ownerRemoved);

      await tx.wait();

      tx = await accountOwnerRegistry.removeAccountOwner(ownerRemoved);

      ({ blockNumber: ownerRemovedAt } = await tx.wait());
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
