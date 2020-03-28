pragma solidity 0.5.12;

/**
 * @title IMessageRegistry
 */
interface IMessageRegistry {
  function verifyMessage(
    bytes calldata _message,
    address _sender
  ) external view returns (bool);

  function verifyMessageHash(
    bytes32 _messageHash,
    address _sender
  ) external view returns(bool);

  function addMessage(
    bytes calldata _message
  ) external;

  function addMessageHash(
    bytes32 _messageHash
  ) external;
}
