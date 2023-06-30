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

export interface SafeMathLibInterface extends utils.Interface {
  functions: {
    "c_463892cc(bytes8)": FunctionFragment;
    "c_false463892cc(bytes8)": FunctionFragment;
    "c_true463892cc(bytes8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_463892cc",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_false463892cc",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_true463892cc",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "c_463892cc", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_false463892cc",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_true463892cc",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SafeMathLib extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SafeMathLibInterface;

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
    c_463892cc(
      c__463892cc: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    c_false463892cc(
      c__463892cc: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    c_true463892cc(
      c__463892cc: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  c_463892cc(c__463892cc: BytesLike, overrides?: CallOverrides): Promise<void>;

  c_false463892cc(
    c__463892cc: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  c_true463892cc(
    c__463892cc: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    c_463892cc(
      c__463892cc: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_false463892cc(
      c__463892cc: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    c_true463892cc(
      c__463892cc: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    c_463892cc(
      c__463892cc: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_false463892cc(
      c__463892cc: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_true463892cc(
      c__463892cc: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_463892cc(
      c__463892cc: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_false463892cc(
      c__463892cc: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_true463892cc(
      c__463892cc: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
