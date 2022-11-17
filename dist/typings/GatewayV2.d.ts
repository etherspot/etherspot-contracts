import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type DelegatedBatchStruct = {
    account: string;
    nonce: BigNumberish;
    to: string[];
    data: BytesLike[];
};
export declare type DelegatedBatchStructOutput = [
    string,
    BigNumber,
    string[],
    string[]
] & {
    account: string;
    nonce: BigNumber;
    to: string[];
    data: string[];
};
export declare type DelegatedBatchWithGasPriceStruct = {
    account: string;
    nonce: BigNumberish;
    to: string[];
    data: BytesLike[];
    gasPrice: BigNumberish;
};
export declare type DelegatedBatchWithGasPriceStructOutput = [
    string,
    BigNumber,
    string[],
    string[],
    BigNumber
] & {
    account: string;
    nonce: BigNumber;
    to: string[];
    data: string[];
    gasPrice: BigNumber;
};
export interface GatewayV2Interface extends utils.Interface {
    functions: {
        "addGuardian(address)": FunctionFragment;
        "chainId()": FunctionFragment;
        "delegateBatch(address,uint256,address[],bytes[],bytes)": FunctionFragment;
        "delegateBatchGuarded(address,uint256,address[],bytes[],bytes)": FunctionFragment;
        "delegateBatchWithGasPrice(address,uint256,address[],bytes[],bytes)": FunctionFragment;
        "delegateBatchWithGasPriceGuarded(address,uint256,address[],bytes[],bytes)": FunctionFragment;
        "delegateBatches(bytes[],bool)": FunctionFragment;
        "delegateBatchesGuarded(bytes[],bool)": FunctionFragment;
        "externalAccountRegistry()": FunctionFragment;
        "getAccountNextNonce(address)": FunctionFragment;
        "hashDelegatedBatch((address,uint256,address[],bytes[]))": FunctionFragment;
        "hashDelegatedBatchWithGasPrice((address,uint256,address[],bytes[],uint256))": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "isGuardian(address)": FunctionFragment;
        "isInitialized()": FunctionFragment;
        "personalAccountRegistry()": FunctionFragment;
        "removeGuardian(address)": FunctionFragment;
        "sendBatch(address[],bytes[])": FunctionFragment;
        "sendBatchFromAccount(address,address[],bytes[])": FunctionFragment;
        "sendBatchFromAccountGuarded(address,address[],bytes[])": FunctionFragment;
        "sendBatchGuarded(address[],bytes[])": FunctionFragment;
        "verifyGuardianSignature(bytes32,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegateBatch", values: [string, BigNumberish, string[], BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "delegateBatchGuarded", values: [string, BigNumberish, string[], BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "delegateBatchWithGasPrice", values: [string, BigNumberish, string[], BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "delegateBatchWithGasPriceGuarded", values: [string, BigNumberish, string[], BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "delegateBatches", values: [BytesLike[], boolean]): string;
    encodeFunctionData(functionFragment: "delegateBatchesGuarded", values: [BytesLike[], boolean]): string;
    encodeFunctionData(functionFragment: "externalAccountRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccountNextNonce", values: [string]): string;
    encodeFunctionData(functionFragment: "hashDelegatedBatch", values: [DelegatedBatchStruct]): string;
    encodeFunctionData(functionFragment: "hashDelegatedBatchWithGasPrice", values: [DelegatedBatchWithGasPriceStruct]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "isInitialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "personalAccountRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "sendBatch", values: [string[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "sendBatchFromAccount", values: [string, string[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "sendBatchFromAccountGuarded", values: [string, string[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "sendBatchGuarded", values: [string[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "verifyGuardianSignature", values: [BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "addGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateBatchGuarded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateBatchWithGasPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateBatchWithGasPriceGuarded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateBatches", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateBatchesGuarded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "externalAccountRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountNextNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashDelegatedBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashDelegatedBatchWithGasPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "personalAccountRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendBatchFromAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendBatchFromAccountGuarded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendBatchGuarded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyGuardianSignature", data: BytesLike): Result;
    events: {
        "BatchDelegated(address,bytes,bool)": EventFragment;
        "GuardianAdded(address,address)": EventFragment;
        "GuardianRemoved(address,address)": EventFragment;
        "Initialized(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BatchDelegated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GuardianAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GuardianRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
export declare type BatchDelegatedEvent = TypedEvent<[
    string,
    string,
    boolean
], {
    sender: string;
    batch: string;
    succeeded: boolean;
}>;
export declare type BatchDelegatedEventFilter = TypedEventFilter<BatchDelegatedEvent>;
export declare type GuardianAddedEvent = TypedEvent<[
    string,
    string
], {
    sender: string;
    guardian: string;
}>;
export declare type GuardianAddedEventFilter = TypedEventFilter<GuardianAddedEvent>;
export declare type GuardianRemovedEvent = TypedEvent<[
    string,
    string
], {
    sender: string;
    guardian: string;
}>;
export declare type GuardianRemovedEventFilter = TypedEventFilter<GuardianRemovedEvent>;
export declare type InitializedEvent = TypedEvent<[string], {
    initializer: string;
}>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface GatewayV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GatewayV2Interface;
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
        addGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        chainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        delegateBatch(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegateBatchGuarded(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegateBatchWithGasPrice(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegateBatchWithGasPriceGuarded(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegateBatches(batches: BytesLike[], revertOnFailure: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegateBatchesGuarded(batches: BytesLike[], revertOnFailure: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        externalAccountRegistry(overrides?: CallOverrides): Promise<[string]>;
        getAccountNextNonce(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        hashDelegatedBatch(delegatedBatch: DelegatedBatchStruct, overrides?: CallOverrides): Promise<[string]>;
        hashDelegatedBatchWithGasPrice(delegatedBatch: DelegatedBatchWithGasPriceStruct, overrides?: CallOverrides): Promise<[string]>;
        initialize(externalAccountRegistry_: string, personalAccountRegistry_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<[boolean]>;
        isInitialized(overrides?: CallOverrides): Promise<[boolean]>;
        personalAccountRegistry(overrides?: CallOverrides): Promise<[string]>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendBatch(to: string[], data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendBatchFromAccount(account: string, to: string[], data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendBatchFromAccountGuarded(account: string, to: string[], data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendBatchGuarded(to: string[], data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    addGuardian(guardian: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    chainId(overrides?: CallOverrides): Promise<BigNumber>;
    delegateBatch(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegateBatchGuarded(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegateBatchWithGasPrice(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegateBatchWithGasPriceGuarded(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegateBatches(batches: BytesLike[], revertOnFailure: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegateBatchesGuarded(batches: BytesLike[], revertOnFailure: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    externalAccountRegistry(overrides?: CallOverrides): Promise<string>;
    getAccountNextNonce(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    hashDelegatedBatch(delegatedBatch: DelegatedBatchStruct, overrides?: CallOverrides): Promise<string>;
    hashDelegatedBatchWithGasPrice(delegatedBatch: DelegatedBatchWithGasPriceStruct, overrides?: CallOverrides): Promise<string>;
    initialize(externalAccountRegistry_: string, personalAccountRegistry_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isGuardian(guardian: string, overrides?: CallOverrides): Promise<boolean>;
    isInitialized(overrides?: CallOverrides): Promise<boolean>;
    personalAccountRegistry(overrides?: CallOverrides): Promise<string>;
    removeGuardian(guardian: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendBatch(to: string[], data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendBatchFromAccount(account: string, to: string[], data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendBatchFromAccountGuarded(account: string, to: string[], data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendBatchGuarded(to: string[], data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        addGuardian(guardian: string, overrides?: CallOverrides): Promise<void>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        delegateBatch(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
        delegateBatchGuarded(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
        delegateBatchWithGasPrice(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
        delegateBatchWithGasPriceGuarded(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
        delegateBatches(batches: BytesLike[], revertOnFailure: boolean, overrides?: CallOverrides): Promise<void>;
        delegateBatchesGuarded(batches: BytesLike[], revertOnFailure: boolean, overrides?: CallOverrides): Promise<void>;
        externalAccountRegistry(overrides?: CallOverrides): Promise<string>;
        getAccountNextNonce(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hashDelegatedBatch(delegatedBatch: DelegatedBatchStruct, overrides?: CallOverrides): Promise<string>;
        hashDelegatedBatchWithGasPrice(delegatedBatch: DelegatedBatchWithGasPriceStruct, overrides?: CallOverrides): Promise<string>;
        initialize(externalAccountRegistry_: string, personalAccountRegistry_: string, overrides?: CallOverrides): Promise<void>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<boolean>;
        isInitialized(overrides?: CallOverrides): Promise<boolean>;
        personalAccountRegistry(overrides?: CallOverrides): Promise<string>;
        removeGuardian(guardian: string, overrides?: CallOverrides): Promise<void>;
        sendBatch(to: string[], data: BytesLike[], overrides?: CallOverrides): Promise<void>;
        sendBatchFromAccount(account: string, to: string[], data: BytesLike[], overrides?: CallOverrides): Promise<void>;
        sendBatchFromAccountGuarded(account: string, to: string[], data: BytesLike[], overrides?: CallOverrides): Promise<void>;
        sendBatchGuarded(to: string[], data: BytesLike[], overrides?: CallOverrides): Promise<void>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "BatchDelegated(address,bytes,bool)"(sender?: null, batch?: null, succeeded?: null): BatchDelegatedEventFilter;
        BatchDelegated(sender?: null, batch?: null, succeeded?: null): BatchDelegatedEventFilter;
        "GuardianAdded(address,address)"(sender?: null, guardian?: null): GuardianAddedEventFilter;
        GuardianAdded(sender?: null, guardian?: null): GuardianAddedEventFilter;
        "GuardianRemoved(address,address)"(sender?: null, guardian?: null): GuardianRemovedEventFilter;
        GuardianRemoved(sender?: null, guardian?: null): GuardianRemovedEventFilter;
        "Initialized(address)"(initializer?: null): InitializedEventFilter;
        Initialized(initializer?: null): InitializedEventFilter;
    };
    estimateGas: {
        addGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        delegateBatch(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegateBatchGuarded(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegateBatchWithGasPrice(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegateBatchWithGasPriceGuarded(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegateBatches(batches: BytesLike[], revertOnFailure: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegateBatchesGuarded(batches: BytesLike[], revertOnFailure: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        externalAccountRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        getAccountNextNonce(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hashDelegatedBatch(delegatedBatch: DelegatedBatchStruct, overrides?: CallOverrides): Promise<BigNumber>;
        hashDelegatedBatchWithGasPrice(delegatedBatch: DelegatedBatchWithGasPriceStruct, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(externalAccountRegistry_: string, personalAccountRegistry_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<BigNumber>;
        isInitialized(overrides?: CallOverrides): Promise<BigNumber>;
        personalAccountRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendBatch(to: string[], data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendBatchFromAccount(account: string, to: string[], data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendBatchFromAccountGuarded(account: string, to: string[], data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendBatchGuarded(to: string[], data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegateBatch(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegateBatchGuarded(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegateBatchWithGasPrice(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegateBatchWithGasPriceGuarded(account: string, nonce: BigNumberish, to: string[], data: BytesLike[], senderSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegateBatches(batches: BytesLike[], revertOnFailure: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegateBatchesGuarded(batches: BytesLike[], revertOnFailure: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        externalAccountRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountNextNonce(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hashDelegatedBatch(delegatedBatch: DelegatedBatchStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hashDelegatedBatchWithGasPrice(delegatedBatch: DelegatedBatchWithGasPriceStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(externalAccountRegistry_: string, personalAccountRegistry_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        personalAccountRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendBatch(to: string[], data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendBatchFromAccount(account: string, to: string[], data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendBatchFromAccountGuarded(account: string, to: string[], data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendBatchGuarded(to: string[], data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
