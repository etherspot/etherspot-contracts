// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./Account.sol";


/**
 * @title AccountController
 */
contract AccountController {
  /**
   * @dev internal constructor
   */
  constructor() internal {}

  // internal functions

  function _deployAccount(
    bytes32 salt
  )
    internal
    returns (address)
  {
    return _deployAccount(
      salt,
      0
    );
  }

  function _deployAccount(
    bytes32 salt,
    uint256 value
  )
    internal
    returns (address)
  {
    return address(new Account{salt: salt, value: value}());
  }

  function _executeAccountTransaction(
    address account,
    address to,
    uint256 value,
    bytes memory data
  )
    internal
  {
    require(
      to != address(0)
    );

    require(
      to != address(this)
    );

    require(
      to != account
    );

    Account(payable(account)).executeTransaction(
      to,
      value,
      data
    );
  }

  // internal functions (views)

  function _computeAccountAddress(
    bytes32 salt
  )
    internal
    view
    returns (address)
  {
    bytes memory creationCode = type(Account).creationCode;

    bytes32 data = keccak256(
      abi.encodePacked(
        bytes1(0xff),
        address(this),
        salt,
        keccak256(creationCode)
      )
    );

    return address(uint160(uint256(data)));
  }
}
