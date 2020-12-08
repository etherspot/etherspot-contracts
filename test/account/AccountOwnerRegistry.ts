import { ethers } from 'hardhat';
import { AccountOwnerRegistry } from '../../types';
import { SignerWithAddress } from '../shared';

describe('AccountOwnerRegistry', () => {
  let accountOwnerRegistry: AccountOwnerRegistry;
  let signers: SignerWithAddress[] = [];

  before(async () => {
    const accountOwnerRegistryFactory = await ethers.getContractFactory(
      'AccountOwnerRegistry',
    );

    signers = await ethers.getSigners();
    accountOwnerRegistry = (await accountOwnerRegistryFactory.deploy()) as AccountOwnerRegistry;
  });

  context('addAccountOwner()', () => {
    it('expect to add account owner', async () => {
      const owner = signers[1];

      const tx = await accountOwnerRegistry.addAccountOwner(owner.address);

      const {
        events: [event],
      } = await tx.wait();

      expect(event.event).toBe('AccountOwnerAdded');
      expect(event.args.account).toBe(signers[0].address);
      expect(event.args.owner).toBe(owner.address);
    });
  });
});
