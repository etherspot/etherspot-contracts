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
export interface BalancesHelperInterface extends utils.Interface {
  functions: {
    "c_053a243a(bytes8)": FunctionFragment;
    "c_false053a243a(bytes8)": FunctionFragment;
    "c_true053a243a(bytes8)": FunctionFragment;
    "getBalances(address[],address[])": FunctionFragment;
  };
  encodeFunctionData(
    functionFragment: "c_053a243a",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_false053a243a",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_true053a243a",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "getBalances",
    values: [string[], string[]],
  ): string;
  decodeFunctionResult(functionFragment: "c_053a243a", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_false053a243a",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_true053a243a",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBalances",
    data: BytesLike,
  ): Result;
  events: {};
}
export interface BalancesHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;
  interface: BalancesHelperInterface;
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
    c_053a243a(
      c__053a243a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[void]>;
    c_false053a243a(
      c__053a243a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_true053a243a(
      c__053a243a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    getBalances(
      accounts: string[],
      tokens: string[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;
  };
  c_053a243a(c__053a243a: BytesLike, overrides?: CallOverrides): Promise<void>;
  c_false053a243a(
    c__053a243a: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_true053a243a(
    c__053a243a: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  getBalances(
    accounts: string[],
    tokens: string[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;
  callStatic: {
    c_053a243a(
      c__053a243a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
    c_false053a243a(
      c__053a243a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_true053a243a(
      c__053a243a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    getBalances(
      accounts: string[],
      tokens: string[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;
  };
  filters: {};
  estimateGas: {
    c_053a243a(
      c__053a243a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_false053a243a(
      c__053a243a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_true053a243a(
      c__053a243a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    getBalances(
      accounts: string[],
      tokens: string[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };
  populateTransaction: {
    c_053a243a(
      c__053a243a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_false053a243a(
      c__053a243a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_true053a243a(
      c__053a243a: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    getBalances(
      accounts: string[],
      tokens: string[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
