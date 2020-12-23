// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

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

    if (_isGatewaySender()) {
      result = msg.data[:msg.data.length - 40];
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

    if (_isGatewaySender()) {
      uint from = msg.data.length - offset;
      result = bytes(msg.data[from:from + 20]).toAddress();
    } else {
      result = msg.sender;
    }

    return result;
  }

  function _isGatewaySender()
    private
    view
    returns (bool)
  {
    bool result;

    if (msg.sender == gateway) {
      require(
        msg.data.length >= 44,
        "GatewayRecipient: invalid msg.data"
      );

      result = true;
    }

    return result;
  }
}
