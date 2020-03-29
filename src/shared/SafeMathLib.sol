pragma solidity 0.5.12;

/**
 * @title SafeMathLib
 */
library SafeMathLib {
  // internal pures

  function add(
    uint256 _a,
    uint256 _b
  ) internal pure returns (uint256 _result) {
    _result = _a + _b;

    require(
      _result >= _a
    );
  }

  function sub(
    uint256 _a,
    uint256 _b
  ) internal pure returns (uint256) {
    require(
      _b <= _a
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
        _result / _a == _b
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
      _b != 0
    );

    return _a / _b;
  }

  function mod(
    uint256 _a,
    uint256 _b
  ) internal pure returns (uint256) {
    require(
      _b != 0
    );

    return _a % _b;
  }
}
