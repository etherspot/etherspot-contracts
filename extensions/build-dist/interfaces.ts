export interface ContractsMD {
  [key: string]: {
    address: string;
    network: {
      name: string;
      chainId: string;
    };
    transaction: {
      hash: string;
      url: string;
    };
  }[];
}
