import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AccountInterface extends utils.Interface {
  functions: {
    "c_305923d6(bytes8)": FunctionFragment;
    "c_d6b1085a(bytes8)": FunctionFragment;
    "c_e208e0f4(bytes8)": FunctionFragment;
    "c_false305923d6(bytes8)": FunctionFragment;
    "c_falsed6b1085a(bytes8)": FunctionFragment;
    "c_falsee208e0f4(bytes8)": FunctionFragment;
    "c_true305923d6(bytes8)": FunctionFragment;
    "c_trued6b1085a(bytes8)": FunctionFragment;
    "c_truee208e0f4(bytes8)": FunctionFragment;
    "controller()": FunctionFragment;
    "executeTransaction(address,uint256,bytes)": FunctionFragment;
    "implementation()": FunctionFragment;
    "registry()": FunctionFragment;
    "setImplementation(address)": FunctionFragment;
  };
  encodeFunctionData(
    functionFragment: "c_305923d6",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_d6b1085a",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_e208e0f4",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_false305923d6",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_falsed6b1085a",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_falsee208e0f4",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_true305923d6",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_trued6b1085a",
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
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [string, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setImplementation",
    values: [string],
  ): string;
  decodeFunctionResult(functionFragment: "c_305923d6", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "c_d6b1085a", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "c_e208e0f4", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_false305923d6",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_falsed6b1085a",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_falsee208e0f4",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_true305923d6",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_trued6b1085a",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_truee208e0f4",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setImplementation",
    data: BytesLike,
  ): Result;
  events: {};
}
export interface Account extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;
  interface: AccountInterface;
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
    c_305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[void]>;
    c_d6b1085a(
      c__d6b1085a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[void]>;
    c_e208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[void]>;
    c_false305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_falsed6b1085a(
      c__d6b1085a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_falsee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_true305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_trued6b1085a(
      c__d6b1085a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_truee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    controller(overrides?: CallOverrides): Promise<[string]>;
    executeTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<ContractTransaction>;
    implementation(overrides?: CallOverrides): Promise<[string]>;
    registry(overrides?: CallOverrides): Promise<[string]>;
    setImplementation(
      implementation_: string,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<ContractTransaction>;
  };
  c_305923d6(c__305923d6: BytesLike, overrides?: CallOverrides): Promise<void>;
  c_d6b1085a(c__d6b1085a: BytesLike, overrides?: CallOverrides): Promise<void>;
  c_e208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<void>;
  c_false305923d6(
    c__305923d6: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_falsed6b1085a(
    c__d6b1085a: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_falsee208e0f4(
    c__e208e0f4: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_true305923d6(
    c__305923d6: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_trued6b1085a(
    c__d6b1085a: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_truee208e0f4(
    c__e208e0f4: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  controller(overrides?: CallOverrides): Promise<string>;
  executeTransaction(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<ContractTransaction>;
  implementation(overrides?: CallOverrides): Promise<string>;
  registry(overrides?: CallOverrides): Promise<string>;
  setImplementation(
    implementation_: string,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<ContractTransaction>;
  callStatic: {
    c_305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
    c_d6b1085a(
      c__d6b1085a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
    c_e208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
    c_false305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_falsed6b1085a(
      c__d6b1085a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_falsee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_true305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_trued6b1085a(
      c__d6b1085a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_truee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    controller(overrides?: CallOverrides): Promise<string>;
    executeTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;
    implementation(overrides?: CallOverrides): Promise<string>;
    registry(overrides?: CallOverrides): Promise<string>;
    setImplementation(
      implementation_: string,
      overrides?: CallOverrides,
    ): Promise<void>;
  };
  filters: {};
  estimateGas: {
    c_305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_d6b1085a(
      c__d6b1085a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_e208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_false305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_falsed6b1085a(
      c__d6b1085a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_falsee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_true305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_trued6b1085a(
      c__d6b1085a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_truee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    controller(overrides?: CallOverrides): Promise<BigNumber>;
    executeTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<BigNumber>;
    implementation(overrides?: CallOverrides): Promise<BigNumber>;
    registry(overrides?: CallOverrides): Promise<BigNumber>;
    setImplementation(
      implementation_: string,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<BigNumber>;
  };
  populateTransaction: {
    c_305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_d6b1085a(
      c__d6b1085a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_e208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_false305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_falsed6b1085a(
      c__d6b1085a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_falsee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_true305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_trued6b1085a(
      c__d6b1085a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_truee208e0f4(
      c__e208e0f4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    executeTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<PopulatedTransaction>;
    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    setImplementation(
      implementation_: string,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<PopulatedTransaction>;
  };
}
