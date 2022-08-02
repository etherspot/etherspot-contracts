import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ECDSAExtendedLibInterface extends utils.Interface {
    functions: {
        "c_02b1372d(bytes8)": FunctionFragment;
        "c_false02b1372d(bytes8)": FunctionFragment;
        "c_true02b1372d(bytes8)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "c_02b1372d", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false02b1372d", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true02b1372d", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "c_02b1372d", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false02b1372d", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true02b1372d", data: BytesLike): Result;
    events: {};
}
export interface ECDSAExtendedLib extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ECDSAExtendedLibInterface;
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
        c_02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_false02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    c_02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_false02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        c_02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_false02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        c_02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        c_02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true02b1372d(c__02b1372d: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
