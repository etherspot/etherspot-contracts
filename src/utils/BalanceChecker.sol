pragma solidity 0.5.15;

import "../common/token/ERC20Token.sol";
import "../common/libs/SafeMathLib.sol";


/**
 * @title BalanceChecker
 */
contract BalanceChecker {
  using SafeMathLib for uint256;

  /**
   * Check the token balances of a wallet for multiple tokens.
   * Pass 0x0 as a "token" address to get ETH balance.
   *
   * Possible error throws:
   *   - extremely large arrays for account and or tokens (gas cost too high)
   *
   * Returns a one-dimensional that's user.length * tokens.length long. The
   * array is ordered by all of the 0th users token balances, then the 1th
   * user, and so on.
   */
  function getBalances(
    address[] calldata accounts,
    address[] calldata tokens
  )
    external
    view
    returns (uint[] memory)
  {
    uint[] memory result = new uint[](accounts.length.mul(tokens.length));

    for (uint i = 0; i < accounts.length; i++) {
      for (uint j = 0; j < tokens.length; j++) {
        uint index = j.add(tokens.length.mul(i));

        if (tokens[j] != address(0x0)) {
          result[index] = ERC20Token(tokens[j]).balanceOf(accounts[i]);
        } else {
          result[index] = accounts[i].balance;
        }
      }
    }

    return result;
  }
}
