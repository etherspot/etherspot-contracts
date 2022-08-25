import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SignatureValidatorInterface extends utils.Interface {
    functions: {
        "chainId()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
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
        chainId(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    chainId(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
