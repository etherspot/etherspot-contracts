import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IInstantDistributionAgreementV1Interface extends utils.Interface {
    functions: {
        "agreementType()": FunctionFragment;
        "approveSubscription(address,address,uint32,bytes)": FunctionFragment;
        "calculateDistribution(address,address,uint32,uint256)": FunctionFragment;
        "claim(address,address,uint32,address,bytes)": FunctionFragment;
        "createIndex(address,uint32,bytes)": FunctionFragment;
        "deleteSubscription(address,address,uint32,address,bytes)": FunctionFragment;
        "distribute(address,uint32,uint256,bytes)": FunctionFragment;
        "getIndex(address,address,uint32)": FunctionFragment;
        "getSubscription(address,address,uint32,address)": FunctionFragment;
        "getSubscriptionByID(address,bytes32)": FunctionFragment;
        "listSubscriptions(address,address)": FunctionFragment;
        "realtimeBalanceOf(address,address,uint256)": FunctionFragment;
        "revokeSubscription(address,address,uint32,bytes)": FunctionFragment;
        "updateIndex(address,uint32,uint128,bytes)": FunctionFragment;
        "updateSubscription(address,uint32,address,uint128,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "agreementType", values?: undefined): string;
    encodeFunctionData(functionFragment: "approveSubscription", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "calculateDistribution", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claim", values: [string, string, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "createIndex", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "deleteSubscription", values: [string, string, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "distribute", values: [string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getIndex", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSubscription", values: [string, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getSubscriptionByID", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "listSubscriptions", values: [string, string]): string;
    encodeFunctionData(functionFragment: "realtimeBalanceOf", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "revokeSubscription", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "updateIndex", values: [string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "updateSubscription", values: [string, BigNumberish, string, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "agreementType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateDistribution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubscriptionByID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "listSubscriptions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "realtimeBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSubscription", data: BytesLike): Result;
    events: {
        "IndexCreated(address,address,uint32,bytes)": EventFragment;
        "IndexDistributionClaimed(address,address,uint32,address,uint256)": EventFragment;
        "IndexSubscribed(address,address,uint32,address,bytes)": EventFragment;
        "IndexUnitsUpdated(address,address,uint32,address,uint128,bytes)": EventFragment;
        "IndexUnsubscribed(address,address,uint32,address,bytes)": EventFragment;
        "IndexUpdated(address,address,uint32,uint128,uint128,uint128,uint128,bytes)": EventFragment;
        "SubscriptionApproved(address,address,address,uint32,bytes)": EventFragment;
        "SubscriptionDistributionClaimed(address,address,address,uint32,uint256)": EventFragment;
        "SubscriptionRevoked(address,address,address,uint32,bytes)": EventFragment;
        "SubscriptionUnitsUpdated(address,address,address,uint32,uint128,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "IndexCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IndexDistributionClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IndexSubscribed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IndexUnitsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IndexUnsubscribed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IndexUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SubscriptionApproved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SubscriptionDistributionClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SubscriptionRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SubscriptionUnitsUpdated"): EventFragment;
}
export declare type IndexCreatedEvent = TypedEvent<[
    string,
    string,
    number,
    string
], {
    token: string;
    publisher: string;
    indexId: number;
    userData: string;
}>;
export declare type IndexCreatedEventFilter = TypedEventFilter<IndexCreatedEvent>;
export declare type IndexDistributionClaimedEvent = TypedEvent<[
    string,
    string,
    number,
    string,
    BigNumber
], {
    token: string;
    publisher: string;
    indexId: number;
    subscriber: string;
    amount: BigNumber;
}>;
export declare type IndexDistributionClaimedEventFilter = TypedEventFilter<IndexDistributionClaimedEvent>;
export declare type IndexSubscribedEvent = TypedEvent<[
    string,
    string,
    number,
    string,
    string
], {
    token: string;
    publisher: string;
    indexId: number;
    subscriber: string;
    userData: string;
}>;
export declare type IndexSubscribedEventFilter = TypedEventFilter<IndexSubscribedEvent>;
export declare type IndexUnitsUpdatedEvent = TypedEvent<[
    string,
    string,
    number,
    string,
    BigNumber,
    string
], {
    token: string;
    publisher: string;
    indexId: number;
    subscriber: string;
    units: BigNumber;
    userData: string;
}>;
export declare type IndexUnitsUpdatedEventFilter = TypedEventFilter<IndexUnitsUpdatedEvent>;
export declare type IndexUnsubscribedEvent = TypedEvent<[
    string,
    string,
    number,
    string,
    string
], {
    token: string;
    publisher: string;
    indexId: number;
    subscriber: string;
    userData: string;
}>;
export declare type IndexUnsubscribedEventFilter = TypedEventFilter<IndexUnsubscribedEvent>;
export declare type IndexUpdatedEvent = TypedEvent<[
    string,
    string,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], {
    token: string;
    publisher: string;
    indexId: number;
    oldIndexValue: BigNumber;
    newIndexValue: BigNumber;
    totalUnitsPending: BigNumber;
    totalUnitsApproved: BigNumber;
    userData: string;
}>;
export declare type IndexUpdatedEventFilter = TypedEventFilter<IndexUpdatedEvent>;
export declare type SubscriptionApprovedEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    string
], {
    token: string;
    subscriber: string;
    publisher: string;
    indexId: number;
    userData: string;
}>;
export declare type SubscriptionApprovedEventFilter = TypedEventFilter<SubscriptionApprovedEvent>;
export declare type SubscriptionDistributionClaimedEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    BigNumber
], {
    token: string;
    subscriber: string;
    publisher: string;
    indexId: number;
    amount: BigNumber;
}>;
export declare type SubscriptionDistributionClaimedEventFilter = TypedEventFilter<SubscriptionDistributionClaimedEvent>;
export declare type SubscriptionRevokedEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    string
], {
    token: string;
    subscriber: string;
    publisher: string;
    indexId: number;
    userData: string;
}>;
export declare type SubscriptionRevokedEventFilter = TypedEventFilter<SubscriptionRevokedEvent>;
export declare type SubscriptionUnitsUpdatedEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    BigNumber,
    string
], {
    token: string;
    subscriber: string;
    publisher: string;
    indexId: number;
    units: BigNumber;
    userData: string;
}>;
export declare type SubscriptionUnitsUpdatedEventFilter = TypedEventFilter<SubscriptionUnitsUpdatedEvent>;
export interface IInstantDistributionAgreementV1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IInstantDistributionAgreementV1Interface;
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
        agreementType(overrides?: CallOverrides): Promise<[string]>;
        approveSubscription(token: string, publisher: string, indexId: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        calculateDistribution(token: string, publisher: string, indexId: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            actualAmount: BigNumber;
            newIndexValue: BigNumber;
        }>;
        claim(token: string, publisher: string, indexId: BigNumberish, subscriber: string, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createIndex(token: string, indexId: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deleteSubscription(token: string, publisher: string, indexId: BigNumberish, subscriber: string, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        distribute(token: string, indexId: BigNumberish, amount: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getIndex(token: string, publisher: string, indexId: BigNumberish, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            exist: boolean;
            indexValue: BigNumber;
            totalUnitsApproved: BigNumber;
            totalUnitsPending: BigNumber;
        }>;
        getSubscription(token: string, publisher: string, indexId: BigNumberish, subscriber: string, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            exist: boolean;
            approved: boolean;
            units: BigNumber;
            pendingDistribution: BigNumber;
        }>;
        getSubscriptionByID(token: string, agreementId: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            number,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            publisher: string;
            indexId: number;
            approved: boolean;
            units: BigNumber;
            pendingDistribution: BigNumber;
        }>;
        listSubscriptions(token: string, subscriber: string, overrides?: CallOverrides): Promise<[
            string[],
            number[],
            BigNumber[]
        ] & {
            publishers: string[];
            indexIds: number[];
            unitsList: BigNumber[];
        }>;
        realtimeBalanceOf(token: string, account: string, time: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            dynamicBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        revokeSubscription(token: string, publisher: string, indexId: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateIndex(token: string, indexId: BigNumberish, indexValue: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateSubscription(token: string, indexId: BigNumberish, subscriber: string, units: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    agreementType(overrides?: CallOverrides): Promise<string>;
    approveSubscription(token: string, publisher: string, indexId: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    calculateDistribution(token: string, publisher: string, indexId: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        actualAmount: BigNumber;
        newIndexValue: BigNumber;
    }>;
    claim(token: string, publisher: string, indexId: BigNumberish, subscriber: string, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createIndex(token: string, indexId: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deleteSubscription(token: string, publisher: string, indexId: BigNumberish, subscriber: string, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    distribute(token: string, indexId: BigNumberish, amount: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getIndex(token: string, publisher: string, indexId: BigNumberish, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        exist: boolean;
        indexValue: BigNumber;
        totalUnitsApproved: BigNumber;
        totalUnitsPending: BigNumber;
    }>;
    getSubscription(token: string, publisher: string, indexId: BigNumberish, subscriber: string, overrides?: CallOverrides): Promise<[
        boolean,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        exist: boolean;
        approved: boolean;
        units: BigNumber;
        pendingDistribution: BigNumber;
    }>;
    getSubscriptionByID(token: string, agreementId: BytesLike, overrides?: CallOverrides): Promise<[
        string,
        number,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        publisher: string;
        indexId: number;
        approved: boolean;
        units: BigNumber;
        pendingDistribution: BigNumber;
    }>;
    listSubscriptions(token: string, subscriber: string, overrides?: CallOverrides): Promise<[
        string[],
        number[],
        BigNumber[]
    ] & {
        publishers: string[];
        indexIds: number[];
        unitsList: BigNumber[];
    }>;
    realtimeBalanceOf(token: string, account: string, time: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        dynamicBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
    }>;
    revokeSubscription(token: string, publisher: string, indexId: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateIndex(token: string, indexId: BigNumberish, indexValue: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateSubscription(token: string, indexId: BigNumberish, subscriber: string, units: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        agreementType(overrides?: CallOverrides): Promise<string>;
        approveSubscription(token: string, publisher: string, indexId: BigNumberish, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        calculateDistribution(token: string, publisher: string, indexId: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            actualAmount: BigNumber;
            newIndexValue: BigNumber;
        }>;
        claim(token: string, publisher: string, indexId: BigNumberish, subscriber: string, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        createIndex(token: string, indexId: BigNumberish, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        deleteSubscription(token: string, publisher: string, indexId: BigNumberish, subscriber: string, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        distribute(token: string, indexId: BigNumberish, amount: BigNumberish, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        getIndex(token: string, publisher: string, indexId: BigNumberish, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            exist: boolean;
            indexValue: BigNumber;
            totalUnitsApproved: BigNumber;
            totalUnitsPending: BigNumber;
        }>;
        getSubscription(token: string, publisher: string, indexId: BigNumberish, subscriber: string, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            exist: boolean;
            approved: boolean;
            units: BigNumber;
            pendingDistribution: BigNumber;
        }>;
        getSubscriptionByID(token: string, agreementId: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            number,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            publisher: string;
            indexId: number;
            approved: boolean;
            units: BigNumber;
            pendingDistribution: BigNumber;
        }>;
        listSubscriptions(token: string, subscriber: string, overrides?: CallOverrides): Promise<[
            string[],
            number[],
            BigNumber[]
        ] & {
            publishers: string[];
            indexIds: number[];
            unitsList: BigNumber[];
        }>;
        realtimeBalanceOf(token: string, account: string, time: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            dynamicBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        revokeSubscription(token: string, publisher: string, indexId: BigNumberish, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        updateIndex(token: string, indexId: BigNumberish, indexValue: BigNumberish, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        updateSubscription(token: string, indexId: BigNumberish, subscriber: string, units: BigNumberish, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "IndexCreated(address,address,uint32,bytes)"(token?: string | null, publisher?: string | null, indexId?: BigNumberish | null, userData?: null): IndexCreatedEventFilter;
        IndexCreated(token?: string | null, publisher?: string | null, indexId?: BigNumberish | null, userData?: null): IndexCreatedEventFilter;
        "IndexDistributionClaimed(address,address,uint32,address,uint256)"(token?: string | null, publisher?: string | null, indexId?: BigNumberish | null, subscriber?: null, amount?: null): IndexDistributionClaimedEventFilter;
        IndexDistributionClaimed(token?: string | null, publisher?: string | null, indexId?: BigNumberish | null, subscriber?: null, amount?: null): IndexDistributionClaimedEventFilter;
        "IndexSubscribed(address,address,uint32,address,bytes)"(token?: string | null, publisher?: string | null, indexId?: BigNumberish | null, subscriber?: null, userData?: null): IndexSubscribedEventFilter;
        IndexSubscribed(token?: string | null, publisher?: string | null, indexId?: BigNumberish | null, subscriber?: null, userData?: null): IndexSubscribedEventFilter;
        "IndexUnitsUpdated(address,address,uint32,address,uint128,bytes)"(token?: string | null, publisher?: string | null, indexId?: BigNumberish | null, subscriber?: null, units?: null, userData?: null): IndexUnitsUpdatedEventFilter;
        IndexUnitsUpdated(token?: string | null, publisher?: string | null, indexId?: BigNumberish | null, subscriber?: null, units?: null, userData?: null): IndexUnitsUpdatedEventFilter;
        "IndexUnsubscribed(address,address,uint32,address,bytes)"(token?: string | null, publisher?: string | null, indexId?: BigNumberish | null, subscriber?: null, userData?: null): IndexUnsubscribedEventFilter;
        IndexUnsubscribed(token?: string | null, publisher?: string | null, indexId?: BigNumberish | null, subscriber?: null, userData?: null): IndexUnsubscribedEventFilter;
        "IndexUpdated(address,address,uint32,uint128,uint128,uint128,uint128,bytes)"(token?: string | null, publisher?: string | null, indexId?: BigNumberish | null, oldIndexValue?: null, newIndexValue?: null, totalUnitsPending?: null, totalUnitsApproved?: null, userData?: null): IndexUpdatedEventFilter;
        IndexUpdated(token?: string | null, publisher?: string | null, indexId?: BigNumberish | null, oldIndexValue?: null, newIndexValue?: null, totalUnitsPending?: null, totalUnitsApproved?: null, userData?: null): IndexUpdatedEventFilter;
        "SubscriptionApproved(address,address,address,uint32,bytes)"(token?: string | null, subscriber?: string | null, publisher?: null, indexId?: null, userData?: null): SubscriptionApprovedEventFilter;
        SubscriptionApproved(token?: string | null, subscriber?: string | null, publisher?: null, indexId?: null, userData?: null): SubscriptionApprovedEventFilter;
        "SubscriptionDistributionClaimed(address,address,address,uint32,uint256)"(token?: string | null, subscriber?: string | null, publisher?: null, indexId?: null, amount?: null): SubscriptionDistributionClaimedEventFilter;
        SubscriptionDistributionClaimed(token?: string | null, subscriber?: string | null, publisher?: null, indexId?: null, amount?: null): SubscriptionDistributionClaimedEventFilter;
        "SubscriptionRevoked(address,address,address,uint32,bytes)"(token?: string | null, subscriber?: string | null, publisher?: null, indexId?: null, userData?: null): SubscriptionRevokedEventFilter;
        SubscriptionRevoked(token?: string | null, subscriber?: string | null, publisher?: null, indexId?: null, userData?: null): SubscriptionRevokedEventFilter;
        "SubscriptionUnitsUpdated(address,address,address,uint32,uint128,bytes)"(token?: string | null, subscriber?: string | null, publisher?: null, indexId?: null, units?: null, userData?: null): SubscriptionUnitsUpdatedEventFilter;
        SubscriptionUnitsUpdated(token?: string | null, subscriber?: string | null, publisher?: null, indexId?: null, units?: null, userData?: null): SubscriptionUnitsUpdatedEventFilter;
    };
    estimateGas: {
        agreementType(overrides?: CallOverrides): Promise<BigNumber>;
        approveSubscription(token: string, publisher: string, indexId: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        calculateDistribution(token: string, publisher: string, indexId: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claim(token: string, publisher: string, indexId: BigNumberish, subscriber: string, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createIndex(token: string, indexId: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deleteSubscription(token: string, publisher: string, indexId: BigNumberish, subscriber: string, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        distribute(token: string, indexId: BigNumberish, amount: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getIndex(token: string, publisher: string, indexId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSubscription(token: string, publisher: string, indexId: BigNumberish, subscriber: string, overrides?: CallOverrides): Promise<BigNumber>;
        getSubscriptionByID(token: string, agreementId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        listSubscriptions(token: string, subscriber: string, overrides?: CallOverrides): Promise<BigNumber>;
        realtimeBalanceOf(token: string, account: string, time: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        revokeSubscription(token: string, publisher: string, indexId: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateIndex(token: string, indexId: BigNumberish, indexValue: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateSubscription(token: string, indexId: BigNumberish, subscriber: string, units: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        agreementType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approveSubscription(token: string, publisher: string, indexId: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        calculateDistribution(token: string, publisher: string, indexId: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(token: string, publisher: string, indexId: BigNumberish, subscriber: string, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createIndex(token: string, indexId: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deleteSubscription(token: string, publisher: string, indexId: BigNumberish, subscriber: string, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        distribute(token: string, indexId: BigNumberish, amount: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getIndex(token: string, publisher: string, indexId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSubscription(token: string, publisher: string, indexId: BigNumberish, subscriber: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSubscriptionByID(token: string, agreementId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        listSubscriptions(token: string, subscriber: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        realtimeBalanceOf(token: string, account: string, time: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revokeSubscription(token: string, publisher: string, indexId: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateIndex(token: string, indexId: BigNumberish, indexValue: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateSubscription(token: string, indexId: BigNumberish, subscriber: string, units: BigNumberish, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
