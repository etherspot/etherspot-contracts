import { ethers } from 'hardhat';
import { GatewayRecipientMock } from '../../typings';
import {
  SignerWithAddress,
  randomAddress,
  processTx,
  concatHex,
  deployContract,
} from '../shared';

const { getSigners } = ethers;

describe('GatewayRecipient (using mock)', () => {
  let signers: SignerWithAddress[];
  let gateway: SignerWithAddress;
  let sender: SignerWithAddress;
  let gatewayRecipientMock: GatewayRecipientMock;

  before(async () => {
    signers = await getSigners();
    gateway = signers.pop();
    sender = signers.pop();

    gatewayRecipientMock = await deployContract(
      'GatewayRecipientMock',
      [gateway.address],
      gateway,
    );
  });

  context('gateway()', () => {
    it('expect to return correct gateway address', async () => {
      await expect(gatewayRecipientMock.gateway()).resolves.toBe(
        gateway.address,
      );
    });
  });

  context('emitContext()', () => {
    let expectedData: string;

    before(() => {
      expectedData = gatewayRecipientMock.interface.encodeFunctionData(
        'emitContext',
      );
    });

    it('expect to emit msg.sender', async () => {
      const {
        events: [event],
      } = await processTx(gatewayRecipientMock.connect(sender).emitContext());

      expect(event.event).toBe('Context');
      expect(event.args.account).toBe(sender.address);
      expect(event.args.sender).toBe(sender.address);
      expect(event.args.data).toBe(expectedData);
    });

    it('expect to emit account and sender', async () => {
      const account = randomAddress();
      const sender = randomAddress();

      const data = concatHex(expectedData, account, sender);

      const {
        logs: [log],
      } = await processTx(
        gatewayRecipientMock.connect(gateway).fallback({
          data,
        }),
      );

      const event = gatewayRecipientMock.interface.parseLog(log);

      expect(event.name).toBe('Context');
      expect(event.args.account).toBe(account);
      expect(event.args.sender).toBe(sender);
      expect(event.args.data).toBe(expectedData);
    });
  });
});
