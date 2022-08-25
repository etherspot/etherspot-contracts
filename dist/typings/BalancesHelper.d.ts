import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BalancesHelperInterface extends utils.Interface {
    functions: {
        "getBalances(address[],address[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getBalances", values: [string[], string[]]): string;
    decodeFunctionResult(functionFragment: "getBalances", data: BytesLike): Result;
    events: {};
}
export interface BalancesHelper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BalancesHelperInterface;
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
        getBalances(accounts: string[], tokens: string[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
    };
    getBalances(accounts: string[], tokens: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
    callStatic: {
        getBalances(accounts: string[], tokens: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
    };
    filters: {};
    estimateGas: {
        getBalances(accounts: string[], tokens: string[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getBalances(accounts: string[], tokens: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
