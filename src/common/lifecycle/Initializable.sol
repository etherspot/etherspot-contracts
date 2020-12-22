// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

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
      // solhint-disable-next-line avoid-tx-origin
      tx.origin == initializer,
      "Initializable: tx.origin is not the initializer"
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
    // solhint-disable-next-line avoid-tx-origin
    initializer = tx.origin;
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
