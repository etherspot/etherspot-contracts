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

export interface BalancesHelperV2Interface extends utils.Interface {
  functions: {
    "getSuperfluidPureTokenBalances(address[],address[])": FunctionFragment;
    "getSuperfluidWrappedTokenBalances(address[],address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getSuperfluidPureTokenBalances",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getSuperfluidWrappedTokenBalances",
    values: [string[], string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getSuperfluidPureTokenBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSuperfluidWrappedTokenBalances",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BalancesHelperV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BalancesHelperV2Interface;

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
    getSuperfluidPureTokenBalances(
      accounts: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getSuperfluidWrappedTokenBalances(
      accounts: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;
  };

  getSuperfluidPureTokenBalances(
    accounts: string[],
    tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getSuperfluidWrappedTokenBalances(
    accounts: string[],
    tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    getSuperfluidPureTokenBalances(
      accounts: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getSuperfluidWrappedTokenBalances(
      accounts: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    getSuperfluidPureTokenBalances(
      accounts: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSuperfluidWrappedTokenBalances(
      accounts: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getSuperfluidPureTokenBalances(
      accounts: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSuperfluidWrappedTokenBalances(
      accounts: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}