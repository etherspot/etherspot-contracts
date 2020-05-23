pragma solidity 0.5.15;

/**
 * @title Controlled
 */
contract Controlled {
  address public controller;

  // modifiers

  modifier onlyController() {
    require(
      msg.sender == controller
    );

    _;
  }

  /**
   * @dev internal constructor
   */
  constructor()
    internal
  {
    controller = msg.sender;
  }
}
