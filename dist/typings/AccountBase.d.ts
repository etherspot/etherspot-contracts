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
export interface AccountBaseInterface extends utils.Interface {
  functions: {
    "c_305923d6(bytes8)": FunctionFragment;
    "c_false305923d6(bytes8)": FunctionFragment;
    "c_true305923d6(bytes8)": FunctionFragment;
    "registry()": FunctionFragment;
  };
  encodeFunctionData(
    functionFragment: "c_305923d6",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_false305923d6",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_true305923d6",
    values: [BytesLike],
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  decodeFunctionResult(functionFragment: "c_305923d6", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_false305923d6",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_true305923d6",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  events: {};
}
export interface AccountBase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;
  interface: AccountBaseInterface;
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
    c_false305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_true305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    registry(overrides?: CallOverrides): Promise<[string]>;
  };
  c_305923d6(c__305923d6: BytesLike, overrides?: CallOverrides): Promise<void>;
  c_false305923d6(
    c__305923d6: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_true305923d6(
    c__305923d6: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  registry(overrides?: CallOverrides): Promise<string>;
  callStatic: {
    c_305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
    c_false305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_true305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    registry(overrides?: CallOverrides): Promise<string>;
  };
  filters: {};
  estimateGas: {
    c_305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_false305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_true305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    registry(overrides?: CallOverrides): Promise<BigNumber>;
  };
  populateTransaction: {
    c_305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_false305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_true305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
