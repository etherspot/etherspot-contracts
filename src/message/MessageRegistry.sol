pragma solidity 0.5.12;

import {NoFallback} from "../shared/noFallback/NoFallback.sol";
import {IMessageRegistry} from "./interfaces.sol";

/**
 * @title MessageRegistry
 */
contract MessageRegistry is NoFallback, IMessageRegistry {
  mapping(bytes32 => mapping(address => bool)) private messageHashesSenders;

  // events

  event MessageAdded(
    bytes message,
    address sender
  );

  event MessageHashAdded(
    bytes32 messageHash,
    address sender
  );

  /**
   * @dev public constructor
   */
  constructor() public {}

  // external access

  function verifyMessage(
    bytes calldata _message,
    address _sender
  ) external view returns (bool) {
    return messageHashesSenders[keccak256(_message)][_sender];
  }

  function verifyMessageHash(
    bytes32 _messageHash,
    address _sender
  ) external view returns (bool) {
    return messageHashesSenders[_messageHash][_sender];
  }

  function addMessage(
    bytes calldata _message
  ) external {
    _addMessageHash(
      keccak256(_message)
    );

    emit MessageAdded(
      _message,
      msg.sender
    );
  }

  function addMessageHash(
    bytes32 _messageHash
  ) external {
    _addMessageHash(
      _messageHash
    );

    emit MessageHashAdded(
      _messageHash,
      msg.sender
    );
  }

  // private access

  function _addMessageHash(
    bytes32 _messageHash
  ) private {
    require(
      !messageHashesSenders[_messageHash][msg.sender]
    );

    messageHashesSenders[_messageHash][msg.sender] = true;
  }
}
