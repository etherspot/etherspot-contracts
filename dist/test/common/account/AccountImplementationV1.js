"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const ethers_1 = require("ethers");
const typings_1 = require("../../../typings");
const shared_1 = require("../../shared");
const { getSigners } = hardhat_1.ethers;
describe('AccountImplementationV1 (using mock)', () => {
    let signers;
    let account;
    let accountRegistry;
    let accountImplementation;
    before(async () => {
        signers = await getSigners();
        accountRegistry = await (0, shared_1.deployContract)('AccountRegistryMock');
        accountImplementation = await (0, shared_1.deployContract)('AccountImplementationV1Mock', [accountRegistry.address]);
        const accountProxy = await (0, shared_1.deployContract)('Account', [
            accountRegistry.address,
            accountImplementation.address,
        ]);
        account = typings_1.AccountImplementationV1Mock__factory.connect(accountProxy.address, signers.pop());
    });
    it('expect to use correct addresses', () => {
        expect(account.address).not.toBe(accountImplementation.address);
    });
    context('onERC721Received()', () => {
        it('expect to return correct interface hash', async () => {
            await expect(account.onERC721Received((0, shared_1.randomAddress)(), (0, shared_1.randomAddress)(), 1, '0x')).resolves.toBe((0, shared_1.getMethodSignature)('onERC721Received(address,address,uint256,bytes)'));
        });
    });
    context('onERC1155Received()', () => {
        it('expect to return correct interface hash', async () => {
            await expect(account.onERC1155Received((0, shared_1.randomAddress)(), (0, shared_1.randomAddress)(), 1, 2, '0x')).resolves.toBe((0, shared_1.getMethodSignature)('onERC1155Received(address,address,uint256,uint256,bytes)'));
        });
    });
    context('tokensReceived()', () => {
        it('expect to return empty result', async () => {
            await expect(account.tokensReceived((0, shared_1.randomAddress)(), (0, shared_1.randomAddress)(), (0, shared_1.randomAddress)(), 1, '0x', '0x')).resolves.toStrictEqual([]);
        });
    });
    context('canImplementInterfaceForAddress()', () => {
        const interfaceHash = ethers_1.utils.id('ERC777TokensRecipient');
        it('expect to return magic hash when can implement interface', async () => {
            await expect(account.canImplementInterfaceForAddress(interfaceHash, account.address)).resolves.toBe(ethers_1.utils.id('ERC1820_ACCEPT_MAGIC'));
        });
        it('expect to return zero hash when can not implement interface', async () => {
            await expect(account.canImplementInterfaceForAddress(interfaceHash, (0, shared_1.randomAddress)())).resolves.toBe(ethers_1.constants.HashZero);
        });
    });
    context('isValidAccountSignature()', () => {
        let accountOwner;
        let invalidOwner;
        before(async () => {
            accountOwner = signers.pop();
            invalidOwner = signers.pop();
            await (0, shared_1.processTx)(accountRegistry.mockAccountOwners(account.address, [
                accountOwner.address,
            ]));
        });
        it('expect to return magic hash on valid signature', async () => {
            const message = 'test message';
            const signature = await accountOwner.signMessage(message);
            await expect(account['isValidSignature(bytes32,bytes)'](ethers_1.utils.hashMessage(message), signature)).resolves.toBe((0, shared_1.getMethodSignature)('isValidSignature(bytes32,bytes)'));
            await expect(account['isValidSignature(bytes,bytes)'](ethers_1.utils.hexlify(ethers_1.utils.toUtf8Bytes(message)), signature)).resolves.toBe((0, shared_1.getMethodSignature)('isValidSignature(bytes,bytes)'));
        });
        it('expect to return 0xffffffff on invalid signature', async () => {
            const expected = '0xffffffff';
            const message = 'test message';
            const signature = await invalidOwner.signMessage(message);
            await expect(account['isValidSignature(bytes32,bytes)'](ethers_1.utils.hashMessage(message), signature)).resolves.toBe(expected);
            await expect(account['isValidSignature(bytes,bytes)'](ethers_1.utils.hexlify(ethers_1.utils.toUtf8Bytes(message)), signature)).resolves.toBe(expected);
        });
    });
});
