// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./Guarded.sol";


/**
 * @title GuardedMock
 */
contract GuardedMock is Guarded {
  /**
   * @dev public constructor
   */
  constructor(
    address[] memory guardians_
  )
    public
  {
    _initializeGuarded(guardians_);
  }
}
