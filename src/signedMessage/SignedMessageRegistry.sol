pragma solidity 0.5.12;

import {NoFallback} from "../shared/noFallback/NoFallback.sol";
import {SignedMessageLib} from "./SignedMessageLib.sol";
import {ISignedMessageRegistry} from "./interfaces.sol";

/**
 * @title SignedMessageRegistry
 */
contract SignedMessageRegistry is NoFallback, ISignedMessageRegistry {
  using SignedMessageLib for bytes;
  using SignedMessageLib for bytes32;

  mapping(bytes32 => mapping(address => bool)) private messageHashes;

  // events

  event MessageSigned(
    address signer,
    bytes message
  );

  event MessageHashSigned(
    address signer,
    bytes32 messageHash
  );

  /**
   * @dev public constructor
   */
  constructor() public {}

  // external access

  function isMessageSigned(
    bytes calldata _message,
    address _signer
  ) external view returns(bool) {
    return messageHashes[_message.toSignedMessageHash()][_signer];
  }

  function isMessageHashSigned(
    bytes32 _messageHash,
    address _signer
  ) external view returns(bool) {
    return messageHashes[_messageHash.toSignedMessageHash()][_signer];
  }

  function setMessage(
    bytes calldata _message
  ) external {
    messageHashes[_message.toSignedMessageHash()][msg.sender] = true;

    emit MessageSigned(msg.sender, _message);
  }

  function setMessageHash(
    bytes32 _messageHash
  ) external {
    messageHashes[_messageHash.toSignedMessageHash()][msg.sender] = true;

    emit MessageHashSigned(msg.sender, _messageHash);
  }
}
