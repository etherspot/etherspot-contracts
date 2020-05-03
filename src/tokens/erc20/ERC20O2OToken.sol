pragma solidity 0.5.15;

import "./ERC20DetailedToken.sol";


/**
 * @title ERC20O2OToken
 */
contract ERC20O2OToken is ERC20DetailedToken {
  /**
   * @dev public constructor
   */
  constructor() public {
    name = "One to One";
    symbol = "O2O";
    decimals = 18;
  }

  /**
   * @dev fallback
   */
  function()
    external
    payable
  {
    internallyMint(msg.sender, msg.value);
  }

  // external functions

  function withdraw()
    external
  {
    require(
      balances[msg.sender] > 0
    );

    internallyBurn(msg.sender, balances[msg.sender]);
  }
}
