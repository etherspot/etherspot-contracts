import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type CBridgeDataStruct = {
    maxSlippage: BigNumberish;
    dstChainId: BigNumberish;
    nonce: BigNumberish;
    amount: BigNumberish;
    receiver: string;
    token: string;
};
export declare type CBridgeDataStructOutput = [
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    maxSlippage: number;
    dstChainId: BigNumber;
    nonce: BigNumber;
    amount: BigNumber;
    receiver: string;
    token: string;
};
export interface CBridgeFacetInterface extends utils.Interface {
    functions: {
        "bridgeTokensCBridge((uint32,uint64,uint64,uint256,address,address))": FunctionFragment;
        "cBridge()": FunctionFragment;
        "chainId()": FunctionFragment;
        "initializeCBridge(address,uint256)": FunctionFragment;
        "updateBridgeAddress(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "bridgeTokensCBridge", values: [CBridgeDataStruct]): string;
    encodeFunctionData(functionFragment: "cBridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeCBridge", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateBridgeAddress", values: [string]): string;
    decodeFunctionResult(functionFragment: "bridgeTokensCBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeCBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBridgeAddress", data: BytesLike): Result;
    events: {
        "CBridgeInitialized(address,uint256)": EventFragment;
        "TransferStarted(string,address,address,address,uint256,uint256)": EventFragment;
        "UpdatedCBridgeAddress(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CBridgeInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatedCBridgeAddress"): EventFragment;
}
export declare type CBridgeInitializedEvent = TypedEvent<[
    string,
    BigNumber
], {
    cBridge: string;
    chainId: BigNumber;
}>;
export declare type CBridgeInitializedEventFilter = TypedEventFilter<CBridgeInitializedEvent>;
export declare type TransferStartedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], {
    bridgeUsed: string;
    tokenAddress: string;
    from: string;
    to: string;
    amount: BigNumber;
    chainIdTo: BigNumber;
}>;
export declare type TransferStartedEventFilter = TypedEventFilter<TransferStartedEvent>;
export declare type UpdatedCBridgeAddressEvent = TypedEvent<[
    string
], {
    newAddress: string;
}>;
export declare type UpdatedCBridgeAddressEventFilter = TypedEventFilter<UpdatedCBridgeAddressEvent>;
export interface CBridgeFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CBridgeFacetInterface;
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
        bridgeTokensCBridge(_cBridgeData: CBridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cBridge(overrides?: CallOverrides): Promise<[string]>;
        chainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        initializeCBridge(_cBridge: string, _chainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateBridgeAddress(_newAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    bridgeTokensCBridge(_cBridgeData: CBridgeDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cBridge(overrides?: CallOverrides): Promise<string>;
    chainId(overrides?: CallOverrides): Promise<BigNumber>;
    initializeCBridge(_cBridge: string, _chainId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateBridgeAddress(_newAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        bridgeTokensCBridge(_cBridgeData: CBridgeDataStruct, overrides?: CallOverrides): Promise<void>;
        cBridge(overrides?: CallOverrides): Promise<string>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        initializeCBridge(_cBridge: string, _chainId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        updateBridgeAddress(_newAddress: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CBridgeInitialized(address,uint256)"(cBridge?: null, chainId?: null): CBridgeInitializedEventFilter;
        CBridgeInitialized(cBridge?: null, chainId?: null): CBridgeInitializedEventFilter;
        "TransferStarted(string,address,address,address,uint256,uint256)"(bridgeUsed?: null, tokenAddress?: null, from?: null, to?: null, amount?: null, chainIdTo?: null): TransferStartedEventFilter;
        TransferStarted(bridgeUsed?: null, tokenAddress?: null, from?: null, to?: null, amount?: null, chainIdTo?: null): TransferStartedEventFilter;
        "UpdatedCBridgeAddress(address)"(newAddress?: null): UpdatedCBridgeAddressEventFilter;
        UpdatedCBridgeAddress(newAddress?: null): UpdatedCBridgeAddressEventFilter;
    };
    estimateGas: {
        bridgeTokensCBridge(_cBridgeData: CBridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cBridge(overrides?: CallOverrides): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        initializeCBridge(_cBridge: string, _chainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateBridgeAddress(_newAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        bridgeTokensCBridge(_cBridgeData: CBridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializeCBridge(_cBridge: string, _chainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateBridgeAddress(_newAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
