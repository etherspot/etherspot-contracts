/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type FacetCutStruct = {
  facetAddress: string;
  action: BigNumberish;
  functionSelectors: BytesLike[];
};

export type FacetCutStructOutput = [string, number, string[]] & {
  facetAddress: string;
  action: number;
  functionSelectors: string[];
};

export interface DiamondCutFacetInterface extends utils.Interface {
  functions: {
    "c_e238b7d9(bytes8)": FunctionFragment;
    "c_falsee238b7d9(bytes8)": FunctionFragment;
    "c_truee238b7d9(bytes8)": FunctionFragment;
    "diamondCut((address,uint8,bytes4[])[],address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_e238b7d9",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_falsee238b7d9",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_truee238b7d9",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "diamondCut",
    values: [FacetCutStruct[], string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "c_e238b7d9", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_falsee238b7d9",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_truee238b7d9",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "diamondCut", data: BytesLike): Result;

  events: {
    "DiamondCut(tuple[],address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DiamondCut"): EventFragment;
}

export type DiamondCutEvent = TypedEvent<
  [FacetCutStructOutput[], string, string],
  { _diamondCut: FacetCutStructOutput[]; _init: string; _calldata: string }
>;

export type DiamondCutEventFilter = TypedEventFilter<DiamondCutEvent>;

export interface DiamondCutFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DiamondCutFacetInterface;

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
    c_e238b7d9(
      c__e238b7d9: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    c_falsee238b7d9(
      c__e238b7d9: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    c_truee238b7d9(
      c__e238b7d9: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    diamondCut(
      _diamondCut: FacetCutStruct[],
      _init: string,
      _calldata: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  c_e238b7d9(c__e238b7d9: BytesLike, overrides?: CallOverrides): Promise<void>;

  c_falsee238b7d9(
    c__e238b7d9: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  c_truee238b7d9(
    c__e238b7d9: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  diamondCut(
    _diamondCut: FacetCutStruct[],
    _init: string,
    _calldata: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    c_e238b7d9(
      c__e238b7d9: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_falsee238b7d9(
      c__e238b7d9: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    c_truee238b7d9(
      c__e238b7d9: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    diamondCut(
      _diamondCut: FacetCutStruct[],
      _init: string,
      _calldata: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DiamondCut(tuple[],address,bytes)"(
      _diamondCut?: null,
      _init?: null,
      _calldata?: null
    ): DiamondCutEventFilter;
    DiamondCut(
      _diamondCut?: null,
      _init?: null,
      _calldata?: null
    ): DiamondCutEventFilter;
  };

  estimateGas: {
    c_e238b7d9(
      c__e238b7d9: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_falsee238b7d9(
      c__e238b7d9: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_truee238b7d9(
      c__e238b7d9: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    diamondCut(
      _diamondCut: FacetCutStruct[],
      _init: string,
      _calldata: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_e238b7d9(
      c__e238b7d9: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_falsee238b7d9(
      c__e238b7d9: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_truee238b7d9(
      c__e238b7d9: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    diamondCut(
      _diamondCut: FacetCutStruct[],
      _init: string,
      _calldata: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
