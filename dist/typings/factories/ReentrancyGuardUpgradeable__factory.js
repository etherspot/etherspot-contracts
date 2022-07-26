"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReentrancyGuardUpgradeable__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
];
class ReentrancyGuardUpgradeable__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ReentrancyGuardUpgradeable__factory = ReentrancyGuardUpgradeable__factory;
ReentrancyGuardUpgradeable__factory.abi = _abi;
