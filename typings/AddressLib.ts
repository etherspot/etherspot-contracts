/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AddressLibInterface extends utils.Interface {
  functions: {
    "c_0xbe77cb58(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_0xbe77cb58",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "c_0xbe77cb58",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AddressLib extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AddressLibInterface;

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
    c_0xbe77cb58(
      c__0xbe77cb58: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  c_0xbe77cb58(
    c__0xbe77cb58: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    c_0xbe77cb58(
      c__0xbe77cb58: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    c_0xbe77cb58(
      c__0xbe77cb58: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_0xbe77cb58(
      c__0xbe77cb58: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
