import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GatewayRecipientInterface extends utils.Interface {
    functions: {
        "c_d5c463c2(bytes8)": FunctionFragment;
        "c_falsed5c463c2(bytes8)": FunctionFragment;
        "c_trued5c463c2(bytes8)": FunctionFragment;
        "gateway()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "c_d5c463c2", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falsed5c463c2", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_trued5c463c2", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
    decodeFunctionResult(functionFragment: "c_d5c463c2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falsed5c463c2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_trued5c463c2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
    events: {};
}
export interface GatewayRecipient extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GatewayRecipientInterface;
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
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        gateway(overrides?: CallOverrides): Promise<[string]>;
    };
    c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    gateway(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        gateway(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        gateway(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
