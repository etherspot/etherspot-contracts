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

export type FacetStruct = {
  facetAddress: string;
  functionSelectors: BytesLike[];
};

export type FacetStructOutput = [string, string[]] & {
  facetAddress: string;
  functionSelectors: string[];
};

export interface DiamondLoupeFacetInterface extends utils.Interface {
  functions: {
    "c_cb71d28d(bytes8)": FunctionFragment;
    "c_falsecb71d28d(bytes8)": FunctionFragment;
    "c_truecb71d28d(bytes8)": FunctionFragment;
    "facetAddress(bytes4)": FunctionFragment;
    "facetAddresses()": FunctionFragment;
    "facetFunctionSelectors(address)": FunctionFragment;
    "facets()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_cb71d28d",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_falsecb71d28d",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_truecb71d28d",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "facetAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "facetAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "facetFunctionSelectors",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "facets", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "c_cb71d28d", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_falsecb71d28d",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_truecb71d28d",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetFunctionSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "facets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {};
}

export interface DiamondLoupeFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DiamondLoupeFacetInterface;

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
    c_cb71d28d(
      c__cb71d28d: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    c_falsecb71d28d(
      c__cb71d28d: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    c_truecb71d28d(
      c__cb71d28d: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    facetAddress(
      _functionSelector: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { facetAddress_: string }>;

    facetAddresses(
      overrides?: CallOverrides
    ): Promise<[string[]] & { facetAddresses_: string[] }>;

    facetFunctionSelectors(
      _facet: string,
      overrides?: CallOverrides
    ): Promise<[string[]] & { facetFunctionSelectors_: string[] }>;

    facets(
      overrides?: CallOverrides
    ): Promise<[FacetStructOutput[]] & { facets_: FacetStructOutput[] }>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  c_cb71d28d(c__cb71d28d: BytesLike, overrides?: CallOverrides): Promise<void>;

  c_falsecb71d28d(
    c__cb71d28d: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  c_truecb71d28d(
    c__cb71d28d: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  facetAddress(
    _functionSelector: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  facetAddresses(overrides?: CallOverrides): Promise<string[]>;

  facetFunctionSelectors(
    _facet: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  facets(overrides?: CallOverrides): Promise<FacetStructOutput[]>;

  supportsInterface(
    _interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    c_cb71d28d(
      c__cb71d28d: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_falsecb71d28d(
      c__cb71d28d: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    c_truecb71d28d(
      c__cb71d28d: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    facetAddress(
      _functionSelector: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    facetAddresses(overrides?: CallOverrides): Promise<string[]>;

    facetFunctionSelectors(
      _facet: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    facets(overrides?: CallOverrides): Promise<FacetStructOutput[]>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    c_cb71d28d(
      c__cb71d28d: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_falsecb71d28d(
      c__cb71d28d: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_truecb71d28d(
      c__cb71d28d: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    facetAddress(
      _functionSelector: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    facetAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    facetFunctionSelectors(
      _facet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    facets(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_cb71d28d(
      c__cb71d28d: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_falsecb71d28d(
      c__cb71d28d: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_truecb71d28d(
      c__cb71d28d: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    facetAddress(
      _functionSelector: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    facetAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    facetFunctionSelectors(
      _facet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    facets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
