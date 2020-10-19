/* eslint-env node, mocha */

const expect = require('expect');
const {
  logGasUsage,
  randomAddress,
  buildTypedData,
  hashTypedData,
  signTypedData,
} = require('../utils');
const {
  GAS_PRICE,
  TYPED_DATA_SALT,
  TYPED_DATA_DOMAIN_NAME_HASH,
  TYPED_DATA_DOMAIN_VERSION_HASH,
} = require('../constants');

const AccountOwnerRegistry = artifacts.require('AccountOwnerRegistry');
const Gateway = artifacts.require('Gateway');
const GatewayRecipientMock = artifacts.require('GatewayRecipientMock');
const PersonalAccountRegistry = artifacts.require('PersonalAccountRegistry');

contract('Gateway', (addresses) => {
  /**
   * @type Contract
   */
  let accountOwnerRegistry;

  /**
   * @type Contract
   */
  let gateway;

  /**
   * @type Contract
   */
  let gatewayRecipientMock;

  /**
   * @type Contract
   */
  let personalAccountRegistry;

  const buildDelegatedBatchTypedData = (
    nonce,
    to,
    data,
  ) => buildTypedData(
    gateway.address,
    'DelegatedBatch', [
      {
        type: 'uint256',
        name: 'nonce',
      },
      {
        type: 'address[]',
        name: 'to',
      },
      {
        type: 'bytes[]',
        name: 'data',
      },
      {
        type: 'uint256',
        name: 'gasPrice',
      },
    ], {
      nonce,
      to,
      data,
      gasPrice: GAS_PRICE,
    },
  );

  before(async () => {
    accountOwnerRegistry = await AccountOwnerRegistry.new();
    gateway = await Gateway.new();
    gatewayRecipientMock = await GatewayRecipientMock.new(gateway.address);
    personalAccountRegistry = await PersonalAccountRegistry.new();

    await gateway.initialize(
      accountOwnerRegistry.address,
      personalAccountRegistry.address,
      TYPED_DATA_DOMAIN_NAME_HASH,
      TYPED_DATA_DOMAIN_VERSION_HASH,
      TYPED_DATA_SALT,
    );

    await personalAccountRegistry.initialize(
      gateway.address,
    );
  });

  context('sendBatch()', () => {
    const sender = addresses.pop();

    it('expect to send single call', async () => {
      const to = gatewayRecipientMock.address;
      const data = gatewayRecipientMock.contract.methods.emitContext()
        .encodeABI();

      const output = await gateway.sendBatch([to], [data], {
        from: sender,
      });

      logGasUsage(output);

      const logs = await gatewayRecipientMock.getPastEvents('Context');

      expect(logs[0].args.account)
        .toBe(sender);
      expect(logs[0].args.sender)
        .toBe(sender);
    });

    it('expect to send multiple calls', async () => {
      const to = gatewayRecipientMock.address;
      const data = gatewayRecipientMock.contract.methods.emitContext()
        .encodeABI();

      const output = await gateway.sendBatch([to, to], [data, data], {
        from: sender,
      });

      logGasUsage(output);

      const logs = await gatewayRecipientMock.getPastEvents('Context');

      expect(logs[0].args.account)
        .toBe(sender);
      expect(logs[0].args.sender)
        .toBe(sender);
      expect(logs[1].args.account)
        .toBe(sender);
      expect(logs[1].args.sender)
        .toBe(sender);
    });
  });

  context('sendBatchFromAccount()', () => {
    context('# account ownership stored in AccountOwnerRegistry', () => {
      const account = addresses.pop();
      const sender = addresses.pop();

      before(async () => {
        await accountOwnerRegistry.addAccountOwner(sender, {
          from: account,
        });
      });

      it('expect to send single call', async () => {
        const to = gatewayRecipientMock.address;
        const data = gatewayRecipientMock.contract.methods.emitContext()
          .encodeABI();

        const output = await gateway.sendBatchFromAccount(account, [to], [data], {
          from: sender,
        });

        logGasUsage(output);

        const logs = await gatewayRecipientMock.getPastEvents('Context');

        expect(logs[0].args.account)
          .toBe(account);
        expect(logs[0].args.sender)
          .toBe(sender);
      });

      it('expect to revert when sender is not an account owner', async () => {
        const account = randomAddress();
        const to = gatewayRecipientMock.address;
        const data = gatewayRecipientMock.contract.methods.emitContext()
          .encodeABI();

        await expect(gateway.sendBatchFromAccount(account, [to], [data], {
          from: sender,
        }))
          .rejects
          .toThrow(/revert/);
      });
    });

    context('# account ownership stored in PersonalAccountRegistry', () => {
      let account;
      const sender = addresses.pop();

      before(async () => {
        account = await personalAccountRegistry.computeAccountAddress(sender);
      });

      it('expect to send single call', async () => {
        const to = gatewayRecipientMock.address;
        const data = gatewayRecipientMock.contract.methods.emitContext()
          .encodeABI();

        const output = await gateway.sendBatchFromAccount(account, [to], [data], {
          from: sender,
        });

        logGasUsage(output);

        const logs = await gatewayRecipientMock.getPastEvents('Context');

        expect(logs[0].args.account)
          .toBe(account);
        expect(logs[0].args.sender)
          .toBe(sender);
      });
    });
  });

  context('delegateBatchFromAccount()', () => {
    const from = addresses.pop();
    const account = addresses.pop();
    const sender = addresses.pop();

    before(async () => {
      await accountOwnerRegistry.addAccountOwner(sender, {
        from: account,
      });
    });

    it('expect to send single call', async () => {
      const to = gatewayRecipientMock.address;
      const data = gatewayRecipientMock.contract.methods.emitContext()
        .encodeABI();

      const typedData = buildDelegatedBatchTypedData(0, [to], [data]);

      const senderSignature = await signTypedData(typedData, sender);

      const output = await gateway.delegateBatchFromAccount(account, [to], [data], senderSignature, {
        from,
        gasPrice: GAS_PRICE,
      });

      logGasUsage(output);

      const logs = await gatewayRecipientMock.getPastEvents('Context');

      expect(logs[0].args.account)
        .toBe(account);
      expect(logs[0].args.sender)
        .toBe(sender);
    });

    it('expect to revert on invalid signature', async () => {
      const to = gatewayRecipientMock.address;
      const data = gatewayRecipientMock.contract.methods.emitContext()
        .encodeABI();

      const typedData = buildDelegatedBatchTypedData(1000, [to], [data]);

      const senderSignature = await signTypedData(typedData, sender);

      await expect(gateway.delegateBatchFromAccount(account, [to], [data], senderSignature, {
        from,
        gasPrice: GAS_PRICE,
      }))
        .rejects
        .toThrow(/revert/);
    });
  });

  context('hashDelegatedBatch()', () => {
    it('expect to return correct hash', async () => {
      const to = gatewayRecipientMock.address;
      const data = gatewayRecipientMock.contract.methods.emitContext()
        .encodeABI();

      const typedData = buildDelegatedBatchTypedData(1000, [to], [data]);

      const typedDataHash = hashTypedData(typedData);

      await expect(gateway.hashDelegatedBatch({
        nonce: 1000,
        to: [to],
        data: [data],
        gasPrice: GAS_PRICE,
      }))
        .resolves
        .toBe(typedDataHash);
    });
  });
});
