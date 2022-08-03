"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const shared_1 = require("../shared");
const { getSigners } = hardhat_1.ethers;
describe('Gateway', () => {
    let signers;
    let externalAccountRegistry;
    let gateway;
    let gatewayRecipientMock;
    let personalAccountRegistry;
    let to;
    let data;
    let delegatedBatchMessagePayloadFactory;
    let delegatedBatchWithGasPriceMessagePayloadFactory;
    before(async () => {
        signers = await getSigners();
        externalAccountRegistry = await (0, shared_1.deployContract)('ExternalAccountRegistry');
        gateway = await (0, shared_1.deployContract)('Gateway');
        gatewayRecipientMock = await (0, shared_1.deployContract)('GatewayRecipientMock', [
            gateway.address,
        ]);
        personalAccountRegistry = await (0, shared_1.deployContract)('PersonalAccountRegistry');
        await (0, shared_1.processTx)(gateway.initialize(externalAccountRegistry.address, personalAccountRegistry.address));
        await (0, shared_1.processTx)(personalAccountRegistry.initialize([], (0, shared_1.randomAddress)(), gateway.address));
        to = gatewayRecipientMock.address;
        data = gatewayRecipientMock.interface.encodeFunctionData('emitContext');
        delegatedBatchMessagePayloadFactory = (0, shared_1.createMessagePayloadFactory)(gateway, 'DelegatedBatch', [
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
        ]);
        delegatedBatchWithGasPriceMessagePayloadFactory = (0, shared_1.createMessagePayloadFactory)(gateway, 'DelegatedBatchWithGasPrice', [
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
        ]);
    });
    context('sendBatch()', () => {
        let sender;
        before(() => {
            sender = signers.pop();
            gateway = gateway.connect(sender);
        });
        it('expect to send single call', async () => {
            const { logs: [log], } = await (0, shared_1.processTx)(gateway.sendBatch([to], [data]));
            const event = gatewayRecipientMock.interface.parseLog(log);
            expect(event.args.account).toBe(sender.address);
            expect(event.args.sender).toBe(sender.address);
        });
        it('expect to send multiple calls', async () => {
            const { logs } = await (0, shared_1.processTx)(gateway.sendBatch([to, to], [data, data]));
            const events = logs.map(log => gatewayRecipientMock.interface.parseLog(log));
            expect(events[0].args.account).toBe(sender.address);
            expect(events[0].args.sender).toBe(sender.address);
            expect(events[1].args.account).toBe(sender.address);
            expect(events[1].args.sender).toBe(sender.address);
        });
    });
    context('sendBatchFromAccount()', () => {
        context('# account ownership stored in AccountOwnerRegistry', () => {
            let account;
            let sender;
            before(async () => {
                account = signers.pop();
                sender = signers.pop();
                gateway = gateway.connect(sender);
                await (0, shared_1.processTx)(externalAccountRegistry
                    .connect(account)
                    .addAccountOwner(sender.address));
            });
            it('expect to send single call', async () => {
                const { logs: [log], } = await (0, shared_1.processTx)(gateway.sendBatchFromAccount(account.address, [to], [data]));
                const event = gatewayRecipientMock.interface.parseLog(log);
                expect(event.args.account).toBe(account.address);
                expect(event.args.sender).toBe(sender.address);
            });
            it('expect to revert when sender is not an account owner', async () => {
                const account = (0, shared_1.randomAddress)();
                await expect(gateway.sendBatchFromAccount(account, [to], [data])).rejects.toThrow(/revert/);
            });
        });
        context('# account ownership stored in PersonalAccountRegistry', () => {
            let account;
            let sender;
            before(async () => {
                sender = signers.pop();
                gateway = gateway.connect(sender);
                account = await personalAccountRegistry.computeAccountAddress(sender.address);
            });
            it('expect to send single call', async () => {
                const { logs: [log], } = await (0, shared_1.processTx)(gateway.sendBatchFromAccount(account, [to], [data]));
                const event = gatewayRecipientMock.interface.parseLog(log);
                expect(event.args.account).toBe(account);
                expect(event.args.sender).toBe(sender.address);
            });
        });
    });
    context('delegateBatch()', () => {
        let account;
        let sender;
        before(async () => {
            account = signers.pop();
            sender = signers.pop();
            gateway = gateway.connect(signers.pop());
            await (0, shared_1.processTx)(externalAccountRegistry
                .connect(account)
                .addAccountOwner(sender.address));
        });
        it('expect to send single call', async () => {
            const nonce = (0, shared_1.getNextNonce)();
            const senderSignature = await delegatedBatchMessagePayloadFactory.sign(sender, {
                account: account.address,
                nonce,
                to: [to],
                data: [data],
            });
            const { logs: [log], } = await (0, shared_1.processTx)(gateway.delegateBatch(account.address, nonce, [to], [data], senderSignature));
            const event = gatewayRecipientMock.interface.parseLog(log);
            expect(event.args.account).toBe(account.address);
            expect(event.args.sender).toBe(sender.address);
        });
        it('expect to revert on invalid signature', async () => {
            const nonce = 0;
            const senderSignature = await delegatedBatchMessagePayloadFactory.sign(sender, {
                account: account.address,
                nonce,
                to: [to],
                data: [data],
            });
            await expect(gateway.delegateBatch(account.address, nonce, [to], [data], senderSignature)).rejects.toThrow(/revert/);
        });
    });
    context('delegateBatchWithGasPrice()', () => {
        let account;
        let sender;
        before(async () => {
            account = signers.pop();
            sender = signers.pop();
            gateway = gateway.connect(signers.pop());
            await (0, shared_1.processTx)(externalAccountRegistry
                .connect(account)
                .addAccountOwner(sender.address));
        });
        it('expect to send single call', async () => {
            const nonce = (0, shared_1.getNextNonce)();
            const senderSignature = await delegatedBatchWithGasPriceMessagePayloadFactory.sign(sender, {
                account: account.address,
                nonce,
                to: [to],
                data: [data],
                gasPrice: shared_1.GAS_PRICE,
            });
            const { logs: [log], } = await (0, shared_1.processTx)(gateway.delegateBatchWithGasPrice(account.address, nonce, [to], [data], senderSignature, {
                gasPrice: shared_1.GAS_PRICE,
            }));
            const event = gatewayRecipientMock.interface.parseLog(log);
            expect(event.args.account).toBe(account.address);
            expect(event.args.sender).toBe(sender.address);
        });
    });
    context('delegateBatches()', () => {
        let from;
        let account;
        let sender;
        before(async () => {
            from = signers.pop();
            account = signers.pop();
            sender = signers.pop();
            gateway = gateway.connect(from);
            await (0, shared_1.processTx)(externalAccountRegistry
                .connect(account)
                .addAccountOwner(sender.address));
        });
        it('expect to send single batch', async () => {
            const nonce = (0, shared_1.getNextNonce)();
            const senderSignature = await delegatedBatchMessagePayloadFactory.sign(sender, {
                account: account.address,
                nonce,
                to: [to],
                data: [data],
            });
            const batch = gateway.interface.encodeFunctionData('delegateBatch', [
                account.address,
                nonce,
                [to],
                [data],
                senderSignature,
            ]);
            const { events } = await (0, shared_1.processTx)(gateway.delegateBatches([batch], false));
            const event = events.find(({ event }) => event === 'BatchDelegated');
            expect(event.args.sender).toBe(from.address);
            expect(event.args.batch).toBe(batch);
            expect(event.args.succeeded).toBeTruthy();
        });
        it('expect to send multiple batch', async () => {
            const batches = [];
            const batchesCount = 4;
            for (let index = 0; index < batchesCount; index += 1) {
                const nonce = (0, shared_1.getNextNonce)();
                const senderSignature = await delegatedBatchMessagePayloadFactory.sign(sender, {
                    account: account.address,
                    nonce,
                    to: [to],
                    data: [data],
                });
                batches.push(gateway.interface.encodeFunctionData('delegateBatch', [
                    account.address,
                    nonce,
                    [to],
                    [data],
                    senderSignature,
                ]));
            }
            let { events } = await (0, shared_1.processTx)(gateway.delegateBatches(batches, false));
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
                const senderSignature = await delegatedBatchMessagePayloadFactory.sign(sender, {
                    account: account.address,
                    nonce,
                    to: [to],
                    data: [data],
                });
                batches.push(gateway.interface.encodeFunctionData('delegateBatch', [
                    account.address,
                    nonce,
                    [to],
                    [data],
                    senderSignature,
                ]));
            }
            await expect(gateway.delegateBatches(batches, false)).rejects.toThrow(/revert/);
        });
        context('# revertOnFailure flag', () => {
            const createBatches = async () => {
                const result = [];
                const nonce = (0, shared_1.getNextNonce)();
                const senderSignature = await delegatedBatchMessagePayloadFactory.sign(sender, {
                    account: account.address,
                    nonce,
                    to: [to],
                    data: [data],
                });
                result.push(gateway.interface.encodeFunctionData('delegateBatch', [
                    account.address,
                    nonce,
                    [to],
                    [data],
                    senderSignature,
                ]));
                {
                    const nonce = 0;
                    const senderSignature = await delegatedBatchMessagePayloadFactory.sign(sender, {
                        account: account.address,
                        nonce,
                        to: [to],
                        data: [data],
                    });
                    result.push(gateway.interface.encodeFunctionData('delegateBatch', [
                        account.address,
                        nonce,
                        [to],
                        [data],
                        senderSignature,
                    ]));
                }
                return result;
            };
            it('expect to revert on batch failure when revertOnFailure is set to true', async () => {
                const batches = await createBatches();
                await expect(gateway.delegateBatches(batches, true)).rejects.toThrow(/revert/);
            });
            it('expect to emit event when revertOnFailure is set to false', async () => {
                const batches = await createBatches();
                let { events } = await (0, shared_1.processTx)(gateway.delegateBatches(batches, false));
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
                account: (0, shared_1.randomAddress)(),
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
                account: (0, shared_1.randomAddress)(),
                nonce: 100,
                to: [to],
                data: [data],
                gasPrice: shared_1.GAS_PRICE,
            };
            const expected = delegatedBatchWithGasPriceMessagePayloadFactory.hash(message);
            await expect(gateway.hashDelegatedBatchWithGasPrice(message)).resolves.toBe(expected);
        });
    });
    context('getAccountNextNonce()', () => {
        let account;
        let nonce;
        before(async () => {
            const sender = signers.pop();
            account = signers.pop();
            gateway = gateway.connect(signers.pop());
            await (0, shared_1.processTx)(externalAccountRegistry
                .connect(account)
                .addAccountOwner(sender.address));
            nonce = (0, shared_1.getNextNonce)();
            const senderSignature = await delegatedBatchMessagePayloadFactory.sign(sender, {
                account: account.address,
                nonce,
                to: [to],
                data: [data],
            });
            await (0, shared_1.processTx)(gateway.delegateBatch(account.address, nonce, [to], [data], senderSignature));
        });
        it('expect to return correct nonce', async () => {
            await expect(gateway.getAccountNextNonce(account.address)).resolves.toBeBN(nonce + 1);
        });
        it('expect to return 1 for new account', async () => {
            await expect(gateway.getAccountNextNonce((0, shared_1.randomAddress)())).resolves.toBeBN(1);
        });
    });
});
