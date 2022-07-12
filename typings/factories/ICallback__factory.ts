/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICallback, ICallbackInterface } from "../ICallback";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "callback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICallback__factory {
  static readonly abi = _abi;
  static createInterface(): ICallbackInterface {
    return new utils.Interface(_abi) as ICallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICallback {
    return new Contract(address, _abi, signerOrProvider) as ICallback;
  }
}