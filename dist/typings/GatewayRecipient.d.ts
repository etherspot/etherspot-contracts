import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GatewayRecipientInterface extends utils.Interface {
    functions: {
        "gateway()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
    decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
    events: {};
}
export interface GatewayRecipient extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GatewayRecipientInterface;
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
        gateway(overrides?: CallOverrides): Promise<[string]>;
    };
    gateway(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        gateway(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        gateway(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
