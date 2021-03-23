import { NetworkNames } from '../constants';

export function getScanUrl(
  network: string,
  item: string,
  type: 'Transaction' | 'Address',
): string {
  let result: string = null;

  let transactionPath = 'tx';

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
    case NetworkNames.Fantom:
      result = 'https://ftmscan.com';
      break;
    case NetworkNames.FantomTest:
      result = 'https://explorer.testnet.fantom.network';
      transactionPath = 'transactions';
      break;
    case NetworkNames.Matic:
      result = 'https://explorer-mainnet.maticvigil.com';
      break;
    case NetworkNames.Mumbai:
      result = 'https://explorer-mumbai.maticvigil.com';
      break;
  }

  if (result) {
    item = item.toLowerCase();

    switch (type) {
      case 'Address':
        result = `${result}/address/${item}`;
        break;

      case 'Transaction':
        result = `${result}/${transactionPath}/${item}`;
        break;
    }
  }

  return result;
}
