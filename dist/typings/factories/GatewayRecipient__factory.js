"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayRecipient__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__d5c463c2",
        type: "bytes8",
      },
    ],
    name: "c_d5c463c2",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__d5c463c2",
        type: "bytes8",
      },
    ],
    name: "c_falsed5c463c2",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__d5c463c2",
        type: "bytes8",
      },
    ],
    name: "c_trued5c463c2",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
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
