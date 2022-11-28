/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface PaymentDepositAccountInterface extends ethers.utils.Interface {
  functions: {
    "controller()": FunctionFragment;
    "executeTransaction(address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike
  ): Result;

  events: {};
}

export class PaymentDepositAccount extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PaymentDepositAccountInterface;

  functions: {
    controller(overrides?: CallOverrides): Promise<[string]>;

    "controller()"(overrides?: CallOverrides): Promise<[string]>;

    executeTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "executeTransaction(address,uint256,bytes)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  controller(overrides?: CallOverrides): Promise<string>;

  "controller()"(overrides?: CallOverrides): Promise<string>;

  executeTransaction(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "executeTransaction(address,uint256,bytes)"(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    controller(overrides?: CallOverrides): Promise<string>;

    "controller()"(overrides?: CallOverrides): Promise<string>;

    executeTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "executeTransaction(address,uint256,bytes)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    controller(overrides?: CallOverrides): Promise<BigNumber>;

    "controller()"(overrides?: CallOverrides): Promise<BigNumber>;

    executeTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "executeTransaction(address,uint256,bytes)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "controller()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "executeTransaction(address,uint256,bytes)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}