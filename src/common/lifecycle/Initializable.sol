pragma solidity 0.5.15;

/**
 * @title Initializable
 */
contract Initializable {
  address private initializer;

  // events

  event Initialized();

  // modifiers

  modifier onlyInitializer() {
    require(
      msg.sender == initializer
    );

    initializer = address(0);

    _;

    emit Initialized();
  }

  /**
   * @dev internal constructor
   */
  constructor()
    internal
  {
    initializer = msg.sender;
  }

   // external functions (views)

  function isInitialized()
    external
    view
    returns (bool)
  {
    return initializer == address(0);
  }
}
