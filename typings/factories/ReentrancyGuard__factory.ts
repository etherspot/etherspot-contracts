/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ReentrancyGuard,
  ReentrancyGuardInterface,
} from "../ReentrancyGuard";

const _abi = [
  {
    inputs: [],
    name: "ReentrancyError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__9296fc39",
        type: "bytes8",
      },
    ],
    name: "c_9296fc39",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__9296fc39",
        type: "bytes8",
      },
    ],
    name: "c_false9296fc39",
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
        name: "c__9296fc39",
        type: "bytes8",
      },
    ],
    name: "c_true9296fc39",
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
];

export class ReentrancyGuard__factory {
  static readonly abi = _abi;
  static createInterface(): ReentrancyGuardInterface {
    return new utils.Interface(_abi) as ReentrancyGuardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentrancyGuard {
    return new Contract(address, _abi, signerOrProvider) as ReentrancyGuard;
  }
}
