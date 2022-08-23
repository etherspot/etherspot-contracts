import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type CBridgeDataStruct = {
    dstChainId: BigNumberish;
    nonce: BigNumberish;
    qty: BigNumberish;
    to: string;
    token: string;
};
export declare type CBridgeDataStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    dstChainId: BigNumber;
    nonce: BigNumber;
    qty: BigNumber;
    to: string;
    token: string;
};
export interface CBridgeFacetInterface extends utils.Interface {
    functions: {
        "cbBridgeTokens((uint64,uint64,uint256,address,address))": FunctionFragment;
        "cbInitialize(address)": FunctionFragment;
        "cbUpdateBridge(address)": FunctionFragment;
        "cbUpdateSlippageTolerance(uint32)": FunctionFragment;
        "cbWithdraw(address,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "cbBridgeTokens", values: [CBridgeDataStruct]): string;
    encodeFunctionData(functionFragment: "cbInitialize", values: [string]): string;
    encodeFunctionData(functionFragment: "cbUpdateBridge", values: [string]): string;
    encodeFunctionData(functionFragment: "cbUpdateSlippageTolerance", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "cbWithdraw", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "cbBridgeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cbInitialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cbUpdateBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cbUpdateSlippageTolerance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cbWithdraw", data: BytesLike): Result;
    events: {
        "CBInitialized(address,uint256)": EventFragment;
        "CBTransferStarted(string,address,address,address,uint256,uint256)": EventFragment;
        "CBUpdatedBridge(address)": EventFragment;
        "CBUpdatedSlippageTolerance(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CBInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CBTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CBUpdatedBridge"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CBUpdatedSlippageTolerance"): EventFragment;
}
export declare type CBInitializedEvent = TypedEvent<[
    string,
    BigNumber
], {
    cBridge: string;
    chainId: BigNumber;
}>;
export declare type CBInitializedEventFilter = TypedEventFilter<CBInitializedEvent>;
export declare type CBTransferStartedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], {
    bridgeUsed: string;
    token: string;
    from: string;
    to: string;
    qty: BigNumber;
    chainIdTo: BigNumber;
}>;
export declare type CBTransferStartedEventFilter = TypedEventFilter<CBTransferStartedEvent>;
export declare type CBUpdatedBridgeEvent = TypedEvent<[string], {
    newAddress: string;
}>;
export declare type CBUpdatedBridgeEventFilter = TypedEventFilter<CBUpdatedBridgeEvent>;
export declare type CBUpdatedSlippageToleranceEvent = TypedEvent<[
    BigNumber
], {
    newSlippage: BigNumber;
}>;
export declare type CBUpdatedSlippageToleranceEventFilter = TypedEventFilter<CBUpdatedSlippageToleranceEvent>;
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
        cbBridgeTokens(_cbData: CBridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cbInitialize(_cbBridge: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cbUpdateBridge(_newAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cbUpdateSlippageTolerance(_newSlippage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cbWithdraw(_token: string, _user: string, _amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    cbBridgeTokens(_cbData: CBridgeDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cbInitialize(_cbBridge: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cbUpdateBridge(_newAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cbUpdateSlippageTolerance(_newSlippage: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cbWithdraw(_token: string, _user: string, _amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cbBridgeTokens(_cbData: CBridgeDataStruct, overrides?: CallOverrides): Promise<void>;
        cbInitialize(_cbBridge: string, overrides?: CallOverrides): Promise<void>;
        cbUpdateBridge(_newAddress: string, overrides?: CallOverrides): Promise<void>;
        cbUpdateSlippageTolerance(_newSlippage: BigNumberish, overrides?: CallOverrides): Promise<void>;
        cbWithdraw(_token: string, _user: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CBInitialized(address,uint256)"(cBridge?: null, chainId?: null): CBInitializedEventFilter;
        CBInitialized(cBridge?: null, chainId?: null): CBInitializedEventFilter;
        "CBTransferStarted(string,address,address,address,uint256,uint256)"(bridgeUsed?: null, token?: null, from?: null, to?: null, qty?: null, chainIdTo?: null): CBTransferStartedEventFilter;
        CBTransferStarted(bridgeUsed?: null, token?: null, from?: null, to?: null, qty?: null, chainIdTo?: null): CBTransferStartedEventFilter;
        "CBUpdatedBridge(address)"(newAddress?: null): CBUpdatedBridgeEventFilter;
        CBUpdatedBridge(newAddress?: null): CBUpdatedBridgeEventFilter;
        "CBUpdatedSlippageTolerance(uint256)"(newSlippage?: null): CBUpdatedSlippageToleranceEventFilter;
        CBUpdatedSlippageTolerance(newSlippage?: null): CBUpdatedSlippageToleranceEventFilter;
    };
    estimateGas: {
        cbBridgeTokens(_cbData: CBridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cbInitialize(_cbBridge: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cbUpdateBridge(_newAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cbUpdateSlippageTolerance(_newSlippage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cbWithdraw(_token: string, _user: string, _amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cbBridgeTokens(_cbData: CBridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cbInitialize(_cbBridge: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cbUpdateBridge(_newAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cbUpdateSlippageTolerance(_newSlippage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cbWithdraw(_token: string, _user: string, _amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
