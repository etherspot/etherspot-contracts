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
export interface ControlledInterface extends utils.Interface {
  functions: {
    "c_e208e0f4(bytes8)": FunctionFragment;
    "c_falsee208e0f4(bytes8)": FunctionFragment;
    "c_truee208e0f4(bytes8)": FunctionFragment;
    "controller()": FunctionFragment;
  };
  encodeFunctionData(
    functionFragment: "c_e208e0f4",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_falsee208e0f4",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_truee208e0f4",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined,
  ): string;
  decodeFunctionResult(functionFragment: "c_e208e0f4", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_falsee208e0f4",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_truee208e0f4",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  events: {};
}
export interface Controlled extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;
  interface: ControlledInterface;
  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;
  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;
  functions: {
    c_e208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[void]>;
    c_falsee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_truee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    controller(overrides?: CallOverrides): Promise<[string]>;
  };
  c_e208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<void>;
  c_falsee208e0f4(
    c__e208e0f4: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_truee208e0f4(
    c__e208e0f4: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  controller(overrides?: CallOverrides): Promise<string>;
  callStatic: {
    c_e208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
    c_falsee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_truee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    controller(overrides?: CallOverrides): Promise<string>;
  };
  filters: {};
  estimateGas: {
    c_e208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_falsee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_truee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    controller(overrides?: CallOverrides): Promise<BigNumber>;
  };
  populateTransaction: {
    c_e208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_falsee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_truee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
