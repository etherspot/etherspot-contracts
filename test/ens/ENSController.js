/* eslint-env node, mocha */

const expect = require('expect');
const { hash: hashName } = require('eth-ens-namehash');
const {
  logGasUsage,
  randomAddress,
  randomBytes32,
  buildTypedData,
  signTypedData,
  hashTypedData,
} = require('../utils');
const {
  TYPED_DATA_SALT,
  TYPED_DATA_DOMAIN_HASH,
} = require('../constants');

const ENSController = artifacts.require('ENSController');
const ENSRegistry = artifacts.require('ENSRegistry');

contract('ENSController', (addresses) => {
  const {
    utils: {
      soliditySha3,
    },
  } = web3;

  const gateway = addresses.pop();
  const guardian = addresses.pop();

  /**
   * @type Contract
   */
  let ensController;

  /**
   * @type Contract
   */
  let ensRegistry;

  let nameCounter = 0;

  const createNodeFactory = async () => {
    nameCounter += 1;

    const name = `test${nameCounter}`;
    const labelHash = soliditySha3(name);
    const node = hashName(name);

    const owner = addresses.pop();
    await ensRegistry.setSubnodeOwner('0x', labelHash, owner);
    await ensRegistry.setOwner(node, ensController.address, {
      from: owner,
    });

    return {
      name,
      labelHash,
      node,
      createSubNode: () => {
        nameCounter += 1;
        const label = `test${nameCounter}`;
        return {
          name: `${label}.${name}`,
          labelHash: soliditySha3(label),
          node: hashName(`${label}.${name}`),
        };
      },
    };
  };

  const buildSubNodeRegistrationTypedData = (
    account,
    node,
    label,
  ) => buildTypedData(
    ensController.address,
    'SubNodeRegistration', [
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
    ], {
      account,
      node,
      label,
    },
  );

  before(async () => {
    ensController = await ENSController.new();
    ensRegistry = await ENSRegistry.new();

    await ensController.initialize(
      ensRegistry.address,
      [guardian],
      gateway,
      TYPED_DATA_DOMAIN_HASH,
      TYPED_DATA_SALT,
    );
  });

  context('registry()', () => {
    it('expect to return current registry address', async () => {
      await expect(ensController.registry())
        .resolves
        .toBe(ensRegistry.address);
    });
  });

  context('setRegistry()', () => {
    const newRegistry = randomAddress();

    after(async () => {
      await ensController.setRegistry(ensRegistry.address, {
        from: guardian,
      });
    });

    it('expect to change registry address', async () => {
      const output = await ensController.setRegistry(newRegistry, {
        from: guardian,
      });

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('RegistryChanged');
      expect(log.args.registry)
        .toBe(newRegistry);
    });

    it('expect to revert on same registry address', async () => {
      await expect(ensController.setRegistry(newRegistry, {
        from: guardian,
      }))
        .rejects
        .toThrow(/revert/);
    });

    it('expect to revert when sender is not a guardian', async () => {
      await expect(ensController.setRegistry(randomAddress()))
        .rejects
        .toThrow(/revert/);
    });
  });

  context('addNode()', () => {
    let nodeFactory;

    before(async () => {
      nodeFactory = await createNodeFactory();
    });

    it('expect to add node', async () => {
      const { node } = nodeFactory;
      const output = await ensController.addNode(node);

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('NodeAdded');
      expect(log.args.node)
        .toBe(node);
    });

    it('expect to revert when node exists', async () => {
      const { node } = nodeFactory;
      await expect(ensController.addNode(node))
        .rejects
        .toThrow(/revert/);
    });

    it('expect to revert on invalid node', async () => {
      await expect(ensController.addNode(randomBytes32()))
        .rejects
        .toThrow(/revert/);
    });
  });

  context('setAddr()', () => {
    const account = addresses.pop();
    const newOwner = addresses.pop();

    let nodeFactory;
    let subNode;

    before(async () => {
      nodeFactory = await createNodeFactory();

      subNode = nodeFactory.createSubNode();

      const { node } = nodeFactory;
      await ensController.addNode(node);

      const typedData = buildSubNodeRegistrationTypedData(
        account,
        node,
        subNode.labelHash,
      );

      const guardianSignature = await signTypedData(typedData, guardian);

      await ensController.registerSubNode(node, subNode.labelHash, guardianSignature, {
        from: account,
      });
    });

    it('expect to update addr by creator', async () => {
      const { node } = subNode;

      const output = await ensController.setAddr(node, newOwner, {
        from: account,
      });

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('AddrChanged');
      expect(log.args.node)
        .toBe(node);
      expect(log.args.addr)
        .toBe(newOwner);
    });

    it('expect to update addr by new owner', async () => {
      const { node } = subNode;
      const addr = randomAddress();

      const output = await ensController.setAddr(node, addr, {
        from: newOwner,
      });

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('AddrChanged');
      expect(log.args.node)
        .toBe(node);
      expect(log.args.addr)
        .toBe(addr);
    });

    it('expect to reject when sender is not node owner', async () => {
      const { node } = subNode;
      await expect(ensController.setAddr(node, randomAddress()))
        .rejects
        .toThrow(/rever/);
    });
  });

  context('registerSubNode()', () => {
    let nodeFactory;
    let subNode;

    before(async () => {
      nodeFactory = await createNodeFactory();

      const { node } = nodeFactory;
      await ensController.addNode(node);
      subNode = nodeFactory.createSubNode();
    });

    it('expect to register sub node', async () => {
      const account = addresses.pop();
      const { node } = nodeFactory;

      const typedData = buildSubNodeRegistrationTypedData(
        account,
        node,
        subNode.labelHash,
      );

      const guardianSignature = await signTypedData(typedData, guardian);

      const output = await ensController.registerSubNode(node, subNode.labelHash, guardianSignature, {
        from: account,
      });

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('AddrChanged');
      expect(log.args.node)
        .toBe(subNode.node);
      expect(log.args.addr)
        .toBe(account);
    });

    it('expect to revert when node is taken', async () => {
      const account = addresses.pop();
      const { node } = nodeFactory;

      const typedData = buildSubNodeRegistrationTypedData(
        account,
        node,
        subNode.labelHash,
      );

      const guardianSignature = await signTypedData(typedData, guardian);

      await expect(ensController.registerSubNode(node, subNode.labelHash, guardianSignature, {
        from: account,
      }))
        .rejects
        .toThrow(/revert/);
    });

    it('expect to revert on invalid guardian signature', async () => {
      const subNode = nodeFactory.createSubNode();
      const account = addresses.pop();
      const { node } = nodeFactory;

      const typedData = buildSubNodeRegistrationTypedData(
        randomAddress(),
        node,
        subNode.labelHash,
      );

      const guardianSignature = await signTypedData(typedData, guardian);

      await expect(ensController.registerSubNode(node, subNode.labelHash, guardianSignature, {
        from: account,
      }))
        .rejects
        .toThrow(/revert/);
    });
  });

  context('addr()', () => {
    const account = addresses.pop();

    let nodeFactory;
    let subNode;

    before(async () => {
      nodeFactory = await createNodeFactory();

      subNode = nodeFactory.createSubNode();

      const { node } = nodeFactory;
      await ensController.addNode(node);

      const typedData = buildSubNodeRegistrationTypedData(
        account,
        node,
        subNode.labelHash,
      );

      const guardianSignature = await signTypedData(typedData, guardian);

      await ensController.registerSubNode(node, subNode.labelHash, guardianSignature, {
        from: account,
      });
    });

    it('expect to return controller address for root node', async () => {
      await expect(ensController.addr(nodeFactory.node))
        .resolves
        .toBe(ensController.address);
    });

    it('expect to return owner address for sub node', async () => {
      await expect(ensController.addr(subNode.node))
        .resolves
        .toBe(account);
    });

    it('expect to return zero address for unknown node', async () => {
      await expect(ensController.addr(randomBytes32()))
        .resolves
        .toBeZeroAddress();
    });
  });

  context('supportsInterface()', () => {
    it('expect to return true for supportsInterface(bytes4) interface', async () => {
      await expect(ensController.supportsInterface(soliditySha3('supportsInterface(bytes4)')
        .slice(0, 10)))
        .resolves
        .toBeTruthy();
    });

    it('expect to return true for addr(bytes32) interface', async () => {
      await expect(ensController.supportsInterface(soliditySha3('addr(bytes32)')
        .slice(0, 10)))
        .resolves
        .toBeTruthy();
    });

    it('expect to return false for unsupported interface', async () => {
      await expect(ensController.supportsInterface(soliditySha3('test(address)')
        .slice(0, 10)))
        .resolves
        .toBeFalsy();
    });
  });

  context('hashSubNodeRegistration()', () => {
    it('expect to return correct hash', async () => {
      const account = randomAddress();
      const node = randomBytes32();
      const label = randomBytes32();

      const typedData = buildSubNodeRegistrationTypedData(
        account,
        node,
        label,
      );

      await expect(ensController.hashSubNodeRegistration({
        account,
        node,
        label,
      }))
        .resolves
        .toBe(hashTypedData(typedData));
    });
  });
});
