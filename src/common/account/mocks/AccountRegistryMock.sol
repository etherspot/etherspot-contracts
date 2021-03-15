// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../../libs/ECDSALib.sol";
import "../../libs/ECDSAExtendedLib.sol";
import "../AccountRegistry.sol";


/**
 * @title Account registry mock
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract AccountRegistryMock is AccountRegistry {
  using ECDSALib for bytes32;
  using ECDSAExtendedLib for bytes;

  mapping(address => mapping(address => bool)) private mockedAccountsOwners;

  // external functions

  function mockAccountOwners(
    address account,
    address[] memory owners
  )
    external
  {
    uint ownersLen = owners.length;
    for (uint i = 0; i < ownersLen; i++) {
      mockedAccountsOwners[account][owners[i]] = true;
    }
  }

  // external functions (views)

  function isValidAccountSignature(
    address account,
    bytes32 messageHash,
    bytes calldata signature
  )
    override
    external
    view
    returns (bool)
  {
    address recovered = messageHash.recoverAddress(signature);

    return mockedAccountsOwners[account][recovered];
  }

  function isValidAccountSignature(
    address account,
    bytes calldata message,
    bytes calldata signature
  )
    override
    external
    view
    returns (bool)
  {
    address recovered = message.toEthereumSignedMessageHash().recoverAddress(signature);

    return mockedAccountsOwners[account][recovered];
  }
}
