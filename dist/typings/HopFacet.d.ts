import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type HopDataStruct = {
    bridge: string;
    ammWrapper: string;
    asset: string;
    recipient: string;
    chainId: BigNumberish;
    amount: BigNumberish;
    bonderFee: BigNumberish;
    amountOutMin: BigNumberish;
    deadline: BigNumberish;
    destinationAmountOutMin: BigNumberish;
    destinationDeadline: BigNumberish;
};
export declare type HopDataStructOutput = [
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
] & {
    bridge: string;
    ammWrapper: string;
    asset: string;
    recipient: string;
    chainId: BigNumber;
    amount: BigNumber;
    bonderFee: BigNumber;
    amountOutMin: BigNumber;
    deadline: BigNumber;
    destinationAmountOutMin: BigNumber;
    destinationDeadline: BigNumber;
};
export interface HopFacetInterface extends utils.Interface {
    functions: {
        "hopTokenTransfer((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "initHop(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "hopTokenTransfer", values: [HopDataStruct]): string;
    encodeFunctionData(functionFragment: "initHop", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "hopTokenTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initHop", data: BytesLike): Result;
    events: {
        "HopInitialized(uint256,uint256)": EventFragment;
        "HopTokenSwap(uint256,address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "HopInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "HopTokenSwap"): EventFragment;
}
export declare type HopInitializedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    chainId: BigNumber;
    chainLayerId: BigNumber;
}>;
export declare type HopInitializedEventFilter = TypedEventFilter<HopInitializedEvent>;
export declare type HopTokenSwapEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    _destination: BigNumber;
    _bridge: string;
    _ammWrapper: string;
    _recipient: string;
    _asset: string;
    _amount: BigNumber;
    _bonderFee: BigNumber;
    _amountOutMin: BigNumber;
    _deadline: BigNumber;
    _destinationAmountOutMin: BigNumber;
    _destinationDeadline: BigNumber;
}>;
export declare type HopTokenSwapEventFilter = TypedEventFilter<HopTokenSwapEvent>;
export interface HopFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HopFacetInterface;
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
        hopTokenTransfer(_hopData: HopDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initHop(_chainLayerId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    hopTokenTransfer(_hopData: HopDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initHop(_chainLayerId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        hopTokenTransfer(_hopData: HopDataStruct, overrides?: CallOverrides): Promise<void>;
        initHop(_chainLayerId: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "HopInitialized(uint256,uint256)"(chainId?: null, chainLayerId?: null): HopInitializedEventFilter;
        HopInitialized(chainId?: null, chainLayerId?: null): HopInitializedEventFilter;
        "HopTokenSwap(uint256,address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256)"(_destination?: BigNumberish | null, _bridge?: null, _ammWrapper?: null, _recipient?: string | null, _asset?: string | null, _amount?: null, _bonderFee?: null, _amountOutMin?: null, _deadline?: null, _destinationAmountOutMin?: null, _destinationDeadline?: null): HopTokenSwapEventFilter;
        HopTokenSwap(_destination?: BigNumberish | null, _bridge?: null, _ammWrapper?: null, _recipient?: string | null, _asset?: string | null, _amount?: null, _bonderFee?: null, _amountOutMin?: null, _deadline?: null, _destinationAmountOutMin?: null, _destinationDeadline?: null): HopTokenSwapEventFilter;
    };
    estimateGas: {
        hopTokenTransfer(_hopData: HopDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initHop(_chainLayerId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        hopTokenTransfer(_hopData: HopDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initHop(_chainLayerId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
