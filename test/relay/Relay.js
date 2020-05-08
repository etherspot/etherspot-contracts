/* eslint-env node, mocha */

const expect = require('expect');
const {
  GAS_PRICE,
  TYPED_DATA_DOMAIN_HASH,
  TYPED_DATA_SALT,
  ZERO_ADDRESS,
} = require('../constants');
const {
  logGasUsed,
  buildTypedData,
  signTypedData,
} = require('../utils');

const Relay = artifacts.require('Relay');
const RelayedMock = artifacts.require('RelayedMock');
const SignatureValidator = artifacts.require('SignatureValidator');

contract('Relay', (addresses) => {
  context('methods', () => {
    let relay;
    let relayedMock;

    beforeEach(async () => {
      const signatureValidator = await SignatureValidator.new();

      relay = await Relay.new();
      relayedMock = await RelayedMock.new();

      await signatureValidator.initialize(
        ZERO_ADDRESS,
        ZERO_ADDRESS,
        TYPED_DATA_DOMAIN_HASH,
        TYPED_DATA_SALT,
      );

      await relay.initialize(
        signatureValidator.address,
        TYPED_DATA_DOMAIN_HASH,
        TYPED_DATA_SALT,
      );

      await relayedMock.initialize(
        relay.address,
      );
    });

    describe('sendBatch()', () => {
      it('expect to send single call', async () => {
        const sender = addresses[1];
        const to = [relayedMock.address];
        const data = [
          relayedMock
            .contract
            .methods
            .exampleCall1()
            .encodeABI(),
        ];

        const output = await relay.sendBatch(
          to,
          data, {
            from: sender,
          },
        );

        logGasUsed(output);

        const logs = await relayedMock.contract.getPastEvents('allEvents');

        expect(logs[0].event).toBe('ExampleCall1Sender');
        expect(logs[0].returnValues.sender).toBe(sender);
      });

      it('expect to send multiple calls', async () => {
        const sender = addresses[1];
        const to = [relayedMock.address, relayedMock.address];
        const data = [
          relayedMock
            .contract
            .methods
            .exampleCall1()
            .encodeABI(),
          relayedMock
            .contract
            .methods
            .exampleCall2(1)
            .encodeABI(),
        ];

        const output = await relay.sendBatch(
          to,
          data, {
            from: sender,
          },
        );

        logGasUsed(output);

        const logs = await relayedMock.contract.getPastEvents('allEvents');

        expect(logs[0].event).toBe('ExampleCall1Sender');
        expect(logs[0].returnValues.sender).toBe(sender);
        expect(logs[1].event).toBe('ExampleCall2Sender');
        expect(logs[1].returnValues.sender).toBe(sender);
      });
    });

    describe('delegateBatch()', () => {
      it('expect to send single call', async () => {
        const sender = addresses[1];
        const to = [relayedMock.address];
        const data = [
          relayedMock
            .contract
            .methods
            .exampleCall1()
            .encodeABI(),
        ];

        const typedData = buildTypedData(
          relay.address,
          'DelegatedBatch', [
            {
              name: 'to',
              type: 'address[]',
            },
            {
              name: 'data',
              type: 'bytes[]',
            },
            {
              name: 'gasPrice',
              type: 'uint256',
            },
          ], {
            to,
            data,
            gasPrice: GAS_PRICE,
          },
        );

        const senderSignature = await signTypedData(typedData, sender);

        const output = await relay.delegateBatch(
          sender,
          to,
          data,
          senderSignature,
        );

        logGasUsed(output);

        const logs = await relayedMock.contract.getPastEvents('allEvents');

        expect(logs[0].event).toBe('ExampleCall1Sender');
        expect(logs[0].returnValues.sender).toBe(sender);
      });

      it('expect to send multiple calls', async () => {
        const sender = addresses[1];
        const to = [relayedMock.address, relayedMock.address];
        const data = [
          relayedMock
            .contract
            .methods
            .exampleCall1()
            .encodeABI(),
          relayedMock
            .contract
            .methods
            .exampleCall2(1)
            .encodeABI(),
        ];

        const typedData = buildTypedData(
          relay.address,
          'DelegatedBatch', [
            {
              name: 'to',
              type: 'address[]',
            },
            {
              name: 'data',
              type: 'bytes[]',
            },
            {
              name: 'gasPrice',
              type: 'uint256',
            },
          ], {
            to,
            data,
            gasPrice: GAS_PRICE,
          },
        );

        const senderSignature = await signTypedData(typedData, sender);

        const output = await relay.delegateBatch(
          sender,
          to,
          data,
          senderSignature,
        );

        logGasUsed(output);

        const logs = await relayedMock.contract.getPastEvents('allEvents');

        expect(logs[0].event).toBe('ExampleCall1Sender');
        expect(logs[0].returnValues.sender).toBe(sender);
        expect(logs[1].event).toBe('ExampleCall2Sender');
        expect(logs[1].returnValues.sender).toBe(sender);
      });
    });
  });
});
