/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SGReceiverInterface extends utils.Interface {
  functions: {
    "sgReceive(uint16,bytes,uint256,address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "sgReceive",
    values: [
      BigNumberish,
      BytesLike,
      BigNumberish,
      string,
      BigNumberish,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(functionFragment: "sgReceive", data: BytesLike): Result;

  events: {
    "StargateReceivedOnDestination(address,uint256)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "StargateReceivedOnDestination"
  ): EventFragment;
}

export type StargateReceivedOnDestinationEvent = TypedEvent<
  [string, BigNumber],
  { token: string; amount: BigNumber }
>;

export type StargateReceivedOnDestinationEventFilter =
  TypedEventFilter<StargateReceivedOnDestinationEvent>;

export interface SGReceiver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SGReceiverInterface;

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

  functions: {
    sgReceive(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      _token: string,
      _amountLD: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  sgReceive(
    arg0: BigNumberish,
    arg1: BytesLike,
    arg2: BigNumberish,
    _token: string,
    _amountLD: BigNumberish,
    _payload: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    sgReceive(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      _token: string,
      _amountLD: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "StargateReceivedOnDestination(address,uint256)"(
      token?: null,
      amount?: null
    ): StargateReceivedOnDestinationEventFilter;
    StargateReceivedOnDestination(
      token?: null,
      amount?: null
    ): StargateReceivedOnDestinationEventFilter;
  };

  estimateGas: {
    sgReceive(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      _token: string,
      _amountLD: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    sgReceive(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      _token: string,
      _amountLD: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
