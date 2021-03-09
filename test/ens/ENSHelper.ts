import { ethers } from 'hardhat';
import { constants, utils } from 'ethers';
import { ENSController, ENSHelper, ENSRegistry } from '../../typings';
import {
  SignerWithAddress,
  TYPED_DATA_DOMAIN_NAME_HASH,
  TYPED_DATA_DOMAIN_SALT,
  TYPED_DATA_DOMAIN_VERSION_HASH,
  processTx,
  randomName,
  randomAddress,
  deployContract,
} from '../shared';

const { getSigners } = ethers;

describe('ENSHelper', () => {
  let signers: SignerWithAddress[];
  let ensController: ENSController;
  let ensRegistry: ENSRegistry;
  let ensHelpers: ENSHelper;

  const ensNodesCount = 10;
  const ensNodes: {
    owner: SignerWithAddress;
    name: string;
    nameHash: string;
  }[] = [];

  const ensNamesHashes: string[] = [];

  before(async () => {
    signers = await getSigners();
    const sender = signers.pop();

    ensController = await deployContract('ENSController', [], sender);
    ensRegistry = await deployContract('ENSRegistry', [], sender);
    ensHelpers = await deployContract('ENSHelper', [], sender);

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

    await processTx(ensHelpers.initialize(ensRegistry.address));

    const tld = randomName();
    const tldHash = utils.namehash(tld);

    await processTx(
      ensRegistry.setSubnodeOwner(
        constants.HashZero,
        utils.id(tld),
        sender.address,
      ),
    );

    for (let i = 0; i < ensNodesCount; i++) {
      const owner = signers.pop();
      const label = randomName();
      const name = `${label}.${tld}`;
      const nameHash = utils.namehash(name);

      await processTx(
        ensRegistry.setSubnodeRecord(
          tldHash,
          utils.id(label),
          owner.address,
          ensController.address,
          0,
        ),
      );

      await processTx(ensController.connect(owner).syncAddr(nameHash));
      await processTx(ensController.connect(owner).setName(nameHash, name));

      ensNodes.push({
        owner,
        name,
        nameHash,
      });

      ensNamesHashes.push(nameHash);
    }
  });

  context('getAddresses()', () => {
    it('expect to get nodes addresses', async () => {
      const expected = ensNodes.map(({ owner }) => owner.address);

      await expect(
        ensHelpers.getAddresses(ensNamesHashes),
      ).resolves.toStrictEqual(expected);
    });
  });

  context('getNames()', () => {
    it('expect to get nodes names', async () => {
      const expected = ensNodes.map(({ name }) => name);

      await expect(ensHelpers.getNames(ensNamesHashes)).resolves.toStrictEqual(
        expected,
      );
    });
  });
});
