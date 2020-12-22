// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

/**
 * @title Controlled
 */
contract Controlled {
  address public controller;

  // modifiers

  modifier onlyController() {
    require(
      msg.sender == controller,
      "Controlled: msg.sender is not the controller"
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
