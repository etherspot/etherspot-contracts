// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

/**
 * @title Signature library
 *
 * @dev Based on
 * https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.3.0/contracts/cryptography/ECDSA.sol#L26
 * https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.3.0/contracts/utils/Strings.sol#L12
 */
library SignatureLib {
  function recoverAddress(
    bytes32 messageHash,
    bytes memory signature
  )
    internal
    pure
    returns (address)
  {
    address result = address(0);

    if (signature.length == 65) {
      bytes32 r;
      bytes32 s;
      uint8 v;

      // solhint-disable-next-line no-inline-assembly
      assembly {
        r := mload(add(signature, 0x20))
        s := mload(add(signature, 0x40))
        v := byte(0, mload(add(signature, 0x60)))
      }

      if (v < 27) {
        v += 27;
      }

      if (v == 27 || v == 28) {
        result = ecrecover(messageHash, v, r, s);
      }
    }

    return result;
  }

  function toEthereumSignedMessageHash(
    bytes memory message
  )
    internal
    pure
    returns (bytes32)
  {
    return keccak256(abi.encodePacked(
      "\x19Ethereum Signed Message:\n",
      _uintToString(message.length),
      abi.encodePacked(message)
    ));
  }

  function _uintToString(
    uint num
  )
    private
    pure
    returns (string memory)
  {
    if (num == 0) {
      return "0";
    } else if (num == 32) {
      return "32";
    }

    uint i = num;
    uint j = num;

    uint len;

    while (j != 0) {
      len++;
      j /= 10;
    }

    bytes memory result = new bytes(len);

    uint k = len - 1;

    while (i != 0) {
      result[k--] = byte(uint8(48 + i % 10));
      i /= 10;
    }

    return string(result);
  }
}
