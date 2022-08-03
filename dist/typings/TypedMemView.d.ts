import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TypedMemViewInterface extends utils.Interface {
    functions: {
        "NULL()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "NULL", values?: undefined): string;
    decodeFunctionResult(functionFragment: "NULL", data: BytesLike): Result;
    events: {};
}
export interface TypedMemView extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TypedMemViewInterface;
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
        NULL(overrides?: CallOverrides): Promise<[string]>;
    };
    NULL(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        NULL(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        NULL(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        NULL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
