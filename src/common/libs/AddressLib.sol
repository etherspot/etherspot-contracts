// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

/**
 * @title Address library
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
library AddressLib {
  /**
   * @notice Converts address to bytes
   * @param addr address
   * @return bytes
   */
  function toBytes(
    address addr
  )
    internal
    pure
    returns (bytes memory)
  {
    bytes memory result = new bytes(20);

    // solhint-disable-next-line no-inline-assembly
    assembly {
      mstore(add(result, 32), mul(addr, 0x1000000000000000000000000))
    }

    return result;
  }

  /**
   * @notice Converts address to sha3 hash
   * @param addr address
   * @return hash
   */
  function toSHA3Hash(
    address addr
  )
    internal
    pure
    returns (bytes32)
  {
    bytes32 result;

    // solhint-disable-next-line no-inline-assembly
    assembly {
      let lookup := 0x3031323334353637383961626364656600000000000000000000000000000000

      for { let i := 40 } gt(i, 0) { } {
        i := sub(i, 1)
        mstore8(i, byte(and(addr, 0xf), lookup))
        addr := div(addr, 0x10)
        i := sub(i, 1)
        mstore8(i, byte(and(addr, 0xf), lookup))
        addr := div(addr, 0x10)
      }

      result := keccak256(0, 40)
    }

    return result;
  }
}
