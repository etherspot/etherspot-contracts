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

  mapping(bytes32 => mapping(address => bool)) private signatures;

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

  function verifySignedMessageHash(
    bytes32 _signedMessageHash,
    address _signer
  ) external view returns(bool) {
    return signatures[_signedMessageHash][_signer];
  }

  function setMessage(
    bytes calldata _message
  ) external {
    signatures[_message.toSignedMessageHash()][msg.sender] = true;

    emit MessageSigned(msg.sender, _message);
  }

  function setMessageHash(
    bytes32 _messageHash
  ) external {
    signatures[_messageHash.toSignedMessageHash()][msg.sender] = true;

    emit MessageHashSigned(msg.sender, _messageHash);
  }
}
