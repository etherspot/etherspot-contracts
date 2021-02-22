// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../AccountImplementationV1.sol";


/**
 * @title Account implementation mock (version 1)
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract AccountImplementationV1Mock is AccountImplementationV1 {
  /**
   * @dev Public constructor
   * @param registry_ account registry address
   */
  constructor(
    address registry_
  )
    public
    AccountImplementationV1()
  {
    registry = registry_;
  }
}
