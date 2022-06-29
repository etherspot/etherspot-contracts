import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PaymentDepositAccountInterface extends utils.Interface {
    functions: {
        "c_624bed52(bytes8)": FunctionFragment;
        "c_e208e0f4(bytes8)": FunctionFragment;
        "c_false624bed52(bytes8)": FunctionFragment;
        "c_falsee208e0f4(bytes8)": FunctionFragment;
        "c_true624bed52(bytes8)": FunctionFragment;
        "c_truee208e0f4(bytes8)": FunctionFragment;
        "controller()": FunctionFragment;
        "executeTransaction(address,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "c_624bed52", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_e208e0f4", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false624bed52", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falsee208e0f4", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true624bed52", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_truee208e0f4", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "controller", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeTransaction", values: [string, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "c_624bed52", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_e208e0f4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false624bed52", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falsee208e0f4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true624bed52", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_truee208e0f4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransaction", data: BytesLike): Result;
    events: {};
}
export interface PaymentDepositAccount extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PaymentDepositAccountInterface;
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
        c_624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_e208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_false624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_falsee208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_truee208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        controller(overrides?: CallOverrides): Promise<[string]>;
        executeTransaction(to: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    c_624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_e208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_false624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_falsee208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_truee208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    controller(overrides?: CallOverrides): Promise<string>;
    executeTransaction(to: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        c_624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_e208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_false624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_falsee208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_truee208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        controller(overrides?: CallOverrides): Promise<string>;
        executeTransaction(to: string, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        c_624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_e208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falsee208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_truee208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        controller(overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(to: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        c_624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_e208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falsee208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true624bed52(c__624bed52: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_truee208e0f4(c__e208e0f4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeTransaction(to: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
