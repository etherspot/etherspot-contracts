import { ethers } from 'hardhat';
import { utils, constants } from 'ethers';
import { ENSController, ENSRegistry } from '../../typings';
import {
  SignerWithAddress,
  createMessagePayloadFactory,
  processTx,
  randomAddress,
  MessagePayloadFactory,
  randomHex32,
  deployContract,
  randomName,
} from '../shared';

export interface Node {
  name: string;
  labelHash: string;
  node: string;
}

export interface NodeFactory extends Node {
  owner: SignerWithAddress;
  createSubNode(): Node;
}

const { getSigners } = ethers;

describe('ENSController', () => {
  let signers: SignerWithAddress[];
  let sender: SignerWithAddress;
  let guardian: SignerWithAddress;
  let ensController: ENSController;
  let ensRegistry: ENSRegistry;

  let subNodeRegistrationMessagePayloadFactory: MessagePayloadFactory<{
    account: string;
    node: string;
    label: string;
  }>;

  const createNodeFactory: (addNode?: boolean) => Promise<NodeFactory> = async (
    addNode = true,
  ) => {
    const name = randomName();
    const labelHash = utils.id(name);
    const node = utils.namehash(name);

    const owner = signers.pop();

    await processTx(
      ensRegistry.setSubnodeOwner(constants.HashZero, labelHash, owner.address),
    );

    if (addNode) {
      await processTx(ensController.connect(owner).submitNode(node));

      await processTx(
        ensRegistry.connect(owner).setOwner(node, ensController.address),
      );

      await processTx(ensController.connect(owner).verifyNode(node));
    }

    return {
      owner,
      name,
      labelHash,
      node,
      createSubNode: () => {
        const label = randomName();
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

    ensController = await deployContract('ENSController');
    ensRegistry = await deployContract('ENSRegistry', [], sender);

    await processTx(
      ensController.initialize(
        ensRegistry.address,
        [guardian.address],
        randomAddress(),
      ),
    );

    subNodeRegistrationMessagePayloadFactory = createMessagePayloadFactory(
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

  context('submitNode()', () => {
    let nodeFactory: NodeFactory;

    before(async () => {
      nodeFactory = await createNodeFactory(false);
    });

    it('expect to submit node', async () => {
      const { owner, node } = nodeFactory;

      const {
        events: [event],
      } = await processTx(ensController.connect(owner).submitNode(node));

      expect(event.event).toBe('NodeSubmitted');
      expect(event.args.node).toBe(node);
      expect(event.args.owner).toBe(owner.address);
    });

    it('expect to revert when node exists', async () => {
      const { node } = nodeFactory;
      await expect(ensController.submitNode(node)).rejects.toThrow(/revert/);
    });

    it('expect to revert on invalid node', async () => {
      await expect(ensController.submitNode(randomHex32())).rejects.toThrow(
        /revert/,
      );
    });
  });

  context('verifyNode()', () => {
    let nodeFactory: NodeFactory;

    before(async () => {
      nodeFactory = await createNodeFactory(false);

      const { owner, node } = nodeFactory;

      await processTx(ensController.connect(owner).submitNode(node));

      await processTx(
        ensRegistry.connect(owner).setOwner(node, ensController.address),
      );
    });

    it('expect to verify node', async () => {
      const { owner, node } = nodeFactory;

      const { events } = await processTx(
        ensController.connect(owner).verifyNode(node),
      );

      const event = events.find(({ event }) => event === 'NodeVerified');

      expect(event.event).toBe('NodeVerified');
      expect(event.args.node).toBe(node);

      await expect(ensRegistry.resolver(node)).resolves.toBe(
        ensController.address,
      );
    });

    it('expect to revert when node exists', async () => {
      const { node } = nodeFactory;
      await expect(ensController.verifyNode(node)).rejects.toThrow(/revert/);
    });

    it('expect to revert on invalid node', async () => {
      await expect(ensController.verifyNode(randomHex32())).rejects.toThrow(
        /revert/,
      );
    });
  });

  context('releaseNode()', () => {
    let nodeFactory: NodeFactory;

    before(async () => {
      nodeFactory = await createNodeFactory();
    });

    it('expect to release node', async () => {
      const { owner, node } = nodeFactory;

      const { events } = await processTx(
        ensController.connect(owner).releaseNode(node),
      );

      expect(events[1].event).toBe('NodeReleased');
      expect(events[1].args.node).toBe(node);
      expect(events[1].args.owner).toBe(owner.address);

      await expect(ensRegistry.owner(node)).resolves.toBe(owner.address);
    });

    it('expect to revert when node exists', async () => {
      const { node } = nodeFactory;
      await expect(ensController.releaseNode(node)).rejects.toThrow(/revert/);
    });

    it('expect to revert on invalid node', async () => {
      await expect(ensController.releaseNode(randomHex32())).rejects.toThrow(
        /revert/,
      );
    });
  });

  context('setAddr()', () => {
    let account: SignerWithAddress;

    let subNode: Node;

    before(async () => {
      account = signers.pop();

      const nodeFactory = await createNodeFactory();

      subNode = nodeFactory.createSubNode();

      const { node } = nodeFactory;

      const guardianSignature = await subNodeRegistrationMessagePayloadFactory.sign(
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
      const newOwner = randomAddress();

      const { events } = await processTx(
        ensController
          .connect(account)
          ['setAddr(bytes32,address)'](node, newOwner),
      );

      const event = events.find(({ event }) => event === 'AddrChanged');

      expect(event).toBeDefined();
      expect(event.event).toBe('AddrChanged');
      expect(event.args.node).toBe(node);
      expect(event.args.addr).toBe(newOwner);
    });

    it('expect to reject when sender is not node owner', async () => {
      const { node } = subNode;
      await expect(
        ensController['setAddr(bytes32,address)'](node, randomAddress()),
      ).rejects.toThrow(/rever/);
    });
  });

  context('syncAddr()', () => {
    let owner: SignerWithAddress;
    let node: string;

    before(async () => {
      ({ node, owner } = await createNodeFactory(false));

      await processTx(
        ensRegistry.connect(owner).setResolver(node, ensController.address),
      );
    });

    it('expect to sync addr', async () => {
      const { events } = await processTx(
        ensController.connect(owner).syncAddr(node),
      );

      const event = events.find(({ event }) => event === 'AddrChanged');

      expect(event).toBeDefined();
      expect(event.args.node).toBe(node);
      expect(event.args.addr).toBe(owner.address);
    });

    it('expect to reject when already in sync', async () => {
      await expect(ensController.connect(owner).syncAddr(node)).rejects.toThrow(
        /rever/,
      );
    });
  });

  context('registerSubNode()', () => {
    let nodeFactory: NodeFactory;
    let subNode: Node;

    before(async () => {
      nodeFactory = await createNodeFactory();

      subNode = nodeFactory.createSubNode();
    });

    it('expect to register sub node', async () => {
      const account = signers.pop();
      const { node } = nodeFactory;

      const guardianSignature = await subNodeRegistrationMessagePayloadFactory.sign(
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

      expect(event).toBeDefined();
      expect(event.args.node).toBe(subNode.node);
      expect(event.args.addr).toBe(account.address);
    });

    it('expect to revert when node is taken', async () => {
      const account = signers.pop();
      const { node } = nodeFactory;

      const guardianSignature = await subNodeRegistrationMessagePayloadFactory.sign(
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

      const guardianSignature = await subNodeRegistrationMessagePayloadFactory.sign(
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

      const guardianSignature = await subNodeRegistrationMessagePayloadFactory.sign(
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
      await expect(
        ensController['addr(bytes32)'](nodeFactory.node),
      ).resolves.toBe(ensController.address);
    });

    it('expect to return owner address for sub node', async () => {
      await expect(ensController['addr(bytes32)'](subNode.node)).resolves.toBe(
        account.address,
      );
    });

    it('expect to return zero address for unknown node', async () => {
      await expect(
        ensController['addr(bytes32)'](randomHex32()),
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

    it('expect to return true for name(bytes32) interface', async () => {
      await expect(
        ensController.supportsInterface(utils.id('name(bytes32)').slice(0, 10)),
      ).resolves.toBeTruthy();
    });

    it('expect to return true for pubkey(bytes32) interface', async () => {
      await expect(
        ensController.supportsInterface(
          utils.id('pubkey(bytes32)').slice(0, 10),
        ),
      ).resolves.toBeTruthy();
    });

    it('expect to return true for text(bytes32,string) interface', async () => {
      await expect(
        ensController.supportsInterface(
          utils.id('text(bytes32,string)').slice(0, 10),
        ),
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

      const expected = subNodeRegistrationMessagePayloadFactory.hash(message);

      await expect(
        ensController.hashSubNodeRegistration(message),
      ).resolves.toBe(expected);
    });
  });
});
