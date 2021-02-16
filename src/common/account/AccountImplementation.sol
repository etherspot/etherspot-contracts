// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../lifecycle/Initializable.sol";
import "./AccountRegistry.sol";


/**
 * @title Account implementation
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract AccountImplementation is Initializable {
  bytes32 constant private ERC777_TOKENS_RECIPIENT_INTERFACE_HASH = keccak256(abi.encodePacked("ERC777TokensRecipient"));
  bytes32 constant private ERC1820_ACCEPT_MAGIC = keccak256(abi.encodePacked("ERC1820_ACCEPT_MAGIC"));

  bytes4 constant private ERC1271_VALID_MESSAGE_HASH_SIGNATURE = bytes4(keccak256(abi.encodePacked("isValidSignature(bytes32,bytes)")));
  bytes4 constant private ERC1271_VALID_MESSAGE_SIGNATURE = bytes4(keccak256(abi.encodePacked("isValidSignature(bytes,bytes)")));
  bytes4 constant private ERC1271_INVALID_SIGNATURE = 0xffffffff;

  AccountRegistry public registry;

  /**
   * @dev Internal constructor
   */
  constructor() internal Initializable() {}

  /**
   * @notice Initializes contract
   * @param registry_ registry address
   */
  function initialize(
    address registry_
  )
    external
    onlyInitializer
  {
    registry = AccountRegistry(registry_);
  }

  // ERC721

  function onERC721Received(
    address,
    address,
    uint256,
    bytes memory
  )
    public
    pure
    returns (bytes4)
  {
    return this.onERC721Received.selector;
  }

  // ERC1155

  function onERC1155Received(
    address,
    address,
    uint256,
    uint256,
    bytes calldata
  )
    external
    pure
    returns (bytes4)
  {
    return this.onERC1155Received.selector;
  }

  // ERC777

  function tokensReceived(
    address,
    address,
    address,
    uint256,
    bytes calldata,
    bytes calldata
  )
    external
    pure
  {}

  // ERC1820

  function canImplementInterfaceForAddress(
    bytes32 interfaceHash,
    address addr
  )
    external
    view
    returns(bytes32)
  {
    bytes32 result;

    if (interfaceHash == ERC777_TOKENS_RECIPIENT_INTERFACE_HASH && addr == address(this)) {
      result =  ERC1820_ACCEPT_MAGIC;
    }

    return result;
  }

  // ERC1271

  function isValidSignature(
    bytes32 messageHash,
    bytes memory signature
  )
    public
    view
    returns (bytes4)
  {
    return registry.isValidAccountSignature(address(this), messageHash, signature)
      ? ERC1271_VALID_MESSAGE_HASH_SIGNATURE
      : ERC1271_INVALID_SIGNATURE;
  }

  function isValidSignature(
    bytes memory message,
    bytes memory signature
  )
    public
    view
    returns (bytes4)
  {
    return registry.isValidAccountSignature(address(this), message, signature)
    ? ERC1271_VALID_MESSAGE_SIGNATURE
    : ERC1271_INVALID_SIGNATURE;
  }
}
