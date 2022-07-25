"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const shared_1 = require("../shared");
const { getSigners } = hardhat_1.ethers;
describe('GatewayRecipient (using mock)', () => {
    let signers;
    let gateway;
    let sender;
    let gatewayRecipientMock;
    before(async () => {
        signers = await getSigners();
        gateway = signers.pop();
        sender = signers.pop();
        gatewayRecipientMock = await (0, shared_1.deployContract)('GatewayRecipientMock', [gateway.address], gateway);
    });
    context('gateway()', () => {
        it('expect to return correct gateway address', async () => {
            await expect(gatewayRecipientMock.gateway()).resolves.toBe(gateway.address);
        });
    });
    context('emitContext()', () => {
        let expectedData;
        before(() => {
            expectedData = gatewayRecipientMock.interface.encodeFunctionData('emitContext');
        });
        it('expect to emit msg.sender', async () => {
            const { events: [event], } = await (0, shared_1.processTx)(gatewayRecipientMock.connect(sender).emitContext());
            expect(event.event).toBe('Context');
            expect(event.args.account).toBe(sender.address);
            expect(event.args.sender).toBe(sender.address);
            expect(event.args.data).toBe(expectedData);
        });
        it('expect to emit account and sender', async () => {
            const account = (0, shared_1.randomAddress)();
            const sender = (0, shared_1.randomAddress)();
            const data = (0, shared_1.concatHex)(expectedData, account, sender);
            const { logs: [log], } = await (0, shared_1.processTx)(gatewayRecipientMock.connect(gateway).fallback({
                data,
            }));
            const event = gatewayRecipientMock.interface.parseLog(log);
            expect(event.name).toBe('Context');
            expect(event.args.account).toBe(account);
            expect(event.args.sender).toBe(sender);
            expect(event.args.data).toBe(expectedData);
        });
    });
});
