pragma solidity 0.5.12;

/**
 * @title IMessageRegistry
 */
interface IMessageRegistry {
  function verifySenderMessageAtBlock(
    address _sender,
    bytes calldata _message,
    uint256 _blockNumber
  ) external view returns (bool);

  function verifySenderMessageHashAtBlock(
    address _sender,
    bytes32 _messageHash,
    uint256 _blockNumber
  ) external view returns(bool);

  function addMessage(
    bytes calldata _message
  ) external;

  function addMessageHash(
    bytes32 _messageHash
  ) external;

  function removeMessage(
    bytes calldata _message
  ) external;

  function removeMessageHash(
    bytes32 _messageHash
  ) external;
}
