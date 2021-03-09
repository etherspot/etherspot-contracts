// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

/**
 * @title Address library
 */
library AddressLib {
  /**
   * @notice Converts address into sha3 hash
   * @param self address
   * @return sha3 hash
   */
  function toSha3Hash(
    address self
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
        mstore8(i, byte(and(self, 0xf), lookup))
        self := div(self, 0x10)
        i := sub(i, 1)
        mstore8(i, byte(and(self, 0xf), lookup))
        self := div(self, 0x10)
      }

      result := keccak256(0, 40)
    }

    return result;
  }
}
