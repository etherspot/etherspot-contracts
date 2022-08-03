"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC173__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "owner_",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IERC173__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IERC173__factory = IERC173__factory;
IERC173__factory.abi = _abi;
