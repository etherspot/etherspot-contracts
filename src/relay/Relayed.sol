pragma solidity 0.5.15;

import "../shared/BytesLib.sol";


/**
 * @title Relayed
 */
contract Relayed {
  using BytesLib for bytes;

  address public relay;

  /**
   * @dev internal constructor
   */
  constructor() internal {}

  // internal functions

  function initializeRelayed(
    address relay_
  )
    internal
  {
    relay = relay_;
  }

  // internal functions (views)

  function getSender()
    internal
    view
    returns (address)
  {
    address result;

    if (msg.sender == relay) {
      result = msg.data.toAddress(msg.data.length - 40);
    } else {
      result = msg.sender;
    }

    return result;
  }

  function getOriginalSenders()
    internal
    view
    returns (address)
  {
    address result;

    if (msg.sender == relay) {
      result = msg.data.toAddress(msg.data.length - 20);
    } else {
      result = msg.sender;
    }

    return result;
  }
}
