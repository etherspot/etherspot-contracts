import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ProposedOwnableUpgradeableInterface extends utils.Interface {
    functions: {
        "acceptProposedOwner()": FunctionFragment;
        "delay()": FunctionFragment;
        "owner()": FunctionFragment;
        "proposeNewOwner(address)": FunctionFragment;
        "proposed()": FunctionFragment;
        "proposedTimestamp()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "renounced()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "acceptProposedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "delay", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposeNewOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "proposed", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposedTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounced", values?: undefined): string;
    decodeFunctionResult(functionFragment: "acceptProposedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposedTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounced", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
        "OwnershipProposed(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipProposed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export declare type InitializedEvent = TypedEvent<[number], {
    version: number;
}>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export declare type OwnershipProposedEvent = TypedEvent<[
    string
], {
    proposedOwner: string;
}>;
export declare type OwnershipProposedEventFilter = TypedEventFilter<OwnershipProposedEvent>;
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ProposedOwnableUpgradeable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProposedOwnableUpgradeableInterface;
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
        acceptProposedOwner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delay(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        proposeNewOwner(newlyProposed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        proposed(overrides?: CallOverrides): Promise<[string]>;
        proposedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounced(overrides?: CallOverrides): Promise<[boolean]>;
    };
    acceptProposedOwner(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delay(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    proposeNewOwner(newlyProposed: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    proposed(overrides?: CallOverrides): Promise<string>;
    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounced(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        acceptProposedOwner(overrides?: CallOverrides): Promise<void>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        proposeNewOwner(newlyProposed: string, overrides?: CallOverrides): Promise<void>;
        proposed(overrides?: CallOverrides): Promise<string>;
        proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        renounced(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipProposed(address)"(proposedOwner?: string | null): OwnershipProposedEventFilter;
        OwnershipProposed(proposedOwner?: string | null): OwnershipProposedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        acceptProposedOwner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        proposeNewOwner(newlyProposed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        proposed(overrides?: CallOverrides): Promise<BigNumber>;
        proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounced(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptProposedOwner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposeNewOwner(newlyProposed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        proposed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}