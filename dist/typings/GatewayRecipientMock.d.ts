import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GatewayRecipientMockInterface extends utils.Interface {
    functions: {
        "c_7fd4d25d(bytes8)": FunctionFragment;
        "c_d5c463c2(bytes8)": FunctionFragment;
        "c_false7fd4d25d(bytes8)": FunctionFragment;
        "c_falsed5c463c2(bytes8)": FunctionFragment;
        "c_true7fd4d25d(bytes8)": FunctionFragment;
        "c_trued5c463c2(bytes8)": FunctionFragment;
        "emitContext()": FunctionFragment;
        "gateway()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "c_7fd4d25d", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_d5c463c2", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false7fd4d25d", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falsed5c463c2", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true7fd4d25d", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_trued5c463c2", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "emitContext", values?: undefined): string;
    encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
    decodeFunctionResult(functionFragment: "c_7fd4d25d", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_d5c463c2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false7fd4d25d", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falsed5c463c2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true7fd4d25d", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_trued5c463c2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitContext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
    events: {
        "Context(address,address,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Context"): EventFragment;
}
export declare type ContextEvent = TypedEvent<[
    string,
    string,
    string
], {
    account: string;
    sender: string;
    data: string;
}>;
export declare type ContextEventFilter = TypedEventFilter<ContextEvent>;
export interface GatewayRecipientMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GatewayRecipientMockInterface;
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
        c_7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_false7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        emitContext(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gateway(overrides?: CallOverrides): Promise<[string]>;
    };
    c_7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_false7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    emitContext(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gateway(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        c_7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_false7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        emitContext(overrides?: CallOverrides): Promise<void>;
        gateway(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Context(address,address,bytes)"(account?: null, sender?: null, data?: null): ContextEventFilter;
        Context(account?: null, sender?: null, data?: null): ContextEventFilter;
    };
    estimateGas: {
        c_7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        emitContext(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gateway(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        c_7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true7fd4d25d(c__7fd4d25d: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emitContext(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
