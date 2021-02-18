// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../AccountController.sol";


/**
 * @title Account controller mock
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract AccountControllerMock is AccountController {
  /**
   * @dev Public constructor
   * @param accountRegistry_ account registry address
   * @param accountImplementation_ account implementation address
   */
  constructor(
    address accountRegistry_,
    address accountImplementation_
  )
    public
    AccountController()
  {
    _initializeAccountController(accountRegistry_, accountImplementation_);
  }
}
