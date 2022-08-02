"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeChannelHash = void 0;
const ethers_1 = require("ethers");
function computeChannelHash(sender, recipient, token, uid) {
    return ethers_1.utils.solidityKeccak256(['address', 'address', 'address', 'bytes32'], [sender, recipient, token || ethers_1.constants.AddressZero, uid]);
}
exports.computeChannelHash = computeChannelHash;
