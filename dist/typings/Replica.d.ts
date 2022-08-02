import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ReplicaInterface extends utils.Interface {
    functions: {
        "PROCESS_GAS()": FunctionFragment;
        "RESERVE_GAS()": FunctionFragment;
        "VERSION()": FunctionFragment;
        "acceptableRoot(bytes32)": FunctionFragment;
        "committedRoot()": FunctionFragment;
        "confirmAt(bytes32)": FunctionFragment;
        "doubleUpdate(bytes32,bytes32[2],bytes,bytes)": FunctionFragment;
        "homeDomainHash()": FunctionFragment;
        "initialize(uint32,address,bytes32,uint256)": FunctionFragment;
        "localDomain()": FunctionFragment;
        "messages(bytes32)": FunctionFragment;
        "optimisticSeconds()": FunctionFragment;
        "owner()": FunctionFragment;
        "process(bytes)": FunctionFragment;
        "prove(bytes32,bytes32[32],uint256)": FunctionFragment;
        "proveAndProcess(bytes,bytes32[32],uint256)": FunctionFragment;
        "remoteDomain()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setConfirmation(bytes32,uint256)": FunctionFragment;
        "setOptimisticTimeout(uint256)": FunctionFragment;
        "setUpdater(address)": FunctionFragment;
        "state()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "update(bytes32,bytes32,bytes)": FunctionFragment;
        "updater()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "PROCESS_GAS", values?: undefined): string;
    encodeFunctionData(functionFragment: "RESERVE_GAS", values?: undefined): string;
    encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptableRoot", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "committedRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmAt", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "doubleUpdate", values: [BytesLike, [BytesLike, BytesLike], BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "homeDomainHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [BigNumberish, string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "localDomain", values?: undefined): string;
    encodeFunctionData(functionFragment: "messages", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "optimisticSeconds", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "process", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "prove", values: [
        BytesLike,
        [
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike
        ],
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "proveAndProcess", values: [
        BytesLike,
        [
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike
        ],
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "remoteDomain", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setConfirmation", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setOptimisticTimeout", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setUpdater", values: [string]): string;
    encodeFunctionData(functionFragment: "state", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "update", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "updater", values?: undefined): string;
    decodeFunctionResult(functionFragment: "PROCESS_GAS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RESERVE_GAS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptableRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "committedRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "doubleUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "homeDomainHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "messages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "optimisticSeconds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "process", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proveAndProcess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remoteDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfirmation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOptimisticTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUpdater", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updater", data: BytesLike): Result;
    events: {
        "DoubleUpdate(bytes32,bytes32[2],bytes,bytes)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "NewUpdater(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Process(bytes32,bool,bytes)": EventFragment;
        "SetConfirmation(bytes32,uint256,uint256)": EventFragment;
        "SetOptimisticTimeout(uint256)": EventFragment;
        "Update(uint32,bytes32,bytes32,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DoubleUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewUpdater"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Process"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetConfirmation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetOptimisticTimeout"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Update"): EventFragment;
}
export declare type DoubleUpdateEvent = TypedEvent<[
    string,
    [string, string],
    string,
    string
], {
    oldRoot: string;
    newRoot: [string, string];
    signature: string;
    signature2: string;
}>;
export declare type DoubleUpdateEventFilter = TypedEventFilter<DoubleUpdateEvent>;
export declare type InitializedEvent = TypedEvent<[number], {
    version: number;
}>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export declare type NewUpdaterEvent = TypedEvent<[
    string,
    string
], {
    oldUpdater: string;
    newUpdater: string;
}>;
export declare type NewUpdaterEventFilter = TypedEventFilter<NewUpdaterEvent>;
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export declare type ProcessEvent = TypedEvent<[
    string,
    boolean,
    string
], {
    messageHash: string;
    success: boolean;
    returnData: string;
}>;
export declare type ProcessEventFilter = TypedEventFilter<ProcessEvent>;
export declare type SetConfirmationEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    root: string;
    previousConfirmAt: BigNumber;
    newConfirmAt: BigNumber;
}>;
export declare type SetConfirmationEventFilter = TypedEventFilter<SetConfirmationEvent>;
export declare type SetOptimisticTimeoutEvent = TypedEvent<[
    BigNumber
], {
    timeout: BigNumber;
}>;
export declare type SetOptimisticTimeoutEventFilter = TypedEventFilter<SetOptimisticTimeoutEvent>;
export declare type UpdateEvent = TypedEvent<[
    number,
    string,
    string,
    string
], {
    homeDomain: number;
    oldRoot: string;
    newRoot: string;
    signature: string;
}>;
export declare type UpdateEventFilter = TypedEventFilter<UpdateEvent>;
export interface Replica extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReplicaInterface;
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
        PROCESS_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;
        RESERVE_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;
        VERSION(overrides?: CallOverrides): Promise<[number]>;
        acceptableRoot(_root: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        committedRoot(overrides?: CallOverrides): Promise<[string]>;
        confirmAt(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        doubleUpdate(_oldRoot: BytesLike, _newRoot: [BytesLike, BytesLike], _signature: BytesLike, _signature2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        homeDomainHash(overrides?: CallOverrides): Promise<[string]>;
        initialize(_remoteDomain: BigNumberish, _updater: string, _committedRoot: BytesLike, _optimisticSeconds: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        localDomain(overrides?: CallOverrides): Promise<[number]>;
        messages(arg0: BytesLike, overrides?: CallOverrides): Promise<[number]>;
        optimisticSeconds(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        process(_message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        prove(_leaf: BytesLike, _proof: [
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike
        ], _index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        proveAndProcess(_message: BytesLike, _proof: [
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike
        ], _index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        remoteDomain(overrides?: CallOverrides): Promise<[number]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setConfirmation(_root: BytesLike, _confirmAt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOptimisticTimeout(_optimisticSeconds: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setUpdater(_updater: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        state(overrides?: CallOverrides): Promise<[number]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        update(_oldRoot: BytesLike, _newRoot: BytesLike, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updater(overrides?: CallOverrides): Promise<[string]>;
    };
    PROCESS_GAS(overrides?: CallOverrides): Promise<BigNumber>;
    RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;
    VERSION(overrides?: CallOverrides): Promise<number>;
    acceptableRoot(_root: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    committedRoot(overrides?: CallOverrides): Promise<string>;
    confirmAt(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    doubleUpdate(_oldRoot: BytesLike, _newRoot: [BytesLike, BytesLike], _signature: BytesLike, _signature2: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    homeDomainHash(overrides?: CallOverrides): Promise<string>;
    initialize(_remoteDomain: BigNumberish, _updater: string, _committedRoot: BytesLike, _optimisticSeconds: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    localDomain(overrides?: CallOverrides): Promise<number>;
    messages(arg0: BytesLike, overrides?: CallOverrides): Promise<number>;
    optimisticSeconds(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    process(_message: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    prove(_leaf: BytesLike, _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
    ], _index: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    proveAndProcess(_message: BytesLike, _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
    ], _index: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    remoteDomain(overrides?: CallOverrides): Promise<number>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setConfirmation(_root: BytesLike, _confirmAt: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOptimisticTimeout(_optimisticSeconds: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setUpdater(_updater: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    state(overrides?: CallOverrides): Promise<number>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    update(_oldRoot: BytesLike, _newRoot: BytesLike, _signature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updater(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        PROCESS_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        VERSION(overrides?: CallOverrides): Promise<number>;
        acceptableRoot(_root: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        committedRoot(overrides?: CallOverrides): Promise<string>;
        confirmAt(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        doubleUpdate(_oldRoot: BytesLike, _newRoot: [BytesLike, BytesLike], _signature: BytesLike, _signature2: BytesLike, overrides?: CallOverrides): Promise<void>;
        homeDomainHash(overrides?: CallOverrides): Promise<string>;
        initialize(_remoteDomain: BigNumberish, _updater: string, _committedRoot: BytesLike, _optimisticSeconds: BigNumberish, overrides?: CallOverrides): Promise<void>;
        localDomain(overrides?: CallOverrides): Promise<number>;
        messages(arg0: BytesLike, overrides?: CallOverrides): Promise<number>;
        optimisticSeconds(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        process(_message: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        prove(_leaf: BytesLike, _proof: [
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike
        ], _index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        proveAndProcess(_message: BytesLike, _proof: [
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike
        ], _index: BigNumberish, overrides?: CallOverrides): Promise<void>;
        remoteDomain(overrides?: CallOverrides): Promise<number>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setConfirmation(_root: BytesLike, _confirmAt: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setOptimisticTimeout(_optimisticSeconds: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setUpdater(_updater: string, overrides?: CallOverrides): Promise<void>;
        state(overrides?: CallOverrides): Promise<number>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        update(_oldRoot: BytesLike, _newRoot: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        updater(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "DoubleUpdate(bytes32,bytes32[2],bytes,bytes)"(oldRoot?: null, newRoot?: null, signature?: null, signature2?: null): DoubleUpdateEventFilter;
        DoubleUpdate(oldRoot?: null, newRoot?: null, signature?: null, signature2?: null): DoubleUpdateEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "NewUpdater(address,address)"(oldUpdater?: null, newUpdater?: null): NewUpdaterEventFilter;
        NewUpdater(oldUpdater?: null, newUpdater?: null): NewUpdaterEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Process(bytes32,bool,bytes)"(messageHash?: BytesLike | null, success?: boolean | null, returnData?: BytesLike | null): ProcessEventFilter;
        Process(messageHash?: BytesLike | null, success?: boolean | null, returnData?: BytesLike | null): ProcessEventFilter;
        "SetConfirmation(bytes32,uint256,uint256)"(root?: BytesLike | null, previousConfirmAt?: null, newConfirmAt?: null): SetConfirmationEventFilter;
        SetConfirmation(root?: BytesLike | null, previousConfirmAt?: null, newConfirmAt?: null): SetConfirmationEventFilter;
        "SetOptimisticTimeout(uint256)"(timeout?: null): SetOptimisticTimeoutEventFilter;
        SetOptimisticTimeout(timeout?: null): SetOptimisticTimeoutEventFilter;
        "Update(uint32,bytes32,bytes32,bytes)"(homeDomain?: BigNumberish | null, oldRoot?: BytesLike | null, newRoot?: BytesLike | null, signature?: null): UpdateEventFilter;
        Update(homeDomain?: BigNumberish | null, oldRoot?: BytesLike | null, newRoot?: BytesLike | null, signature?: null): UpdateEventFilter;
    };
    estimateGas: {
        PROCESS_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        acceptableRoot(_root: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        committedRoot(overrides?: CallOverrides): Promise<BigNumber>;
        confirmAt(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        doubleUpdate(_oldRoot: BytesLike, _newRoot: [BytesLike, BytesLike], _signature: BytesLike, _signature2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        homeDomainHash(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_remoteDomain: BigNumberish, _updater: string, _committedRoot: BytesLike, _optimisticSeconds: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        localDomain(overrides?: CallOverrides): Promise<BigNumber>;
        messages(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        optimisticSeconds(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        process(_message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        prove(_leaf: BytesLike, _proof: [
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike
        ], _index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        proveAndProcess(_message: BytesLike, _proof: [
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike
        ], _index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        remoteDomain(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setConfirmation(_root: BytesLike, _confirmAt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOptimisticTimeout(_optimisticSeconds: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setUpdater(_updater: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        state(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        update(_oldRoot: BytesLike, _newRoot: BytesLike, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updater(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        PROCESS_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RESERVE_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptableRoot(_root: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        committedRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        confirmAt(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        doubleUpdate(_oldRoot: BytesLike, _newRoot: [BytesLike, BytesLike], _signature: BytesLike, _signature2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        homeDomainHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_remoteDomain: BigNumberish, _updater: string, _committedRoot: BytesLike, _optimisticSeconds: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        messages(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        optimisticSeconds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        process(_message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        prove(_leaf: BytesLike, _proof: [
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike
        ], _index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        proveAndProcess(_message: BytesLike, _proof: [
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike,
            BytesLike
        ], _index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        remoteDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setConfirmation(_root: BytesLike, _confirmAt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOptimisticTimeout(_optimisticSeconds: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setUpdater(_updater: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        state(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        update(_oldRoot: BytesLike, _newRoot: BytesLike, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updater(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
