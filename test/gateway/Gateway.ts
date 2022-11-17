import { ethers } from 'hardhat';
import { BigNumberish, BytesLike } from 'ethers';
import {
  ExternalAccountRegistry,
  Gateway,
  GatewayRecipientMock,
  PersonalAccountRegistry,
} from '../../typings';
import {
  GAS_PRICE,
  SignerWithAddress,
  createMessagePayloadFactory,
  processTx,
  randomAddress,
  getNextNonce,
  MessagePayloadFactory,
  deployContract,
} from '../shared';

const { getSigners } = ethers;

describe('Gateway', () => {
  let signers: SignerWithAddress[];
  let externalAccountRegistry: ExternalAccountRegistry;
  let gateway: Gateway;
  let gatewayRecipientMock: GatewayRecipientMock;
  let personalAccountRegistry: PersonalAccountRegistry;

  let to: string;
  let data: string;

  let delegatedBatchMessagePayloadFactory: MessagePayloadFactory<{
    account: string;
    nonce: BigNumberish;
    to: string[];
    data: BytesLike[];
  }>;
  let delegatedBatchWithGasPriceMessagePayloadFactory: MessagePayloadFactory<{
    account: string;
    nonce: BigNumberish;
    to: string[];
    data: BytesLike[];
    gasPrice: BigNumberish;
  }>;

  before(async () => {
    signers = await getSigners();

    externalAccountRegistry = await deployContract('ExternalAccountRegistry');
    gateway = await deployContract('Gateway');
    gatewayRecipientMock = await deployContract('GatewayRecipientMock', [
      gateway.address,
    ]);
    personalAccountRegistry = await deployContract('PersonalAccountRegistry');

    await processTx(
      gateway.initialize(
        externalAccountRegistry.address,
        personalAccountRegistry.address,
      ),
    );

    await processTx(
      personalAccountRegistry.initialize([], randomAddress(), gateway.address),
    );

    to = gatewayRecipientMock.address;
    data = gatewayRecipientMock.interface.encodeFunctionData('emitContext');

    delegatedBatchMessagePayloadFactory = createMessagePayloadFactory(
      gateway,
      'DelegatedBatch',
      [
        {
          type: 'address',
          name: 'account',
        },
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
      ],
    );

    delegatedBatchWithGasPriceMessagePayloadFactory = createMessagePayloadFactory(
      gateway,
      'DelegatedBatchWithGasPrice',
      [
        {
          type: 'address',
          name: 'account',
        },
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
      ],
    );
  });

  context('sendBatch()', () => {
    let sender: SignerWithAddress;

    before(() => {
      sender = signers.pop();
      gateway = gateway.connect(sender);
    });

    it('expect to send single call', async () => {
      const {
        logs: [log],
      } = await processTx(gateway.sendBatch([to], [data]));

      const event = gatewayRecipientMock.interface.parseLog(log);

      expect(event.args.account).toBe(sender.address);
      expect(event.args.sender).toBe(sender.address);
    });

    it('expect to send multiple calls', async () => {
      const { logs } = await processTx(
        gateway.sendBatch([to, to], [data, data]),
      );

      const events = logs.map(log =>
        gatewayRecipientMock.interface.parseLog(log),
      );

      expect(events[0].args.account).toBe(sender.address);
      expect(events[0].args.sender).toBe(sender.address);
      expect(events[1].args.account).toBe(sender.address);
      expect(events[1].args.sender).toBe(sender.address);
    });
  });

  context('sendBatchFromAccount()', () => {
    context('# account ownership stored in AccountOwnerRegistry', () => {
      let account: SignerWithAddress;
      let sender: SignerWithAddress;

      before(async () => {
        account = signers.pop();
        sender = signers.pop();
        gateway = gateway.connect(sender);

        await processTx(
          externalAccountRegistry
            .connect(account)
            .addAccountOwner(sender.address),
        );
      });

      it('expect to send single call', async () => {
        const {
          logs: [log],
        } = await processTx(
          gateway.sendBatchFromAccount(account.address, [to], [data]),
        );

        const event = gatewayRecipientMock.interface.parseLog(log);

        expect(event.args.account).toBe(account.address);
        expect(event.args.sender).toBe(sender.address);
      });

      it('expect to revert when sender is not an account owner', async () => {
        const account = randomAddress();

        await expect(
          gateway.sendBatchFromAccount(account, [to], [data]),
        ).rejects.toThrow(/revert/);
      });
    });

    context('# account ownership stored in PersonalAccountRegistry', () => {
      let account: string;
      let sender: SignerWithAddress;

      before(async () => {
        sender = signers.pop();
        gateway = gateway.connect(sender);
        account = await personalAccountRegistry.computeAccountAddress(
          sender.address,
        );
      });

      it('expect to send single call', async () => {
        const {
          logs: [log],
        } = await processTx(
          gateway.sendBatchFromAccount(account, [to], [data]),
        );

        const event = gatewayRecipientMock.interface.parseLog(log);

        expect(event.args.account).toBe(account);
        expect(event.args.sender).toBe(sender.address);
      });
    });
  });

  context('delegateBatch()', () => {
    let account: SignerWithAddress;
    let sender: SignerWithAddress;

    before(async () => {
      account = signers.pop();
      sender = signers.pop();
      gateway = gateway.connect(signers.pop());

      await processTx(
        externalAccountRegistry
          .connect(account)
          .addAccountOwner(sender.address),
      );
    });

    it('expect to send single call', async () => {
      const nonce = getNextNonce();
      const senderSignature = await delegatedBatchMessagePayloadFactory.sign(
        sender,
        {
          account: account.address,
          nonce,
          to: [to],
          data: [data],
        },
      );

      const {
        logs: [log],
      } = await processTx(
        gateway.delegateBatch(
          account.address,
          nonce,
          [to],
          [data],
          senderSignature,
        ),
      );

      const event = gatewayRecipientMock.interface.parseLog(log);

      expect(event.args.account).toBe(account.address);
      expect(event.args.sender).toBe(sender.address);
    });

    it('expect to revert on invalid signature', async () => {
      const nonce = 0; // invalid nonce
      const senderSignature = await delegatedBatchMessagePayloadFactory.sign(
        sender,
        {
          account: account.address,
          nonce,
          to: [to],
          data: [data],
        },
      );

      await expect(
        gateway.delegateBatch(
          account.address,
          nonce,
          [to],
          [data],
          senderSignature,
        ),
      ).rejects.toThrow(/revert/);
    });
  });

  context('delegateBatchWithGasPrice()', () => {
    let account: SignerWithAddress;
    let sender: SignerWithAddress;

    before(async () => {
      account = signers.pop();
      sender = signers.pop();
      gateway = gateway.connect(signers.pop());

      await processTx(
        externalAccountRegistry
          .connect(account)
          .addAccountOwner(sender.address),
      );
    });

    it('expect to send single call', async () => {
      const nonce = getNextNonce();
      const senderSignature = await delegatedBatchWithGasPriceMessagePayloadFactory.sign(
        sender,
        {
          account: account.address,
          nonce,
          to: [to],
          data: [data],
          gasPrice: GAS_PRICE,
        },
      );

      const {
        logs: [log],
      } = await processTx(
        gateway.delegateBatchWithGasPrice(
          account.address,
          nonce,
          [to],
          [data],
          senderSignature,
          {
            gasPrice: GAS_PRICE,
          },
        ),
      );

      const event = gatewayRecipientMock.interface.parseLog(log);

      expect(event.args.account).toBe(account.address);
      expect(event.args.sender).toBe(sender.address);
    });
  });

  context('delegateBatches()', () => {
    let from: SignerWithAddress;
    let account: SignerWithAddress;
    let sender: SignerWithAddress;

    before(async () => {
      from = signers.pop();
      account = signers.pop();
      sender = signers.pop();
      gateway = gateway.connect(from);

      await processTx(
        externalAccountRegistry
          .connect(account)
          .addAccountOwner(sender.address),
      );
    });

    it('expect to send single batch', async () => {
      const nonce = getNextNonce();
      const senderSignature = await delegatedBatchMessagePayloadFactory.sign(
        sender,
        {
          account: account.address,
          nonce,
          to: [to],
          data: [data],
        },
      );

      const batch = gateway.interface.encodeFunctionData('delegateBatch', [
        account.address,
        nonce,
        [to],
        [data],
        senderSignature,
      ]);

      const { events } = await processTx(
        gateway.delegateBatches([batch], false),
      );

      const event = events.find(({ event }) => event === 'BatchDelegated');

      expect(event.args.sender).toBe(from.address);
      expect(event.args.batch).toBe(batch);
      expect(event.args.succeeded).toBeTruthy();
    });

    it('expect to send multiple batch', async () => {
      const batches = [];
      const batchesCount = 4;

      for (let index = 0; index < batchesCount; index += 1) {
        const nonce = getNextNonce();
        const senderSignature = await delegatedBatchMessagePayloadFactory.sign(
          sender,
          {
            account: account.address,
            nonce,
            to: [to],
            data: [data],
          },
        );

        batches.push(
          gateway.interface.encodeFunctionData('delegateBatch', [
            account.address,
            nonce,
            [to],
            [data],
            senderSignature,
          ]),
        );
      }

      let { events } = await processTx(gateway.delegateBatches(batches, false));

      events = events.filter(({ event }) => event === 'BatchDelegated');

      for (let index = 0; index < batchesCount; index += 1) {
        expect(events[index].args.sender).toBe(from.address);
        expect(events[index].args.batch).toBe(batches[index]);
        expect(events[index].args.succeeded).toBeTruthy();
      }
    });

    it('expect to revert when all batches fails', async () => {
      const batches = [];
      const batchesCount = 4;

      for (let index = 0; index < batchesCount; index += 1) {
        const nonce = 0;
        const senderSignature = await delegatedBatchMessagePayloadFactory.sign(
          sender,
          {
            account: account.address,
            nonce,
            to: [to],
            data: [data],
          },
        );

        batches.push(
          gateway.interface.encodeFunctionData('delegateBatch', [
            account.address,
            nonce,
            [to],
            [data],
            senderSignature,
          ]),
        );
      }

      await expect(gateway.delegateBatches(batches, false)).rejects.toThrow(
        /revert/,
      );
    });

    context('# revertOnFailure flag', () => {
      const createBatches = async () => {
        const result: string[] = [];

        const nonce = getNextNonce();

        const senderSignature = await delegatedBatchMessagePayloadFactory.sign(
          sender,
          {
            account: account.address,
            nonce,
            to: [to],
            data: [data],
          },
        );

        result.push(
          gateway.interface.encodeFunctionData('delegateBatch', [
            account.address,
            nonce,
            [to],
            [data],
            senderSignature,
          ]),
        );

        {
          const nonce = 0; // invalid nonce
          const senderSignature = await delegatedBatchMessagePayloadFactory.sign(
            sender,
            {
              account: account.address,
              nonce,
              to: [to],
              data: [data],
            },
          );

          result.push(
            gateway.interface.encodeFunctionData('delegateBatch', [
              account.address,
              nonce,
              [to],
              [data],
              senderSignature,
            ]),
          );
        }

        return result;
      };

      it('expect to revert on batch failure when revertOnFailure is set to true', async () => {
        const batches = await createBatches();

        await expect(gateway.delegateBatches(batches, true)).rejects.toThrow(
          /revert/,
        );
      });

      it('expect to emit event when revertOnFailure is set to false', async () => {
        const batches = await createBatches();

        let { events } = await processTx(
          gateway.delegateBatches(batches, false),
        );

        events = events.filter(({ event }) => event === 'BatchDelegated');

        expect(events[0].args.sender).toBe(from.address);
        expect(events[0].args.batch).toBe(batches[0]);
        expect(events[0].args.succeeded).toBeTruthy();

        expect(events[1].args.sender).toBe(from.address);
        expect(events[1].args.batch).toBe(batches[1]);
        expect(events[1].args.succeeded).toBeFalsy();
      });
    });
  });

  context('hashDelegatedBatch()', () => {
    it('expect to return correct hash', async () => {
      const message = {
        account: randomAddress(),
        nonce: 100,
        to: [to],
        data: [data],
      };

      const expected = delegatedBatchMessagePayloadFactory.hash(message);

      await expect(gateway.hashDelegatedBatch(message)).resolves.toBe(expected);
    });
  });

  context('hashDelegatedBatchWithGasPrice()', () => {
    it('expect to return correct hash', async () => {
      const message = {
        account: randomAddress(),
        nonce: 100,
        to: [to],
        data: [data],
        gasPrice: GAS_PRICE,
      };

      const expected = delegatedBatchWithGasPriceMessagePayloadFactory.hash(
        message,
      );

      await expect(
        gateway.hashDelegatedBatchWithGasPrice(message),
      ).resolves.toBe(expected);
    });
  });

  context('getAccountNextNonce()', () => {
    let account: SignerWithAddress;
    let nonce: number;

    before(async () => {
      const sender = signers.pop();
      account = signers.pop();
      gateway = gateway.connect(signers.pop());

      await processTx(
        externalAccountRegistry
          .connect(account)
          .addAccountOwner(sender.address),
      );
      nonce = getNextNonce();

      const senderSignature = await delegatedBatchMessagePayloadFactory.sign(
        sender,
        {
          account: account.address,
          nonce,
          to: [to],
          data: [data],
        },
      );

      await processTx(
        gateway.delegateBatch(
          account.address,
          nonce,
          [to],
          [data],
          senderSignature,
        ),
      );
    });

    it('expect to return correct nonce', async () => {
      await expect(
        gateway.getAccountNextNonce(account.address),
      ).resolves.toBeBN(nonce + 1);
    });

    it('expect to return 1 for new account', async () => {
      await expect(
        gateway.getAccountNextNonce(randomAddress()),
      ).resolves.toBeBN(1);
    });
  });
});