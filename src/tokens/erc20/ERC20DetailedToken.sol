pragma solidity 0.5.15;

import "./ERC20Token.sol";


/**
 * @title ERC20DetailedToken
 */
contract ERC20DetailedToken is ERC20Token {
  string public name;
  string public symbol;
  uint8 public decimals;

  /**
   * @dev internal constructor
   */
  constructor()
    internal
  {
    //
  }
}
