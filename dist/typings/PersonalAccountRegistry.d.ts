import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PersonalAccountRegistryInterface extends utils.Interface {
    functions: {
        "accountImplementation()": FunctionFragment;
        "accountRegistry()": FunctionFragment;
        "addAccountOwner(address,address)": FunctionFragment;
        "addGuardian(address)": FunctionFragment;
        "computeAccountAddress(address)": FunctionFragment;
        "deployAccount(address)": FunctionFragment;
        "executeAccountTransaction(address,address,uint256,bytes)": FunctionFragment;
        "gateway()": FunctionFragment;
        "initialize(address[],address,address)": FunctionFragment;
        "isAccountDeployed(address)": FunctionFragment;
        "isGuardian(address)": FunctionFragment;
        "isInitialized()": FunctionFragment;
        "isValidAccountSignature(address,bytes,bytes)": FunctionFragment;
        "refundAccountCall(address,address,uint256)": FunctionFragment;
        "removeAccountOwner(address,address)": FunctionFragment;
        "removeGuardian(address)": FunctionFragment;
        "upgrade(address)": FunctionFragment;
        "upgradeAccount(address)": FunctionFragment;
        "verifyAccountOwner(address,address)": FunctionFragment;
        "verifyAccountOwnerAtBlock(address,address,uint256)": FunctionFragment;
        "verifyGuardianSignature(bytes32,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "accountImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "accountRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAccountOwner", values: [string, string]): string;
    encodeFunctionData(functionFragment: "addGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "computeAccountAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "deployAccount", values: [string]): string;
    encodeFunctionData(functionFragment: "executeAccountTransaction", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string[], string, string]): string;
    encodeFunctionData(functionFragment: "isAccountDeployed", values: [string]): string;
    encodeFunctionData(functionFragment: "isGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "isInitialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "isValidAccountSignature", values: [string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "refundAccountCall", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeAccountOwner", values: [string, string]): string;
    encodeFunctionData(functionFragment: "removeGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "upgrade", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeAccount", values: [string]): string;
    encodeFunctionData(functionFragment: "verifyAccountOwner", values: [string, string]): string;
    encodeFunctionData(functionFragment: "verifyAccountOwnerAtBlock", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "verifyGuardianSignature", values: [BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "accountImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accountRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAccountOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "computeAccountAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeAccountTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAccountDeployed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidAccountSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refundAccountCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAccountOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyAccountOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyAccountOwnerAtBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyGuardianSignature", data: BytesLike): Result;
    events: {
        "AccountCallRefunded(address,address,address,uint256)": EventFragment;
        "AccountDeployed(address,address)": EventFragment;
        "AccountImplementationUpdated(address)": EventFragment;
        "AccountOwnerAdded(address,address)": EventFragment;
        "AccountOwnerRemoved(address,address)": EventFragment;
        "AccountRegistryUpdated(address)": EventFragment;
        "AccountTransactionExecuted(address,address,uint256,bytes,bytes)": EventFragment;
        "AccountUpgraded(address,address)": EventFragment;
        "GuardianAdded(address,address)": EventFragment;
        "GuardianRemoved(address,address)": EventFragment;
        "Initialized(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccountCallRefunded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccountDeployed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccountImplementationUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccountOwnerAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccountOwnerRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccountRegistryUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccountTransactionExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccountUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GuardianAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GuardianRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
export declare type AccountCallRefundedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], {
    account: string;
    beneficiary: string;
    token: string;
    value: BigNumber;
}>;
export declare type AccountCallRefundedEventFilter = TypedEventFilter<AccountCallRefundedEvent>;
export declare type AccountDeployedEvent = TypedEvent<[
    string,
    string
], {
    account: string;
    accountImplementation: string;
}>;
export declare type AccountDeployedEventFilter = TypedEventFilter<AccountDeployedEvent>;
export declare type AccountImplementationUpdatedEvent = TypedEvent<[
    string
], {
    accountImplementation: string;
}>;
export declare type AccountImplementationUpdatedEventFilter = TypedEventFilter<AccountImplementationUpdatedEvent>;
export declare type AccountOwnerAddedEvent = TypedEvent<[
    string,
    string
], {
    account: string;
    owner: string;
}>;
export declare type AccountOwnerAddedEventFilter = TypedEventFilter<AccountOwnerAddedEvent>;
export declare type AccountOwnerRemovedEvent = TypedEvent<[
    string,
    string
], {
    account: string;
    owner: string;
}>;
export declare type AccountOwnerRemovedEventFilter = TypedEventFilter<AccountOwnerRemovedEvent>;
export declare type AccountRegistryUpdatedEvent = TypedEvent<[
    string
], {
    accountRegistry: string;
}>;
export declare type AccountRegistryUpdatedEventFilter = TypedEventFilter<AccountRegistryUpdatedEvent>;
export declare type AccountTransactionExecutedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string
], {
    account: string;
    to: string;
    value: BigNumber;
    data: string;
    response: string;
}>;
export declare type AccountTransactionExecutedEventFilter = TypedEventFilter<AccountTransactionExecutedEvent>;
export declare type AccountUpgradedEvent = TypedEvent<[
    string,
    string
], {
    account: string;
    accountImplementation: string;
}>;
export declare type AccountUpgradedEventFilter = TypedEventFilter<AccountUpgradedEvent>;
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
export interface PersonalAccountRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PersonalAccountRegistryInterface;
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
        accountImplementation(overrides?: CallOverrides): Promise<[string]>;
        accountRegistry(overrides?: CallOverrides): Promise<[string]>;
        addAccountOwner(account: string, owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        computeAccountAddress(saltOwner: string, overrides?: CallOverrides): Promise<[string]>;
        deployAccount(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeAccountTransaction(account: string, to: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gateway(overrides?: CallOverrides): Promise<[string]>;
        initialize(guardians_: string[], accountImplementation_: string, gateway_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isAccountDeployed(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<[boolean]>;
        isInitialized(overrides?: CallOverrides): Promise<[boolean]>;
        "isValidAccountSignature(address,bytes,bytes)"(account: string, message: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        "isValidAccountSignature(address,bytes32,bytes)"(account: string, messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        refundAccountCall(account: string, token: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeAccountOwner(account: string, owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgrade(accountImplementation_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeAccount(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifyAccountOwner(account: string, owner: string, overrides?: CallOverrides): Promise<[boolean]>;
        verifyAccountOwnerAtBlock(account: string, owner: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    accountImplementation(overrides?: CallOverrides): Promise<string>;
    accountRegistry(overrides?: CallOverrides): Promise<string>;
    addAccountOwner(account: string, owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addGuardian(guardian: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    computeAccountAddress(saltOwner: string, overrides?: CallOverrides): Promise<string>;
    deployAccount(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeAccountTransaction(account: string, to: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gateway(overrides?: CallOverrides): Promise<string>;
    initialize(guardians_: string[], accountImplementation_: string, gateway_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isAccountDeployed(account: string, overrides?: CallOverrides): Promise<boolean>;
    isGuardian(guardian: string, overrides?: CallOverrides): Promise<boolean>;
    isInitialized(overrides?: CallOverrides): Promise<boolean>;
    "isValidAccountSignature(address,bytes,bytes)"(account: string, message: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    "isValidAccountSignature(address,bytes32,bytes)"(account: string, messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    refundAccountCall(account: string, token: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeAccountOwner(account: string, owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeGuardian(guardian: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgrade(accountImplementation_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeAccount(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifyAccountOwner(account: string, owner: string, overrides?: CallOverrides): Promise<boolean>;
    verifyAccountOwnerAtBlock(account: string, owner: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        accountImplementation(overrides?: CallOverrides): Promise<string>;
        accountRegistry(overrides?: CallOverrides): Promise<string>;
        addAccountOwner(account: string, owner: string, overrides?: CallOverrides): Promise<void>;
        addGuardian(guardian: string, overrides?: CallOverrides): Promise<void>;
        computeAccountAddress(saltOwner: string, overrides?: CallOverrides): Promise<string>;
        deployAccount(account: string, overrides?: CallOverrides): Promise<void>;
        executeAccountTransaction(account: string, to: string, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        gateway(overrides?: CallOverrides): Promise<string>;
        initialize(guardians_: string[], accountImplementation_: string, gateway_: string, overrides?: CallOverrides): Promise<void>;
        isAccountDeployed(account: string, overrides?: CallOverrides): Promise<boolean>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<boolean>;
        isInitialized(overrides?: CallOverrides): Promise<boolean>;
        "isValidAccountSignature(address,bytes,bytes)"(account: string, message: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        "isValidAccountSignature(address,bytes32,bytes)"(account: string, messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        refundAccountCall(account: string, token: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        removeAccountOwner(account: string, owner: string, overrides?: CallOverrides): Promise<void>;
        removeGuardian(guardian: string, overrides?: CallOverrides): Promise<void>;
        upgrade(accountImplementation_: string, overrides?: CallOverrides): Promise<void>;
        upgradeAccount(account: string, overrides?: CallOverrides): Promise<void>;
        verifyAccountOwner(account: string, owner: string, overrides?: CallOverrides): Promise<boolean>;
        verifyAccountOwnerAtBlock(account: string, owner: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AccountCallRefunded(address,address,address,uint256)"(account?: null, beneficiary?: null, token?: null, value?: null): AccountCallRefundedEventFilter;
        AccountCallRefunded(account?: null, beneficiary?: null, token?: null, value?: null): AccountCallRefundedEventFilter;
        "AccountDeployed(address,address)"(account?: null, accountImplementation?: null): AccountDeployedEventFilter;
        AccountDeployed(account?: null, accountImplementation?: null): AccountDeployedEventFilter;
        "AccountImplementationUpdated(address)"(accountImplementation?: null): AccountImplementationUpdatedEventFilter;
        AccountImplementationUpdated(accountImplementation?: null): AccountImplementationUpdatedEventFilter;
        "AccountOwnerAdded(address,address)"(account?: null, owner?: null): AccountOwnerAddedEventFilter;
        AccountOwnerAdded(account?: null, owner?: null): AccountOwnerAddedEventFilter;
        "AccountOwnerRemoved(address,address)"(account?: null, owner?: null): AccountOwnerRemovedEventFilter;
        AccountOwnerRemoved(account?: null, owner?: null): AccountOwnerRemovedEventFilter;
        "AccountRegistryUpdated(address)"(accountRegistry?: null): AccountRegistryUpdatedEventFilter;
        AccountRegistryUpdated(accountRegistry?: null): AccountRegistryUpdatedEventFilter;
        "AccountTransactionExecuted(address,address,uint256,bytes,bytes)"(account?: null, to?: null, value?: null, data?: null, response?: null): AccountTransactionExecutedEventFilter;
        AccountTransactionExecuted(account?: null, to?: null, value?: null, data?: null, response?: null): AccountTransactionExecutedEventFilter;
        "AccountUpgraded(address,address)"(account?: null, accountImplementation?: null): AccountUpgradedEventFilter;
        AccountUpgraded(account?: null, accountImplementation?: null): AccountUpgradedEventFilter;
        "GuardianAdded(address,address)"(sender?: null, guardian?: null): GuardianAddedEventFilter;
        GuardianAdded(sender?: null, guardian?: null): GuardianAddedEventFilter;
        "GuardianRemoved(address,address)"(sender?: null, guardian?: null): GuardianRemovedEventFilter;
        GuardianRemoved(sender?: null, guardian?: null): GuardianRemovedEventFilter;
        "Initialized(address)"(initializer?: null): InitializedEventFilter;
        Initialized(initializer?: null): InitializedEventFilter;
    };
    estimateGas: {
        accountImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        accountRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        addAccountOwner(account: string, owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        computeAccountAddress(saltOwner: string, overrides?: CallOverrides): Promise<BigNumber>;
        deployAccount(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeAccountTransaction(account: string, to: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gateway(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(guardians_: string[], accountImplementation_: string, gateway_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isAccountDeployed(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<BigNumber>;
        isInitialized(overrides?: CallOverrides): Promise<BigNumber>;
        "isValidAccountSignature(address,bytes,bytes)"(account: string, message: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "isValidAccountSignature(address,bytes32,bytes)"(account: string, messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        refundAccountCall(account: string, token: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeAccountOwner(account: string, owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgrade(accountImplementation_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeAccount(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifyAccountOwner(account: string, owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        verifyAccountOwnerAtBlock(account: string, owner: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accountImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accountRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAccountOwner(account: string, owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        computeAccountAddress(saltOwner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployAccount(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeAccountTransaction(account: string, to: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(guardians_: string[], accountImplementation_: string, gateway_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isAccountDeployed(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isValidAccountSignature(address,bytes,bytes)"(account: string, message: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isValidAccountSignature(address,bytes32,bytes)"(account: string, messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refundAccountCall(account: string, token: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeAccountOwner(account: string, owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgrade(accountImplementation_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeAccount(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifyAccountOwner(account: string, owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyAccountOwnerAtBlock(account: string, owner: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
