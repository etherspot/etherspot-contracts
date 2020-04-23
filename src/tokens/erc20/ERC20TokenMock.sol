pragma solidity 0.5.15;

import "./ERC20Token.sol";


/**
 * @title ERC20TokenMock
 */
contract ERC20TokenMock is ERC20Token {
  /**
   * @dev public constructor
   */
  constructor() public {}

  // external functions

  function mint(
    address owner,
    uint256 value
  )
    external
  {
    internallyMint(owner, value);
  }
}
