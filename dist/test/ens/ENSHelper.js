"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const ethers_1 = require("ethers");
const shared_1 = require("../shared");
const { getSigners } = hardhat_1.ethers;
describe('ENSHelper', () => {
    let ensController;
    let ensRegistry;
    let ensHelpers;
    const ensNodesCount = 10;
    const ensNodes = [];
    const ensNamesHashes = [];
    before(async () => {
        const signers = await getSigners();
        const sender = signers.pop();
        ensController = await (0, shared_1.deployContract)('ENSController', [], sender);
        ensRegistry = await (0, shared_1.deployContract)('ENSRegistry', [], sender);
        ensHelpers = await (0, shared_1.deployContract)('ENSHelper', [], sender);
        await (0, shared_1.processTx)(ensController.initialize(ensRegistry.address, [], (0, shared_1.randomAddress)()));
        await (0, shared_1.processTx)(ensHelpers.initialize(ensRegistry.address));
        const tld = (0, shared_1.randomName)();
        const tldHash = ethers_1.utils.namehash(tld);
        await (0, shared_1.processTx)(ensRegistry.setSubnodeOwner(ethers_1.constants.HashZero, ethers_1.utils.id(tld), sender.address));
        for (let i = 0; i < ensNodesCount; i++) {
            const owner = signers.pop();
            const label = (0, shared_1.randomName)();
            const name = `${label}.${tld}`;
            const nameHash = ethers_1.utils.namehash(name);
            await (0, shared_1.processTx)(ensRegistry.setSubnodeRecord(tldHash, ethers_1.utils.id(label), owner.address, ensController.address, 0));
            await (0, shared_1.processTx)(ensController.connect(owner).syncAddr(nameHash));
            await (0, shared_1.processTx)(ensController.connect(owner).setName(nameHash, name));
            ensNodes.push({
                owner,
                name,
                nameHash,
            });
            ensNamesHashes.push(nameHash);
        }
    });
    context('getAddresses()', () => {
        it('expect to get nodes addresses', async () => {
            const expected = ensNodes.map(({ owner }) => owner.address);
            await expect(ensHelpers.getAddresses(ensNamesHashes)).resolves.toStrictEqual(expected);
        });
    });
    context('getNames()', () => {
        it('expect to get nodes names', async () => {
            const expected = ensNodes.map(({ name }) => name);
            await expect(ensHelpers.getNames(ensNamesHashes)).resolves.toStrictEqual(expected);
        });
    });
});
