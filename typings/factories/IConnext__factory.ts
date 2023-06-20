/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IConnext, IConnextInterface } from "../IConnext";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_slippage",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_callData",
        type: "bytes",
      },
    ],
    name: "xcall",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class IConnext__factory {
  static readonly abi = _abi;
  static createInterface(): IConnextInterface {
    return new utils.Interface(_abi) as IConnextInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IConnext {
    return new Contract(address, _abi, signerOrProvider) as IConnext;
  }
}
