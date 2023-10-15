/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AccountRegistryInterface extends utils.Interface {
  functions: {
    "c_9649d652(bytes8)": FunctionFragment;
    "c_false9649d652(bytes8)": FunctionFragment;
    "c_true9649d652(bytes8)": FunctionFragment;
    "isValidAccountSignature(address,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_9649d652",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_false9649d652",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_true9649d652",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidAccountSignature",
    values: [string, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "c_9649d652", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_false9649d652",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_true9649d652",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidAccountSignature",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AccountRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccountRegistryInterface;

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
    c_9649d652(
      c__9649d652: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    c_false9649d652(
      c__9649d652: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    c_true9649d652(
      c__9649d652: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isValidAccountSignature(address,bytes,bytes)"(
      account: string,
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isValidAccountSignature(address,bytes32,bytes)"(
      account: string,
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  c_9649d652(c__9649d652: BytesLike, overrides?: CallOverrides): Promise<void>;

  c_false9649d652(
    c__9649d652: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  c_true9649d652(
    c__9649d652: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isValidAccountSignature(address,bytes,bytes)"(
    account: string,
    message: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isValidAccountSignature(address,bytes32,bytes)"(
    account: string,
    messageHash: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    c_9649d652(
      c__9649d652: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_false9649d652(
      c__9649d652: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    c_true9649d652(
      c__9649d652: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isValidAccountSignature(address,bytes,bytes)"(
      account: string,
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isValidAccountSignature(address,bytes32,bytes)"(
      account: string,
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    c_9649d652(
      c__9649d652: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_false9649d652(
      c__9649d652: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_true9649d652(
      c__9649d652: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidAccountSignature(address,bytes,bytes)"(
      account: string,
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidAccountSignature(address,bytes32,bytes)"(
      account: string,
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_9649d652(
      c__9649d652: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_false9649d652(
      c__9649d652: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_true9649d652(
      c__9649d652: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidAccountSignature(address,bytes,bytes)"(
      account: string,
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidAccountSignature(address,bytes32,bytes)"(
      account: string,
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
