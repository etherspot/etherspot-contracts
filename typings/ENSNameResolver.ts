/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ENSNameResolverInterface extends utils.Interface {
  functions: {
    "c_6f06df17(bytes8)": FunctionFragment;
    "c_f395fef5(bytes8)": FunctionFragment;
    "c_false6f06df17(bytes8)": FunctionFragment;
    "c_falsef395fef5(bytes8)": FunctionFragment;
    "c_true6f06df17(bytes8)": FunctionFragment;
    "c_truef395fef5(bytes8)": FunctionFragment;
    "name(bytes32)": FunctionFragment;
    "setName(bytes32,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_6f06df17",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_f395fef5",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_false6f06df17",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_falsef395fef5",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_true6f06df17",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_truef395fef5",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "setName",
    values: [BytesLike, string]
  ): string;

  decodeFunctionResult(functionFragment: "c_6f06df17", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "c_f395fef5", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_false6f06df17",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_falsef395fef5",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_true6f06df17",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_truef395fef5",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;

  events: {
    "NameChanged(bytes32,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NameChanged"): EventFragment;
}

export type NameChangedEvent = TypedEvent<
  [string, string],
  { node: string; name: string }
>;

export type NameChangedEventFilter = TypedEventFilter<NameChangedEvent>;

export interface ENSNameResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ENSNameResolverInterface;

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
    c_6f06df17(
      c__6f06df17: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    c_f395fef5(
      c__f395fef5: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    c_false6f06df17(
      c__6f06df17: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    c_falsef395fef5(
      c__f395fef5: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    c_true6f06df17(
      c__6f06df17: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    c_truef395fef5(
      c__f395fef5: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    name(node: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    setName(
      node: BytesLike,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  c_6f06df17(c__6f06df17: BytesLike, overrides?: CallOverrides): Promise<void>;

  c_f395fef5(c__f395fef5: BytesLike, overrides?: CallOverrides): Promise<void>;

  c_false6f06df17(
    c__6f06df17: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  c_falsef395fef5(
    c__f395fef5: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  c_true6f06df17(
    c__6f06df17: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  c_truef395fef5(
    c__f395fef5: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  name(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  setName(
    node: BytesLike,
    name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    c_6f06df17(
      c__6f06df17: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_f395fef5(
      c__f395fef5: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_false6f06df17(
      c__6f06df17: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    c_falsef395fef5(
      c__f395fef5: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    c_true6f06df17(
      c__6f06df17: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    c_truef395fef5(
      c__f395fef5: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(node: BytesLike, overrides?: CallOverrides): Promise<string>;

    setName(
      node: BytesLike,
      name: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NameChanged(bytes32,string)"(
      node?: BytesLike | null,
      name?: null
    ): NameChangedEventFilter;
    NameChanged(node?: BytesLike | null, name?: null): NameChangedEventFilter;
  };

  estimateGas: {
    c_6f06df17(
      c__6f06df17: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_f395fef5(
      c__f395fef5: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_false6f06df17(
      c__6f06df17: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_falsef395fef5(
      c__f395fef5: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_true6f06df17(
      c__6f06df17: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_truef395fef5(
      c__f395fef5: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    setName(
      node: BytesLike,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_6f06df17(
      c__6f06df17: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_f395fef5(
      c__f395fef5: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_false6f06df17(
      c__6f06df17: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_falsef395fef5(
      c__f395fef5: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_true6f06df17(
      c__6f06df17: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_truef395fef5(
      c__f395fef5: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setName(
      node: BytesLike,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
