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

export interface ModexpInverseInterface extends utils.Interface {
  functions: {
    "c_falsefcd45a30(bytes8)": FunctionFragment;
    "c_fcd45a30(bytes8)": FunctionFragment;
    "c_truefcd45a30(bytes8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_falsefcd45a30",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_fcd45a30",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_truefcd45a30",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "c_falsefcd45a30",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "c_fcd45a30", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_truefcd45a30",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ModexpInverse extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ModexpInverseInterface;

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
    c_falsefcd45a30(
      c__fcd45a30: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    c_fcd45a30(
      c__fcd45a30: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    c_truefcd45a30(
      c__fcd45a30: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  c_falsefcd45a30(
    c__fcd45a30: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  c_fcd45a30(c__fcd45a30: BytesLike, overrides?: CallOverrides): Promise<void>;

  c_truefcd45a30(
    c__fcd45a30: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    c_falsefcd45a30(
      c__fcd45a30: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    c_fcd45a30(
      c__fcd45a30: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_truefcd45a30(
      c__fcd45a30: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    c_falsefcd45a30(
      c__fcd45a30: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_fcd45a30(
      c__fcd45a30: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_truefcd45a30(
      c__fcd45a30: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_falsefcd45a30(
      c__fcd45a30: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_fcd45a30(
      c__fcd45a30: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_truefcd45a30(
      c__fcd45a30: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
