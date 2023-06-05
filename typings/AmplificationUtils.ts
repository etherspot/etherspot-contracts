/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AmplificationUtilsInterface extends utils.Interface {
  functions: {};

  events: {
    "RampA(uint256,uint256,uint256,uint256)": EventFragment;
    "StopRampA(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RampA"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StopRampA"): EventFragment;
}

export type RampAEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  {
    oldA: BigNumber;
    newA: BigNumber;
    initialTime: BigNumber;
    futureTime: BigNumber;
  }
>;

export type RampAEventFilter = TypedEventFilter<RampAEvent>;

export type StopRampAEvent = TypedEvent<
  [BigNumber, BigNumber],
  { currentA: BigNumber; time: BigNumber }
>;

export type StopRampAEventFilter = TypedEventFilter<StopRampAEvent>;

export interface AmplificationUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AmplificationUtilsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "RampA(uint256,uint256,uint256,uint256)"(
      oldA?: null,
      newA?: null,
      initialTime?: null,
      futureTime?: null
    ): RampAEventFilter;
    RampA(
      oldA?: null,
      newA?: null,
      initialTime?: null,
      futureTime?: null
    ): RampAEventFilter;

    "StopRampA(uint256,uint256)"(
      currentA?: null,
      time?: null
    ): StopRampAEventFilter;
    StopRampA(currentA?: null, time?: null): StopRampAEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
