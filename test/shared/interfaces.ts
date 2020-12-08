import { Signer } from 'ethers';

export interface SignerWithAddress extends Signer {
  address: string;
}
