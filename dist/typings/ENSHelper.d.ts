import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ENSHelperInterface extends utils.Interface {
    functions: {
        "getAddresses(bytes32[])": FunctionFragment;
        "getNames(bytes32[])": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "isInitialized()": FunctionFragment;
        "registry()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getAddresses", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "getNames", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "isInitialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "registry", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNames", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
    events: {
        "Initialized(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
export declare type InitializedEvent = TypedEvent<[string], {
    initializer: string;
}>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface ENSHelper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ENSHelperInterface;
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
        getAddresses(nodes: BytesLike[], overrides?: CallOverrides): Promise<[string[]]>;
        getNames(nodes: BytesLike[], overrides?: CallOverrides): Promise<[string[]]>;
        initialize(registry_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isInitialized(overrides?: CallOverrides): Promise<[boolean]>;
        registry(overrides?: CallOverrides): Promise<[string]>;
    };
    getAddresses(nodes: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
    getNames(nodes: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
    initialize(registry_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isInitialized(overrides?: CallOverrides): Promise<boolean>;
    registry(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getAddresses(nodes: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        getNames(nodes: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        initialize(registry_: string, overrides?: CallOverrides): Promise<void>;
        isInitialized(overrides?: CallOverrides): Promise<boolean>;
        registry(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Initialized(address)"(initializer?: null): InitializedEventFilter;
        Initialized(initializer?: null): InitializedEventFilter;
    };
    estimateGas: {
        getAddresses(nodes: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        getNames(nodes: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        initialize(registry_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isInitialized(overrides?: CallOverrides): Promise<BigNumber>;
        registry(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getAddresses(nodes: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNames(nodes: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(registry_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
