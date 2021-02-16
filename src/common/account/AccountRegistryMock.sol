// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./AccountRegistry.sol";


/**
 * @title Account registry mock
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract AccountRegistryMock is AccountRegistry {
  function isValidAccountSignature(
    address,
    bytes32,
    bytes calldata
  )
    override
    external
    view
    returns (bool)
  {
    return true;
  }

  function isValidAccountSignature(
    address,
    bytes calldata,
    bytes calldata
  )
    override
    external
    view
    returns (bool)
  {
    return true;
  }
}
