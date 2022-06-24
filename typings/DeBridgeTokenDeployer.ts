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

export type OverridedTokenInfoStruct = {
  accept: boolean;
  name: string;
  symbol: string;
};

export type OverridedTokenInfoStructOutput = [boolean, string, string] & {
  accept: boolean;
  name: string;
  symbol: string;
};

export interface DeBridgeTokenDeployerInterface extends utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "deBridgeTokenAdmin()": FunctionFragment;
    "debridgeAddress()": FunctionFragment;
    "deployAsset(bytes32,string,string,uint8)": FunctionFragment;
    "getDeployedAssetAddress(bytes32)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "implementation()": FunctionFragment;
    "initialize(address,address,address)": FunctionFragment;
    "overridedTokens(bytes32)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setDeBridgeTokenAdmin(address)": FunctionFragment;
    "setDebridgeAddress(address)": FunctionFragment;
    "setOverridedTokenInfo(bytes32[],(bool,string,string)[])": FunctionFragment;
    "setTokenImplementation(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "tokenImplementation()": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deBridgeTokenAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "debridgeAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployAsset",
    values: [BytesLike, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeployedAssetAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "overridedTokens",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setDeBridgeTokenAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setDebridgeAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setOverridedTokenInfo",
    values: [BytesLike[], OverridedTokenInfoStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenImplementation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deBridgeTokenAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "debridgeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDeployedAssetAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "overridedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDeBridgeTokenAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDebridgeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOverridedTokenInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "DeBridgeTokenDeployed(address,string,string,uint8)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeBridgeTokenDeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export type DeBridgeTokenDeployedEvent = TypedEvent<
  [string, string, string, number],
  { asset: string; name: string; symbol: string; decimals: number }
>;

export type DeBridgeTokenDeployedEventFilter =
  TypedEventFilter<DeBridgeTokenDeployedEvent>;

export type InitializedEvent = TypedEvent<[number], { version: number }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  { role: string; previousAdminRole: string; newAdminRole: string }
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface DeBridgeTokenDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DeBridgeTokenDeployerInterface;

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
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    deBridgeTokenAdmin(overrides?: CallOverrides): Promise<[string]>;

    debridgeAddress(overrides?: CallOverrides): Promise<[string]>;

    deployAsset(
      _debridgeId: BytesLike,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getDeployedAssetAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _tokenImplementation: string,
      _deBridgeTokenAdmin: string,
      _debridgeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    overridedTokens(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, string] & {
        accept: boolean;
        name: string;
        symbol: string;
      }
    >;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDeBridgeTokenAdmin(
      _deBridgeTokenAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDebridgeAddress(
      _debridgeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOverridedTokenInfo(
      _debridgeIds: BytesLike[],
      _tokens: OverridedTokenInfoStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTokenImplementation(
      _impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tokenImplementation(overrides?: CallOverrides): Promise<[string]>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  deBridgeTokenAdmin(overrides?: CallOverrides): Promise<string>;

  debridgeAddress(overrides?: CallOverrides): Promise<string>;

  deployAsset(
    _debridgeId: BytesLike,
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getDeployedAssetAddress(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  implementation(overrides?: CallOverrides): Promise<string>;

  initialize(
    _tokenImplementation: string,
    _deBridgeTokenAdmin: string,
    _debridgeAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  overridedTokens(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, string] & {
      accept: boolean;
      name: string;
      symbol: string;
    }
  >;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDeBridgeTokenAdmin(
    _deBridgeTokenAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDebridgeAddress(
    _debridgeAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOverridedTokenInfo(
    _debridgeIds: BytesLike[],
    _tokens: OverridedTokenInfoStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTokenImplementation(
    _impl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tokenImplementation(overrides?: CallOverrides): Promise<string>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    deBridgeTokenAdmin(overrides?: CallOverrides): Promise<string>;

    debridgeAddress(overrides?: CallOverrides): Promise<string>;

    deployAsset(
      _debridgeId: BytesLike,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getDeployedAssetAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    implementation(overrides?: CallOverrides): Promise<string>;

    initialize(
      _tokenImplementation: string,
      _deBridgeTokenAdmin: string,
      _debridgeAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    overridedTokens(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, string] & {
        accept: boolean;
        name: string;
        symbol: string;
      }
    >;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setDeBridgeTokenAdmin(
      _deBridgeTokenAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setDebridgeAddress(
      _debridgeAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOverridedTokenInfo(
      _debridgeIds: BytesLike[],
      _tokens: OverridedTokenInfoStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenImplementation(
      _impl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokenImplementation(overrides?: CallOverrides): Promise<string>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "DeBridgeTokenDeployed(address,string,string,uint8)"(
      asset?: null,
      name?: null,
      symbol?: null,
      decimals?: null
    ): DeBridgeTokenDeployedEventFilter;
    DeBridgeTokenDeployed(
      asset?: null,
      name?: null,
      symbol?: null,
      decimals?: null
    ): DeBridgeTokenDeployedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    deBridgeTokenAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    debridgeAddress(overrides?: CallOverrides): Promise<BigNumber>;

    deployAsset(
      _debridgeId: BytesLike,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getDeployedAssetAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _tokenImplementation: string,
      _deBridgeTokenAdmin: string,
      _debridgeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    overridedTokens(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDeBridgeTokenAdmin(
      _deBridgeTokenAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDebridgeAddress(
      _debridgeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOverridedTokenInfo(
      _debridgeIds: BytesLike[],
      _tokens: OverridedTokenInfoStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTokenImplementation(
      _impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deBridgeTokenAdmin(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    debridgeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deployAsset(
      _debridgeId: BytesLike,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getDeployedAssetAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _tokenImplementation: string,
      _deBridgeTokenAdmin: string,
      _debridgeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    overridedTokens(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDeBridgeTokenAdmin(
      _deBridgeTokenAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDebridgeAddress(
      _debridgeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOverridedTokenInfo(
      _debridgeIds: BytesLike[],
      _tokens: OverridedTokenInfoStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTokenImplementation(
      _impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
