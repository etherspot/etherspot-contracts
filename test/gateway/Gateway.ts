import { ethers } from 'hardhat';
import { BigNumberish, BytesLike } from 'ethers';
import {
  AccountOwnerRegistry,
  Gateway,
  GatewayRecipientMock,
  PersonalAccountRegistry,
} from '../../types';
import {
  GAS_PRICE,
  SignerWithAddress,
  TYPED_DATA_DOMAIN_NAME_HASH,
  TYPED_DATA_DOMAIN_SALT,
  TYPED_DATA_DOMAIN_VERSION_HASH,
  createTypedDataFactory,
  processTx,
  randomAddress,
  getNextNonce,
  TypedDataFactory,
} from '../shared';

const { getSigners } = ethers;

describe('Gateway', () => {
  let signers: SignerWithAddress[];
  let accountOwnerRegistry: AccountOwnerRegistry;
  let gateway: Gateway;
  let gatewayRecipientMock: GatewayRecipientMock;
  let personalAccountRegistry: PersonalAccountRegistry;

  let to: string;
  let data: string;

  let delegatedBatchTypedDataFactory: TypedDataFactory<{
    nonce: BigNumberish;
    to: string[];
    data: BytesLike[];
  }>;
  let delegatedBatchWithGasPriceTypedDataFactory: TypedDataFactory<{
    nonce: BigNumberish;
    to: string[];
    data: BytesLike[];
    gasPrice: BigNumberish;
  }>;

  before(async () => {
    signers = await getSigners();

    accountOwnerRegistry = (await ethers
      .getContractFactory('AccountOwnerRegistry')
      .then(factory => factory.deploy())) as AccountOwnerRegistry;

    gateway = (await ethers
      .getContractFactory('Gateway')
      .then(factory => factory.deploy())) as Gateway;

    gatewayRecipientMock = (await ethers
      .getContractFactory('GatewayRecipientMock')
      .then(factory =>
        factory.deploy(gateway.address),
      )) as GatewayRecipientMock;

    personalAccountRegistry = (await ethers
      .getContractFactory('PersonalAccountRegistry')
      .then(factory => factory.deploy())) as PersonalAccountRegistry;

    await processTx(
      gateway.initialize(
        accountOwnerRegistry.address,
        personalAccountRegistry.address,
        TYPED_DATA_DOMAIN_NAME_HASH,
        TYPED_DATA_DOMAIN_VERSION_HASH,
        TYPED_DATA_DOMAIN_SALT,
      ),
    );

    await processTx(personalAccountRegistry.initialize(gateway.address));

    to = gatewayRecipientMock.address;
    data = gatewayRecipientMock.interface.encodeFunctionData('emitContext');

    delegatedBatchTypedDataFactory = createTypedDataFactory(
      gateway,
      'DelegatedBatch',
      [
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

    delegatedBatchWithGasPriceTypedDataFactory = createTypedDataFactory(
      gateway,
      'DelegatedBatchWithGasPrice',
      [
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
          accountOwnerRegistry.connect(account).addAccountOwner(sender.address),
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
        accountOwnerRegistry.connect(account).addAccountOwner(sender.address),
      );
    });

    it('expect to send single call', async () => {
      const nonce = getNextNonce();
      const senderSignature = await delegatedBatchTypedDataFactory.signTypeData(
        sender,
        {
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
      const senderSignature = await delegatedBatchTypedDataFactory.signTypeData(
        sender,
        {
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
        accountOwnerRegistry.connect(account).addAccountOwner(sender.address),
      );
    });

    it('expect to send single call', async () => {
      const nonce = getNextNonce();
      const senderSignature = await delegatedBatchWithGasPriceTypedDataFactory.signTypeData(
        sender,
        {
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
        accountOwnerRegistry.connect(account).addAccountOwner(sender.address),
      );
    });

    it('expect to send single batch', async () => {
      const nonce = getNextNonce();
      const senderSignature = await delegatedBatchTypedDataFactory.signTypeData(
        sender,
        {
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
        const senderSignature = await delegatedBatchTypedDataFactory.signTypeData(
          sender,
          {
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

    context('# revertOnFailure flag is set to true', () => {
      it('expect to revert on batch failure', async () => {
        const nonce = 0; // invalid nonce
        const senderSignature = await delegatedBatchTypedDataFactory.signTypeData(
          sender,
          {
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

        await expect(gateway.delegateBatches([batch], true)).rejects.toThrow(
          /revert/,
        );
      });
    });

    context('# revertOnFailure flag is set to false', () => {
      it('expect to emit event on batch failure', async () => {
        const nonce = 0; // invalid nonce
        const senderSignature = await delegatedBatchTypedDataFactory.signTypeData(
          sender,
          {
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
        expect(event.args.succeeded).toBeFalsy();
      });
    });
  });

  context('hashDelegatedBatch()', () => {
    it('expect to return correct hash', async () => {
      const message = {
        nonce: 100,
        to: [to],
        data: [data],
      };

      const typedDataHash = delegatedBatchTypedDataFactory.hashTypedData(
        message,
      );

      await expect(gateway.hashDelegatedBatch(message)).resolves.toBe(
        typedDataHash,
      );
    });
  });

  context('hashDelegatedBatchWithGasPrice()', () => {
    it('expect to return correct hash', async () => {
      const message = {
        nonce: 100,
        to: [to],
        data: [data],
        gasPrice: GAS_PRICE,
      };

      const typedDataHash = delegatedBatchWithGasPriceTypedDataFactory.hashTypedData(
        message,
      );

      await expect(
        gateway.hashDelegatedBatchWithGasPrice(message),
      ).resolves.toBe(typedDataHash);
    });
  });
});
