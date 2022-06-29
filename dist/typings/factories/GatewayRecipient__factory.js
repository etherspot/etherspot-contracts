"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayRecipient__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "gateway",
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
class GatewayRecipient__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.GatewayRecipient__factory = GatewayRecipient__factory;
GatewayRecipient__factory.abi = _abi;
