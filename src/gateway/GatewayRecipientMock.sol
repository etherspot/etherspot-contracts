// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./GatewayRecipient.sol";


/**
 * @title Gateway recipient mock
 *
 * @dev Used in `GatewayRecipient` contract tests
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract GatewayRecipientMock is GatewayRecipient {
  // events

  event Context(
    address account,
    address sender,
    bytes data
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
      _getContextSender(),
      _getContextData()
    );
  }
}
