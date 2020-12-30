// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

/**
 * @title Controlled
 *
 * @dev Contract module which provides access control mechanism, where
 * there is the controller account that can be granted exclusive access to
 * specific functions.
 *
 * The controller account will be the one that deploys the contract.
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract Controlled {
  /**
   * @return controller account address
   */
  address public controller;

  // modifiers

  /**
   * @dev Throws if msg.sender is not the controller
   */
  modifier onlyController() {
    require(
      msg.sender == controller,
      "Controlled: msg.sender is not the controller"
    );

    _;
  }

  /**
   * @dev Internal constructor
   */
  constructor()
    internal
  {
    controller = msg.sender;
  }
}
