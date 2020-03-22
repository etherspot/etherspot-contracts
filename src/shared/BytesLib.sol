pragma solidity 0.5.12;

/**
 * @title BytesLib
 */
library BytesLib {
  function toAddress(
    bytes memory _data,
    uint _start
  ) internal  pure returns (address _result) {
    require(_data.length >= (_start + 20));

    assembly {
      _result := div(mload(add(add(_data, 0x20), _start)), 0x1000000000000000000000000)
    }

    return _result;
  }
}
