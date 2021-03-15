// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../libs/ECDSALib.sol";

/**
 * @title Signature validator
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract SignatureValidator {
  using ECDSALib for bytes32;

  uint256 public chainId;

  /**
   * @dev internal constructor
   */
  constructor() internal {
    uint256 chainId_;

    // solhint-disable-next-line no-inline-assembly
    assembly {
      chainId_ := chainid()
    }

    chainId = chainId_;
  }

  // internal functions

  function _hashMessagePayload(
    bytes32 messagePrefix,
    bytes memory messagePayload
  )
    internal
    view
    returns (bytes32)
  {
    return keccak256(abi.encodePacked(
      chainId,
      address(this),
      messagePrefix,
      messagePayload
    )).toEthereumSignedMessageHash();
  }
}
