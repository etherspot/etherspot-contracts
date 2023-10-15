/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type FacetCutStruct = {
  facetAddress: string;
  action: BigNumberish;
  functionSelectors: BytesLike[];
};

export type FacetCutStructOutput = [string, number, string[]] & {
  facetAddress: string;
  action: number;
  functionSelectors: string[];
};

export interface LibDiamondInterface extends utils.Interface {
  functions: {
    "c_f9a76502(bytes8)": FunctionFragment;
    "c_falsef9a76502(bytes8)": FunctionFragment;
    "c_truef9a76502(bytes8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_f9a76502",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_falsef9a76502",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_truef9a76502",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "c_f9a76502", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_falsef9a76502",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_truef9a76502",
    data: BytesLike
  ): Result;

  events: {
    "DiamondCut(tuple[],address,bytes)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DiamondCut"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type DiamondCutEvent = TypedEvent<
  [FacetCutStructOutput[], string, string],
  { _diamondCut: FacetCutStructOutput[]; _init: string; _calldata: string }
>;

export type DiamondCutEventFilter = TypedEventFilter<DiamondCutEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface LibDiamond extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibDiamondInterface;

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
    c_f9a76502(
      c__f9a76502: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    c_falsef9a76502(
      c__f9a76502: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    c_truef9a76502(
      c__f9a76502: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  c_f9a76502(c__f9a76502: BytesLike, overrides?: CallOverrides): Promise<void>;

  c_falsef9a76502(
    c__f9a76502: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  c_truef9a76502(
    c__f9a76502: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    c_f9a76502(
      c__f9a76502: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_falsef9a76502(
      c__f9a76502: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    c_truef9a76502(
      c__f9a76502: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "DiamondCut(tuple[],address,bytes)"(
      _diamondCut?: null,
      _init?: null,
      _calldata?: null
    ): DiamondCutEventFilter;
    DiamondCut(
      _diamondCut?: null,
      _init?: null,
      _calldata?: null
    ): DiamondCutEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    c_f9a76502(
      c__f9a76502: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_falsef9a76502(
      c__f9a76502: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_truef9a76502(
      c__f9a76502: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_f9a76502(
      c__f9a76502: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_falsef9a76502(
      c__f9a76502: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_truef9a76502(
      c__f9a76502: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
