// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../common/lifecycle/Initializable.sol";
import "./ENSRegistry.sol";


/**
 * @title ENS reverse registrar
 *
 * @dev Base on https://github.com/ensdomains/ens/blob/ff0f41747c05f1598973b0fe7ad0d9e09565dfcd/contracts/ReverseRegistrar.sol
 */
contract ENSReverseRegistrar is Initializable {
  ENSRegistry public registry;

  bytes32 public rootNode;

  /**
   * @dev Public constructor
   */
  constructor() public Initializable() {}

  // external functions

  /**
   * @notice Initializes `ENSReverseRegistrar` contract
   * @param registry_ ENS registry address
   * @param rootNode_ ENS root node
   */
  function initialize(
    ENSRegistry registry_,
    bytes32 rootNode_
  )
    external
    onlyInitializer
  {
    registry = registry_;
    rootNode = rootNode_;
  }

  // external functions

  function claim(
    address owner
  )
    external
    returns (bytes32)
  {
    bytes32 label = _sha3HexAddress(msg.sender);

    return registry.setSubnodeOwner(rootNode, label, owner);
  }

  // external functions (views)

  function node(
    address addr
  )
    external
    view
    returns (bytes32)
  {
    return keccak256(abi.encodePacked(rootNode, _sha3HexAddress(addr)));
  }

  // private functions (pure)

  function _sha3HexAddress(
    address addr
  )
    private
    pure
    returns (bytes32)
  {
    bytes32 result;

    // solhint-disable-next-line no-inline-assembly
    assembly {
      let lookup := 0x3031323334353637383961626364656600000000000000000000000000000000

      for { let i := 40 } gt(i, 0) { } {
        i := sub(i, 1)
        mstore8(i, byte(and(addr, 0xf), lookup))
        addr := div(addr, 0x10)
        i := sub(i, 1)
        mstore8(i, byte(and(addr, 0xf), lookup))
        addr := div(addr, 0x10)
      }

      result := keccak256(0, 40)
    }

    return result;
  }
}
