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
export interface AccountImplementationV1MockInterface extends utils.Interface {
  functions: {
    "c_274649f2(bytes8)": FunctionFragment;
    "c_305923d6(bytes8)": FunctionFragment;
    "c_3add61c5(bytes8)": FunctionFragment;
    "c_c0828b70(bytes8)": FunctionFragment;
    "c_false274649f2(bytes8)": FunctionFragment;
    "c_false305923d6(bytes8)": FunctionFragment;
    "c_false3add61c5(bytes8)": FunctionFragment;
    "c_falsec0828b70(bytes8)": FunctionFragment;
    "c_true274649f2(bytes8)": FunctionFragment;
    "c_true305923d6(bytes8)": FunctionFragment;
    "c_true3add61c5(bytes8)": FunctionFragment;
    "c_truec0828b70(bytes8)": FunctionFragment;
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
    functionFragment: "c_274649f2",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_305923d6",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_3add61c5",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_c0828b70",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_false274649f2",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_false305923d6",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_false3add61c5",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_falsec0828b70",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_true274649f2",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_true305923d6",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_true3add61c5",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_truec0828b70",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "canImplementInterfaceForAddress",
    values: [BytesLike, string],
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [BytesLike, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokensReceived",
    values: [string, string, string, BigNumberish, BytesLike, BytesLike],
  ): string;
  decodeFunctionResult(functionFragment: "c_274649f2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "c_305923d6", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "c_3add61c5", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "c_c0828b70", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_false274649f2",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_false305923d6",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_false3add61c5",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_falsec0828b70",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_true274649f2",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_true305923d6",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_true3add61c5",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_truec0828b70",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "canImplementInterfaceForAddress",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokensReceived",
    data: BytesLike,
  ): Result;
  events: {
    "Initialized(address)": EventFragment;
  };
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
export declare type InitializedEvent = TypedEvent<
  [string],
  {
    initializer: string;
  }
>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface AccountImplementationV1Mock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;
  interface: AccountImplementationV1MockInterface;
  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;
  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;
  functions: {
    c_274649f2(
      c__274649f2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[void]>;
    c_305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[void]>;
    c_3add61c5(
      c__3add61c5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[void]>;
    c_c0828b70(
      c__c0828b70: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[void]>;
    c_false274649f2(
      c__274649f2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_false305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_false3add61c5(
      c__3add61c5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_falsec0828b70(
      c__c0828b70: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_true274649f2(
      c__274649f2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_true305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_true3add61c5(
      c__3add61c5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_truec0828b70(
      c__c0828b70: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides,
    ): Promise<[string]>;
    initialize(
      registry_: string,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<ContractTransaction>;
    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;
    "isValidSignature(bytes32,bytes)"(
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string]>;
    "isValidSignature(bytes,bytes)"(
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string]>;
    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string]>;
    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string]>;
    registry(overrides?: CallOverrides): Promise<[string]>;
    tokensReceived(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[void]>;
  };
  c_274649f2(c__274649f2: BytesLike, overrides?: CallOverrides): Promise<void>;
  c_305923d6(c__305923d6: BytesLike, overrides?: CallOverrides): Promise<void>;
  c_3add61c5(c__3add61c5: BytesLike, overrides?: CallOverrides): Promise<void>;
  c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<void>;
  c_false274649f2(
    c__274649f2: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_false305923d6(
    c__305923d6: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_false3add61c5(
    c__3add61c5: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_falsec0828b70(
    c__c0828b70: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_true274649f2(
    c__274649f2: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_true305923d6(
    c__305923d6: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_true3add61c5(
    c__3add61c5: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_truec0828b70(
    c__c0828b70: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  canImplementInterfaceForAddress(
    interfaceHash: BytesLike,
    addr: string,
    overrides?: CallOverrides,
  ): Promise<string>;
  initialize(
    registry_: string,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<ContractTransaction>;
  isInitialized(overrides?: CallOverrides): Promise<boolean>;
  "isValidSignature(bytes32,bytes)"(
    messageHash: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides,
  ): Promise<string>;
  "isValidSignature(bytes,bytes)"(
    message: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides,
  ): Promise<string>;
  onERC1155Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: CallOverrides,
  ): Promise<string>;
  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: CallOverrides,
  ): Promise<string>;
  registry(overrides?: CallOverrides): Promise<string>;
  tokensReceived(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: BigNumberish,
    arg4: BytesLike,
    arg5: BytesLike,
    overrides?: CallOverrides,
  ): Promise<void>;
  callStatic: {
    c_274649f2(
      c__274649f2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
    c_305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
    c_3add61c5(
      c__3add61c5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
    c_c0828b70(
      c__c0828b70: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
    c_false274649f2(
      c__274649f2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_false305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_false3add61c5(
      c__3add61c5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_falsec0828b70(
      c__c0828b70: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_true274649f2(
      c__274649f2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_true305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_true3add61c5(
      c__3add61c5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_truec0828b70(
      c__c0828b70: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides,
    ): Promise<string>;
    initialize(registry_: string, overrides?: CallOverrides): Promise<void>;
    isInitialized(overrides?: CallOverrides): Promise<boolean>;
    "isValidSignature(bytes32,bytes)"(
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;
    "isValidSignature(bytes,bytes)"(
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;
    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;
    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;
    registry(overrides?: CallOverrides): Promise<string>;
    tokensReceived(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
  };
  filters: {
    "Initialized(address)"(initializer?: null): InitializedEventFilter;
    Initialized(initializer?: null): InitializedEventFilter;
  };
  estimateGas: {
    c_274649f2(
      c__274649f2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_3add61c5(
      c__3add61c5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_c0828b70(
      c__c0828b70: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_false274649f2(
      c__274649f2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_false305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_false3add61c5(
      c__3add61c5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_falsec0828b70(
      c__c0828b70: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_true274649f2(
      c__274649f2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_true305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_true3add61c5(
      c__3add61c5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_truec0828b70(
      c__c0828b70: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    initialize(
      registry_: string,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<BigNumber>;
    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;
    "isValidSignature(bytes32,bytes)"(
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    "isValidSignature(bytes,bytes)"(
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    registry(overrides?: CallOverrides): Promise<BigNumber>;
    tokensReceived(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };
  populateTransaction: {
    c_274649f2(
      c__274649f2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_3add61c5(
      c__3add61c5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_c0828b70(
      c__c0828b70: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_false274649f2(
      c__274649f2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_false305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_false3add61c5(
      c__3add61c5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_falsec0828b70(
      c__c0828b70: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_true274649f2(
      c__274649f2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_true305923d6(
      c__305923d6: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_true3add61c5(
      c__3add61c5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_truec0828b70(
      c__c0828b70: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    initialize(
      registry_: string,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<PopulatedTransaction>;
    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    "isValidSignature(bytes32,bytes)"(
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    "isValidSignature(bytes,bytes)"(
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    tokensReceived(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
