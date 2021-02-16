// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../common/account/AccountImplementation.sol";


/**
 * @title Personal account implementation
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract PersonalAccountImplementation is AccountImplementation {

  /**
   * @dev Public constructor
   */
  constructor() public AccountImplementation() {}
}
