import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface WrappedWeiTokenInterface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "depositTo(address)": FunctionFragment;
        "gateway()": FunctionFragment;
        "initialize(address[],address)": FunctionFragment;
        "isConsumer(address)": FunctionFragment;
        "isInitialized()": FunctionFragment;
        "name()": FunctionFragment;
        "startConsuming()": FunctionFragment;
        "stopConsuming()": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
        "withdrawAll()": FunctionFragment;
        "withdrawAllTo(address)": FunctionFragment;
        "withdrawTo(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "depositTo", values: [string]): string;
    encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string[], string]): string;
    encodeFunctionData(functionFragment: "isConsumer", values: [string]): string;
    encodeFunctionData(functionFragment: "isInitialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "startConsuming", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopConsuming", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawAllTo", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawTo", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isConsumer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startConsuming", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopConsuming", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAllTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ConsumerAdded(address)": EventFragment;
        "ConsumerRemoved(address)": EventFragment;
        "Initialized(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConsumerAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConsumerRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    spender: string;
    value: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export declare type ConsumerAddedEvent = TypedEvent<[string], {
    consumer: string;
}>;
export declare type ConsumerAddedEventFilter = TypedEventFilter<ConsumerAddedEvent>;
export declare type ConsumerRemovedEvent = TypedEvent<[string], {
    consumer: string;
}>;
export declare type ConsumerRemovedEventFilter = TypedEventFilter<ConsumerRemovedEvent>;
export declare type InitializedEvent = TypedEvent<[string], {
    initializer: string;
}>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    value: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface WrappedWeiToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WrappedWeiTokenInterface;
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
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        depositTo(to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gateway(overrides?: CallOverrides): Promise<[string]>;
        initialize(consumers_: string[], gateway_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isConsumer(consumer: string, overrides?: CallOverrides): Promise<[boolean]>;
        isInitialized(overrides?: CallOverrides): Promise<[boolean]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        startConsuming(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stopConsuming(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdraw(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAllTo(to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawTo(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    depositTo(to: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gateway(overrides?: CallOverrides): Promise<string>;
    initialize(consumers_: string[], gateway_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isConsumer(consumer: string, overrides?: CallOverrides): Promise<boolean>;
    isInitialized(overrides?: CallOverrides): Promise<boolean>;
    name(overrides?: CallOverrides): Promise<string>;
    startConsuming(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stopConsuming(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdraw(value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAll(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAllTo(to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawTo(to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        depositTo(to: string, overrides?: CallOverrides): Promise<void>;
        gateway(overrides?: CallOverrides): Promise<string>;
        initialize(consumers_: string[], gateway_: string, overrides?: CallOverrides): Promise<void>;
        isConsumer(consumer: string, overrides?: CallOverrides): Promise<boolean>;
        isInitialized(overrides?: CallOverrides): Promise<boolean>;
        name(overrides?: CallOverrides): Promise<string>;
        startConsuming(overrides?: CallOverrides): Promise<void>;
        stopConsuming(overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        withdraw(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawAll(overrides?: CallOverrides): Promise<void>;
        withdrawAllTo(to: string, overrides?: CallOverrides): Promise<void>;
        withdrawTo(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "ConsumerAdded(address)"(consumer?: null): ConsumerAddedEventFilter;
        ConsumerAdded(consumer?: null): ConsumerAddedEventFilter;
        "ConsumerRemoved(address)"(consumer?: null): ConsumerRemovedEventFilter;
        ConsumerRemoved(consumer?: null): ConsumerRemovedEventFilter;
        "Initialized(address)"(initializer?: null): InitializedEventFilter;
        Initialized(initializer?: null): InitializedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        depositTo(to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gateway(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(consumers_: string[], gateway_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isConsumer(consumer: string, overrides?: CallOverrides): Promise<BigNumber>;
        isInitialized(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        startConsuming(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stopConsuming(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdraw(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAllTo(to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawTo(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositTo(to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(consumers_: string[], gateway_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isConsumer(consumer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startConsuming(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stopConsuming(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAllTo(to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTo(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
