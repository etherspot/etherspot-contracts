import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GatewayRecipientMockInterface extends utils.Interface {
    functions: {
        "emitContext()": FunctionFragment;
        "gateway()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "emitContext", values?: undefined): string;
    encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
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
        emitContext(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gateway(overrides?: CallOverrides): Promise<[string]>;
    };
    emitContext(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gateway(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        emitContext(overrides?: CallOverrides): Promise<void>;
        gateway(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Context(address,address,bytes)"(account?: null, sender?: null, data?: null): ContextEventFilter;
        Context(account?: null, sender?: null, data?: null): ContextEventFilter;
    };
    estimateGas: {
        emitContext(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gateway(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        emitContext(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
