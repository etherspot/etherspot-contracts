import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SafeMathLibInterface extends utils.Interface {
    functions: {
        "c_60aa1e30(bytes8)": FunctionFragment;
        "c_false60aa1e30(bytes8)": FunctionFragment;
        "c_true60aa1e30(bytes8)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "c_60aa1e30", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false60aa1e30", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true60aa1e30", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "c_60aa1e30", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false60aa1e30", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true60aa1e30", data: BytesLike): Result;
    events: {};
}
export interface SafeMathLib extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SafeMathLibInterface;
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
        c_60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_false60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    c_60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_false60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        c_60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_false60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        c_60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        c_60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true60aa1e30(c__60aa1e30: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
