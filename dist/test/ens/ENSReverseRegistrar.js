"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const ethers_1 = require("ethers");
const shared_1 = require("../shared");
const { getSigners } = hardhat_1.ethers;
describe('ENSReverseRegistrar', () => {
    let signers;
    let ensController;
    let ensRegistry;
    let ensReverseRegistrar;
    before(async () => {
        signers = await getSigners();
        const sender = signers.pop();
        ensController = await (0, shared_1.deployContract)('ENSController', [], sender);
        ensRegistry = await (0, shared_1.deployContract)('ENSRegistry', [], sender);
        ensReverseRegistrar = await (0, shared_1.deployContract)('ENSReverseRegistrar', [], sender);
        await (0, shared_1.processTx)(ensController.initialize(ensRegistry.address, [], (0, shared_1.randomAddress)()));
        await (0, shared_1.processTx)(ensReverseRegistrar.initialize(ensRegistry.address, ensController.address));
        await (0, shared_1.processTx)(ensRegistry.setSubnodeOwner(ethers_1.constants.HashZero, ethers_1.utils.id(shared_1.ENS_REVERSED_TLD), sender.address));
        await (0, shared_1.processTx)(ensRegistry.setSubnodeOwner(ethers_1.utils.namehash(shared_1.ENS_REVERSED_TLD), ethers_1.utils.id(shared_1.ENS_REVERSED_LABEL), ensReverseRegistrar.address));
    });
    context('claim()', () => {
        it('expect to claim name', async () => {
            const owner = (0, shared_1.randomAddress)();
            const sender = signers.pop();
            const reversedNode = (0, shared_1.buildENSReversedNode)(sender.address);
            await (0, shared_1.processTx)(ensReverseRegistrar.connect(sender).claim(owner));
            await expect(ensRegistry.owner(reversedNode.nameHash)).resolves.toBe(owner);
        });
    });
    context('claimWithResolver()', () => {
        it('expect to claim name and resolver', async () => {
            const owner = (0, shared_1.randomAddress)();
            const resolver = (0, shared_1.randomAddress)();
            const sender = signers.pop();
            const reversedNode = (0, shared_1.buildENSReversedNode)(sender.address);
            await (0, shared_1.processTx)(ensReverseRegistrar.connect(sender).claimWithResolver(owner, resolver));
            await expect(ensRegistry.owner(reversedNode.nameHash)).resolves.toBe(owner);
            await expect(ensRegistry.resolver(reversedNode.nameHash)).resolves.toBe(resolver);
        });
    });
    context('setName()', () => {
        it('expect to set name', async () => {
            const sender = signers.pop();
            const name = (0, shared_1.randomName)();
            const reversedNode = (0, shared_1.buildENSReversedNode)(sender.address);
            await (0, shared_1.processTx)(ensReverseRegistrar.connect(sender).setName(name));
            await expect(ensRegistry.owner(reversedNode.nameHash)).resolves.toBe(ensReverseRegistrar.address);
            await expect(ensRegistry.resolver(reversedNode.nameHash)).resolves.toBe(ensController.address);
        });
    });
    context('node()', () => {
        it('expect to return correct node', async () => {
            const addr = (0, shared_1.randomAddress)();
            const { nameHash: expected } = (0, shared_1.buildENSReversedNode)(addr);
            await expect(ensReverseRegistrar.node(addr)).resolves.toBe(expected);
        });
    });
});
