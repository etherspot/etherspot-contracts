import { utils, constants } from 'ethers';

export function computeChannelHash(
  sender: string,
  recipient: string,
  token: string,
  uid: string,
) {
  return utils.solidityKeccak256(
    ['address', 'address', 'address', 'bytes32'],
    [sender, recipient, token || constants.AddressZero, uid],
  );
}
