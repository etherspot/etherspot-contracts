import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ControlledInterface extends utils.Interface {
    functions: {
        "controller()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "controller", values?: undefined): string;
    decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
    events: {};
}
export interface Controlled extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ControlledInterface;
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
        controller(overrides?: CallOverrides): Promise<[string]>;
    };
    controller(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        controller(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        controller(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
