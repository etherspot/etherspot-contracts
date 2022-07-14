import "dotenv/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-web3";
import "@typechain/hardhat";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "hardhat-gas-reporter";
import "solidity-coverage";
import { HardhatUserConfig } from "hardhat/config";
import { utils } from "ethers";
import {
  NetworkNames,
  ContractNames,
  createConfigNetworks,
  NETWORK_CONFIGS,
} from "./extensions";

const { HARDHAT_MNEMONIC, ETHERSCAN_API_KEY } = process.env;

const config: HardhatUserConfig = {
  namedAccounts: {
    from: 0,
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic:
          HARDHAT_MNEMONIC ||
          "test test test test test test test test test test test junk",
        count: 20,
      },
      chainId: 3333,
      gasPrice: 100 * 1000000000,
    },
    ...createConfigNetworks(),
  },
  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: {
          evmVersion: "istanbul",
          metadata: {
            bytecodeHash: "none",
          },
        },
      },
      {
        version: "0.8.4",
        settings: {
          evmVersion: "istanbul",
          metadata: {
            bytecodeHash: "none",
          },
        },
      },
      {
        version: "0.8.11",
        settings: {
          evmVersion: "istanbul",
          metadata: {
            bytecodeHash: "none",
          },
        },
      },
    ],
  },
  paths: {
    sources: "src",
    cache: ".hardhat/cache",
    artifacts: ".hardhat/artifacts",
    deploy: "deploy",
    deployments: "deployments",
  },
  buildPaths: {
    artifacts: "artifacts",
    dist: "dist",
  },
  typechain: {
    outDir: "typings",
    target: "ethers-v5",
  },
  deterministicDeployment: {
    [NETWORK_CONFIGS[NetworkNames.Fuji].chainId]: {
      factory: "0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7",
      deployer: "0xE1CB04A0fA36DdD16a06ea828007E35e1a3cBC37",
      funding: "10000000000000000",
      signedTx:
        "0xf8a88085174876e800830186a08080b853604580600e600039806000f350fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf3830150f6a032b2a806bfc34024c6638848c3798213261304af82de14002ca2b4961a643b95a03c74c13eda5ff6b9b821fbccd1a67f160eb6a0ca50dad04b7a3e564e2599722e",
    },
    [NETWORK_CONFIGS[NetworkNames.Avalanche].chainId]: {
      factory: "0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7",
      deployer: "0xE1CB04A0fA36DdD16a06ea828007E35e1a3cBC37",
      funding: "10000000000000000",
      signedTx:
        "0xf8a88085174876e800830186a08080b853604580600e600039806000f350fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf3830150f8a0d69f418f6da8f01fb95d6d87e1f2eabd85884784cd2ba2d306ba066d41b7c5e6a05a2b76982a148ca8ca2803ceac3d39a3f26208b654c473b17b01e7536eeba55e",
    },
  },
  gasReporter: {
    enabled: false,
  },
  ens: {
    internalTopLevelDomains: ["pillar", "etherspot", "dank"],
  },
  knownContracts: {
    [NetworkNames.Mainnet]: {
      [ContractNames.ENSRegistry]: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    },
  },
  create2Salts: {
    default: utils.id("ETHERspot"),
    [ContractNames.ENSHelper]: utils.id("ETHERspot@1.2.0"),
    [ContractNames.ENSRegistry]: utils.id("ETHERspot@1.2.0"),
    [ContractNames.ENSReverseRegistrar]: utils.id("ETHERspot@1.2.0"),
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

module.exports = config;
