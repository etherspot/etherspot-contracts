import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ExecutorArgsStruct = {
    transferId: BytesLike;
    amount: BigNumberish;
    to: string;
    recovery: string;
    assetId: string;
    properties: BytesLike;
    callData: BytesLike;
};
export declare type ExecutorArgsStructOutput = [
    string,
    BigNumber,
    string,
    string,
    string,
    string,
    string
] & {
    transferId: string;
    amount: BigNumber;
    to: string;
    recovery: string;
    assetId: string;
    properties: string;
    callData: string;
};
export interface IExecutorInterface extends utils.Interface {
    functions: {
        "amount()": FunctionFragment;
        "execute((bytes32,uint256,address,address,address,bytes,bytes))": FunctionFragment;
        "getConnext()": FunctionFragment;
        "origin()": FunctionFragment;
        "originSender()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "amount", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [ExecutorArgsStruct]): string;
    encodeFunctionData(functionFragment: "getConnext", values?: undefined): string;
    encodeFunctionData(functionFragment: "origin", values?: undefined): string;
    encodeFunctionData(functionFragment: "originSender", values?: undefined): string;
    decodeFunctionResult(functionFragment: "amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConnext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "origin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "originSender", data: BytesLike): Result;
    events: {
        "Executed(bytes32,address,address,address,uint256,bytes,bytes,bytes,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
}
export declare type ExecutedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    string,
    string,
    boolean
], {
    transferId: string;
    to: string;
    recovery: string;
    assetId: string;
    amount: BigNumber;
    _properties: string;
    callData: string;
    returnData: string;
    success: boolean;
}>;
export declare type ExecutedEventFilter = TypedEventFilter<ExecutedEvent>;
export interface IExecutor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IExecutorInterface;
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
        amount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        execute(_args: ExecutorArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getConnext(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        origin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        originSender(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    amount(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    execute(_args: ExecutorArgsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getConnext(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    origin(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    originSender(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        amount(overrides?: CallOverrides): Promise<BigNumber>;
        execute(_args: ExecutorArgsStruct, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
        getConnext(overrides?: CallOverrides): Promise<string>;
        origin(overrides?: CallOverrides): Promise<number>;
        originSender(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Executed(bytes32,address,address,address,uint256,bytes,bytes,bytes,bool)"(transferId?: BytesLike | null, to?: string | null, recovery?: string | null, assetId?: null, amount?: null, _properties?: null, callData?: null, returnData?: null, success?: null): ExecutedEventFilter;
        Executed(transferId?: BytesLike | null, to?: string | null, recovery?: string | null, assetId?: null, amount?: null, _properties?: null, callData?: null, returnData?: null, success?: null): ExecutedEventFilter;
    };
    estimateGas: {
        amount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        execute(_args: ExecutorArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getConnext(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        origin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        originSender(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        amount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        execute(_args: ExecutorArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getConnext(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        origin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        originSender(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
