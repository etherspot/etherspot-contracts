pragma solidity 0.5.12;

import {IERC20Token} from "./interfaces.sol";


/**
 * @title ERC20DetailedToken
 */
contract ERC20DetailedToken is IERC20Token {
  struct Details {
    string name;
    string symbol;
    uint8 decimals;
  }

  Details private details;

  /**
   * @dev internal constructor
   */
  constructor(
    string memory _name,
    string memory _symbol,
    uint8 _decimals
  ) internal {
    details.name = _name;
    details.symbol = _symbol;
    details.decimals = _decimals;
  }

  // external access

  function name() external view returns (string memory) {
    return details.name;
  }

  function symbol() external view returns (string memory) {
    return details.symbol;
  }

  function decimals() external view returns (uint8) {
    return details.decimals;
  }
}
