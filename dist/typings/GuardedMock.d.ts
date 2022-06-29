import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GuardedMockInterface extends utils.Interface {
    functions: {
        "addGuardian(address)": FunctionFragment;
        "c_0ffe16b4(bytes8)": FunctionFragment;
        "c_9fb0db2e(bytes8)": FunctionFragment;
        "c_false0ffe16b4(bytes8)": FunctionFragment;
        "c_false9fb0db2e(bytes8)": FunctionFragment;
        "c_true0ffe16b4(bytes8)": FunctionFragment;
        "c_true9fb0db2e(bytes8)": FunctionFragment;
        "isGuardian(address)": FunctionFragment;
        "removeGuardian(address)": FunctionFragment;
        "verifyGuardianSignature(bytes32,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "c_0ffe16b4", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_9fb0db2e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false0ffe16b4", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false9fb0db2e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true0ffe16b4", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true9fb0db2e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "removeGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "verifyGuardianSignature", values: [BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "addGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_0ffe16b4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_9fb0db2e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false0ffe16b4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false9fb0db2e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true0ffe16b4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true9fb0db2e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyGuardianSignature", data: BytesLike): Result;
    events: {
        "GuardianAdded(address,address)": EventFragment;
        "GuardianRemoved(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "GuardianAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GuardianRemoved"): EventFragment;
}
export declare type GuardianAddedEvent = TypedEvent<[
    string,
    string
], {
    sender: string;
    guardian: string;
}>;
export declare type GuardianAddedEventFilter = TypedEventFilter<GuardianAddedEvent>;
export declare type GuardianRemovedEvent = TypedEvent<[
    string,
    string
], {
    sender: string;
    guardian: string;
}>;
export declare type GuardianRemovedEventFilter = TypedEventFilter<GuardianRemovedEvent>;
export interface GuardedMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GuardedMockInterface;
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
        addGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_false9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<[boolean]>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    addGuardian(guardian: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_false9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isGuardian(guardian: string, overrides?: CallOverrides): Promise<boolean>;
    removeGuardian(guardian: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        addGuardian(guardian: string, overrides?: CallOverrides): Promise<void>;
        c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_false9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<boolean>;
        removeGuardian(guardian: string, overrides?: CallOverrides): Promise<void>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "GuardianAdded(address,address)"(sender?: null, guardian?: null): GuardianAddedEventFilter;
        GuardianAdded(sender?: null, guardian?: null): GuardianAddedEventFilter;
        "GuardianRemoved(address,address)"(sender?: null, guardian?: null): GuardianRemovedEventFilter;
        GuardianRemoved(sender?: null, guardian?: null): GuardianRemovedEventFilter;
    };
    estimateGas: {
        addGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true9fb0db2e(c__9fb0db2e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
