import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface NomadBaseInterface extends utils.Interface {
    functions: {
        "committedRoot()": FunctionFragment;
        "doubleUpdate(bytes32,bytes32[2],bytes,bytes)": FunctionFragment;
        "homeDomainHash()": FunctionFragment;
        "localDomain()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "state()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updater()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "committedRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "doubleUpdate", values: [BytesLike, [BytesLike, BytesLike], BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "homeDomainHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "localDomain", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "state", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updater", values?: undefined): string;
    decodeFunctionResult(functionFragment: "committedRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "doubleUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "homeDomainHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updater", data: BytesLike): Result;
    events: {
        "DoubleUpdate(bytes32,bytes32[2],bytes,bytes)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "NewUpdater(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Update(uint32,bytes32,bytes32,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DoubleUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewUpdater"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
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
export interface NomadBase extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NomadBaseInterface;
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
        committedRoot(overrides?: CallOverrides): Promise<[string]>;
        doubleUpdate(_oldRoot: BytesLike, _newRoot: [BytesLike, BytesLike], _signature: BytesLike, _signature2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        homeDomainHash(overrides?: CallOverrides): Promise<[string]>;
        localDomain(overrides?: CallOverrides): Promise<[number]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        state(overrides?: CallOverrides): Promise<[number]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updater(overrides?: CallOverrides): Promise<[string]>;
    };
    committedRoot(overrides?: CallOverrides): Promise<string>;
    doubleUpdate(_oldRoot: BytesLike, _newRoot: [BytesLike, BytesLike], _signature: BytesLike, _signature2: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    homeDomainHash(overrides?: CallOverrides): Promise<string>;
    localDomain(overrides?: CallOverrides): Promise<number>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    state(overrides?: CallOverrides): Promise<number>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updater(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        committedRoot(overrides?: CallOverrides): Promise<string>;
        doubleUpdate(_oldRoot: BytesLike, _newRoot: [BytesLike, BytesLike], _signature: BytesLike, _signature2: BytesLike, overrides?: CallOverrides): Promise<void>;
        homeDomainHash(overrides?: CallOverrides): Promise<string>;
        localDomain(overrides?: CallOverrides): Promise<number>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        state(overrides?: CallOverrides): Promise<number>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
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
        "Update(uint32,bytes32,bytes32,bytes)"(homeDomain?: BigNumberish | null, oldRoot?: BytesLike | null, newRoot?: BytesLike | null, signature?: null): UpdateEventFilter;
        Update(homeDomain?: BigNumberish | null, oldRoot?: BytesLike | null, newRoot?: BytesLike | null, signature?: null): UpdateEventFilter;
    };
    estimateGas: {
        committedRoot(overrides?: CallOverrides): Promise<BigNumber>;
        doubleUpdate(_oldRoot: BytesLike, _newRoot: [BytesLike, BytesLike], _signature: BytesLike, _signature2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        homeDomainHash(overrides?: CallOverrides): Promise<BigNumber>;
        localDomain(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        state(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updater(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        committedRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        doubleUpdate(_oldRoot: BytesLike, _newRoot: [BytesLike, BytesLike], _signature: BytesLike, _signature2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        homeDomainHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        state(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updater(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
