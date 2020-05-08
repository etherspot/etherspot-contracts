/* eslint-env node, mocha */

const expect = require('expect');
const {
  logGasUsed,
} = require('../utils');

const RelayedMock = artifacts.require('RelayedMock');

contract('RelayedMock (using mock)', (addresses) => {
  const from = addresses[0];
  const relay = addresses[1];
  let relayedMock;

  before(async () => {
    relayedMock = await RelayedMock.new();

    await relayedMock.initialize(
      relay,
    );
  });

  context('views', () => {
    describe('relay()', () => {
      it('expect to return relay address', async () => {
        await expect(relayedMock.relay()).resolves.toBe(relay);
      });
    });
  });

  context('methods', () => {
    context('calls without relayer', () => {
      it('expect to call example #1', async () => {
        const output = await relayedMock.exampleCall1();

        logGasUsed(output);

        const { logs: [log] } = output;

        expect(log.args.sender).toBe(from);
      });

      it('expect to call example #2', async () => {
        const output = await relayedMock.exampleCall2(1);

        logGasUsed(output);

        const { logs: [log] } = output;

        expect(log.args.sender).toBe(from);
      });
    });
  });
});
