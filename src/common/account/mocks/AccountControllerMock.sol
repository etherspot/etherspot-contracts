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

  // external functions

  /**
   * @notice Sets account registry
   * @param accountRegistry_ account registry address
   */
  function setAccountRegistry(
    address accountRegistry_
  )
    external
  {
    _setAccountRegistry(accountRegistry_, true);
  }

  /**
   * @notice Sets account implementation
   * @param accountImplementation_ account implementation address
   */
  function setAccountImplementation(
    address accountImplementation_
  )
    external
  {
    _setAccountImplementation(accountImplementation_, true);
  }

  /**
   * @notice Deploys account
   * @param salt CREATE2 salt
   */
  function deployAccount(
    bytes32 salt
  )
    external
  {
    _deployAccount(salt, true);
  }

  /**
   * @notice Upgrades account
   * @param account account address
   */
  function upgradeAccount(
    address account
  )
    external
  {
    _upgradeAccount(account, true);
  }

  /**
   * @notice Executes transaction from the account
   * @param account account address
   * @param to to address
   * @param value value
   * @param data data
   */
  function executeAccountTransaction(
    address account,
    address to,
    uint256 value,
    bytes memory data
  )
    external
  {
    _executeAccountTransaction(account, to, value, data, true);
  }

  // external functions (views)

  /**
   * @notice Computes account CREATE2 address
   * @param salt CREATE2 salt
   * @return account address
   */
  function computeAccountAddress(
    bytes32 salt
  )
    external
    view
    returns (address)
  {
    return _computeAccountAddress(salt);
  }
}
