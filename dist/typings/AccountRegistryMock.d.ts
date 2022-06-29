import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AccountRegistryMockInterface extends utils.Interface {
  functions: {
    "c_203cf0ac(bytes8)": FunctionFragment;
    "c_5dbd0fc3(bytes8)": FunctionFragment;
    "c_false203cf0ac(bytes8)": FunctionFragment;
    "c_false5dbd0fc3(bytes8)": FunctionFragment;
    "c_true203cf0ac(bytes8)": FunctionFragment;
    "c_true5dbd0fc3(bytes8)": FunctionFragment;
    "isValidAccountSignature(address,bytes,bytes)": FunctionFragment;
    "mockAccountOwners(address,address[])": FunctionFragment;
  };
  encodeFunctionData(
    functionFragment: "c_203cf0ac",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_5dbd0fc3",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_false203cf0ac",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_false5dbd0fc3",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_true203cf0ac",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "c_true5dbd0fc3",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "isValidAccountSignature",
    values: [string, BytesLike, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "mockAccountOwners",
    values: [string, string[]],
  ): string;
  decodeFunctionResult(functionFragment: "c_203cf0ac", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "c_5dbd0fc3", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_false203cf0ac",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_false5dbd0fc3",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_true203cf0ac",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_true5dbd0fc3",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidAccountSignature",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockAccountOwners",
    data: BytesLike,
  ): Result;
  events: {};
}
export interface AccountRegistryMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;
  interface: AccountRegistryMockInterface;
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
    c_203cf0ac(
      c__203cf0ac: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[void]>;
    c_5dbd0fc3(
      c__5dbd0fc3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[void]>;
    c_false203cf0ac(
      c__203cf0ac: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_false5dbd0fc3(
      c__5dbd0fc3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_true203cf0ac(
      c__203cf0ac: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    c_true5dbd0fc3(
      c__5dbd0fc3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    "isValidAccountSignature(address,bytes,bytes)"(
      account: string,
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    "isValidAccountSignature(address,bytes32,bytes)"(
      account: string,
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
    mockAccountOwners(
      account: string,
      owners: string[],
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<ContractTransaction>;
  };
  c_203cf0ac(c__203cf0ac: BytesLike, overrides?: CallOverrides): Promise<void>;
  c_5dbd0fc3(c__5dbd0fc3: BytesLike, overrides?: CallOverrides): Promise<void>;
  c_false203cf0ac(
    c__203cf0ac: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_false5dbd0fc3(
    c__5dbd0fc3: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_true203cf0ac(
    c__203cf0ac: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  c_true5dbd0fc3(
    c__5dbd0fc3: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  "isValidAccountSignature(address,bytes,bytes)"(
    account: string,
    message: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  "isValidAccountSignature(address,bytes32,bytes)"(
    account: string,
    messageHash: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;
  mockAccountOwners(
    account: string,
    owners: string[],
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<ContractTransaction>;
  callStatic: {
    c_203cf0ac(
      c__203cf0ac: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
    c_5dbd0fc3(
      c__5dbd0fc3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
    c_false203cf0ac(
      c__203cf0ac: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_false5dbd0fc3(
      c__5dbd0fc3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_true203cf0ac(
      c__203cf0ac: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    c_true5dbd0fc3(
      c__5dbd0fc3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    "isValidAccountSignature(address,bytes,bytes)"(
      account: string,
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    "isValidAccountSignature(address,bytes32,bytes)"(
      account: string,
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    mockAccountOwners(
      account: string,
      owners: string[],
      overrides?: CallOverrides,
    ): Promise<void>;
  };
  filters: {};
  estimateGas: {
    c_203cf0ac(
      c__203cf0ac: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_5dbd0fc3(
      c__5dbd0fc3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_false203cf0ac(
      c__203cf0ac: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_false5dbd0fc3(
      c__5dbd0fc3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_true203cf0ac(
      c__203cf0ac: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    c_true5dbd0fc3(
      c__5dbd0fc3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    "isValidAccountSignature(address,bytes,bytes)"(
      account: string,
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    "isValidAccountSignature(address,bytes32,bytes)"(
      account: string,
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    mockAccountOwners(
      account: string,
      owners: string[],
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<BigNumber>;
  };
  populateTransaction: {
    c_203cf0ac(
      c__203cf0ac: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_5dbd0fc3(
      c__5dbd0fc3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_false203cf0ac(
      c__203cf0ac: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_false5dbd0fc3(
      c__5dbd0fc3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_true203cf0ac(
      c__203cf0ac: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    c_true5dbd0fc3(
      c__5dbd0fc3: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    "isValidAccountSignature(address,bytes,bytes)"(
      account: string,
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    "isValidAccountSignature(address,bytes32,bytes)"(
      account: string,
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    mockAccountOwners(
      account: string,
      owners: string[],
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<PopulatedTransaction>;
  };
}
