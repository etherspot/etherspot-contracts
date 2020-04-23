pragma solidity 0.5.15;

/**
 * @title NoFallback
 */
contract NoFallback {
  /**
   * @dev internal constructor
   */
  constructor()
    internal
  {
    //
  }

  /**
   * @dev fallback
   */
  function()
    external
    payable
  {
    revert();
  }
}
