import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface RelayerFeeRouterInterface extends utils.Interface {
    functions: {
        "VERSION()": FunctionFragment;
        "acceptProposedOwner()": FunctionFragment;
        "connext()": FunctionFragment;
        "delay()": FunctionFragment;
        "enrollRemoteRouter(uint32,bytes32)": FunctionFragment;
        "handle(uint32,uint32,bytes32,bytes)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "proposeNewOwner(address)": FunctionFragment;
        "proposed()": FunctionFragment;
        "proposedTimestamp()": FunctionFragment;
        "remotes(uint32)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "renounced()": FunctionFragment;
        "send(uint32,address,bytes32[])": FunctionFragment;
        "setConnext(address)": FunctionFragment;
        "setXAppConnectionManager(address)": FunctionFragment;
        "xAppConnectionManager()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptProposedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "connext", values?: undefined): string;
    encodeFunctionData(functionFragment: "delay", values?: undefined): string;
    encodeFunctionData(functionFragment: "enrollRemoteRouter", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "handle", values: [BigNumberish, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposeNewOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "proposed", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposedTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "remotes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounced", values?: undefined): string;
    encodeFunctionData(functionFragment: "send", values: [BigNumberish, string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "setConnext", values: [string]): string;
    encodeFunctionData(functionFragment: "setXAppConnectionManager", values: [string]): string;
    encodeFunctionData(functionFragment: "xAppConnectionManager", values?: undefined): string;
    decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptProposedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "connext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enrollRemoteRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposedTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounced", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConnext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setXAppConnectionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "xAppConnectionManager", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
        "OwnershipProposed(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Receive(uint64,uint32,address,bytes32[])": EventFragment;
        "Send(uint32,address,bytes32[],bytes32,bytes)": EventFragment;
        "SetConnext(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipProposed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Receive"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Send"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetConnext"): EventFragment;
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
export declare type ReceiveEvent = TypedEvent<[
    BigNumber,
    number,
    string,
    string[]
], {
    originAndNonce: BigNumber;
    origin: number;
    recipient: string;
    transferIds: string[];
}>;
export declare type ReceiveEventFilter = TypedEventFilter<ReceiveEvent>;
export declare type SendEvent = TypedEvent<[
    number,
    string,
    string[],
    string,
    string
], {
    domain: number;
    recipient: string;
    transferIds: string[];
    remote: string;
    message: string;
}>;
export declare type SendEventFilter = TypedEventFilter<SendEvent>;
export declare type SetConnextEvent = TypedEvent<[string], {
    connext: string;
}>;
export declare type SetConnextEventFilter = TypedEventFilter<SetConnextEvent>;
export interface RelayerFeeRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RelayerFeeRouterInterface;
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
        VERSION(overrides?: CallOverrides): Promise<[number]>;
        acceptProposedOwner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        connext(overrides?: CallOverrides): Promise<[string]>;
        delay(overrides?: CallOverrides): Promise<[BigNumber]>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_xAppConnectionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        proposeNewOwner(newlyProposed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        proposed(overrides?: CallOverrides): Promise<[string]>;
        proposedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        remotes(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounced(overrides?: CallOverrides): Promise<[boolean]>;
        send(_domain: BigNumberish, _recipient: string, _transferIds: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setConnext(_connext: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setXAppConnectionManager(_xAppConnectionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        xAppConnectionManager(overrides?: CallOverrides): Promise<[string]>;
    };
    VERSION(overrides?: CallOverrides): Promise<number>;
    acceptProposedOwner(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    connext(overrides?: CallOverrides): Promise<string>;
    delay(overrides?: CallOverrides): Promise<BigNumber>;
    enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_xAppConnectionManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    proposeNewOwner(newlyProposed: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    proposed(overrides?: CallOverrides): Promise<string>;
    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    remotes(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounced(overrides?: CallOverrides): Promise<boolean>;
    send(_domain: BigNumberish, _recipient: string, _transferIds: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setConnext(_connext: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setXAppConnectionManager(_xAppConnectionManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    xAppConnectionManager(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        VERSION(overrides?: CallOverrides): Promise<number>;
        acceptProposedOwner(overrides?: CallOverrides): Promise<void>;
        connext(overrides?: CallOverrides): Promise<string>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: CallOverrides): Promise<void>;
        handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: CallOverrides): Promise<void>;
        initialize(_xAppConnectionManager: string, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        proposeNewOwner(newlyProposed: string, overrides?: CallOverrides): Promise<void>;
        proposed(overrides?: CallOverrides): Promise<string>;
        proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        remotes(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        renounced(overrides?: CallOverrides): Promise<boolean>;
        send(_domain: BigNumberish, _recipient: string, _transferIds: BytesLike[], overrides?: CallOverrides): Promise<void>;
        setConnext(_connext: string, overrides?: CallOverrides): Promise<void>;
        setXAppConnectionManager(_xAppConnectionManager: string, overrides?: CallOverrides): Promise<void>;
        xAppConnectionManager(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipProposed(address)"(proposedOwner?: string | null): OwnershipProposedEventFilter;
        OwnershipProposed(proposedOwner?: string | null): OwnershipProposedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Receive(uint64,uint32,address,bytes32[])"(originAndNonce?: BigNumberish | null, origin?: BigNumberish | null, recipient?: string | null, transferIds?: null): ReceiveEventFilter;
        Receive(originAndNonce?: BigNumberish | null, origin?: BigNumberish | null, recipient?: string | null, transferIds?: null): ReceiveEventFilter;
        "Send(uint32,address,bytes32[],bytes32,bytes)"(domain?: null, recipient?: null, transferIds?: null, remote?: null, message?: null): SendEventFilter;
        Send(domain?: null, recipient?: null, transferIds?: null, remote?: null, message?: null): SendEventFilter;
        "SetConnext(address)"(connext?: string | null): SetConnextEventFilter;
        SetConnext(connext?: string | null): SetConnextEventFilter;
    };
    estimateGas: {
        VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        acceptProposedOwner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        connext(overrides?: CallOverrides): Promise<BigNumber>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_xAppConnectionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        proposeNewOwner(newlyProposed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        proposed(overrides?: CallOverrides): Promise<BigNumber>;
        proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        remotes(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounced(overrides?: CallOverrides): Promise<BigNumber>;
        send(_domain: BigNumberish, _recipient: string, _transferIds: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setConnext(_connext: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setXAppConnectionManager(_xAppConnectionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        xAppConnectionManager(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptProposedOwner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        connext(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_xAppConnectionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposeNewOwner(newlyProposed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        proposed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remotes(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        send(_domain: BigNumberish, _recipient: string, _transferIds: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setConnext(_connext: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setXAppConnectionManager(_xAppConnectionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        xAppConnectionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
