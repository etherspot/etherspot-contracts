// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "../common/libs/BytesLib.sol";


/**
 * @title GatewayRecipient
 */
contract GatewayRecipient {
  using BytesLib for bytes;

  address public gateway;

  /**
   * @dev internal constructor
   */
  constructor() internal {}

  // internal functions

  function _initializeGatewayRecipient(
    address gateway_
  )
    internal
  {
    gateway = gateway_;
  }

  // internal functions (views)

  function _getContextAccount()
    internal
    view
    returns (address)
  {
    return _getContextAddress(40);
  }

  function _getContextSender()
    internal
    view
    returns (address)
  {
    return _getContextAddress(20);
  }

  function _getContextData()
    internal
    view
    returns (bytes calldata)
  {
    bytes calldata result;

    if (msg.sender == gateway) {
      result = msg.data[:40];
    } else {
      result = msg.data;
    }

    return result;
  }

  // private functions (views)

  function _getContextAddress(
    uint256 offset
  )
    private
    view
    returns (address)
  {
    address result = address(0);

    if (msg.sender == gateway) {
      result = msg.data.toAddress(msg.data.length - offset);
    }

    if (result == address(0)) {
      result = msg.sender;
    }

    return result;
  }
}
