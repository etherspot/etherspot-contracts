pragma solidity 0.5.15;

/**
 * @title SafeMathLib
 */
library SafeMathLib {
  function add(
    uint256 a,
    uint256 b
  )
    internal
    pure
    returns (uint256)
  {
    uint256 result = a + b;

    require(
      result >= a
    );

    return result;
  }

  function sub(
    uint256 a,
    uint256 b
  )
    internal
    pure
    returns (uint256)
  {
    require(
      b <= a
    );

    return a - b;
  }

  function mul(
    uint256 a,
    uint256 b
  )
    internal
    pure
    returns (uint256)
  {
    uint256 result = 0;

    if (a != 0 && b != 0) {
      result = a * b;

      require(
        result / a == b
      );
    }

    return result;
  }

  function div(
    uint256 a,
    uint256 b
  )
    internal
    pure
    returns (uint256)
  {
    require(
      b != 0
    );

    return a / b;
  }

  function mod(
    uint256 a,
    uint256 b
  )
    internal
    pure
    returns (uint256)
  {
    require(
      b != 0
    );

    return a % b;
  }
}
