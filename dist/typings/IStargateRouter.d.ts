import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type LzTxObjStruct = {
    dstGasForCall: BigNumberish;
    dstNativeAmount: BigNumberish;
    dstNativeAddr: BytesLike;
};
export declare type LzTxObjStructOutput = [BigNumber, BigNumber, string] & {
    dstGasForCall: BigNumber;
    dstNativeAmount: BigNumber;
    dstNativeAddr: string;
};
export interface IStargateRouterInterface extends utils.Interface {
    functions: {
        "addLiquidity(uint256,uint256,address)": FunctionFragment;
        "instantRedeemLocal(uint16,uint256,address)": FunctionFragment;
        "quoteLayerZeroFee(uint16,uint8,bytes,bytes,(uint256,uint256,bytes))": FunctionFragment;
        "redeemLocal(uint16,uint256,uint256,address,uint256,bytes,(uint256,uint256,bytes))": FunctionFragment;
        "redeemRemote(uint16,uint256,uint256,address,uint256,uint256,bytes,(uint256,uint256,bytes))": FunctionFragment;
        "sendCredits(uint16,uint256,uint256,address)": FunctionFragment;
        "swap(uint16,uint256,uint256,address,uint256,uint256,(uint256,uint256,bytes),bytes,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addLiquidity", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "instantRedeemLocal", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "quoteLayerZeroFee", values: [BigNumberish, BigNumberish, BytesLike, BytesLike, LzTxObjStruct]): string;
    encodeFunctionData(functionFragment: "redeemLocal", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BytesLike,
        LzTxObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "redeemRemote", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike,
        LzTxObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendCredits", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "swap", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        LzTxObjStruct,
        BytesLike,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instantRedeemLocal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteLayerZeroFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemLocal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    events: {};
}
export interface IStargateRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IStargateRouterInterface;
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
        addLiquidity(_poolId: BigNumberish, _amountLD: BigNumberish, _to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        instantRedeemLocal(_srcPoolId: BigNumberish, _amountLP: BigNumberish, _to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quoteLayerZeroFee(_dstChainId: BigNumberish, _functionType: BigNumberish, _toAddress: BytesLike, _transferAndCallPayload: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        redeemLocal(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLP: BigNumberish, _to: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        redeemRemote(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLP: BigNumberish, _minAmountLD: BigNumberish, _to: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendCredits(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swap(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLD: BigNumberish, _minAmountLD: BigNumberish, _lzTxParams: LzTxObjStruct, _to: BytesLike, _payload: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addLiquidity(_poolId: BigNumberish, _amountLD: BigNumberish, _to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    instantRedeemLocal(_srcPoolId: BigNumberish, _amountLP: BigNumberish, _to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quoteLayerZeroFee(_dstChainId: BigNumberish, _functionType: BigNumberish, _toAddress: BytesLike, _transferAndCallPayload: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    redeemLocal(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLP: BigNumberish, _to: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    redeemRemote(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLP: BigNumberish, _minAmountLD: BigNumberish, _to: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendCredits(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swap(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLD: BigNumberish, _minAmountLD: BigNumberish, _lzTxParams: LzTxObjStruct, _to: BytesLike, _payload: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addLiquidity(_poolId: BigNumberish, _amountLD: BigNumberish, _to: string, overrides?: CallOverrides): Promise<void>;
        instantRedeemLocal(_srcPoolId: BigNumberish, _amountLP: BigNumberish, _to: string, overrides?: CallOverrides): Promise<BigNumber>;
        quoteLayerZeroFee(_dstChainId: BigNumberish, _functionType: BigNumberish, _toAddress: BytesLike, _transferAndCallPayload: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        redeemLocal(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLP: BigNumberish, _to: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: CallOverrides): Promise<void>;
        redeemRemote(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLP: BigNumberish, _minAmountLD: BigNumberish, _to: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: CallOverrides): Promise<void>;
        sendCredits(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, overrides?: CallOverrides): Promise<void>;
        swap(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLD: BigNumberish, _minAmountLD: BigNumberish, _lzTxParams: LzTxObjStruct, _to: BytesLike, _payload: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        addLiquidity(_poolId: BigNumberish, _amountLD: BigNumberish, _to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        instantRedeemLocal(_srcPoolId: BigNumberish, _amountLP: BigNumberish, _to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quoteLayerZeroFee(_dstChainId: BigNumberish, _functionType: BigNumberish, _toAddress: BytesLike, _transferAndCallPayload: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: CallOverrides): Promise<BigNumber>;
        redeemLocal(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLP: BigNumberish, _to: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        redeemRemote(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLP: BigNumberish, _minAmountLD: BigNumberish, _to: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendCredits(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swap(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLD: BigNumberish, _minAmountLD: BigNumberish, _lzTxParams: LzTxObjStruct, _to: BytesLike, _payload: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addLiquidity(_poolId: BigNumberish, _amountLD: BigNumberish, _to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        instantRedeemLocal(_srcPoolId: BigNumberish, _amountLP: BigNumberish, _to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quoteLayerZeroFee(_dstChainId: BigNumberish, _functionType: BigNumberish, _toAddress: BytesLike, _transferAndCallPayload: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemLocal(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLP: BigNumberish, _to: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        redeemRemote(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLP: BigNumberish, _minAmountLD: BigNumberish, _to: BytesLike, _lzTxParams: LzTxObjStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendCredits(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swap(_dstChainId: BigNumberish, _srcPoolId: BigNumberish, _dstPoolId: BigNumberish, _refundAddress: string, _amountLD: BigNumberish, _minAmountLD: BigNumberish, _lzTxParams: LzTxObjStruct, _to: BytesLike, _payload: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
