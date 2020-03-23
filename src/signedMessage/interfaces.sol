pragma solidity 0.5.12;

/**
 * @title ISignedMessageRegistry
 */
interface ISignedMessageRegistry {
  function verifySignedMessageHash(
    bytes32 _signedMessageHash,
    address _signer
  ) external view returns(bool);

  function setMessage(
    bytes calldata _message
  ) external;

  function setMessageHash(
    bytes32 _messageHash
  ) external;
}
