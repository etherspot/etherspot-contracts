/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type UserOperationStruct = {
  sender: string;
  nonce: BigNumberish;
  initCode: BytesLike;
  callData: BytesLike;
  callGasLimit: BigNumberish;
  verificationGasLimit: BigNumberish;
  preVerificationGas: BigNumberish;
  maxFeePerGas: BigNumberish;
  maxPriorityFeePerGas: BigNumberish;
  paymasterAndData: BytesLike;
  signature: BytesLike;
};

export type UserOperationStructOutput = [
  string,
  BigNumber,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  sender: string;
  nonce: BigNumber;
  initCode: string;
  callData: string;
  callGasLimit: BigNumber;
  verificationGasLimit: BigNumber;
  preVerificationGas: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  paymasterAndData: string;
  signature: string;
};

export interface SimpleAccountInterface extends utils.Interface {
  functions: {
    "addDeposit()": FunctionFragment;
    "entryPoint()": FunctionFragment;
    "exec(address,uint256,bytes)": FunctionFragment;
    "execBatch(address[],bytes[])": FunctionFragment;
    "execFromEntryPoint(address,uint256,bytes)": FunctionFragment;
    "getDeposit()": FunctionFragment;
    "nonce()": FunctionFragment;
    "owner()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "updateEntryPoint(address)": FunctionFragment;
    "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,address,uint256)": FunctionFragment;
    "withdrawDepositTo(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "entryPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exec",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "execBatch",
    values: [string[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "execFromEntryPoint",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEntryPoint",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUserOp",
    values: [UserOperationStruct, BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawDepositTo",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exec", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execBatch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "execFromEntryPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateEntryPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawDepositTo",
    data: BytesLike
  ): Result;

  events: {
    "EntryPointChanged(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EntryPointChanged"): EventFragment;
}

export type EntryPointChangedEvent = TypedEvent<
  [string, string],
  { oldEntryPoint: string; newEntryPoint: string }
>;

export type EntryPointChangedEventFilter =
  TypedEventFilter<EntryPointChangedEvent>;

export interface SimpleAccount extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SimpleAccountInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addDeposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<[string]>;

    exec(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execBatch(
      dest: string[],
      func: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execFromEntryPoint(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    transfer(
      dest: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateEntryPoint(
      newEntryPoint: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: BytesLike,
      aggregator: string,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawDepositTo(
      withdrawAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addDeposit(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  entryPoint(overrides?: CallOverrides): Promise<string>;

  exec(
    dest: string,
    value: BigNumberish,
    func: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execBatch(
    dest: string[],
    func: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execFromEntryPoint(
    dest: string,
    value: BigNumberish,
    func: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  transfer(
    dest: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateEntryPoint(
    newEntryPoint: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateUserOp(
    userOp: UserOperationStruct,
    userOpHash: BytesLike,
    aggregator: string,
    missingAccountFunds: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawDepositTo(
    withdrawAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addDeposit(overrides?: CallOverrides): Promise<void>;

    entryPoint(overrides?: CallOverrides): Promise<string>;

    exec(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    execBatch(
      dest: string[],
      func: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    execFromEntryPoint(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    transfer(
      dest: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateEntryPoint(
      newEntryPoint: string,
      overrides?: CallOverrides
    ): Promise<void>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: BytesLike,
      aggregator: string,
      missingAccountFunds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawDepositTo(
      withdrawAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "EntryPointChanged(address,address)"(
      oldEntryPoint?: string | null,
      newEntryPoint?: string | null
    ): EntryPointChangedEventFilter;
    EntryPointChanged(
      oldEntryPoint?: string | null,
      newEntryPoint?: string | null
    ): EntryPointChangedEventFilter;
  };

  estimateGas: {
    addDeposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    entryPoint(overrides?: CallOverrides): Promise<BigNumber>;

    exec(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execBatch(
      dest: string[],
      func: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execFromEntryPoint(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      dest: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateEntryPoint(
      newEntryPoint: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: BytesLike,
      aggregator: string,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawDepositTo(
      withdrawAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addDeposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exec(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execBatch(
      dest: string[],
      func: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execFromEntryPoint(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      dest: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateEntryPoint(
      newEntryPoint: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: BytesLike,
      aggregator: string,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawDepositTo(
      withdrawAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
