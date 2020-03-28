pragma solidity 0.5.12;

import {SafeMathLib} from "../../shared/SafeMathLib.sol";
import {IERC20Token} from "./interfaces.sol";


/**
 * @title ERC20Token
 */
contract ERC20Token is IERC20Token {
  using SafeMathLib for uint256;

  struct Stats {
    uint256 totalSupply;
  }

  string private constant ERR_INVALID_FROM = "invalid from";
  string private constant ERR_INVALID_TO = "invalid to";
  string private constant ERR_INVALID_OWNER = "invalid owner";
  string private constant ERR_INVALID_SPENDER = "invalid spender";

  mapping(address => uint256) private balances;
  mapping(address => mapping(address => uint256)) private allowances;

  Stats private stats;

  /**
   * @dev internal constructor
   */
  constructor() internal {}

  // external access

  function totalSupply() external view returns (uint256) {
    return stats.totalSupply;
  }

  function balanceOf(
    address _owner
  ) external view returns (uint256) {
    return balances[_owner];
  }

  function allowance(
    address _owner,
    address _spender
  ) external view returns (uint256) {
    return allowances[_owner][_spender];
  }

  function transfer(
    address _to,
    uint256 _value
  ) external returns (bool) {
    _transfer(msg.sender, _to, _value);
    return true;
  }

  function transferFrom(
    address _from,
    address _to,
    uint256 _value
  ) external returns (bool) {
    _transfer(_from, _to, _value);
    _approve(_from, msg.sender, allowances[_from][msg.sender].sub(_value));
    return true;
  }

  function approve(
    address _spender,
    uint256 _value
  ) external returns (bool) {
    _approve(msg.sender, _spender, _value);
    return true;
  }

  // internal access

  function _transfer(
    address _from,
    address _to,
    uint256 _value
  ) internal {
    require(
      _from != address(0),
      ERR_INVALID_FROM
    );
    require(
      _to != address(0),
      ERR_INVALID_TO
    );

    balances[_from] = balances[_from].sub(_value);
    balances[_to] = balances[_to].add(_value);

    emit Transfer(_from, _to, _value);
  }

  function _approve(
    address _owner,
    address _spender,
    uint256 _value
  ) internal {
    require(
      _owner != address(0),
      ERR_INVALID_OWNER
    );
    require(
      _spender != address(0),
      ERR_INVALID_SPENDER
    );

    allowances[_owner][_spender] = _value;

    emit Approval(_owner, _spender, _value);
  }

  function _mint(
    address _owner,
    uint256 _value
  ) internal {
    require(
      _owner != address(0),
      ERR_INVALID_OWNER
    );

    balances[_owner] = balances[_owner].add(_value);
    stats.totalSupply = stats.totalSupply.add(_value);

    emit Transfer(address(0), _owner, _value);
  }

  function _burn(
    address _owner,
    uint256 _value
  ) internal {
    require(
      _owner != address(0),
      ERR_INVALID_OWNER
    );

    balances[_owner] = balances[_owner].sub(_value);
    stats.totalSupply = stats.totalSupply.sub(_value);

    emit Transfer(_owner, address(0), _value);
  }
}
