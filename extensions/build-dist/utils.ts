import { NETWORK_CONFIGS } from '../constants';

export function getScanUrl(
  network: string,
  item: string,
  type: 'transaction' | 'address',
): string {
  const { explorer } = NETWORK_CONFIGS[network];

  let result: string = null;

  if (explorer) {
    let address: string;
    let transaction: string;

    switch (typeof explorer) {
      case 'string':
        address = `${explorer}/address`;
        transaction = `${explorer}/tx`;
        break;

      case 'object':
        ({ address, transaction } = explorer);
        break;
    }

    switch (type) {
      case 'address':
        result = `${address}/${item}`;
        break;
      case 'transaction':
        result = `${transaction}/${item}`;
        break;
    }
  }

  return result;
}
