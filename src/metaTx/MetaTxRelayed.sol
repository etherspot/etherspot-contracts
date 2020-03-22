pragma solidity 0.5.12;

import {NoFallback} from "../shared/noFallback/NoFallback.sol";
import {BytesLib} from "../shared/BytesLib.sol";


/**
 * @title MetaTxRelayed
 */
contract MetaTxRelayed is NoFallback {
  using BytesLib for bytes;

  address public metaTxRelay;

  /**
   * @dev public constructor
   */
  constructor() public {}

  // internal access

  function _initializeMetaTxRelayed(
    address _metaTxRelay
  ) internal {
    metaTxRelay = _metaTxRelay;
  }

  function _getSender() internal view returns (address _result) {
    if (msg.sender == metaTxRelay) {
      _result = msg.data.toAddress(msg.data.length - 20);
    } else {
      _result = msg.sender;
    }

    return _result;
  }
}
