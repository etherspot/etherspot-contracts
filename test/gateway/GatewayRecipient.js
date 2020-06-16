/* eslint-env node, mocha */

const expect = require('expect');
const {
  logGasUsage,
  randomAddress,
  concatHex,
} = require('../utils');

const GatewayRecipientMock = artifacts.require('GatewayRecipientMock');

contract('GatewayRecipient (using mock)', (addresses) => {
  const {
    eth: {
      sendTransaction,
    },
  } = web3;

  const gateway = addresses.pop();

  /**
   * @type Contract
   */
  let gatewayRecipientMock;

  before(async () => {
    gatewayRecipientMock = await GatewayRecipientMock.new(gateway);
  });

  context('gateway()', () => {
    it('expect to return correct gateway address', async () => {
      await expect(gatewayRecipientMock.gateway()).resolves.toBe(gateway);
    });
  });

  context('emitContext()', () => {
    it('expect to emit msg.sender', async () => {
      const from = addresses.pop();
      const output = await gatewayRecipientMock.emitContext({
        from,
      });

      logGasUsage(output);

      const { logs } = output;

      expect(logs[0].args.account)
        .toBe(from);
      expect(logs[0].args.sender)
        .toBe(from);
    });

    it('expect to emit account and sender', async () => {
      const account = randomAddress();
      const sender = randomAddress();

      let data = gatewayRecipientMock.contract.methods.emitContext()
        .encodeABI();

      // concat data with account and sender
      data = concatHex(data, account, sender);

      const output = await sendTransaction({
        from: gateway,
        to: gatewayRecipientMock.address,
        value: 0,
        data,
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
