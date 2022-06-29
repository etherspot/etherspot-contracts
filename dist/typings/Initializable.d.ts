import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface InitializableInterface extends utils.Interface {
    functions: {
        "c_c0828b70(bytes8)": FunctionFragment;
        "c_falsec0828b70(bytes8)": FunctionFragment;
        "c_truec0828b70(bytes8)": FunctionFragment;
        "isInitialized()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "c_c0828b70", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falsec0828b70", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_truec0828b70", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isInitialized", values?: undefined): string;
    decodeFunctionResult(functionFragment: "c_c0828b70", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falsec0828b70", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_truec0828b70", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInitialized", data: BytesLike): Result;
    events: {
        "Initialized(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
export declare type InitializedEvent = TypedEvent<[string], {
    initializer: string;
}>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface Initializable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: InitializableInterface;
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
        c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        isInitialized(overrides?: CallOverrides): Promise<[boolean]>;
    };
    c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isInitialized(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isInitialized(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Initialized(address)"(initializer?: null): InitializedEventFilter;
        Initialized(initializer?: null): InitializedEventFilter;
    };
    estimateGas: {
        c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isInitialized(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
