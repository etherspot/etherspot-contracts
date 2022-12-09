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

export interface UserOperationLibInterface extends utils.Interface {
  functions: {
    "c_37cac050(bytes8)": FunctionFragment;
    "c_false37cac050(bytes8)": FunctionFragment;
    "c_true37cac050(bytes8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_37cac050",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_false37cac050",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_true37cac050",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "c_37cac050", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_false37cac050",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_true37cac050",
    data: BytesLike
  ): Result;

  events: {};
}

export interface UserOperationLib extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UserOperationLibInterface;

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
    c_37cac050(
      c__37cac050: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    c_false37cac050(
      c__37cac050: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    c_true37cac050(
      c__37cac050: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  c_37cac050(c__37cac050: BytesLike, overrides?: CallOverrides): Promise<void>;

  c_false37cac050(
    c__37cac050: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  c_true37cac050(
    c__37cac050: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    c_37cac050(
      c__37cac050: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_false37cac050(
      c__37cac050: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    c_true37cac050(
      c__37cac050: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    c_37cac050(
      c__37cac050: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_false37cac050(
      c__37cac050: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_true37cac050(
      c__37cac050: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_37cac050(
      c__37cac050: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_false37cac050(
      c__37cac050: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_true37cac050(
      c__37cac050: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
