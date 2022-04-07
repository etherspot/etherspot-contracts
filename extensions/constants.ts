export enum NetworkNames {
  Mainnet = 'mainnet',
  Ropsten = 'ropsten',
  Rinkeby = 'rinkeby',
  Goerli = 'goerli',
  Kovan = 'kovan',
  Xdai = 'xdai',
  Sokol = 'sokol',
  Bsc = 'bsc',
  BscTest = 'bscTest',
  Fantom = 'fantom',
  FantomTest = 'fantomTest',
  Matic = 'matic',
  Mumbai = 'mumbai',
  Avalanche = 'avalanche',
  Fuji = 'fuji',
  Aurora = 'aurora',
  AuroraTest = 'auroraTest',
  Optimism = "optimism",
  OptimismKovan = "optimismKovan",
  Etherspot = 'etherspot',
  LocalA = 'localA',
  LocalB = 'localB',
  LocalH = 'localH',
}

export const NETWORK_CONFIGS: {
  [key: string]: {
    chainId: number;
    defaultProviderUrl?: 'infura' | string;
    defaultGas?: number;
    defaultGasPrice?: number;
    explorer?:
      | string
      | {
          address: string;
          transaction: string;
        };
  };
} = {
  [NetworkNames.Mainnet]: {
    chainId: 1,
    defaultProviderUrl: 'infura',
    explorer: 'https://etherscan.io',
  },
  [NetworkNames.Ropsten]: {
    chainId: 3,
    defaultProviderUrl: 'infura',
    defaultGasPrice: 1,
    explorer: 'https://ropsten.etherscan.io',
  },
  [NetworkNames.Rinkeby]: {
    chainId: 4,
    defaultProviderUrl: 'infura',
    defaultGasPrice: 1,
    explorer: 'https://rinkeby.etherscan.io',
  },
  [NetworkNames.Goerli]: {
    chainId: 5,
    defaultProviderUrl: 'infura',
    defaultGasPrice: 1,
    explorer: 'https://goerli.etherscan.io',
  },
  [NetworkNames.Kovan]: {
    chainId: 42,
    defaultProviderUrl: 'infura',
    defaultGasPrice: 1,
    explorer: 'https://kovan.etherscan.io',
  },
  [NetworkNames.Xdai]: {
    chainId: 100,
    defaultProviderUrl: 'https://rpc.xdaichain.com',
    defaultGasPrice: 1,
    explorer: 'https://blockscout.com/poa/xdai',
  },
  [NetworkNames.Sokol]: {
    chainId: 77,
    defaultProviderUrl: 'https://sokol.poa.network',
    defaultGasPrice: 1,
    explorer: 'https://blockscout.com/poa/sokol',
  },
  [NetworkNames.Bsc]: {
    chainId: 56,
    defaultProviderUrl: 'https://bsc-dataseed1.binance.org',
    defaultGasPrice: 20,
    explorer: 'https://bscscan.com',
  },
  [NetworkNames.BscTest]: {
    chainId: 97,
    defaultProviderUrl: 'https://data-seed-prebsc-1-s2.binance.org:8545',
    defaultGasPrice: 20,
    explorer: 'https://testnet.bscscan.com',
  },
  [NetworkNames.Fantom]: {
    chainId: 250,
    defaultProviderUrl: 'https://rpcapi.fantom.network',
    defaultGasPrice: 22,
    explorer: 'https://ftmscan.com',
  },
  [NetworkNames.FantomTest]: {
    chainId: 4002,
    defaultProviderUrl: 'https://rpc.testnet.fantom.network',
    defaultGasPrice: 22,
    explorer: {
      address: 'https://explorer.testnet.fantom.network/address',
      transaction: 'https://explorer.testnet.fantom.network/transactions',
    },
  },
  [NetworkNames.Matic]: {
    chainId: 137,
    defaultProviderUrl: 'https://rpc-mainnet.maticvigil.com',
    explorer: 'https://polygonscan.com',
  },
  [NetworkNames.Mumbai]: {
    chainId: 80001,
    defaultProviderUrl: 'https://rpc-mumbai.maticvigil.com',
    defaultGasPrice: 5,
    explorer: 'https://mumbai.polygonscan.com',
  },
  [NetworkNames.Avalanche]: {
    chainId: 43114,
    defaultProviderUrl: 'https://api.avax.network/ext/bc/C/rpc',
    explorer: 'https://snowtrace.io',
  },
  [NetworkNames.Fuji]: {
    chainId: 43113,
    defaultProviderUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
    explorer: 'https://testnet.snowtrace.io',
    defaultGasPrice: 25,
  },
  [NetworkNames.Aurora]: {
    chainId: 1313161554,
    defaultProviderUrl: 'https://mainnet.aurora.dev',
    defaultGasPrice: 3,
  },
  [NetworkNames.AuroraTest]: {
    chainId: 1313161555,
    defaultProviderUrl: 'https://testnet.aurora.dev/',
    defaultGasPrice: 3,
  },
  [NetworkNames.Optimism] : {
    chainId: 10,
    defaultProviderUrl: 'https://mainnet.optimism.io',
    defaultGasPrice: 3,
  },
  [NetworkNames.OptimismKovan]: {
    chainId: 69,
    defaultProviderUrl: 'https://kovan.optimism.io',
    defaultGasPrice: 3,
  },
  [NetworkNames.Etherspot]: {
    chainId: 4386,
    defaultProviderUrl: 'https://qa-etherspot-testnet.pillarproject.io',
    defaultGasPrice: 20,
  },
  [NetworkNames.LocalA]: {
    chainId: 9999,
    defaultProviderUrl: 'http://localhost:8545',
    defaultGasPrice: 20,
  },
  [NetworkNames.LocalB]: {
    chainId: 6666,
    defaultProviderUrl: 'http://localhost:9545',
    defaultGasPrice: 20,
  },
};

export enum ContractNames {
  BalancesHelper = 'BalancesHelper',
  ENSController = 'ENSController',
  ENSHelper = 'ENSHelper',
  ENSRegistry = 'ENSRegistry',
  ENSReverseRegistrar = 'ENSReverseRegistrar',
  ExternalAccountRegistry = 'ExternalAccountRegistry',
  Gateway = 'Gateway',
  PaymentRegistry = 'PaymentRegistry',
  PersonalAccountImplementationV1 = 'PersonalAccountImplementationV1',
  PersonalAccountRegistry = 'PersonalAccountRegistry',
  WrappedWeiToken = 'WrappedWeiToken',
}
