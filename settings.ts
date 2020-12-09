import { utils } from 'ethers';

export const CHAIN_ID = 9999;
export const GAS_PRICE = 20000000000;

export const NETWORKS: {
  [key: string]: {
    chainId: number;
    defaultProvider?: 'infura' | string;
  };
} = {
  mainnet: {
    chainId: 1,
    defaultProvider: 'infura',
  },
  ropsten: {
    chainId: 3,
    defaultProvider: 'infura',
  },
  rinkeby: {
    chainId: 4,
    defaultProvider: 'infura',
  },
  goerli: {
    chainId: 5,
    defaultProvider: 'infura',
  },
  kovan: {
    chainId: 42,
    defaultProvider: 'infura',
  },
  xdai: {
    chainId: 100,
    defaultProvider: 'https://dai.poa.network',
  },
  sokol: {
    chainId: 77,
    defaultProvider: 'https://sokol.poa.network',
  },
  bsc: {
    chainId: 56,
    defaultProvider: 'https://bsc-dataseed1.binance.org',
  },
  bscTest: {
    chainId: 97,
    defaultProvider: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  },
  localA: {
    chainId: 9999,
    defaultProvider: 'http://localhost:8545',
  },
  localB: {
    chainId: 6666,
    defaultProvider: 'http://localhost:9545',
  },
};

export const TYPED_DATA_DOMAINS = {
  Gateway: {
    name: 'ETHERspot Gateway',
    version: '1',
  },
  ENSController: {
    name: 'ETHERspot ENS Controller',
    version: '1',
  },
  PaymentRegistry: {
    name: 'ETHERspot Payment Network',
    version: '1',
  },
};

export const TYPED_DATA_DOMAIN_SALT = utils.id('ETHERspot');

export const KNOWN_CONTRACT_ADDRESSES = {
  ENSRegistry: {
    mainnet: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  },
};

export const ENS_TLD = ['pillar', 'etherspot'];
