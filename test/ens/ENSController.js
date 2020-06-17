/* eslint-env node, mocha */

const expect = require('expect');
const { hash: hashEnsNode } = require('eth-ens-namehash');
const {
  logGasUsage,
  randomAddress,
  randomBytes32,
  buildTypedData,
  signTypedData,
} = require('../utils');
const {
  TYPED_DATA_SALT,
  TYPED_DATA_DOMAIN_HASH,
} = require('../constants');

const ENSController = artifacts.require('ENSController');
const ENSRegistry = artifacts.require('ENSRegistry');

contract.only('ENSController', (addresses) => {
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
    const node = hashEnsNode(name);

    const owner = addresses.pop();
    await ensRegistry.setSubnodeOwner('0x', labelHash, owner);
    await ensRegistry.setOwner(node, ensController.address, {
      from: owner,
    });

    return {
      owner,
      name,
      labelHash,
      node,
      createSubNode: () => {
        nameCounter += 1;
        const label = `test${nameCounter}`;
        return {
          name: `${label}.${name}`,
          labelHash: soliditySha3(label),
          node: hashEnsNode(`${label}.${name}`),
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

  context('setENSRegistry()', () => {
    const newEnsRegistry = randomAddress();

    after(async () => {
      await ensController.setENSRegistry(ensRegistry.address, {
        from: guardian,
      });
    });

    it('expect to change registry address', async () => {
      const output = await ensController.setENSRegistry(newEnsRegistry, {
        from: guardian,
      });

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('ENSRegistryChanged');
      expect(log.args.ensRegistry)
        .toBe(newEnsRegistry);
    });

    it('expect to revert on same registry address', async () => {
      await expect(ensController.setENSRegistry(newEnsRegistry, {
        from: guardian,
      }))
        .rejects
        .toThrow(/revert/);
    });

    it('expect to revert when sender is not a guardian', async () => {
      await expect(ensController.setENSRegistry(randomAddress()))
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

      const { labelHash } = subNode;

      await ensController.registerSubNode(node, labelHash, guardianSignature, {
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
});
