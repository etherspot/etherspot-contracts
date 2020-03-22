pragma solidity 0.5.12;

/**
 * @title Initializable
 */
contract Initializable {
  string private constant ERR_ONLY_INITIALIZER = "reverted by onlyInitializer";

  address private initializer;

  // events

  event Initialized();

  // modifiers

  modifier onlyInitializer() {
    require(
      initializer == msg.sender,
      ERR_ONLY_INITIALIZER
    );

    initializer = address(0);

    _;

    emit Initialized();
  }

  /**
   * @dev internal constructor
   */
  constructor() internal {
    initializer = msg.sender;
  }

  // external access

  function isInitialized() external view returns (bool) {
    return initializer == address(0);
  }
}
