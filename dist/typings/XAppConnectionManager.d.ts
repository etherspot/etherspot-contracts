import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface XAppConnectionManagerInterface extends utils.Interface {
    functions: {
        "domainToReplica(uint32)": FunctionFragment;
        "home()": FunctionFragment;
        "isReplica(address)": FunctionFragment;
        "localDomain()": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerEnrollReplica(address,uint32)": FunctionFragment;
        "ownerUnenrollReplica(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "replicaToDomain(address)": FunctionFragment;
        "setHome(address)": FunctionFragment;
        "setWatcherPermission(address,uint32,bool)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unenrollReplica(uint32,bytes32,bytes)": FunctionFragment;
        "watcherPermission(address,uint32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "domainToReplica", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "home", values?: undefined): string;
    encodeFunctionData(functionFragment: "isReplica", values: [string]): string;
    encodeFunctionData(functionFragment: "localDomain", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerEnrollReplica", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "ownerUnenrollReplica", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "replicaToDomain", values: [string]): string;
    encodeFunctionData(functionFragment: "setHome", values: [string]): string;
    encodeFunctionData(functionFragment: "setWatcherPermission", values: [string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "unenrollReplica", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "watcherPermission", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "domainToReplica", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "home", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isReplica", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerEnrollReplica", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerUnenrollReplica", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replicaToDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHome", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWatcherPermission", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unenrollReplica", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "watcherPermission", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "ReplicaEnrolled(uint32,address)": EventFragment;
        "ReplicaUnenrolled(uint32,address)": EventFragment;
        "WatcherPermissionSet(uint32,address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReplicaEnrolled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReplicaUnenrolled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WatcherPermissionSet"): EventFragment;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export declare type ReplicaEnrolledEvent = TypedEvent<[
    number,
    string
], {
    domain: number;
    replica: string;
}>;
export declare type ReplicaEnrolledEventFilter = TypedEventFilter<ReplicaEnrolledEvent>;
export declare type ReplicaUnenrolledEvent = TypedEvent<[
    number,
    string
], {
    domain: number;
    replica: string;
}>;
export declare type ReplicaUnenrolledEventFilter = TypedEventFilter<ReplicaUnenrolledEvent>;
export declare type WatcherPermissionSetEvent = TypedEvent<[
    number,
    string,
    boolean
], {
    domain: number;
    watcher: string;
    access: boolean;
}>;
export declare type WatcherPermissionSetEventFilter = TypedEventFilter<WatcherPermissionSetEvent>;
export interface XAppConnectionManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: XAppConnectionManagerInterface;
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
        domainToReplica(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        home(overrides?: CallOverrides): Promise<[string]>;
        isReplica(_replica: string, overrides?: CallOverrides): Promise<[boolean]>;
        localDomain(overrides?: CallOverrides): Promise<[number]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerEnrollReplica(_replica: string, _domain: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        ownerUnenrollReplica(_replica: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        replicaToDomain(arg0: string, overrides?: CallOverrides): Promise<[number]>;
        setHome(_home: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWatcherPermission(_watcher: string, _domain: BigNumberish, _access: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unenrollReplica(_domain: BigNumberish, _updater: BytesLike, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        watcherPermission(_watcher: string, _domain: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
    };
    domainToReplica(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    home(overrides?: CallOverrides): Promise<string>;
    isReplica(_replica: string, overrides?: CallOverrides): Promise<boolean>;
    localDomain(overrides?: CallOverrides): Promise<number>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerEnrollReplica(_replica: string, _domain: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    ownerUnenrollReplica(_replica: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    replicaToDomain(arg0: string, overrides?: CallOverrides): Promise<number>;
    setHome(_home: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWatcherPermission(_watcher: string, _domain: BigNumberish, _access: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unenrollReplica(_domain: BigNumberish, _updater: BytesLike, _signature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    watcherPermission(_watcher: string, _domain: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        domainToReplica(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        home(overrides?: CallOverrides): Promise<string>;
        isReplica(_replica: string, overrides?: CallOverrides): Promise<boolean>;
        localDomain(overrides?: CallOverrides): Promise<number>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerEnrollReplica(_replica: string, _domain: BigNumberish, overrides?: CallOverrides): Promise<void>;
        ownerUnenrollReplica(_replica: string, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        replicaToDomain(arg0: string, overrides?: CallOverrides): Promise<number>;
        setHome(_home: string, overrides?: CallOverrides): Promise<void>;
        setWatcherPermission(_watcher: string, _domain: BigNumberish, _access: boolean, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        unenrollReplica(_domain: BigNumberish, _updater: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        watcherPermission(_watcher: string, _domain: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "ReplicaEnrolled(uint32,address)"(domain?: BigNumberish | null, replica?: null): ReplicaEnrolledEventFilter;
        ReplicaEnrolled(domain?: BigNumberish | null, replica?: null): ReplicaEnrolledEventFilter;
        "ReplicaUnenrolled(uint32,address)"(domain?: BigNumberish | null, replica?: null): ReplicaUnenrolledEventFilter;
        ReplicaUnenrolled(domain?: BigNumberish | null, replica?: null): ReplicaUnenrolledEventFilter;
        "WatcherPermissionSet(uint32,address,bool)"(domain?: BigNumberish | null, watcher?: null, access?: null): WatcherPermissionSetEventFilter;
        WatcherPermissionSet(domain?: BigNumberish | null, watcher?: null, access?: null): WatcherPermissionSetEventFilter;
    };
    estimateGas: {
        domainToReplica(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        home(overrides?: CallOverrides): Promise<BigNumber>;
        isReplica(_replica: string, overrides?: CallOverrides): Promise<BigNumber>;
        localDomain(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerEnrollReplica(_replica: string, _domain: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        ownerUnenrollReplica(_replica: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        replicaToDomain(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        setHome(_home: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWatcherPermission(_watcher: string, _domain: BigNumberish, _access: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unenrollReplica(_domain: BigNumberish, _updater: BytesLike, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        watcherPermission(_watcher: string, _domain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        domainToReplica(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        home(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isReplica(_replica: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerEnrollReplica(_replica: string, _domain: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        ownerUnenrollReplica(_replica: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        replicaToDomain(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setHome(_home: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWatcherPermission(_watcher: string, _domain: BigNumberish, _access: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unenrollReplica(_domain: BigNumberish, _updater: BytesLike, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        watcherPermission(_watcher: string, _domain: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
