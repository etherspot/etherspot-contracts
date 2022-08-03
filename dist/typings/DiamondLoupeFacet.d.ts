import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type FacetStruct = {
    facetAddress: string;
    functionSelectors: BytesLike[];
};
export declare type FacetStructOutput = [string, string[]] & {
    facetAddress: string;
    functionSelectors: string[];
};
export interface DiamondLoupeFacetInterface extends utils.Interface {
    functions: {
        "facetAddress(bytes4)": FunctionFragment;
        "facetAddresses()": FunctionFragment;
        "facetFunctionSelectors(address)": FunctionFragment;
        "facets()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "facetAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "facetAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "facetFunctionSelectors", values: [string]): string;
    encodeFunctionData(functionFragment: "facets", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "facetAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetFunctionSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {};
}
export interface DiamondLoupeFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DiamondLoupeFacetInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        facetAddress(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            facetAddress_: string;
        }>;
        facetAddresses(overrides?: CallOverrides): Promise<[string[]] & {
            facetAddresses_: string[];
        }>;
        facetFunctionSelectors(_facet: string, overrides?: CallOverrides): Promise<[string[]] & {
            facetFunctionSelectors_: string[];
        }>;
        facets(overrides?: CallOverrides): Promise<[FacetStructOutput[]] & {
            facets_: FacetStructOutput[];
        }>;
        supportsInterface(_interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    facetAddress(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<string>;
    facetAddresses(overrides?: CallOverrides): Promise<string[]>;
    facetFunctionSelectors(_facet: string, overrides?: CallOverrides): Promise<string[]>;
    facets(overrides?: CallOverrides): Promise<FacetStructOutput[]>;
    supportsInterface(_interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        facetAddress(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<string>;
        facetAddresses(overrides?: CallOverrides): Promise<string[]>;
        facetFunctionSelectors(_facet: string, overrides?: CallOverrides): Promise<string[]>;
        facets(overrides?: CallOverrides): Promise<FacetStructOutput[]>;
        supportsInterface(_interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        facetAddress(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        facetAddresses(overrides?: CallOverrides): Promise<BigNumber>;
        facetFunctionSelectors(_facet: string, overrides?: CallOverrides): Promise<BigNumber>;
        facets(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(_interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        facetAddress(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        facetAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        facetFunctionSelectors(_facet: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        facets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(_interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
