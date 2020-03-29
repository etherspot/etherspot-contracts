pragma solidity 0.5.12;

/**
 * @title IMessageRegistry
 */
interface IMessageRegistry {
  function verifySenderMessageHashAtBlock(
    address _sender,
    bytes32 _messageHash,
    uint256 _blockNumber
  ) external view returns(bool);

  function addMessageHash(
    bytes32 _messageHash
  ) external;

  function removeMessageHash(
    bytes32 _messageHash
  ) external;
}
