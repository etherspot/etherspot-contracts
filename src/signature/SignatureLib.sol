pragma solidity 0.5.12;

/**
 * @title SignatureLib
 */
library SignatureLib {
  function recoverAddress(
    bytes32 _messageHash,
    bytes memory _signature
  ) internal pure returns (address) {
    if (_signature.length == 65) {
      bytes32 _r;
      bytes32 _s;
      uint8 _v;

      assembly {
        _r := mload(add(_signature, 0x20))
        _s := mload(add(_signature, 0x40))
        _v := byte(0, mload(add(_signature, 0x60)))
      }

      if (_v < 27) {
        _v += 27;
      }

      if (_v == 27 || _v == 28) {
        return ecrecover(_messageHash, _v, _r, _s);
      }
    }

    return address(0);
  }
}
