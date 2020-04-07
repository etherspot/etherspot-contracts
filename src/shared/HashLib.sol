pragma solidity 0.5.12;

/**
 * @title HashLib
 */
library HashLib {
  string private constant AUTHORIZED_MESSAGE_PREFIX = "\x19Ethereum Authorized Message:\n20";
  string private constant SIGNED_MESSAGE_PREFIX = "\x19Ethereum Signed Message:\n32";

  function toAuthorizedMessageHash(
    address _address
  ) internal pure returns (bytes32) {
    return keccak256(
      abi.encodePacked(
        AUTHORIZED_MESSAGE_PREFIX,
        _address
      )
    );
  }

  function toSignedMessageHash(
    bytes32 _messageHash
  ) internal pure returns (bytes32) {
    return keccak256(
      abi.encodePacked(
        SIGNED_MESSAGE_PREFIX,
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
