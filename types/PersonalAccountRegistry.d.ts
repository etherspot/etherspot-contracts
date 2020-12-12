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

interface PersonalAccountRegistryInterface extends ethers.utils.Interface {
  functions: {
    "addAccountOwner(address,address)": FunctionFragment;
    "computeAccountAddress(address)": FunctionFragment;
    "executeAccountTransaction(address,address,uint256,bytes)": FunctionFragment;
    "gateway()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isAccountDeployed(address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "refundAccountCall(address,address,uint256)": FunctionFragment;
    "removeAccountOwner(address,address)": FunctionFragment;
    "verifyAccountOwner(address,address)": FunctionFragment;
    "verifyAccountOwnerAtBlock(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAccountOwner",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "computeAccountAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "executeAccountTransaction",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isAccountDeployed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "refundAccountCall",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAccountOwner",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyAccountOwner",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyAccountOwnerAtBlock",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAccountOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeAccountAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeAccountTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAccountDeployed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "refundAccountCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAccountOwner",
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

  events: {
    "AccountCallRefunded(address,address,address,uint256)": EventFragment;
    "AccountDeployed(address)": EventFragment;
    "AccountOwnerAdded(address,address)": EventFragment;
    "AccountOwnerRemoved(address,address)": EventFragment;
    "AccountTransactionExecuted(address,address,uint256,bytes,bytes)": EventFragment;
    "Initialized()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountCallRefunded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccountDeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccountOwnerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccountOwnerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccountTransactionExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export class PersonalAccountRegistry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PersonalAccountRegistryInterface;

  functions: {
    addAccountOwner(
      account: string,
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addAccountOwner(address,address)"(
      account: string,
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    computeAccountAddress(
      saltOwner: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "computeAccountAddress(address)"(
      saltOwner: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    executeAccountTransaction(
      account: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "executeAccountTransaction(address,address,uint256,bytes)"(
      account: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    gateway(overrides?: CallOverrides): Promise<[string]>;

    "gateway()"(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      gateway_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      gateway_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isAccountDeployed(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isAccountDeployed(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    "isInitialized()"(overrides?: CallOverrides): Promise<[boolean]>;

    refundAccountCall(
      account: string,
      token: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "refundAccountCall(address,address,uint256)"(
      account: string,
      token: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeAccountOwner(
      account: string,
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeAccountOwner(address,address)"(
      account: string,
      owner: string,
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
  };

  addAccountOwner(
    account: string,
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addAccountOwner(address,address)"(
    account: string,
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  computeAccountAddress(
    saltOwner: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "computeAccountAddress(address)"(
    saltOwner: string,
    overrides?: CallOverrides
  ): Promise<string>;

  executeAccountTransaction(
    account: string,
    to: string,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "executeAccountTransaction(address,address,uint256,bytes)"(
    account: string,
    to: string,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  gateway(overrides?: CallOverrides): Promise<string>;

  "gateway()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    gateway_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    gateway_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isAccountDeployed(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isAccountDeployed(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  "isInitialized()"(overrides?: CallOverrides): Promise<boolean>;

  refundAccountCall(
    account: string,
    token: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "refundAccountCall(address,address,uint256)"(
    account: string,
    token: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeAccountOwner(
    account: string,
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeAccountOwner(address,address)"(
    account: string,
    owner: string,
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

  callStatic: {
    addAccountOwner(
      account: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addAccountOwner(address,address)"(
      account: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    computeAccountAddress(
      saltOwner: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "computeAccountAddress(address)"(
      saltOwner: string,
      overrides?: CallOverrides
    ): Promise<string>;

    executeAccountTransaction(
      account: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "executeAccountTransaction(address,address,uint256,bytes)"(
      account: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    gateway(overrides?: CallOverrides): Promise<string>;

    "gateway()"(overrides?: CallOverrides): Promise<string>;

    initialize(gateway_: string, overrides?: CallOverrides): Promise<void>;

    "initialize(address)"(
      gateway_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isAccountDeployed(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isAccountDeployed(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    "isInitialized()"(overrides?: CallOverrides): Promise<boolean>;

    refundAccountCall(
      account: string,
      token: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "refundAccountCall(address,address,uint256)"(
      account: string,
      token: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeAccountOwner(
      account: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeAccountOwner(address,address)"(
      account: string,
      owner: string,
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
  };

  filters: {
    AccountCallRefunded(
      account: null,
      beneficiary: null,
      token: null,
      value: null
    ): EventFilter;

    AccountDeployed(account: null): EventFilter;

    AccountOwnerAdded(account: null, owner: null): EventFilter;

    AccountOwnerRemoved(account: null, owner: null): EventFilter;

    AccountTransactionExecuted(
      account: null,
      to: null,
      value: null,
      data: null,
      response: null
    ): EventFilter;

    Initialized(): EventFilter;
  };

  estimateGas: {
    addAccountOwner(
      account: string,
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addAccountOwner(address,address)"(
      account: string,
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    computeAccountAddress(
      saltOwner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "computeAccountAddress(address)"(
      saltOwner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeAccountTransaction(
      account: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "executeAccountTransaction(address,address,uint256,bytes)"(
      account: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    gateway(overrides?: CallOverrides): Promise<BigNumber>;

    "gateway()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(gateway_: string, overrides?: Overrides): Promise<BigNumber>;

    "initialize(address)"(
      gateway_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isAccountDeployed(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAccountDeployed(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    "isInitialized()"(overrides?: CallOverrides): Promise<BigNumber>;

    refundAccountCall(
      account: string,
      token: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "refundAccountCall(address,address,uint256)"(
      account: string,
      token: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    removeAccountOwner(
      account: string,
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeAccountOwner(address,address)"(
      account: string,
      owner: string,
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
  };

  populateTransaction: {
    addAccountOwner(
      account: string,
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addAccountOwner(address,address)"(
      account: string,
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    computeAccountAddress(
      saltOwner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "computeAccountAddress(address)"(
      saltOwner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeAccountTransaction(
      account: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "executeAccountTransaction(address,address,uint256,bytes)"(
      account: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "gateway()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      gateway_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      gateway_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isAccountDeployed(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAccountDeployed(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isInitialized()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    refundAccountCall(
      account: string,
      token: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "refundAccountCall(address,address,uint256)"(
      account: string,
      token: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removeAccountOwner(
      account: string,
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeAccountOwner(address,address)"(
      account: string,
      owner: string,
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
  };
}