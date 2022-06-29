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
    "c_4f849103(bytes8)": FunctionFragment;
    "c_ac93193e(bytes8)": FunctionFragment;
    "c_false4f849103(bytes8)": FunctionFragment;
    "c_falseac93193e(bytes8)": FunctionFragment;
    "c_true4f849103(bytes8)": FunctionFragment;
    "c_trueac93193e(bytes8)": FunctionFragment;
    "name(bytes32)": FunctionFragment;
    "setName(bytes32,string)": FunctionFragment;
  };
  encodeFunctionData(
    functionFragment: "c_4f849103",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_ac93193e",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_false4f849103",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_falseac93193e",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_true4f849103",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_trueac93193e",
    values: [BytesLike],
  ): string;
  encodeFunctionData(functionFragment: "name", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "setName",
    values: [BytesLike, string],
  ): string;
  decodeFunctionResult(functionFragment: "c_4f849103", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "c_ac93193e", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_false4f849103",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_falseac93193e",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_true4f849103",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_trueac93193e",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
  events: {
    "NameChanged(bytes32,string)": EventFragment;
  };
  getEvent(nameOrSignatureOrTopic: "NameChanged"): EventFragment;
}
export declare type NameChangedEvent = TypedEvent<
  [string, string],
  {
    node: string;
    name: string;
  }
>;
export declare type NameChangedEventFilter = TypedEventFilter<NameChangedEvent>;
export interface ENSNameResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;
  interface: ENSNameResolverInterface;
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
    c_4f849103(
      c__4f849103: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[void]>;
    c_ac93193e(
      c__ac93193e: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[void]>;
    c_false4f849103(
      c__4f849103: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_falseac93193e(
      c__ac93193e: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_true4f849103(
      c__4f849103: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_trueac93193e(
      c__ac93193e: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    name(node: BytesLike, overrides?: CallOverrides): Promise<[string]>;
    setName(
      node: BytesLike,
      name: string,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<ContractTransaction>;
  };
  c_4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<void>;
  c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<void>;
  c_false4f849103(
    c__4f849103: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_falseac93193e(
    c__ac93193e: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_true4f849103(
    c__4f849103: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_trueac93193e(
    c__ac93193e: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  name(node: BytesLike, overrides?: CallOverrides): Promise<string>;
  setName(
    node: BytesLike,
    name: string,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<ContractTransaction>;
  callStatic: {
    c_4f849103(
      c__4f849103: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
    c_ac93193e(
      c__ac93193e: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
    c_false4f849103(
      c__4f849103: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_falseac93193e(
      c__ac93193e: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_true4f849103(
      c__4f849103: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_trueac93193e(
      c__ac93193e: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    name(node: BytesLike, overrides?: CallOverrides): Promise<string>;
    setName(
      node: BytesLike,
      name: string,
      overrides?: CallOverrides,
    ): Promise<void>;
  };
  filters: {
    "NameChanged(bytes32,string)"(
      node?: BytesLike | null,
      name?: null,
    ): NameChangedEventFilter;
    NameChanged(node?: BytesLike | null, name?: null): NameChangedEventFilter;
  };
  estimateGas: {
    c_4f849103(
      c__4f849103: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_ac93193e(
      c__ac93193e: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_false4f849103(
      c__4f849103: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_falseac93193e(
      c__ac93193e: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_true4f849103(
      c__4f849103: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_trueac93193e(
      c__ac93193e: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    name(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    setName(
      node: BytesLike,
      name: string,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<BigNumber>;
  };
  populateTransaction: {
    c_4f849103(
      c__4f849103: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_ac93193e(
      c__ac93193e: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_false4f849103(
      c__4f849103: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_falseac93193e(
      c__ac93193e: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_true4f849103(
      c__4f849103: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_trueac93193e(
      c__ac93193e: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    name(
      node: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    setName(
      node: BytesLike,
      name: string,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<PopulatedTransaction>;
  };
}
