import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BlockLibInterface extends utils.Interface {
    functions: {
        "c_69b78653(bytes8)": FunctionFragment;
        "c_false69b78653(bytes8)": FunctionFragment;
        "c_true69b78653(bytes8)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "c_69b78653", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false69b78653", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true69b78653", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "c_69b78653", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false69b78653", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true69b78653", data: BytesLike): Result;
    events: {};
}
export interface BlockLib extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BlockLibInterface;
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
        c_69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_false69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    c_69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_false69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        c_69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_false69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        c_69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        c_69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true69b78653(c__69b78653: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
