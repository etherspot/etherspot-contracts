"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const constants_1 = require("../../extensions/constants");
const shared_1 = require("../shared");
describe('ConnextFacet', () => {
    const TEST_TOKEN_ADDRESS = "0x3FFc03F05D1869f493c7dbf913E636C6280e0ff9";
    let signer;
    let connextFacet;
    let token;
    let diamond;
    before(async function () {
        await hardhat_1.network.provider.request({
            method: 'hardhat_reset',
            params: [
                {
                    forking: {
                        jsonRpcUrl: constants_1.NETWORK_CONFIGS[constants_1.NetworkNames.Goerli].defaultProviderUrl,
                        blockNumber: 7139113,
                    },
                },
            ],
        });
        await hardhat_1.network.provider.request({
            method: 'hardhat_impersonateAccount',
            params: ['0x1a258f501e1e36e0a7f7b8f3d75042ab1172a028'],
        });
        signer = await hardhat_1.ethers.getSigner('0x1a258f501e1e36e0a7f7b8f3d75042ab1172a028');
        token = (await hardhat_1.ethers.getContractAt("IERC20", TEST_TOKEN_ADDRESS)).connect(signer);
        await hardhat_1.deployments.fixture(['bridges', 'connext']);
        diamond = await hardhat_1.ethers.getContract('Diamond');
        connextFacet = (await hardhat_1.ethers.getContractAt('ConnextFacet', diamond.address)).connect(signer);
    });
    it("performs erc20 token swap", async () => {
        await token.approve(diamond.address, hardhat_1.ethers.constants.MaxUint256);
        const recipient = (0, shared_1.randomAddress)();
        const { events } = await (0, shared_1.processTx)(connextFacet.connextTokenTransfer(TEST_TOKEN_ADDRESS, recipient, 1111, hardhat_1.ethers.utils.parseEther("100"), hardhat_1.ethers.BigNumber.from(0)));
        const event = events.find(({ event }) => event === 'ConnextTokenSwap');
        expect(event).toBeDefined();
        expect(event.args._destination).toEqual(1111);
        expect(event.args._recipient).toEqual(recipient);
        expect(event.args._transferId).toBeDefined();
        expect(event.args._asset).toEqual(TEST_TOKEN_ADDRESS);
        expect(event.args._amount).toEqual(hardhat_1.ethers.utils.parseEther("100"));
        expect(event.args._relayerFee).toEqual(hardhat_1.ethers.BigNumber.from(0));
        expect(event.args._transferId).toBeDefined();
    });
    it("performs erc20 token swap with fee", async () => {
        await token.approve(diamond.address, hardhat_1.ethers.constants.MaxUint256);
        const recipient = (0, shared_1.randomAddress)();
        const { events } = await (0, shared_1.processTx)(connextFacet.connextTokenTransfer(TEST_TOKEN_ADDRESS, recipient, 1111, hardhat_1.ethers.utils.parseEther("100"), hardhat_1.ethers.utils.parseEther("0.05"), {
            value: hardhat_1.ethers.utils.parseEther("0.05")
        }));
        const event = events.find(({ event }) => event === 'ConnextTokenSwap');
        expect(event).toBeDefined();
        expect(event.args._destination).toEqual(1111);
        expect(event.args._recipient).toEqual(recipient);
        expect(event.args._transferId).toBeDefined();
        expect(event.args._asset).toEqual(TEST_TOKEN_ADDRESS);
        expect(event.args._amount).toEqual(hardhat_1.ethers.utils.parseEther("100"));
        expect(event.args._relayerFee).toEqual(hardhat_1.ethers.utils.parseEther("0.05"));
        expect(event.args._transferId).toBeDefined();
    });
    it("should not perform call with wrong fee", async () => {
        await token.approve(diamond.address, hardhat_1.ethers.constants.MaxUint256);
        const recipient = (0, shared_1.randomAddress)();
        await expect(connextFacet.connextTokenTransfer(TEST_TOKEN_ADDRESS, recipient, 1111, hardhat_1.ethers.utils.parseEther("100"), hardhat_1.ethers.utils.parseEther("0.05"), {
            value: hardhat_1.ethers.utils.parseEther("0.04")
        })).rejects.toThrow(/value/);
    });
    it("performs crosschain call", async () => {
        await token.approve(diamond.address, hardhat_1.ethers.constants.MaxUint256);
        const callData = await token.populateTransaction.totalSupply();
        const { events } = await (0, shared_1.processTx)(connextFacet.connextCall(TEST_TOKEN_ADDRESS, callData.data, 1111, TEST_TOKEN_ADDRESS, hardhat_1.ethers.utils.parseEther("0"), hardhat_1.ethers.BigNumber.from(0), signer.address, hardhat_1.ethers.constants.AddressZero, 0));
        const event = events.find(({ event }) => event === 'ConnextXCall');
        expect(event).toBeDefined();
        expect(event.args._destination).toEqual(1111);
        expect(event.args._recipient).toEqual(TEST_TOKEN_ADDRESS);
        expect(event.args._transferId).toBeDefined();
        expect(event.args._asset).toEqual(TEST_TOKEN_ADDRESS);
        expect(event.args._amount).toEqual(hardhat_1.ethers.utils.parseEther("0"));
        expect(event.args._callData).toEqual(callData.data);
    });
    it("performs crosschain call with fee", async () => {
        const callData = await token.populateTransaction.totalSupply();
        const { events } = await (0, shared_1.processTx)(connextFacet.connextCall(TEST_TOKEN_ADDRESS, callData.data, 1111, TEST_TOKEN_ADDRESS, hardhat_1.ethers.utils.parseEther("0"), hardhat_1.ethers.utils.parseEther("0.05"), signer.address, hardhat_1.ethers.constants.AddressZero, 0, {
            value: hardhat_1.ethers.utils.parseEther("0.05")
        }));
        const event = events.find(({ event }) => event === 'ConnextXCall');
        expect(event).toBeDefined();
        expect(event.args._destination).toEqual(1111);
        expect(event.args._recipient).toEqual(TEST_TOKEN_ADDRESS);
        expect(event.args._transferId).toBeDefined();
        expect(event.args._asset).toEqual(TEST_TOKEN_ADDRESS);
        expect(event.args._amount).toEqual(hardhat_1.ethers.utils.parseEther("0"));
        expect(event.args._callData).toEqual(callData.data);
        expect(event.args._relayerFee).toEqual(hardhat_1.ethers.utils.parseEther("0.05"));
    });
});
