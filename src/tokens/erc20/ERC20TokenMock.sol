pragma solidity 0.5.12;

import {ERC20Token} from "./ERC20Token.sol";


/**
 * @title ERC20TokenMock
 */
contract ERC20TokenMock is ERC20Token {
  /**
   * @dev public constructor
   */
  constructor() public {}

  // external access

  function mint(
    address _owner,
    uint256 _value
  ) external {
    _mint(_owner, _value);
  }
}
