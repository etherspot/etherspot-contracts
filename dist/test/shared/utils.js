"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiCallCheckLastEventEmitted = exports.checkEvent = exports.buildENSReversedNode = exports.getMethodSignature = exports.getNow = exports.isContract = exports.deployContract = exports.increaseTime = exports.computeAccountAddress = exports.processTx = exports.createMessagePayloadFactory = exports.randomHex32 = exports.randomName = exports.randomAddress = exports.concatHex = exports.getNextNonce = void 0;
exports.moveTime = exports.moveBlocks = exports.multiCallCheckLastEventEmitted = exports.checkEvent = exports.buildENSReversedNode = exports.getMethodSignature = exports.getNow = exports.isContract = exports.deployContract = exports.increaseTime = exports.computeAccountAddress = exports.processTx = exports.createMessagePayloadFactory = exports.randomHex32 = exports.randomName = exports.randomAddress = exports.concatHex = exports.getNextNonce = void 0;
const hardhat_1 = require("hardhat");
const ethers_1 = require("ethers");
const constants_1 = require("./constants");
const { provider } = hardhat_1.ethers;
let nameCounter = 0;
let currentNonce = 0;
function getNextNonce() {
    return ++currentNonce;
}
exports.getNextNonce = getNextNonce;
function concatHex(...items) {
    return items
        .filter(item => ethers_1.utils.isHexString(item))
        .map((item, index) => (index ? item.slice(2) : item))
        .join("")
        .toLowerCase();
}
exports.concatHex = concatHex;
function randomAddress() {
    let result;
    for (;;) {
        try {
            result = ethers_1.utils.getAddress(ethers_1.utils.hexlify(ethers_1.utils.randomBytes(20)));
            break;
        }
        catch (err) {
            result = null;
        }
    }
    return result;
}
exports.randomAddress = randomAddress;
function randomName() {
    return `test${++nameCounter}`;
}
exports.randomName = randomName;
function randomHex32() {
    return ethers_1.utils.hexlify(ethers_1.utils.randomBytes(32));
}
exports.randomHex32 = randomHex32;
function createMessagePayloadFactory(contract, structName, structFields = []) {
    const prefix = `${structName}(${structFields
        .map(({ type, name }) => `${type} ${name}`)
        .join(",")})`;
    const prefixHash = ethers_1.utils.id(prefix);
    const buildMessagePayload = (message) => {
        const types = [
            "uint256",
            "address",
            "bytes32",
            ...structFields.map(({ type }) => type),
        ];
        const values = [
            constants_1.CHAIN_ID,
            contract.address,
            prefixHash,
            ...structFields.map(({ name }) => message[name]),
        ];
        return ethers_1.utils.arrayify(ethers_1.utils.solidityKeccak256(types, values));
    };
    return {
        hash(message) {
            return ethers_1.utils.hashMessage(buildMessagePayload(message));
        },
        async sign(signer, message) {
            return signer.signMessage(ethers_1.utils.arrayify(buildMessagePayload(message)));
        },
    };
}
exports.createMessagePayloadFactory = createMessagePayloadFactory;
async function processTx(txPromise) {
    const tx = await txPromise;
    const { gasPrice } = tx;
    const receipt = await tx.wait();
    const { gasUsed } = receipt;
    return Object.assign(Object.assign({}, receipt), { totalCost: gasPrice.mul(gasUsed) });
}
exports.processTx = processTx;
async function computeAccountAddress(deployer, accountContract, salt, ...args) {
    let { bytecode } = await hardhat_1.ethers.getContractFactory(accountContract);
    for (const arg of args) {
        bytecode = concatHex(bytecode, ethers_1.utils.hexZeroPad(arg.toLowerCase(), 32));
    }
    salt = salt.toLowerCase();
    if (!ethers_1.utils.isHexString(salt, 32)) {
        salt = ethers_1.utils.solidityKeccak256(["bytes"], [salt]);
    }
    return ethers_1.utils.getCreate2Address(deployer.address, salt, ethers_1.utils.solidityKeccak256(["bytes"], [bytecode]));
}
exports.computeAccountAddress = computeAccountAddress;
async function increaseTime(seconds = 0) {
    const value = ethers_1.BigNumber.from(seconds);
    await provider.send("evm_increaseTime", [value.toNumber()]);
}
exports.increaseTime = increaseTime;
async function deployContract(name, args = [], deployer = null) {
    let factory = await hardhat_1.ethers.getContractFactory(name);
    if (deployer) {
        factory = factory.connect(deployer);
    }
    return (await factory.deploy(...(args || [])));
}
exports.deployContract = deployContract;
async function isContract(address) {
    const code = await provider.getCode(address);
    return code !== "0x";
}
exports.isContract = isContract;
function getNow(additionalSeconds = 0) {
    return ethers_1.BigNumber.from(additionalSeconds).add(Math.ceil(Date.now() / 1000));
}
exports.getNow = getNow;
function getMethodSignature(method) {
    return ethers_1.utils.id(method).slice(0, 10);
}
exports.getMethodSignature = getMethodSignature;
function buildENSReversedNode(address) {
    const name = `${address.slice(2).toLowerCase()}.${constants_1.ENS_REVERSED_NAME}`;
    return {
        name,
        nameHash: ethers_1.utils.namehash(name),
    };
}
exports.buildENSReversedNode = buildENSReversedNode;
function checkEvent(receipt) {
    const args = [];
    for (const event of receipt.events) {
        args.push(event.event);
        for (const arg of event.args) {
            args.push(arg);
        }
        return args;
    }
}
exports.checkEvent = checkEvent;
function multiCallCheckLastEventEmitted(receipt) {
    const args = [];
    const length = receipt.events.length;
    const lastEvent = receipt.events[length - 1];
    args.push(lastEvent.event);
    for (const arg of lastEvent.args) {
        args.push(arg);
    }
    return args;
}
exports.multiCallCheckLastEventEmitted = multiCallCheckLastEventEmitted;
const moveBlocks = async (amount) => {
    for (let i = 0; i < amount; i++) {
        await hardhat_1.network.provider.request({
            method: "evm_mine",
            params: [],
        });
    }
    console.log(`Moved ${amount} blocks`);
};
exports.moveBlocks = moveBlocks;
const moveTime = async (amount) => {
    await hardhat_1.network.provider.send("evm_increaseTime", [amount]);
    console.log(`Moved ${amount} seconds`);
};
exports.moveTime = moveTime;
