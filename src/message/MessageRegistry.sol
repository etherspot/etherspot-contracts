pragma solidity 0.5.12;

import {NoFallback} from "../shared/noFallback/NoFallback.sol";
import {IMessageRegistry} from "./interfaces.sol";

/**
 * @title MessageRegistry
 */
contract MessageRegistry is NoFallback, IMessageRegistry {
  struct SenderMessageHash {
    bool added;
    uint256 removedAtBlockNumber;
  }

  mapping(address => mapping(bytes32 => SenderMessageHash)) private senderMessageHashes;

  // events

  event MessageAdded(
    address sender,
    bytes message
  );

  event MessageHashAdded(
    address sender,
    bytes32 messageHash
  );

  event MessageRemoved(
    address sender,
    bytes message
  );

  event MessageHashRemoved(
    address sender,
    bytes32 messageHash
  );

  /**
   * @dev public constructor
   */
  constructor() public {}

  // external access

  function verifySenderMessageAtBlock(
    address _sender,
    bytes calldata _message,
    uint256 _blockNumber
  ) external view returns (bool) {
    return _verifySenderMessageHashAtBlock(
      _sender,
      keccak256(_message),
      _blockNumber
    );
  }

  function verifySenderMessageHashAtBlock(
    address _sender,
    bytes32 _messageHash,
    uint256 _blockNumber
  ) external view returns (bool) {
    return _verifySenderMessageHashAtBlock(
      _sender,
      _messageHash,
      _blockNumber
    );
  }

  function addMessage(
    bytes calldata _message
  ) external {
    _addMessageHash(
      keccak256(_message)
    );

    emit MessageAdded(
      msg.sender,
      _message
    );
  }

  function addMessageHash(
    bytes32 _messageHash
  ) external {
    _addMessageHash(
      _messageHash
    );

    emit MessageHashAdded(
      msg.sender,
      _messageHash
    );
  }

  function removeMessage(
    bytes calldata _message
  ) external {
    _removeMessageHash(
      keccak256(_message)
    );

    emit MessageRemoved(
      msg.sender,
      _message
    );
  }

  function removeMessageHash(
    bytes32 _messageHash
  ) external {
    _removeMessageHash(
      _messageHash
    );

    emit MessageHashRemoved(
      msg.sender,
      _messageHash
    );
  }

  // private access

  function _verifySenderMessageHashAtBlock(
    address _sender,
    bytes32 _messageHash,
    uint256 _blockNumber
  ) private view returns (bool _result) {
    if (senderMessageHashes[_sender][_messageHash].added) {
      uint256 _removedAtBlockNumber = senderMessageHashes[_sender][_messageHash].removedAtBlockNumber;

      if (_removedAtBlockNumber == 0) {
        _result = true;
      } else if (_blockNumber == 0) {
        _result = true;
      } else {
        _result = _removedAtBlockNumber < _blockNumber;
      }
    }

    return _result;
  }

  function _addMessageHash(
    bytes32 _messageHash
  ) private {
    require(
      !_verifySenderMessageHashAtBlock(msg.sender, _messageHash, 0)
    );

    senderMessageHashes[msg.sender][_messageHash].added = true;
    senderMessageHashes[msg.sender][_messageHash].removedAtBlockNumber = 0;
  }

  function _removeMessageHash(
    bytes32 _messageHash
  ) private {
    require(
      _verifySenderMessageHashAtBlock(msg.sender, _messageHash, 0)
    );

    senderMessageHashes[msg.sender][_messageHash].removedAtBlockNumber = block.number;
  }
}
