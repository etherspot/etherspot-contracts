pragma solidity 0.5.15;

import "../common/token/ERC20Token.sol";


/**
 * @title WrappedWeiToken
 */
contract WrappedWeiToken is ERC20Token {
  string public name;
  string public symbol;
  uint8 public decimals;
  uint256 public totalSupply;

  /**
   * @dev public constructor
   */
  constructor()
    public
    payable
  {
    name = "Wrapped Wei";
    symbol = "WWEI";

    if (msg.value > 0) {
      _mint(msg.sender, msg.value);
    }
  }

  /**
   * @dev fallback
   */
  function()
    external
    payable
  {
    _mint(msg.sender, msg.value);
  }

  // external functions

  function depositTo(
    address to
  )
    external
    payable
  {
    _mint(to, msg.value);
  }

  function withdraw(
    uint256 value
  )
    external
  {
    _withdraw(msg.sender, msg.sender, value);
  }

  function withdrawTo(
    address payable to,
    uint256 value
  )
    external
  {
    _withdraw(msg.sender, to, value);
  }

  function withdrawAll()
    external
  {
    _withdraw(msg.sender, msg.sender, balances[msg.sender]);
  }

  function withdrawAllTo(
    address payable to
  )
    external
  {
    _withdraw(msg.sender, to, balances[msg.sender]);
  }

  // private functions

  function _withdraw(
    address from,
    address payable to,
    uint256 value
  )
    private
  {
    _burn(from, value);

    require(
      // solhint-disable-next-line check-send-result
      to.send(value)
    );
  }
}
