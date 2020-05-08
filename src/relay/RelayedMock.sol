pragma solidity 0.5.15;

import "../shared/initializable/Initializable.sol";
import "./Relayed.sol";


/**
 * @title RelayedMock
 */
contract RelayedMock is Initializable, Relayed {
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
    address relay_
  )
    external
    onlyInitializer
  {
    initializeRelayed(relay_);
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
