// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./GatewayRecipient.sol";


/**
 * @title GatewayRecipientMock
 */
contract GatewayRecipientMock is GatewayRecipient {
  // events

  event Context(
    address account,
    address sender
  );

  /**
   * @dev public constructor
   */
  constructor(address gateway_) public {
    _initializeGatewayRecipient(gateway_);
  }

  function emitContext()
    external
  {
    emit Context(
      _getContextAccount(),
      _getContextSender()
    );
  }
}
