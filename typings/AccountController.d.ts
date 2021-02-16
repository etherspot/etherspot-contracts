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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface AccountControllerInterface extends ethers.utils.Interface {
  functions: {
    "accountImplementation()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accountImplementation",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "accountImplementation",
    data: BytesLike
  ): Result;

  events: {};
}

export class AccountController extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AccountControllerInterface;

  functions: {
    accountImplementation(overrides?: CallOverrides): Promise<[string]>;

    "accountImplementation()"(overrides?: CallOverrides): Promise<[string]>;
  };

  accountImplementation(overrides?: CallOverrides): Promise<string>;

  "accountImplementation()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    accountImplementation(overrides?: CallOverrides): Promise<string>;

    "accountImplementation()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    accountImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    "accountImplementation()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accountImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "accountImplementation()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
