import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ENSPubKeyResolverInterface extends utils.Interface {
    functions: {
        "pubkey(bytes32)": FunctionFragment;
        "setPubkey(bytes32,bytes32,bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "pubkey", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setPubkey", values: [BytesLike, BytesLike, BytesLike]): string;
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
        pubkey(node: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            x: string;
            y: string;
        }>;
        setPubkey(node: BytesLike, x: BytesLike, y: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    pubkey(node: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
        x: string;
        y: string;
    }>;
    setPubkey(node: BytesLike, x: BytesLike, y: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
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
        pubkey(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setPubkey(node: BytesLike, x: BytesLike, y: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        pubkey(node: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPubkey(node: BytesLike, x: BytesLike, y: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
