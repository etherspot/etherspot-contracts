pragma solidity 0.5.15;

/**
 * @title Initializable
 */
contract Initializable {
  bool public initialized;

  address private initializer;

  // events

  event Initialized();

  // modifiers

  modifier onlyInitializer() {
    require(
      initializer == msg.sender
    );

    initializer = address(0);

    _;

    initialized = true;

    emit Initialized();
  }

  modifier afterInitialization() {
    require(
      initialized
    );

    _;
  }

  /**
   * @dev internal constructor
   */
  constructor()
    internal
  {
    initializer = msg.sender;
  }
}
