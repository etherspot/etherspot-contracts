"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUpdaterManager__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address payable",
                name: "_reporter",
                type: "address",
            },
        ],
        name: "slashUpdater",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "updater",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class IUpdaterManager__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IUpdaterManager__factory = IUpdaterManager__factory;
IUpdaterManager__factory.abi = _abi;
