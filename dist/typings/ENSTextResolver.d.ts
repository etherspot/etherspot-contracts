import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ENSTextResolverInterface extends utils.Interface {
    functions: {
        "c_3880312f(bytes8)": FunctionFragment;
        "c_ac93193e(bytes8)": FunctionFragment;
        "c_false3880312f(bytes8)": FunctionFragment;
        "c_falseac93193e(bytes8)": FunctionFragment;
        "c_true3880312f(bytes8)": FunctionFragment;
        "c_trueac93193e(bytes8)": FunctionFragment;
        "setText(bytes32,string,string)": FunctionFragment;
        "text(bytes32,string)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "c_3880312f", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_ac93193e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false3880312f", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falseac93193e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true3880312f", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_trueac93193e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setText", values: [BytesLike, string, string]): string;
    encodeFunctionData(functionFragment: "text", values: [BytesLike, string]): string;
    decodeFunctionResult(functionFragment: "c_3880312f", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_ac93193e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false3880312f", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falseac93193e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true3880312f", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_trueac93193e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setText", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
    events: {
        "TextChanged(bytes32,string,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TextChanged"): EventFragment;
}
export declare type TextChangedEvent = TypedEvent<[
    string,
    string,
    string
], {
    node: string;
    indexedKey: string;
    key: string;
}>;
export declare type TextChangedEventFilter = TypedEventFilter<TextChangedEvent>;
export interface ENSTextResolver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ENSTextResolverInterface;
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
        c_3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_false3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        setText(node: BytesLike, key: string, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<[string]>;
    };
    c_3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_false3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    setText(node: BytesLike, key: string, value: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        c_3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_false3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        setText(node: BytesLike, key: string, value: string, overrides?: CallOverrides): Promise<void>;
        text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "TextChanged(bytes32,string,string)"(node?: BytesLike | null, indexedKey?: string | null, key?: null): TextChangedEventFilter;
        TextChanged(node?: BytesLike | null, indexedKey?: string | null, key?: null): TextChangedEventFilter;
    };
    estimateGas: {
        c_3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setText(node: BytesLike, key: string, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        c_3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setText(node: BytesLike, key: string, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
