pragma solidity 0.5.12;

/**
 * @title SignedMessageLib
 */
library SignedMessageLib {
  string private constant MESSAGE_PREFIX = "\x19Ethereum Signed Message:\n32";

  function toSignedMessageHash(
    bytes32 _messageHash
  ) internal pure returns (bytes32) {
    return keccak256(
      abi.encodePacked(
        MESSAGE_PREFIX,
        _messageHash
      )
    );
  }

  function toSignedMessageHash(
    bytes memory _message
  ) internal pure returns (bytes32) {
    return toSignedMessageHash(
      keccak256(_message)
    );
  }
}
