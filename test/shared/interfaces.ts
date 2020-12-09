import { Signer, utils, providers } from 'ethers';

export interface SignerWithAddress extends Signer {
  address: string;

  getAddress(): Promise<string>;

  signMessage(message: string | utils.Bytes): Promise<string>;

  signTransaction(
    transaction: utils.Deferrable<providers.TransactionRequest>,
  ): Promise<string>;

  sendTransaction(
    transaction: utils.Deferrable<providers.TransactionRequest>,
  ): Promise<providers.TransactionResponse>;

  connect(provider: providers.Provider): SignerWithAddress;

  toJSON(): string;
}
