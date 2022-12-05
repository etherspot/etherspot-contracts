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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
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

export interface BLSSignatureAggregatorInterface extends utils.Interface {
  functions: {
    "BLS_DOMAIN()": FunctionFragment;
    "N()": FunctionFragment;
    "addStake(address,uint32)": FunctionFragment;
    "aggregateSignatures((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])": FunctionFragment;
    "getTrailingPublicKey(bytes)": FunctionFragment;
    "getUserOpHash((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
    "getUserOpPublicKey((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
    "userOpToMessage((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
    "validateSignatures((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],bytes)": FunctionFragment;
    "validateUserOpSignature((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BLS_DOMAIN",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "N", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addStake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "aggregateSignatures",
    values: [UserOperationStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTrailingPublicKey",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserOpHash",
    values: [UserOperationStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserOpPublicKey",
    values: [UserOperationStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "userOpToMessage",
    values: [UserOperationStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "validateSignatures",
    values: [UserOperationStruct[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUserOpSignature",
    values: [UserOperationStruct]
  ): string;

  decodeFunctionResult(functionFragment: "BLS_DOMAIN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "N", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "aggregateSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTrailingPublicKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserOpHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserOpPublicKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userOpToMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOpSignature",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BLSSignatureAggregator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BLSSignatureAggregatorInterface;

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
    BLS_DOMAIN(overrides?: CallOverrides): Promise<[string]>;

    N(overrides?: CallOverrides): Promise<[BigNumber]>;

    addStake(
      entryPoint: string,
      delay: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    aggregateSignatures(
      userOps: UserOperationStruct[],
      overrides?: CallOverrides
    ): Promise<[string] & { aggregatesSignature: string }>;

    getTrailingPublicKey(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber, BigNumber, BigNumber]] & {
        publicKey: [BigNumber, BigNumber, BigNumber, BigNumber];
      }
    >;

    getUserOpHash(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getUserOpPublicKey(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber, BigNumber, BigNumber]] & {
        publicKey: [BigNumber, BigNumber, BigNumber, BigNumber];
      }
    >;

    userOpToMessage(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber]]>;

    validateSignatures(
      userOps: UserOperationStruct[],
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    validateUserOpSignature(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<[string] & { sigForUserOp: string }>;
  };

  BLS_DOMAIN(overrides?: CallOverrides): Promise<string>;

  N(overrides?: CallOverrides): Promise<BigNumber>;

  addStake(
    entryPoint: string,
    delay: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  aggregateSignatures(
    userOps: UserOperationStruct[],
    overrides?: CallOverrides
  ): Promise<string>;

  getTrailingPublicKey(
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  getUserOpHash(
    userOp: UserOperationStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  getUserOpPublicKey(
    userOp: UserOperationStruct,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  userOpToMessage(
    userOp: UserOperationStruct,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  validateSignatures(
    userOps: UserOperationStruct[],
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  validateUserOpSignature(
    userOp: UserOperationStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    BLS_DOMAIN(overrides?: CallOverrides): Promise<string>;

    N(overrides?: CallOverrides): Promise<BigNumber>;

    addStake(
      entryPoint: string,
      delay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    aggregateSignatures(
      userOps: UserOperationStruct[],
      overrides?: CallOverrides
    ): Promise<string>;

    getTrailingPublicKey(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    getUserOpHash(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getUserOpPublicKey(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    userOpToMessage(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    validateSignatures(
      userOps: UserOperationStruct[],
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    validateUserOpSignature(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    BLS_DOMAIN(overrides?: CallOverrides): Promise<BigNumber>;

    N(overrides?: CallOverrides): Promise<BigNumber>;

    addStake(
      entryPoint: string,
      delay: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    aggregateSignatures(
      userOps: UserOperationStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTrailingPublicKey(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserOpHash(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserOpPublicKey(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userOpToMessage(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateSignatures(
      userOps: UserOperationStruct[],
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateUserOpSignature(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BLS_DOMAIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    N(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addStake(
      entryPoint: string,
      delay: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    aggregateSignatures(
      userOps: UserOperationStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTrailingPublicKey(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserOpHash(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserOpPublicKey(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userOpToMessage(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateSignatures(
      userOps: UserOperationStruct[],
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateUserOpSignature(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
