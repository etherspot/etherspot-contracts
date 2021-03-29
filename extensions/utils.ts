import { HardhatUserConfig } from 'hardhat/config';
import { NetworkNames, NETWORK_CONFIGS } from './constants';

export function createConfigNetwork(
  networkName: NetworkNames,
): HardhatUserConfig['networks'] {
  const {
    chainId,
    defaultGas,
    defaultGasPrice,
    defaultProviderUrl,
  } = NETWORK_CONFIGS[networkName];

  const envPrefix = networkName.replace(/([A-Z])+/, '_$1').toUpperCase();

  let url = process.env[`${envPrefix}_PROVIDER_ENDPOINT`];

  if (!url) {
    switch (defaultProviderUrl) {
      case 'infura':
        url = `https://${networkName}.infura.io/v3/${process.env.INFURA_TOKEN}`;
        break;

      default:
        url = defaultProviderUrl;
    }
  }

  let gas = parseInt(process.env[`${envPrefix}_PROVIDER_GAS`], 10) || undefined;

  if (!gas && defaultGas) {
    gas = defaultGas;
  }

  let gasPrice =
    parseInt(process.env[`${envPrefix}_PROVIDER_GAS_PRICE`], 10) || undefined;

  if (!gasPrice && defaultGasPrice) {
    gasPrice = defaultGasPrice;
  }

  if (gasPrice) {
    gasPrice *= 1000000000;
  }

  const privateKey = process.env[`${envPrefix}_PROVIDER_PRIVATE_KEY`];
  const accounts = privateKey ? [privateKey] : [];

  return url
    ? {
        [networkName]: {
          chainId,
          url,
          accounts,
          gas,
          gasPrice,
        },
      }
    : {};
}

export function createConfigNetworks(): HardhatUserConfig['networks'] {
  return Object.values(NetworkNames).reduce(
    (result, networkName) => ({
      ...result,
      ...createConfigNetwork(networkName),
    }),
    {},
  );
}
