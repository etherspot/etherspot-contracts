pragma solidity 0.5.15;

import "../shared/initializable/Initializable.sol";
import "./MetaTxRelayed.sol";


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
    address metaTxRelay
  )
    external
    onlyInitializer
  {
    initializeMetaTxRelayed(metaTxRelay);
  }

  function exampleCall1()
    external
    afterInitialization
  {
    emit ExampleCall1Sender(getSender());
  }

  function exampleCall2(
    uint256 example_
  )
    external
    afterInitialization
  {
    example = example_;

    emit ExampleCall2Sender(getSender());
  }
}
