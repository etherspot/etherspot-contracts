import { HardhatUserConfig } from 'hardhat/config';
import { NetworkNames } from './constants';

export function createConfigNetwork(
  networkName: NetworkNames,
  chainId: number,
  defaultProvider?: 'infura' | string,
  gasPrice?: number,
): HardhatUserConfig['networks'] {
  const envPrefix = networkName.replace(/([A-Z])+/, '_$1').toUpperCase();

  let url = process.env[`${envPrefix}_PROVIDER_ENDPOINT`];

  if (!url) {
    switch (defaultProvider) {
      case 'infura':
        url = `https://${networkName}.infura.io/v3/${process.env.INFURA_TOKEN}`;
        break;

      default:
        url = defaultProvider;
    }
  }

  const privateKey = process.env[`${envPrefix}_PROVIDER_PRIVATE_KEY`];
  const accounts = privateKey ? [privateKey] : [];

  return url
    ? {
        [networkName]: {
          chainId,
          url,
          accounts,
          gasPrice,
        },
      }
    : {};
}
