import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AccountBaseInterface extends utils.Interface {
    functions: {
        "registry()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "registry", values?: undefined): string;
    decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
    events: {};
}
export interface AccountBase extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AccountBaseInterface;
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
        registry(overrides?: CallOverrides): Promise<[string]>;
    };
    registry(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        registry(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        registry(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
