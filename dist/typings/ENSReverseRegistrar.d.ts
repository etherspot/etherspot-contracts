import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ENSReverseRegistrarInterface extends utils.Interface {
    functions: {
        "ADDR_REVERSE_NODE()": FunctionFragment;
        "claim(address)": FunctionFragment;
        "claimWithResolver(address,address)": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "isInitialized()": FunctionFragment;
        "node(address)": FunctionFragment;
        "registry()": FunctionFragment;
        "resolver()": FunctionFragment;
        "setName(string)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "ADDR_REVERSE_NODE", values?: undefined): string;
    encodeFunctionData(functionFragment: "claim", values: [string]): string;
    encodeFunctionData(functionFragment: "claimWithResolver", values: [string, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isInitialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "node", values: [string]): string;
    encodeFunctionData(functionFragment: "registry", values?: undefined): string;
    encodeFunctionData(functionFragment: "resolver", values?: undefined): string;
    encodeFunctionData(functionFragment: "setName", values: [string]): string;
    decodeFunctionResult(functionFragment: "ADDR_REVERSE_NODE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimWithResolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "node", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
    events: {
        "Initialized(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
export declare type InitializedEvent = TypedEvent<[string], {
    initializer: string;
}>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface ENSReverseRegistrar extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ENSReverseRegistrarInterface;
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
        ADDR_REVERSE_NODE(overrides?: CallOverrides): Promise<[string]>;
        claim(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimWithResolver(owner: string, resolver_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(registry_: string, resolver_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isInitialized(overrides?: CallOverrides): Promise<[boolean]>;
        node(addr_: string, overrides?: CallOverrides): Promise<[string]>;
        registry(overrides?: CallOverrides): Promise<[string]>;
        resolver(overrides?: CallOverrides): Promise<[string]>;
        setName(name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    ADDR_REVERSE_NODE(overrides?: CallOverrides): Promise<string>;
    claim(owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimWithResolver(owner: string, resolver_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(registry_: string, resolver_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isInitialized(overrides?: CallOverrides): Promise<boolean>;
    node(addr_: string, overrides?: CallOverrides): Promise<string>;
    registry(overrides?: CallOverrides): Promise<string>;
    resolver(overrides?: CallOverrides): Promise<string>;
    setName(name: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ADDR_REVERSE_NODE(overrides?: CallOverrides): Promise<string>;
        claim(owner: string, overrides?: CallOverrides): Promise<string>;
        claimWithResolver(owner: string, resolver_: string, overrides?: CallOverrides): Promise<string>;
        initialize(registry_: string, resolver_: string, overrides?: CallOverrides): Promise<void>;
        isInitialized(overrides?: CallOverrides): Promise<boolean>;
        node(addr_: string, overrides?: CallOverrides): Promise<string>;
        registry(overrides?: CallOverrides): Promise<string>;
        resolver(overrides?: CallOverrides): Promise<string>;
        setName(name: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Initialized(address)"(initializer?: null): InitializedEventFilter;
        Initialized(initializer?: null): InitializedEventFilter;
    };
    estimateGas: {
        ADDR_REVERSE_NODE(overrides?: CallOverrides): Promise<BigNumber>;
        claim(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimWithResolver(owner: string, resolver_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(registry_: string, resolver_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isInitialized(overrides?: CallOverrides): Promise<BigNumber>;
        node(addr_: string, overrides?: CallOverrides): Promise<BigNumber>;
        registry(overrides?: CallOverrides): Promise<BigNumber>;
        resolver(overrides?: CallOverrides): Promise<BigNumber>;
        setName(name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ADDR_REVERSE_NODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimWithResolver(owner: string, resolver_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(registry_: string, resolver_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        node(addr_: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setName(name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
