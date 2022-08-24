"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureValidator__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "chainId",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class SignatureValidator__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.SignatureValidator__factory = SignatureValidator__factory;
SignatureValidator__factory.abi = _abi;
