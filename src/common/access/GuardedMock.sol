// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./Guarded.sol";


/**
 * @title Guarded mock
 *
 * @dev Used in `Guarded` contract tests
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract GuardedMock is Guarded {
  /**
   * @dev Public constructor
   * @param guardians_ array of guardians addresses
   */
  constructor(
    address[] memory guardians_
  )
    public
  {
    _initializeGuarded(guardians_);
  }
}
