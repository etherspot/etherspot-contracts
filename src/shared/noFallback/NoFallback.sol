pragma solidity 0.5.12;


/**
 * @title NoFallback
 */
contract NoFallback {
  // external access

  function() external payable {
    revert();
  }
}
