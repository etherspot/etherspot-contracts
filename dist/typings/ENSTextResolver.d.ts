import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ENSTextResolverInterface extends utils.Interface {
    functions: {
        "setText(bytes32,string,string)": FunctionFragment;
        "text(bytes32,string)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "setText", values: [BytesLike, string, string]): string;
    encodeFunctionData(functionFragment: "text", values: [BytesLike, string]): string;
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
        setText(node: BytesLike, key: string, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<[string]>;
    };
    setText(node: BytesLike, key: string, value: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        setText(node: BytesLike, key: string, value: string, overrides?: CallOverrides): Promise<void>;
        text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "TextChanged(bytes32,string,string)"(node?: BytesLike | null, indexedKey?: string | null, key?: null): TextChangedEventFilter;
        TextChanged(node?: BytesLike | null, indexedKey?: string | null, key?: null): TextChangedEventFilter;
    };
    estimateGas: {
        setText(node: BytesLike, key: string, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        setText(node: BytesLike, key: string, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
