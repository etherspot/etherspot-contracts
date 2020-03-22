pragma solidity 0.5.12;

/**
 * @title SafeMathLib
 */
library SafeMathLib {
  string private constant ERR_ADDITION_OVERFLOW = " addition overflow";
  string private constant ERR_SUBTRACTION_OVERFLOW = "subtraction overflow";
  string private constant ERR_MULTIPLICATION_OVERFLOW = "multiplication overflow";
  string private constant ERR_DIVISION_BY_ZERO = "division by zero";
  string private constant ERR_MODULO_BY_ZERO = "modulo by zero";

  // internal pures

  function add(
    uint256 _a,
    uint256 _b
  ) internal pure returns (uint256 _result) {
    _result = _a + _b;

    require(
      _result >= _a,
      ERR_ADDITION_OVERFLOW
    );
  }

  function sub(
    uint256 _a,
    uint256 _b
  ) internal pure returns (uint256) {
    require(
      _b <= _a,
      ERR_SUBTRACTION_OVERFLOW
    );

    return _a - _b;
  }

  function mul(
    uint256 _a,
    uint256 _b
  ) internal pure returns (uint256 _result) {
    if (_a != 0 && _b != 0) {
      _result = _a * _b;

      require(
        _result / _a == _b,
        ERR_MULTIPLICATION_OVERFLOW
      );
    } else {
      _result = 0;
    }
  }

  function div(
    uint256 _a,
    uint256 _b
  ) internal pure returns (uint256) {
    require(
      _b != 0,
      ERR_DIVISION_BY_ZERO
    );

    return _a / _b;
  }

  function mod(
    uint256 _a,
    uint256 _b
  ) internal pure returns (uint256) {
    require(
      _b != 0,
      ERR_MODULO_BY_ZERO
    );

    return _a % _b;
  }
}
