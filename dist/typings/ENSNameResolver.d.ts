import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ENSNameResolverInterface extends utils.Interface {
    functions: {
        "name(bytes32)": FunctionFragment;
        "setName(bytes32,string)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "name", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setName", values: [BytesLike, string]): string;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
    events: {
        "NameChanged(bytes32,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NameChanged"): EventFragment;
}
export declare type NameChangedEvent = TypedEvent<[
    string,
    string
], {
    node: string;
    name: string;
}>;
export declare type NameChangedEventFilter = TypedEventFilter<NameChangedEvent>;
export interface ENSNameResolver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ENSNameResolverInterface;
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
        name(node: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        setName(node: BytesLike, name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    name(node: BytesLike, overrides?: CallOverrides): Promise<string>;
    setName(node: BytesLike, name: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        name(node: BytesLike, overrides?: CallOverrides): Promise<string>;
        setName(node: BytesLike, name: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "NameChanged(bytes32,string)"(node?: BytesLike | null, name?: null): NameChangedEventFilter;
        NameChanged(node?: BytesLike | null, name?: null): NameChangedEventFilter;
    };
    estimateGas: {
        name(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setName(node: BytesLike, name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        name(node: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setName(node: BytesLike, name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
