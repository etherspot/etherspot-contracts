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

export interface ConstantsInterface extends utils.Interface {
  functions: {
    "AAVE_REFERRAL_CODE()": FunctionFragment;
    "A_PRECISION()": FunctionFragment;
    "BPS_FEE_DENOMINATOR()": FunctionFragment;
    "DEFAULT_COPY_BYTES()": FunctionFragment;
    "DEFAULT_DEADLINE_EXTENSION()": FunctionFragment;
    "DEFAULT_NORMALIZED_DECIMALS()": FunctionFragment;
    "EXECUTE_CALLDATA_RESERVE_GAS()": FunctionFragment;
    "FEE_DENOMINATOR()": FunctionFragment;
    "FUTURE_TIME_BUFFER()": FunctionFragment;
    "GOVERNANCE_DELAY()": FunctionFragment;
    "INITIAL_AAVE_REFERRAL_CODE()": FunctionFragment;
    "INITIAL_LIQUIDITY_FEE_NUMERATOR()": FunctionFragment;
    "INITIAL_MAX_ROUTERS()": FunctionFragment;
    "MAXIMUM_POOLED_TOKENS()": FunctionFragment;
    "MAX_A()": FunctionFragment;
    "MAX_ADMIN_FEE()": FunctionFragment;
    "MAX_A_CHANGE()": FunctionFragment;
    "MAX_LOOP_LIMIT()": FunctionFragment;
    "MAX_SWAP_FEE()": FunctionFragment;
    "MINIMUM_POOLED_TOKENS()": FunctionFragment;
    "MIN_RAMP_DELAY()": FunctionFragment;
    "MIN_RAMP_TIME()": FunctionFragment;
    "ORACLE_VALID_PERIOD()": FunctionFragment;
    "POOL_PRECISION_DECIMALS()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "AAVE_REFERRAL_CODE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "A_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BPS_FEE_DENOMINATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_COPY_BYTES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_DEADLINE_EXTENSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_NORMALIZED_DECIMALS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EXECUTE_CALLDATA_RESERVE_GAS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_DENOMINATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FUTURE_TIME_BUFFER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GOVERNANCE_DELAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INITIAL_AAVE_REFERRAL_CODE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INITIAL_LIQUIDITY_FEE_NUMERATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INITIAL_MAX_ROUTERS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAXIMUM_POOLED_TOKENS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAX_A", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MAX_ADMIN_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_A_CHANGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_LOOP_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_SWAP_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_POOLED_TOKENS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_RAMP_DELAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_RAMP_TIME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ORACLE_VALID_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POOL_PRECISION_DECIMALS",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "AAVE_REFERRAL_CODE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "A_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BPS_FEE_DENOMINATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_COPY_BYTES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_DEADLINE_EXTENSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_NORMALIZED_DECIMALS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EXECUTE_CALLDATA_RESERVE_GAS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FEE_DENOMINATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FUTURE_TIME_BUFFER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GOVERNANCE_DELAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INITIAL_AAVE_REFERRAL_CODE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INITIAL_LIQUIDITY_FEE_NUMERATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INITIAL_MAX_ROUTERS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAXIMUM_POOLED_TOKENS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_A", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MAX_ADMIN_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_A_CHANGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_LOOP_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_SWAP_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_POOLED_TOKENS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_RAMP_DELAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_RAMP_TIME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ORACLE_VALID_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POOL_PRECISION_DECIMALS",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Constants extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConstantsInterface;

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
    AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<[number]>;

    A_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    BPS_FEE_DENOMINATOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    DEFAULT_COPY_BYTES(overrides?: CallOverrides): Promise<[number]>;

    DEFAULT_DEADLINE_EXTENSION(overrides?: CallOverrides): Promise<[BigNumber]>;

    DEFAULT_NORMALIZED_DECIMALS(overrides?: CallOverrides): Promise<[number]>;

    EXECUTE_CALLDATA_RESERVE_GAS(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    FEE_DENOMINATOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    FUTURE_TIME_BUFFER(overrides?: CallOverrides): Promise<[BigNumber]>;

    GOVERNANCE_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    INITIAL_AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<[number]>;

    INITIAL_LIQUIDITY_FEE_NUMERATOR(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    INITIAL_MAX_ROUTERS(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAXIMUM_POOLED_TOKENS(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_A(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_ADMIN_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_A_CHANGE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_LOOP_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_SWAP_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MINIMUM_POOLED_TOKENS(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_RAMP_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_RAMP_TIME(overrides?: CallOverrides): Promise<[BigNumber]>;

    ORACLE_VALID_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    POOL_PRECISION_DECIMALS(overrides?: CallOverrides): Promise<[number]>;
  };

  AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<number>;

  A_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  BPS_FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

  DEFAULT_COPY_BYTES(overrides?: CallOverrides): Promise<number>;

  DEFAULT_DEADLINE_EXTENSION(overrides?: CallOverrides): Promise<BigNumber>;

  DEFAULT_NORMALIZED_DECIMALS(overrides?: CallOverrides): Promise<number>;

  EXECUTE_CALLDATA_RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

  FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

  FUTURE_TIME_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

  GOVERNANCE_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

  INITIAL_AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<number>;

  INITIAL_LIQUIDITY_FEE_NUMERATOR(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  INITIAL_MAX_ROUTERS(overrides?: CallOverrides): Promise<BigNumber>;

  MAXIMUM_POOLED_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_A(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_ADMIN_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_A_CHANGE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_LOOP_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_SWAP_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  MINIMUM_POOLED_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_RAMP_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_RAMP_TIME(overrides?: CallOverrides): Promise<BigNumber>;

  ORACLE_VALID_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  POOL_PRECISION_DECIMALS(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<number>;

    A_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    BPS_FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_COPY_BYTES(overrides?: CallOverrides): Promise<number>;

    DEFAULT_DEADLINE_EXTENSION(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_NORMALIZED_DECIMALS(overrides?: CallOverrides): Promise<number>;

    EXECUTE_CALLDATA_RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    FUTURE_TIME_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

    GOVERNANCE_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    INITIAL_AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<number>;

    INITIAL_LIQUIDITY_FEE_NUMERATOR(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    INITIAL_MAX_ROUTERS(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_POOLED_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_A(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_ADMIN_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_A_CHANGE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_LOOP_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_SWAP_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_POOLED_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_RAMP_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_RAMP_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    ORACLE_VALID_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    POOL_PRECISION_DECIMALS(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<BigNumber>;

    A_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    BPS_FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_COPY_BYTES(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_DEADLINE_EXTENSION(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_NORMALIZED_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    EXECUTE_CALLDATA_RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    FUTURE_TIME_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

    GOVERNANCE_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    INITIAL_AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<BigNumber>;

    INITIAL_LIQUIDITY_FEE_NUMERATOR(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    INITIAL_MAX_ROUTERS(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_POOLED_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_A(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_ADMIN_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_A_CHANGE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_LOOP_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_SWAP_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_POOLED_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_RAMP_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_RAMP_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    ORACLE_VALID_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    POOL_PRECISION_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    AAVE_REFERRAL_CODE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    A_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BPS_FEE_DENOMINATOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DEFAULT_COPY_BYTES(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DEFAULT_DEADLINE_EXTENSION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DEFAULT_NORMALIZED_DECIMALS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    EXECUTE_CALLDATA_RESERVE_GAS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FEE_DENOMINATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FUTURE_TIME_BUFFER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GOVERNANCE_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INITIAL_AAVE_REFERRAL_CODE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INITIAL_LIQUIDITY_FEE_NUMERATOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INITIAL_MAX_ROUTERS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAXIMUM_POOLED_TOKENS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAX_A(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_ADMIN_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_A_CHANGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_LOOP_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_SWAP_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINIMUM_POOLED_TOKENS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MIN_RAMP_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_RAMP_TIME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ORACLE_VALID_PERIOD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POOL_PRECISION_DECIMALS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}