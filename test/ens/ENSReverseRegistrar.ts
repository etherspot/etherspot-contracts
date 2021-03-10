import { ethers } from 'hardhat';
import { constants, utils } from 'ethers';
import { ENSController, ENSReverseRegistrar, ENSRegistry } from '../../typings';
import {
  SignerWithAddress,
  TYPED_DATA_DOMAIN_NAME_HASH,
  TYPED_DATA_DOMAIN_SALT,
  TYPED_DATA_DOMAIN_VERSION_HASH,
  ENS_REVERSED_LABEL,
  ENS_REVERSED_TLD,
  processTx,
  randomAddress,
  deployContract,
  buildENSReversedNode,
  randomName,
} from '../shared';

const { getSigners } = ethers;

describe('ENSReverseRegistrar', () => {
  let signers: SignerWithAddress[];
  let ensController: ENSController;
  let ensRegistry: ENSRegistry;
  let ensReverseRegistrar: ENSReverseRegistrar;

  before(async () => {
    signers = await getSigners();

    const sender = signers.pop();

    ensController = await deployContract('ENSController', [], sender);
    ensRegistry = await deployContract('ENSRegistry', [], sender);
    ensReverseRegistrar = await deployContract(
      'ENSReverseRegistrar',
      [],
      sender,
    );

    await processTx(
      ensController.initialize(
        ensRegistry.address,
        [],
        randomAddress(),
        TYPED_DATA_DOMAIN_NAME_HASH,
        TYPED_DATA_DOMAIN_VERSION_HASH,
        TYPED_DATA_DOMAIN_SALT,
      ),
    );

    await processTx(
      ensReverseRegistrar.initialize(
        ensRegistry.address,
        ensController.address,
      ),
    );

    await processTx(
      ensRegistry.setSubnodeOwner(
        constants.HashZero,
        utils.id(ENS_REVERSED_TLD),
        sender.address,
      ),
    );

    await processTx(
      ensRegistry.setSubnodeOwner(
        utils.namehash(ENS_REVERSED_TLD),
        utils.id(ENS_REVERSED_LABEL),
        ensReverseRegistrar.address,
      ),
    );
  });

  context('claim()', () => {
    it('expect to claim name', async () => {
      const owner = randomAddress();
      const sender = signers.pop();
      const reversedNode = buildENSReversedNode(sender.address);

      await processTx(ensReverseRegistrar.connect(sender).claim(owner));

      await expect(ensRegistry.owner(reversedNode.nameHash)).resolves.toBe(
        owner,
      );
    });
  });

  context('claimWithResolver()', () => {
    it('expect to claim name and resolver', async () => {
      const owner = randomAddress();
      const resolver = randomAddress();
      const sender = signers.pop();
      const reversedNode = buildENSReversedNode(sender.address);

      await processTx(
        ensReverseRegistrar.connect(sender).claimWithResolver(owner, resolver),
      );

      await expect(ensRegistry.owner(reversedNode.nameHash)).resolves.toBe(
        owner,
      );

      await expect(ensRegistry.resolver(reversedNode.nameHash)).resolves.toBe(
        resolver,
      );
    });
  });

  context('setName()', () => {
    it('expect to set name', async () => {
      const sender = signers.pop();
      const name = randomName();
      const reversedNode = buildENSReversedNode(sender.address);

      await processTx(ensReverseRegistrar.connect(sender).setName(name));

      await expect(ensRegistry.owner(reversedNode.nameHash)).resolves.toBe(
        ensReverseRegistrar.address,
      );

      await expect(ensRegistry.resolver(reversedNode.nameHash)).resolves.toBe(
        ensController.address,
      );
    });
  });

  context('node()', () => {
    it('expect to return correct node', async () => {
      const addr = randomAddress();
      const { nameHash: expected } = buildENSReversedNode(addr);

      await expect(ensReverseRegistrar.node(addr)).resolves.toBe(expected);
    });
  });
});
