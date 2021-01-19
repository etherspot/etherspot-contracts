import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import { HardhatUserConfig } from 'hardhat/config';
import { utils } from 'ethers';
import { NetworkNames, ContractNames, createConfigNetwork } from './extensions';

const { HARDHAT_MNEMONIC } = process.env;

const config: HardhatUserConfig = {
  namedAccounts: {
    from: 0,
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic:
          HARDHAT_MNEMONIC ||
          'test test test test test test test test test test test junk',
        count: 256,
      },
      chainId: 192,
      gasPrice: 20000000000,
    },
    ...createConfigNetwork(NetworkNames.Mainnet, 1, 'infura'),
    ...createConfigNetwork(NetworkNames.Ropsten, 3, 'infura'),
    ...createConfigNetwork(NetworkNames.Rinkeby, 4, 'infura'),
    ...createConfigNetwork(NetworkNames.Goerli, 5, 'infura'),
    ...createConfigNetwork(NetworkNames.Kovan, 42, 'infura'),
    ...createConfigNetwork(NetworkNames.Xdai, 100, 'https://rpc.xdaichain.com'),
    ...createConfigNetwork(NetworkNames.Sokol, 77, 'https://sokol.poa.network'),
    ...createConfigNetwork(
      NetworkNames.Bsc,
      56,
      'https://bsc-dataseed1.binance.org',
    ),
    ...createConfigNetwork(
      NetworkNames.BscTest,
      97,
      'https://data-seed-prebsc-1-s1.binance.org:8545',
    ),
    ...createConfigNetwork(
      NetworkNames.LocalA,
      9999,
      'http://localhost:8545',
      20000000000,
    ),
    ...createConfigNetwork(
      NetworkNames.LocalB,
      6666,
      'http://localhost:9545',
      20000000000,
    ),
  },
  solidity: {
    version: '0.6.12',
    settings: {
      evmVersion: 'istanbul',
      metadata: {
        bytecodeHash: 'none',
      },
    },
  },
  paths: {
    sources: 'src',
    cache: '.hardhat/cache',
    artifacts: '.hardhat/artifacts',
    deploy: 'deploy',
    deployments: 'deployments',
  },
  buildPaths: {
    artifacts: 'artifacts',
    dist: 'dist',
    typings: 'typings',
  },
  gasReporter: {
    enabled: false,
  },
  ens: {
    internalTopLevelDomains: ['pillar', 'etherspot'],
  },
  knownContracts: {
    [NetworkNames.Mainnet]: {
      [ContractNames.ENSRegistry]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
  },
  typedData: {
    domains: {
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
    },
    domainSalt: utils.id('ETHERspot'),
  },
  create2Salts: {
    [ContractNames.ENSController]: utils.id('1.0.0'),
    [ContractNames.ENSRegistry]: utils.id('1.0.0'),
    [ContractNames.ExternalAccountRegistry]: utils.id('1.0.0'),
    [ContractNames.PaymentRegistry]: utils.id('1.0.0'),
    [ContractNames.PersonalAccountRegistry]: utils.id('1.0.0'),
    [ContractNames.Utils]: utils.id('1.0.0'),
    [ContractNames.WrappedWeiToken]: utils.id('1.0.0'),
  },
};

module.exports = config;
