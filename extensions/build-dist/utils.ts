import { NetworkNames } from '../constants';

export function getScanUrl(
  network: string,
  item: string,
  type: 'Transaction' | 'Address',
): string {
  let result: string = null;

  switch (network) {
    case NetworkNames.Mainnet:
      result = 'https://etherscan.io';
      break;

    case NetworkNames.Ropsten:
    case NetworkNames.Rinkeby:
    case NetworkNames.Goerli:
    case NetworkNames.Kovan:
      result = `https://${network}.etherscan.io`;
      break;
    case NetworkNames.Xdai:
      result = 'https://blockscout.com/poa/xdai';
      break;
    case NetworkNames.Sokol:
      result = 'https://blockscout.com/poa/sokol';
      break;
    case NetworkNames.Bsc:
      result = 'https://bscscan.com';
      break;
    case NetworkNames.BscTest:
      result = 'https://testnet.bscscan.com';
      break;
  }

  if (result) {
    switch (type) {
      case 'Address':
        result = `${result}/address/${item}`;
        break;

      case 'Transaction':
        result = `${result}/tx/${item}`;
        break;
    }
  }

  return result;
}
