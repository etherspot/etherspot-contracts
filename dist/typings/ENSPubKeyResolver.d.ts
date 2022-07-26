import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ENSPubKeyResolverInterface extends utils.Interface {
    functions: {
        "c_ac93193e(bytes8)": FunctionFragment;
        "c_e1dc25ce(bytes8)": FunctionFragment;
        "c_falseac93193e(bytes8)": FunctionFragment;
        "c_falsee1dc25ce(bytes8)": FunctionFragment;
        "c_trueac93193e(bytes8)": FunctionFragment;
        "c_truee1dc25ce(bytes8)": FunctionFragment;
        "pubkey(bytes32)": FunctionFragment;
        "setPubkey(bytes32,bytes32,bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "c_ac93193e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_e1dc25ce", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falseac93193e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falsee1dc25ce", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_trueac93193e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_truee1dc25ce", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "pubkey", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setPubkey", values: [BytesLike, BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "c_ac93193e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_e1dc25ce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falseac93193e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falsee1dc25ce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_trueac93193e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_truee1dc25ce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pubkey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPubkey", data: BytesLike): Result;
    events: {
        "PubkeyChanged(bytes32,bytes32,bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PubkeyChanged"): EventFragment;
}
export declare type PubkeyChangedEvent = TypedEvent<[
    string,
    string,
    string
], {
    node: string;
    x: string;
    y: string;
}>;
export declare type PubkeyChangedEventFilter = TypedEventFilter<PubkeyChangedEvent>;
export interface ENSPubKeyResolver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ENSPubKeyResolverInterface;
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
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_e1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_falsee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_truee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        pubkey(node: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            x: string;
            y: string;
        }>;
        setPubkey(node: BytesLike, x: BytesLike, y: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_e1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_falsee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_truee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    pubkey(node: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
        x: string;
        y: string;
    }>;
    setPubkey(node: BytesLike, x: BytesLike, y: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_e1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_falsee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_truee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        pubkey(node: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            x: string;
            y: string;
        }>;
        setPubkey(node: BytesLike, x: BytesLike, y: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "PubkeyChanged(bytes32,bytes32,bytes32)"(node?: BytesLike | null, x?: null, y?: null): PubkeyChangedEventFilter;
        PubkeyChanged(node?: BytesLike | null, x?: null, y?: null): PubkeyChangedEventFilter;
    };
    estimateGas: {
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_e1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falsee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_truee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        pubkey(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setPubkey(node: BytesLike, x: BytesLike, y: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_e1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falsee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_truee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pubkey(node: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPubkey(node: BytesLike, x: BytesLike, y: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
