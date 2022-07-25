import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ECDSALibInterface extends utils.Interface {
    functions: {
        "c_b0cf6ac1(bytes8)": FunctionFragment;
        "c_falseb0cf6ac1(bytes8)": FunctionFragment;
        "c_trueb0cf6ac1(bytes8)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "c_b0cf6ac1", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falseb0cf6ac1", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_trueb0cf6ac1", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "c_b0cf6ac1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falseb0cf6ac1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_trueb0cf6ac1", data: BytesLike): Result;
    events: {};
}
export interface ECDSALib extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ECDSALibInterface;
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
        c_b0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_falseb0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_trueb0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    c_b0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_falseb0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_trueb0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        c_b0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_falseb0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_trueb0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        c_b0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falseb0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_trueb0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        c_b0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falseb0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_trueb0cf6ac1(c__b0cf6ac1: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
