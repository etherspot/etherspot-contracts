"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC1822Proxiable__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class IERC1822Proxiable__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IERC1822Proxiable__factory = IERC1822Proxiable__factory;
IERC1822Proxiable__factory.abi = _abi;
