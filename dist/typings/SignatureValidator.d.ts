import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SignatureValidatorInterface extends utils.Interface {
    functions: {
        "c_1b54acf3(bytes8)": FunctionFragment;
        "c_false1b54acf3(bytes8)": FunctionFragment;
        "c_true1b54acf3(bytes8)": FunctionFragment;
        "chainId()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "c_1b54acf3", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false1b54acf3", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true1b54acf3", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
    decodeFunctionResult(functionFragment: "c_1b54acf3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false1b54acf3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true1b54acf3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    events: {};
}
export interface SignatureValidator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SignatureValidatorInterface;
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
        c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        chainId(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    chainId(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
