import { ethers } from 'hardhat';
import { utils, constants } from 'ethers';
import { ENSController, ENSRegistry } from '../../typings';
import {
  SignerWithAddress,
  TYPED_DATA_DOMAIN_NAME_HASH,
  TYPED_DATA_DOMAIN_SALT,
  TYPED_DATA_DOMAIN_VERSION_HASH,
  createTypedDataFactory,
  processTx,
  randomAddress,
  TypedDataFactory,
  randomHex32,
} from '../shared';
import { NodeFactory, Node } from './interfaces';

const { getSigners } = ethers;

describe('ENSController', () => {
  let signers: SignerWithAddress[];
  let sender: SignerWithAddress;
  let guardian: SignerWithAddress;
  let ensController: ENSController;
  let ensRegistry: ENSRegistry;

  let nameCounter = 0;

  let subNodeRegistrationTypedDataFactory: TypedDataFactory<{
    account: string;
    node: string;
    label: string;
  }>;

  const createNodeFactory: () => Promise<NodeFactory> = async () => {
    nameCounter += 1;

    const name = `test${nameCounter}`;
    const labelHash = utils.id(name);
    const node = utils.namehash(name);

    const owner = signers.pop();

    await processTx(
      ensRegistry.setSubnodeOwner(constants.HashZero, labelHash, owner.address),
    );

    await processTx(
      ensRegistry.connect(owner).setOwner(node, ensController.address),
    );

    return {
      name,
      labelHash,
      node,
      createSubNode: () => {
        nameCounter += 1;
        const label = `test${nameCounter}`;
        return {
          name: `${label}.${name}`,
          labelHash: utils.id(label),
          node: utils.namehash(`${label}.${name}`),
        };
      },
    };
  };

  before(async () => {
    signers = await getSigners();
    sender = signers.pop();
    guardian = signers.pop();

    ensController = (await ethers
      .getContractFactory('ENSController')
      .then(factory => factory.deploy())) as ENSController;

    ensRegistry = (await ethers
      .getContractFactory('ENSRegistry')
      .then(factory => factory.connect(sender).deploy())) as ENSRegistry;

    await processTx(
      ensController.initialize(
        ensRegistry.address,
        [guardian.address],
        randomAddress(),
        TYPED_DATA_DOMAIN_NAME_HASH,
        TYPED_DATA_DOMAIN_VERSION_HASH,
        TYPED_DATA_DOMAIN_SALT,
      ),
    );

    subNodeRegistrationTypedDataFactory = createTypedDataFactory(
      ensController,
      'SubNodeRegistration',
      [
        {
          name: 'account',
          type: 'address',
        },
        {
          name: 'node',
          type: 'bytes32',
        },
        {
          name: 'label',
          type: 'bytes32',
        },
      ],
    );

    ensController = ensController.connect(sender);
  });

  context('registry()', () => {
    it('expect to return current registry address', async () => {
      await expect(ensController.registry()).resolves.toBe(ensRegistry.address);
    });
  });

  context('setRegistry()', () => {
    const newRegistry = randomAddress();

    before(() => {
      ensController = ensController.connect(guardian);
    });

    after(async () => {
      await processTx(ensController.setRegistry(ensRegistry.address));

      ensController = ensController.connect(sender);
    });

    it('expect to change registry address', async () => {
      const {
        events: [event],
      } = await processTx(ensController.setRegistry(newRegistry));

      expect(event.event).toBe('RegistryChanged');
      expect(event.args.registry).toBe(newRegistry);
    });

    it('expect to revert on same registry address', async () => {
      await expect(ensController.setRegistry(newRegistry)).rejects.toThrow(
        /revert/,
      );
    });

    it('expect to revert when sender is not a guardian', async () => {
      await expect(
        ensController.connect(signers.pop()).setRegistry(randomAddress()),
      ).rejects.toThrow(/revert/);
    });
  });

  context('addNode()', () => {
    let nodeFactory: NodeFactory;

    before(async () => {
      nodeFactory = await createNodeFactory();
    });

    it('expect to add node', async () => {
      const { node } = nodeFactory;

      const {
        events: [event],
      } = await processTx(ensController.addNode(node));

      expect(event.event).toBe('NodeAdded');
      expect(event.args.node).toBe(node);
    });

    it('expect to revert when node exists', async () => {
      const { node } = nodeFactory;
      await expect(ensController.addNode(node)).rejects.toThrow(/revert/);
    });

    it('expect to revert on invalid node', async () => {
      await expect(ensController.addNode(randomHex32())).rejects.toThrow(
        /revert/,
      );
    });
  });

  context('setAddr()', () => {
    let account: SignerWithAddress;
    let newOwner: SignerWithAddress;

    let subNode: Node;

    before(async () => {
      account = signers.pop();
      newOwner = signers.pop();

      const nodeFactory = await createNodeFactory();

      subNode = nodeFactory.createSubNode();

      const { node } = nodeFactory;

      await processTx(ensController.addNode(node));

      const guardianSignature = await subNodeRegistrationTypedDataFactory.signTypeData(
        guardian,
        {
          account: account.address,
          label: subNode.labelHash,
          node,
        },
      );

      await processTx(
        ensController
          .connect(account)
          .registerSubNode(node, subNode.labelHash, guardianSignature),
      );
    });

    it('expect to update addr by creator', async () => {
      const { node } = subNode;

      const {
        events: [event],
      } = await processTx(
        ensController.connect(account).setAddr(node, newOwner.address),
      );

      expect(event.event).toBe('AddrChanged');
      expect(event.args.node).toBe(node);
      expect(event.args.addr).toBe(newOwner.address);
    });

    it('expect to update addr by new owner', async () => {
      const { node } = subNode;
      const addr = randomAddress();

      const {
        events: [event],
      } = await processTx(ensController.connect(newOwner).setAddr(node, addr));

      expect(event.event).toBe('AddrChanged');
      expect(event.args.node).toBe(node);
      expect(event.args.addr).toBe(addr);
    });

    it('expect to reject when sender is not node owner', async () => {
      const { node } = subNode;
      await expect(
        ensController.setAddr(node, randomAddress()),
      ).rejects.toThrow(/rever/);
    });
  });

  context('registerSubNode()', () => {
    let nodeFactory: NodeFactory;
    let subNode: Node;

    before(async () => {
      nodeFactory = await createNodeFactory();

      const { node } = nodeFactory;
      await ensController.addNode(node);
      subNode = nodeFactory.createSubNode();
    });

    it('expect to register sub node', async () => {
      const account = signers.pop();
      const { node } = nodeFactory;

      const guardianSignature = await subNodeRegistrationTypedDataFactory.signTypeData(
        guardian,
        {
          account: account.address,
          label: subNode.labelHash,
          node,
        },
      );

      const { events } = await processTx(
        ensController
          .connect(account)
          .registerSubNode(node, subNode.labelHash, guardianSignature),
      );

      const event = events.find(({ event }) => event === 'AddrChanged');

      expect(event.args.node).toBe(subNode.node);
      expect(event.args.addr).toBe(account.address);
    });

    it('expect to revert when node is taken', async () => {
      const account = signers.pop();
      const { node } = nodeFactory;

      const guardianSignature = await subNodeRegistrationTypedDataFactory.signTypeData(
        guardian,
        {
          account: account.address,
          label: subNode.labelHash,
          node,
        },
      );

      await expect(
        ensController
          .connect(account)
          .registerSubNode(node, subNode.labelHash, guardianSignature),
      ).rejects.toThrow(/revert/);
    });

    it('expect to revert on invalid guardian signature', async () => {
      const subNode = nodeFactory.createSubNode();
      const account = signers.pop();
      const { node } = nodeFactory;

      const guardianSignature = await subNodeRegistrationTypedDataFactory.signTypeData(
        guardian,
        {
          account: randomAddress(),
          label: subNode.labelHash,
          node,
        },
      );

      await expect(
        ensController
          .connect(account)
          .registerSubNode(node, subNode.labelHash, guardianSignature),
      ).rejects.toThrow(/revert/);
    });
  });

  context('addr()', () => {
    let account: SignerWithAddress;
    let nodeFactory: NodeFactory;
    let subNode: Node;

    before(async () => {
      account = signers.pop();
      nodeFactory = await createNodeFactory();
      subNode = nodeFactory.createSubNode();

      const { node } = nodeFactory;

      await processTx(ensController.addNode(node));

      const guardianSignature = await subNodeRegistrationTypedDataFactory.signTypeData(
        guardian,
        {
          account: account.address,
          label: subNode.labelHash,
          node,
        },
      );

      await processTx(
        ensController
          .connect(account)
          .registerSubNode(node, subNode.labelHash, guardianSignature),
      );
    });

    it('expect to return controller address for root node', async () => {
      await expect(ensController.addr(nodeFactory.node)).resolves.toBe(
        ensController.address,
      );
    });

    it('expect to return owner address for sub node', async () => {
      await expect(ensController.addr(subNode.node)).resolves.toBe(
        account.address,
      );
    });

    it('expect to return zero address for unknown node', async () => {
      await expect(
        ensController.addr(randomHex32()),
      ).resolves.toBeZeroAddress();
    });
  });

  context('supportsInterface()', () => {
    it('expect to return true for supportsInterface(bytes4) interface', async () => {
      await expect(
        ensController.supportsInterface(
          utils.id('supportsInterface(bytes4)').slice(0, 10),
        ),
      ).resolves.toBeTruthy();
    });

    it('expect to return true for addr(bytes32) interface', async () => {
      await expect(
        ensController.supportsInterface(utils.id('addr(bytes32)').slice(0, 10)),
      ).resolves.toBeTruthy();
    });

    it('expect to return false for unsupported interface', async () => {
      await expect(
        ensController.supportsInterface(utils.id('test(address)').slice(0, 10)),
      ).resolves.toBeFalsy();
    });
  });

  context('hashSubNodeRegistration()', () => {
    it('expect to return correct hash', async () => {
      const message = {
        account: randomAddress(),
        node: randomHex32(),
        label: randomHex32(),
      };

      const typedDataHash = subNodeRegistrationTypedDataFactory.hashTypedData(
        message,
      );

      await expect(
        ensController.hashSubNodeRegistration(message),
      ).resolves.toBe(typedDataHash);
    });
  });
});
