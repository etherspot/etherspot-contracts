/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ExternalAccountRegistryInterface extends ethers.utils.Interface {
  functions: {
    "addAccountOwner(address)": FunctionFragment;
    "addAccountProof(bytes32)": FunctionFragment;
    "removeAccountOwner(address)": FunctionFragment;
    "removeAccountProof(bytes32)": FunctionFragment;
    "verifyAccountOwner(address,address)": FunctionFragment;
    "verifyAccountOwnerAtBlock(address,address,uint256)": FunctionFragment;
    "verifyAccountProof(address,bytes32)": FunctionFragment;
    "verifyAccountProofAtBlock(address,bytes32,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAccountOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addAccountProof",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAccountOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAccountProof",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyAccountOwner",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyAccountOwnerAtBlock",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyAccountProof",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyAccountProofAtBlock",
    values: [string, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAccountOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAccountProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAccountOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAccountProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyAccountOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyAccountOwnerAtBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyAccountProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyAccountProofAtBlock",
    data: BytesLike
  ): Result;

  events: {
    "AccountOwnerAdded(address,address)": EventFragment;
    "AccountOwnerRemoved(address,address)": EventFragment;
    "AccountProofAdded(address,bytes32)": EventFragment;
    "AccountProofRemoved(address,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountOwnerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccountOwnerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccountProofAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccountProofRemoved"): EventFragment;
}

export class ExternalAccountRegistry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ExternalAccountRegistryInterface;

  functions: {
    addAccountOwner(
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addAccountOwner(address)"(
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addAccountProof(
      hash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addAccountProof(bytes32)"(
      hash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeAccountOwner(
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeAccountOwner(address)"(
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeAccountProof(
      hash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeAccountProof(bytes32)"(
      hash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    verifyAccountOwner(
      account: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "verifyAccountOwner(address,address)"(
      account: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyAccountOwnerAtBlock(
      account: string,
      owner: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "verifyAccountOwnerAtBlock(address,address,uint256)"(
      account: string,
      owner: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyAccountProof(
      account: string,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "verifyAccountProof(address,bytes32)"(
      account: string,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyAccountProofAtBlock(
      account: string,
      hash: BytesLike,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "verifyAccountProofAtBlock(address,bytes32,uint256)"(
      account: string,
      hash: BytesLike,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addAccountOwner(
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addAccountOwner(address)"(
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addAccountProof(
    hash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addAccountProof(bytes32)"(
    hash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeAccountOwner(
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeAccountOwner(address)"(
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeAccountProof(
    hash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeAccountProof(bytes32)"(
    hash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  verifyAccountOwner(
    account: string,
    owner: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verifyAccountOwner(address,address)"(
    account: string,
    owner: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyAccountOwnerAtBlock(
    account: string,
    owner: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verifyAccountOwnerAtBlock(address,address,uint256)"(
    account: string,
    owner: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyAccountProof(
    account: string,
    hash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verifyAccountProof(address,bytes32)"(
    account: string,
    hash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyAccountProofAtBlock(
    account: string,
    hash: BytesLike,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verifyAccountProofAtBlock(address,bytes32,uint256)"(
    account: string,
    hash: BytesLike,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addAccountOwner(owner: string, overrides?: CallOverrides): Promise<void>;

    "addAccountOwner(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addAccountProof(hash: BytesLike, overrides?: CallOverrides): Promise<void>;

    "addAccountProof(bytes32)"(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    removeAccountOwner(owner: string, overrides?: CallOverrides): Promise<void>;

    "removeAccountOwner(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeAccountProof(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeAccountProof(bytes32)"(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyAccountOwner(
      account: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyAccountOwner(address,address)"(
      account: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyAccountOwnerAtBlock(
      account: string,
      owner: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyAccountOwnerAtBlock(address,address,uint256)"(
      account: string,
      owner: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyAccountProof(
      account: string,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyAccountProof(address,bytes32)"(
      account: string,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyAccountProofAtBlock(
      account: string,
      hash: BytesLike,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyAccountProofAtBlock(address,bytes32,uint256)"(
      account: string,
      hash: BytesLike,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    AccountOwnerAdded(account: null, owner: null): EventFilter;

    AccountOwnerRemoved(account: null, owner: null): EventFilter;

    AccountProofAdded(account: null, hash: null): EventFilter;

    AccountProofRemoved(account: null, hash: null): EventFilter;
  };

  estimateGas: {
    addAccountOwner(owner: string, overrides?: Overrides): Promise<BigNumber>;

    "addAccountOwner(address)"(
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addAccountProof(hash: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "addAccountProof(bytes32)"(
      hash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    removeAccountOwner(
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeAccountOwner(address)"(
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    removeAccountProof(
      hash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeAccountProof(bytes32)"(
      hash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    verifyAccountOwner(
      account: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyAccountOwner(address,address)"(
      account: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyAccountOwnerAtBlock(
      account: string,
      owner: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyAccountOwnerAtBlock(address,address,uint256)"(
      account: string,
      owner: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyAccountProof(
      account: string,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyAccountProof(address,bytes32)"(
      account: string,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyAccountProofAtBlock(
      account: string,
      hash: BytesLike,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyAccountProofAtBlock(address,bytes32,uint256)"(
      account: string,
      hash: BytesLike,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAccountOwner(
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addAccountOwner(address)"(
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addAccountProof(
      hash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addAccountProof(bytes32)"(
      hash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removeAccountOwner(
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeAccountOwner(address)"(
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removeAccountProof(
      hash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeAccountProof(bytes32)"(
      hash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    verifyAccountOwner(
      account: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyAccountOwner(address,address)"(
      account: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyAccountOwnerAtBlock(
      account: string,
      owner: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyAccountOwnerAtBlock(address,address,uint256)"(
      account: string,
      owner: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyAccountProof(
      account: string,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyAccountProof(address,bytes32)"(
      account: string,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyAccountProofAtBlock(
      account: string,
      hash: BytesLike,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyAccountProofAtBlock(address,bytes32,uint256)"(
      account: string,
      hash: BytesLike,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
