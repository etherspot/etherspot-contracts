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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type CBridgeDataStruct = {
  maxSlippage: BigNumberish;
  dstChainId: BigNumberish;
  nonce: BigNumberish;
  amount: BigNumberish;
  receiver: string;
  token: string;
};

export type CBridgeDataStructOutput = [
  number,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  maxSlippage: number;
  dstChainId: BigNumber;
  nonce: BigNumber;
  amount: BigNumber;
  receiver: string;
  token: string;
};

export interface CBridgeFacetInterface extends utils.Interface {
  functions: {
    "bridgeTokensCBridge((uint32,uint64,uint64,uint256,address,address))": FunctionFragment;
    "initializeCBridge(address)": FunctionFragment;
    "updateCBridgeAddress(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "bridgeTokensCBridge",
    values: [CBridgeDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeCBridge",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCBridgeAddress",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "bridgeTokensCBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeCBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCBridgeAddress",
    data: BytesLike
  ): Result;

  events: {
    "CBridgeInitialized(address,uint256)": EventFragment;
    "TransferStarted(string,address,address,address,uint256,uint256)": EventFragment;
    "UpdatedCBridgeAddress(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CBridgeInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedCBridgeAddress"): EventFragment;
}

export type CBridgeInitializedEvent = TypedEvent<
  [string, BigNumber],
  { cBridge: string; chainId: BigNumber }
>;

export type CBridgeInitializedEventFilter =
  TypedEventFilter<CBridgeInitializedEvent>;

export type TransferStartedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber],
  {
    bridgeUsed: string;
    tokenAddress: string;
    from: string;
    to: string;
    amount: BigNumber;
    chainIdTo: BigNumber;
  }
>;

export type TransferStartedEventFilter = TypedEventFilter<TransferStartedEvent>;

export type UpdatedCBridgeAddressEvent = TypedEvent<
  [string],
  { newAddress: string }
>;

export type UpdatedCBridgeAddressEventFilter =
  TypedEventFilter<UpdatedCBridgeAddressEvent>;

export interface CBridgeFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CBridgeFacetInterface;

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
    bridgeTokensCBridge(
      _cBridgeData: CBridgeDataStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeCBridge(
      _cBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateCBridgeAddress(
      _newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bridgeTokensCBridge(
    _cBridgeData: CBridgeDataStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeCBridge(
    _cBridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateCBridgeAddress(
    _newAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bridgeTokensCBridge(
      _cBridgeData: CBridgeDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeCBridge(
      _cBridge: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateCBridgeAddress(
      _newAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CBridgeInitialized(address,uint256)"(
      cBridge?: null,
      chainId?: null
    ): CBridgeInitializedEventFilter;
    CBridgeInitialized(
      cBridge?: null,
      chainId?: null
    ): CBridgeInitializedEventFilter;

    "TransferStarted(string,address,address,address,uint256,uint256)"(
      bridgeUsed?: null,
      tokenAddress?: null,
      from?: null,
      to?: null,
      amount?: null,
      chainIdTo?: null
    ): TransferStartedEventFilter;
    TransferStarted(
      bridgeUsed?: null,
      tokenAddress?: null,
      from?: null,
      to?: null,
      amount?: null,
      chainIdTo?: null
    ): TransferStartedEventFilter;

    "UpdatedCBridgeAddress(address)"(
      newAddress?: null
    ): UpdatedCBridgeAddressEventFilter;
    UpdatedCBridgeAddress(newAddress?: null): UpdatedCBridgeAddressEventFilter;
  };

  estimateGas: {
    bridgeTokensCBridge(
      _cBridgeData: CBridgeDataStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeCBridge(
      _cBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateCBridgeAddress(
      _newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bridgeTokensCBridge(
      _cBridgeData: CBridgeDataStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeCBridge(
      _cBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateCBridgeAddress(
      _newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}