pragma solidity 0.5.15;

/**
 * @title BytesLib
 */
library BytesLib {
  function toAddress(
    bytes memory data,
    uint256 start
  )
    internal
    pure
    returns (address)
  {
    address result;

    require(
      data.length >= (start + 20)
    );

    // solhint-disable-next-line no-inline-assembly
    assembly {
      result := div(mload(add(add(data, 0x20), start)), 0x1000000000000000000000000)
    }

    return result;
  }
}
