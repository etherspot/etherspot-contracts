/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { Controlled } from "../Controlled";

export class Controlled__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Controlled {
    return new Contract(address, _abi, signerOrProvider) as Controlled;
  }
}

const _abi = [
  {
    inputs: [],
    name: "controller",
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