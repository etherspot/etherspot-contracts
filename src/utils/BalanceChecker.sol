// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

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
          result[index] = _getBalance(accounts[i], tokens[j]);
        } else {
          result[index] = accounts[i].balance;
        }
      }
    }

    return result;
  }

  function _getBalance(
    address account,
    address token
  )
    private
    view
    returns (uint256)
  {
    uint256 result = 0;
    uint256 tokenCode;

    // check if token is actually a contract
    // solhint-disable-next-line no-inline-assembly
    assembly { tokenCode := extcodesize(token) } // contract code size

    if (tokenCode > 0) {
      // is it a contract and does it implement balanceOf
      // solhint-disable-next-line avoid-low-level-calls
      (bool methodExists,) = token.staticcall(abi.encodeWithSelector(
        ERC20Token(token).balanceOf.selector,
        account
      ));

      if (methodExists) {
        result = ERC20Token(token).balanceOf(account);
      }
    }

    return result;
  }
}
