pragma solidity 0.5.15;

import "../shared/BytesLib.sol";
import "../shared/noFallback/NoFallback.sol";


/**
 * @title MetaTxRelayed
 */
contract MetaTxRelayed is NoFallback {
  using BytesLib for bytes;

  address public metaTxRelay;

  /**
   * @dev internal constructor
   */
  constructor() internal {}

  // internal functions

  function initializeMetaTxRelayed(
    address metaTxRelay_
  )
    internal
  {
    metaTxRelay = metaTxRelay_;
  }

  // internal functions (views)

  function getSender()
    internal
    view
    returns (address)
  {
    address result;

    if (msg.sender == metaTxRelay) {
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

    if (msg.sender == metaTxRelay) {
      result = msg.data.toAddress(msg.data.length - 20);
    } else {
      result = msg.sender;
    }

    return result;
  }
}
