pragma solidity 0.5.12;

/**
 * @title ISignedMessageRegistry
 */
interface ISignedMessageRegistry {
  function isMessageSigned(
    bytes calldata _message,
    address _signer
  ) external view returns(bool);

  function isMessageHashSigned(
    bytes32 _messageHash,
    address _signer
  ) external view returns(bool);

  function setMessage(
    bytes calldata _message
  ) external;

  function setMessageHash(
    bytes32 _messageHash
  ) external;
}
