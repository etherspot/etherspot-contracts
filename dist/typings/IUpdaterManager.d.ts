import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IUpdaterManagerInterface extends utils.Interface {
    functions: {
        "slashUpdater(address)": FunctionFragment;
        "updater()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "slashUpdater", values: [string]): string;
    encodeFunctionData(functionFragment: "updater", values?: undefined): string;
    decodeFunctionResult(functionFragment: "slashUpdater", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updater", data: BytesLike): Result;
    events: {};
}
export interface IUpdaterManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUpdaterManagerInterface;
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
        slashUpdater(_reporter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updater(overrides?: CallOverrides): Promise<[string]>;
    };
    slashUpdater(_reporter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updater(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        slashUpdater(_reporter: string, overrides?: CallOverrides): Promise<void>;
        updater(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        slashUpdater(_reporter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updater(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        slashUpdater(_reporter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updater(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
