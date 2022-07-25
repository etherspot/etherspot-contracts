import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PromiseRouterInterface extends utils.Interface {
    functions: {
        "VERSION()": FunctionFragment;
        "acceptProposedOwner()": FunctionFragment;
        "bumpCallbackFee(bytes32)": FunctionFragment;
        "callbackFees(bytes32)": FunctionFragment;
        "connext()": FunctionFragment;
        "delay()": FunctionFragment;
        "enrollRemoteRouter(uint32,bytes32)": FunctionFragment;
        "handle(uint32,uint32,bytes32,bytes)": FunctionFragment;
        "initCallbackFee(bytes32)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "messageHashes(bytes32)": FunctionFragment;
        "owner()": FunctionFragment;
        "process(bytes32,bytes)": FunctionFragment;
        "proposeNewOwner(address)": FunctionFragment;
        "proposed()": FunctionFragment;
        "proposedTimestamp()": FunctionFragment;
        "remotes(uint32)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "renounced()": FunctionFragment;
        "send(uint32,bytes32,address,bool,bytes)": FunctionFragment;
        "setConnext(address)": FunctionFragment;
        "setXAppConnectionManager(address)": FunctionFragment;
        "xAppConnectionManager()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptProposedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "bumpCallbackFee", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "callbackFees", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "connext", values?: undefined): string;
    encodeFunctionData(functionFragment: "delay", values?: undefined): string;
    encodeFunctionData(functionFragment: "enrollRemoteRouter", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "handle", values: [BigNumberish, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "initCallbackFee", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "messageHashes", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "process", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "proposeNewOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "proposed", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposedTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "remotes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounced", values?: undefined): string;
    encodeFunctionData(functionFragment: "send", values: [BigNumberish, BytesLike, string, boolean, BytesLike]): string;
    encodeFunctionData(functionFragment: "setConnext", values: [string]): string;
    encodeFunctionData(functionFragment: "setXAppConnectionManager", values: [string]): string;
    encodeFunctionData(functionFragment: "xAppConnectionManager", values?: undefined): string;
    decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptProposedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bumpCallbackFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callbackFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "connext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enrollRemoteRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initCallbackFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "messageHashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "process", data: BytesLike): Result;
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
        "CallbackExecuted(bytes32,address)": EventFragment;
        "CallbackFeeAdded(bytes32,uint256,uint256,address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipProposed(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Receive(uint64,uint32,bytes32,address,bool,bytes,bytes)": EventFragment;
        "Send(uint32,bytes32,bytes32,address,bool,bytes,bytes)": EventFragment;
        "SetConnext(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CallbackExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CallbackFeeAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipProposed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Receive"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Send"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetConnext"): EventFragment;
}
export declare type CallbackExecutedEvent = TypedEvent<[
    string,
    string
], {
    transferId: string;
    relayer: string;
}>;
export declare type CallbackExecutedEventFilter = TypedEventFilter<CallbackExecutedEvent>;
export declare type CallbackFeeAddedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    string
], {
    transferId: string;
    addedFee: BigNumber;
    totalFee: BigNumber;
    caller: string;
}>;
export declare type CallbackFeeAddedEventFilter = TypedEventFilter<CallbackFeeAddedEvent>;
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
    string,
    boolean,
    string,
    string
], {
    originAndNonce: BigNumber;
    origin: number;
    transferId: string;
    callbackAddress: string;
    success: boolean;
    data: string;
    message: string;
}>;
export declare type ReceiveEventFilter = TypedEventFilter<ReceiveEvent>;
export declare type SendEvent = TypedEvent<[
    number,
    string,
    string,
    string,
    boolean,
    string,
    string
], {
    domain: number;
    remote: string;
    transferId: string;
    callbackAddress: string;
    success: boolean;
    data: string;
    message: string;
}>;
export declare type SendEventFilter = TypedEventFilter<SendEvent>;
export declare type SetConnextEvent = TypedEvent<[string], {
    connext: string;
}>;
export declare type SetConnextEventFilter = TypedEventFilter<SetConnextEvent>;
export interface PromiseRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PromiseRouterInterface;
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
        bumpCallbackFee(_transferId: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        callbackFees(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        connext(overrides?: CallOverrides): Promise<[string]>;
        delay(overrides?: CallOverrides): Promise<[BigNumber]>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initCallbackFee(_transferId: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_xAppConnectionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        messageHashes(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        process(transferId: BytesLike, _message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
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
        send(_domain: BigNumberish, _transferId: BytesLike, _callbackAddress: string, _returnSuccess: boolean, _returnData: BytesLike, overrides?: Overrides & {
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
    bumpCallbackFee(_transferId: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callbackFees(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    connext(overrides?: CallOverrides): Promise<string>;
    delay(overrides?: CallOverrides): Promise<BigNumber>;
    enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initCallbackFee(_transferId: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_xAppConnectionManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    messageHashes(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    process(transferId: BytesLike, _message: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
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
    send(_domain: BigNumberish, _transferId: BytesLike, _callbackAddress: string, _returnSuccess: boolean, _returnData: BytesLike, overrides?: Overrides & {
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
        bumpCallbackFee(_transferId: BytesLike, overrides?: CallOverrides): Promise<void>;
        callbackFees(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        connext(overrides?: CallOverrides): Promise<string>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: CallOverrides): Promise<void>;
        handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: CallOverrides): Promise<void>;
        initCallbackFee(_transferId: BytesLike, overrides?: CallOverrides): Promise<void>;
        initialize(_xAppConnectionManager: string, overrides?: CallOverrides): Promise<void>;
        messageHashes(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        process(transferId: BytesLike, _message: BytesLike, overrides?: CallOverrides): Promise<void>;
        proposeNewOwner(newlyProposed: string, overrides?: CallOverrides): Promise<void>;
        proposed(overrides?: CallOverrides): Promise<string>;
        proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        remotes(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        renounced(overrides?: CallOverrides): Promise<boolean>;
        send(_domain: BigNumberish, _transferId: BytesLike, _callbackAddress: string, _returnSuccess: boolean, _returnData: BytesLike, overrides?: CallOverrides): Promise<void>;
        setConnext(_connext: string, overrides?: CallOverrides): Promise<void>;
        setXAppConnectionManager(_xAppConnectionManager: string, overrides?: CallOverrides): Promise<void>;
        xAppConnectionManager(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "CallbackExecuted(bytes32,address)"(transferId?: BytesLike | null, relayer?: null): CallbackExecutedEventFilter;
        CallbackExecuted(transferId?: BytesLike | null, relayer?: null): CallbackExecutedEventFilter;
        "CallbackFeeAdded(bytes32,uint256,uint256,address)"(transferId?: BytesLike | null, addedFee?: null, totalFee?: null, caller?: null): CallbackFeeAddedEventFilter;
        CallbackFeeAdded(transferId?: BytesLike | null, addedFee?: null, totalFee?: null, caller?: null): CallbackFeeAddedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipProposed(address)"(proposedOwner?: string | null): OwnershipProposedEventFilter;
        OwnershipProposed(proposedOwner?: string | null): OwnershipProposedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Receive(uint64,uint32,bytes32,address,bool,bytes,bytes)"(originAndNonce?: BigNumberish | null, origin?: BigNumberish | null, transferId?: null, callbackAddress?: null, success?: null, data?: null, message?: null): ReceiveEventFilter;
        Receive(originAndNonce?: BigNumberish | null, origin?: BigNumberish | null, transferId?: null, callbackAddress?: null, success?: null, data?: null, message?: null): ReceiveEventFilter;
        "Send(uint32,bytes32,bytes32,address,bool,bytes,bytes)"(domain?: null, remote?: null, transferId?: null, callbackAddress?: null, success?: null, data?: null, message?: null): SendEventFilter;
        Send(domain?: null, remote?: null, transferId?: null, callbackAddress?: null, success?: null, data?: null, message?: null): SendEventFilter;
        "SetConnext(address)"(connext?: string | null): SetConnextEventFilter;
        SetConnext(connext?: string | null): SetConnextEventFilter;
    };
    estimateGas: {
        VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        acceptProposedOwner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bumpCallbackFee(_transferId: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        callbackFees(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        connext(overrides?: CallOverrides): Promise<BigNumber>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initCallbackFee(_transferId: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_xAppConnectionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        messageHashes(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        process(transferId: BytesLike, _message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
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
        send(_domain: BigNumberish, _transferId: BytesLike, _callbackAddress: string, _returnSuccess: boolean, _returnData: BytesLike, overrides?: Overrides & {
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
        bumpCallbackFee(_transferId: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        callbackFees(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        connext(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initCallbackFee(_transferId: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_xAppConnectionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        messageHashes(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        process(transferId: BytesLike, _message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
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
        send(_domain: BigNumberish, _transferId: BytesLike, _callbackAddress: string, _returnSuccess: boolean, _returnData: BytesLike, overrides?: Overrides & {
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
