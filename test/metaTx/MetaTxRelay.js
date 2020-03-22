/* eslint-env node, mocha */

const expect = require('expect');
const { CHAIN_ID, GAS_PRICE } = require('../constants');
const {
  logGasUsed,
} = require('../utils');

const Relay = artifacts.require('MetaTxRelay');
const RelayedMock = artifacts.require('MetaTxRelayedMock');

contract('MetaTxRelay', (addresses) => {
  const {
    eth: {
      sign,
      abi,
    },
    utils: {
      sha3,
    },
  } = web3;

  context('methods', () => {
    describe('relayCalls()', () => {
      let relay;
      let relayedMock;

      beforeEach(async () => {
        relay = await Relay.new();
        relayedMock = await RelayedMock.new();

        await relayedMock.initialize(
          relay.address,
        );
      });

      it('expect to relay single call', async () => {
        const sender = addresses[1];
        const calls = [
          relayedMock
            .contract
            .methods
            .exampleCall1()
            .encodeABI(),
        ];

        const messageHash = sha3(
          abi.encodeParameters([
            'uint256',
            'address',
            'address',
            'bytes[]',
            'uint256',
          ], [
            CHAIN_ID,
            relay.address,
            relayedMock.address,
            calls,
            GAS_PRICE,
          ]),
        );
        const senderSignature = await sign(messageHash, sender);

        const output = await relay.relayCalls(
          relayedMock.address,
          calls,
          senderSignature,
        );

        logGasUsed(output);

        const logs = await relayedMock.contract.getPastEvents('allEvents');

        expect(logs[0].event).toBe('ExampleCall1Sender');
        expect(logs[0].returnValues.sender).toBe(sender);
      });

      it('expect to relay multiple calls', async () => {
        const sender = addresses[1];
        const calls = [
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

        const messageHash = sha3(
          abi.encodeParameters([
            'uint256',
            'address',
            'address',
            'bytes[]',
            'uint256',
          ], [
            CHAIN_ID,
            relay.address,
            relayedMock.address,
            calls,
            GAS_PRICE,
          ]),
        );
        const senderSignature = await sign(messageHash, sender);

        const output = await relay.relayCalls(
          relayedMock.address,
          calls,
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
