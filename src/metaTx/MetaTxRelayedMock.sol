pragma solidity 0.5.12;

import {Initializable} from "../shared/initializable/Initializable.sol";
import {MetaTxRelayed} from "./MetaTxRelayed.sol";


/**
 * @title MetaTxRelayedMock
 */
contract MetaTxRelayedMock is Initializable, MetaTxRelayed {
  uint256 private example;

  // events

  event ExampleCall1Sender(
    address sender
  );

  event ExampleCall2Sender(
    address sender
  );

  /**
   * @dev public constructor
   */
  constructor() public Initializable() {}

  // external access

  function initialize(
    address _metaTxRelay
  ) external onlyInitializer {
    _initializeMetaTxRelayed(_metaTxRelay);
  }

  function exampleCall1() external {
    emit ExampleCall1Sender(_getSender());
  }

  function exampleCall2(
    uint256 _example
  ) external {
    example = _example;

    emit ExampleCall2Sender(_getSender());
  }
}
