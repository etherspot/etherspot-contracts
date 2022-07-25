import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AmplificationUtilsInterface extends utils.Interface {
    functions: {
        "A_PRECISION()": FunctionFragment;
        "MAX_A()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "A_PRECISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_A", values?: undefined): string;
    decodeFunctionResult(functionFragment: "A_PRECISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_A", data: BytesLike): Result;
    events: {
        "RampA(uint256,uint256,uint256,uint256)": EventFragment;
        "StopRampA(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "RampA"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StopRampA"): EventFragment;
}
export declare type RampAEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    oldA: BigNumber;
    newA: BigNumber;
    initialTime: BigNumber;
    futureTime: BigNumber;
}>;
export declare type RampAEventFilter = TypedEventFilter<RampAEvent>;
export declare type StopRampAEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    currentA: BigNumber;
    time: BigNumber;
}>;
export declare type StopRampAEventFilter = TypedEventFilter<StopRampAEvent>;
export interface AmplificationUtils extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AmplificationUtilsInterface;
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
        A_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_A(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    A_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_A(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        A_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_A(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "RampA(uint256,uint256,uint256,uint256)"(oldA?: null, newA?: null, initialTime?: null, futureTime?: null): RampAEventFilter;
        RampA(oldA?: null, newA?: null, initialTime?: null, futureTime?: null): RampAEventFilter;
        "StopRampA(uint256,uint256)"(currentA?: null, time?: null): StopRampAEventFilter;
        StopRampA(currentA?: null, time?: null): StopRampAEventFilter;
    };
    estimateGas: {
        A_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_A(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        A_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
