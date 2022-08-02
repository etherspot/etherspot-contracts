import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ConnextFacetInterface extends utils.Interface {
    functions: {
        "connextCall(address,bytes,uint32,address,uint256,uint256,address,address,uint256)": FunctionFragment;
        "connextNativeAssetTransfer(address,uint32,uint256)": FunctionFragment;
        "connextTokenTransfer(address,address,uint32,uint256,uint256)": FunctionFragment;
        "initConnext(address,uint32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "connextCall", values: [
        string,
        BytesLike,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        string,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "connextNativeAssetTransfer", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "connextTokenTransfer", values: [string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initConnext", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "connextCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "connextNativeAssetTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "connextTokenTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initConnext", data: BytesLike): Result;
    events: {
        "ConnextInitialized(address)": EventFragment;
        "ConnextNativeSwap(uint32,address,uint256,uint256,bytes32)": EventFragment;
        "ConnextTokenSwap(uint32,address,address,uint256,uint256,bytes32)": EventFragment;
        "ConnextXCall(uint32,address,address,uint256,bytes,uint256,bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ConnextInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConnextNativeSwap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConnextTokenSwap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConnextXCall"): EventFragment;
}
export declare type ConnextInitializedEvent = TypedEvent<[
    string
], {
    _connext: string;
}>;
export declare type ConnextInitializedEventFilter = TypedEventFilter<ConnextInitializedEvent>;
export declare type ConnextNativeSwapEvent = TypedEvent<[
    number,
    string,
    BigNumber,
    BigNumber,
    string
], {
    _destination: number;
    _recipient: string;
    _amount: BigNumber;
    _relayerFee: BigNumber;
    _transferId: string;
}>;
export declare type ConnextNativeSwapEventFilter = TypedEventFilter<ConnextNativeSwapEvent>;
export declare type ConnextTokenSwapEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber,
    BigNumber,
    string
], {
    _destination: number;
    _recipient: string;
    _asset: string;
    _amount: BigNumber;
    _relayerFee: BigNumber;
    _transferId: string;
}>;
export declare type ConnextTokenSwapEventFilter = TypedEventFilter<ConnextTokenSwapEvent>;
export declare type ConnextXCallEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    string
], {
    _destination: number;
    _recipient: string;
    _asset: string;
    _amount: BigNumber;
    _callData: string;
    _relayerFee: BigNumber;
    _transferId: string;
}>;
export declare type ConnextXCallEventFilter = TypedEventFilter<ConnextXCallEvent>;
export interface ConnextFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ConnextFacetInterface;
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
        connextCall(_to: string, _callData: BytesLike, _destinationDomain: BigNumberish, _asset: string, _amount: BigNumberish, _relayerFee: BigNumberish, _recovery: string, _callback: string, _callbackFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        connextNativeAssetTransfer(_to: string, _destinationDomain: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        connextTokenTransfer(_asset: string, _to: string, _destinationDomain: BigNumberish, _amount: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initConnext(_connext: string, _domainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    connextCall(_to: string, _callData: BytesLike, _destinationDomain: BigNumberish, _asset: string, _amount: BigNumberish, _relayerFee: BigNumberish, _recovery: string, _callback: string, _callbackFee: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    connextNativeAssetTransfer(_to: string, _destinationDomain: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    connextTokenTransfer(_asset: string, _to: string, _destinationDomain: BigNumberish, _amount: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initConnext(_connext: string, _domainId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        connextCall(_to: string, _callData: BytesLike, _destinationDomain: BigNumberish, _asset: string, _amount: BigNumberish, _relayerFee: BigNumberish, _recovery: string, _callback: string, _callbackFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        connextNativeAssetTransfer(_to: string, _destinationDomain: BigNumberish, _relayerFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        connextTokenTransfer(_asset: string, _to: string, _destinationDomain: BigNumberish, _amount: BigNumberish, _relayerFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initConnext(_connext: string, _domainId: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ConnextInitialized(address)"(_connext?: null): ConnextInitializedEventFilter;
        ConnextInitialized(_connext?: null): ConnextInitializedEventFilter;
        "ConnextNativeSwap(uint32,address,uint256,uint256,bytes32)"(_destination?: BigNumberish | null, _recipient?: string | null, _amount?: null, _relayerFee?: null, _transferId?: null): ConnextNativeSwapEventFilter;
        ConnextNativeSwap(_destination?: BigNumberish | null, _recipient?: string | null, _amount?: null, _relayerFee?: null, _transferId?: null): ConnextNativeSwapEventFilter;
        "ConnextTokenSwap(uint32,address,address,uint256,uint256,bytes32)"(_destination?: BigNumberish | null, _recipient?: string | null, _asset?: string | null, _amount?: null, _relayerFee?: null, _transferId?: null): ConnextTokenSwapEventFilter;
        ConnextTokenSwap(_destination?: BigNumberish | null, _recipient?: string | null, _asset?: string | null, _amount?: null, _relayerFee?: null, _transferId?: null): ConnextTokenSwapEventFilter;
        "ConnextXCall(uint32,address,address,uint256,bytes,uint256,bytes32)"(_destination?: BigNumberish | null, _recipient?: string | null, _asset?: null, _amount?: null, _callData?: null, _relayerFee?: null, _transferId?: null): ConnextXCallEventFilter;
        ConnextXCall(_destination?: BigNumberish | null, _recipient?: string | null, _asset?: null, _amount?: null, _callData?: null, _relayerFee?: null, _transferId?: null): ConnextXCallEventFilter;
    };
    estimateGas: {
        connextCall(_to: string, _callData: BytesLike, _destinationDomain: BigNumberish, _asset: string, _amount: BigNumberish, _relayerFee: BigNumberish, _recovery: string, _callback: string, _callbackFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        connextNativeAssetTransfer(_to: string, _destinationDomain: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        connextTokenTransfer(_asset: string, _to: string, _destinationDomain: BigNumberish, _amount: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initConnext(_connext: string, _domainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        connextCall(_to: string, _callData: BytesLike, _destinationDomain: BigNumberish, _asset: string, _amount: BigNumberish, _relayerFee: BigNumberish, _recovery: string, _callback: string, _callbackFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        connextNativeAssetTransfer(_to: string, _destinationDomain: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        connextTokenTransfer(_asset: string, _to: string, _destinationDomain: BigNumberish, _amount: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initConnext(_connext: string, _domainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}