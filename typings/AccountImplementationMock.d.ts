/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface AccountImplementationMockInterface extends ethers.utils.Interface {
  functions: {
    "canImplementInterfaceForAddress(bytes32,address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "isValidSignature(bytes32,bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "registry()": FunctionFragment;
    "tokensReceived(address,address,address,uint256,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "canImplementInterfaceForAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokensReceived",
    values: [string, string, string, BigNumberish, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "canImplementInterfaceForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokensReceived",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export class AccountImplementationMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AccountImplementationMockInterface;

  functions: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initialize(
      registry_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      registry_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    "isInitialized()"(overrides?: CallOverrides): Promise<[boolean]>;

    "isValidSignature(bytes32,bytes)"(
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "isValidSignature(bytes,bytes)"(
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    "registry()"(overrides?: CallOverrides): Promise<[string]>;

    tokensReceived(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "tokensReceived(address,address,address,uint256,bytes,bytes)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  canImplementInterfaceForAddress(
    interfaceHash: BytesLike,
    addr: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "canImplementInterfaceForAddress(bytes32,address)"(
    interfaceHash: BytesLike,
    addr: string,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    registry_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    registry_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  "isInitialized()"(overrides?: CallOverrides): Promise<boolean>;

  "isValidSignature(bytes32,bytes)"(
    messageHash: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "isValidSignature(bytes,bytes)"(
    message: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  onERC1155Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "onERC1155Received(address,address,uint256,uint256,bytes)"(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "onERC721Received(address,address,uint256,bytes)"(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  "registry()"(overrides?: CallOverrides): Promise<string>;

  tokensReceived(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: BigNumberish,
    arg4: BytesLike,
    arg5: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  "tokensReceived(address,address,address,uint256,bytes,bytes)"(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: BigNumberish,
    arg4: BytesLike,
    arg5: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(registry_: string, overrides?: CallOverrides): Promise<void>;

    "initialize(address)"(
      registry_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    "isInitialized()"(overrides?: CallOverrides): Promise<boolean>;

    "isValidSignature(bytes32,bytes)"(
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "isValidSignature(bytes,bytes)"(
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    "registry()"(overrides?: CallOverrides): Promise<string>;

    tokensReceived(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "tokensReceived(address,address,address,uint256,bytes,bytes)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Initialized(initializer: null): EventFilter;
  };

  estimateGas: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(registry_: string, overrides?: Overrides): Promise<BigNumber>;

    "initialize(address)"(
      registry_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    "isInitialized()"(overrides?: CallOverrides): Promise<BigNumber>;

    "isValidSignature(bytes32,bytes)"(
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidSignature(bytes,bytes)"(
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    "registry()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokensReceived(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokensReceived(address,address,address,uint256,bytes,bytes)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      registry_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      registry_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isInitialized()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isValidSignature(bytes32,bytes)"(
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidSignature(bytes,bytes)"(
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "registry()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokensReceived(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokensReceived(address,address,address,uint256,bytes,bytes)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}