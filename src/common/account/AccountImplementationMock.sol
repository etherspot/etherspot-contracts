// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./AccountImplementation.sol";


/**
 * @title Account implementation mock
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract AccountImplementationMock is AccountImplementation {

  /**
   * @dev Public constructor
   */
  constructor() public AccountImplementation() {}
}