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

export interface ModexpSqrtInterface extends utils.Interface {
  functions: {
    "c_8205b70b(bytes8)": FunctionFragment;
    "c_false8205b70b(bytes8)": FunctionFragment;
    "c_true8205b70b(bytes8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_8205b70b",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_false8205b70b",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_true8205b70b",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "c_8205b70b", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_false8205b70b",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_true8205b70b",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ModexpSqrt extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ModexpSqrtInterface;

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
    c_8205b70b(
      c__8205b70b: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    c_false8205b70b(
      c__8205b70b: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    c_true8205b70b(
      c__8205b70b: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  c_8205b70b(c__8205b70b: BytesLike, overrides?: CallOverrides): Promise<void>;

  c_false8205b70b(
    c__8205b70b: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  c_true8205b70b(
    c__8205b70b: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    c_8205b70b(
      c__8205b70b: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_false8205b70b(
      c__8205b70b: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    c_true8205b70b(
      c__8205b70b: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    c_8205b70b(
      c__8205b70b: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_false8205b70b(
      c__8205b70b: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_true8205b70b(
      c__8205b70b: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_8205b70b(
      c__8205b70b: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_false8205b70b(
      c__8205b70b: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_true8205b70b(
      c__8205b70b: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
