// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./ENSAbstractResolver.sol";


/**
 * @title ENS abstract address resolver
 *
 * @dev Base on https://github.com/ensdomains/resolvers/blob/f7d62ab04bfe1692a4344f6f1d31ff81315a98c3/contracts/profiles/AddrResolver.sol
 */
abstract contract ENSAddressResolver is ENSAbstractResolver {
  bytes4 internal constant INTERFACE_ADDR_ID = bytes4(keccak256(abi.encodePacked("addr(bytes32)")));
  bytes4 internal constant INTERFACE_ADDRESS_ID = bytes4(keccak256(abi.encodePacked("addr(bytes32,uint)")));

  uint internal constant COIN_TYPE_ETH = 60;

  mapping(bytes32 => mapping(uint => bytes)) internal resolverAddresses;

  // events

  event AddrChanged(
    bytes32 indexed node,
    address addr
  );

  event AddressChanged(
    bytes32 indexed node,
    uint coinType,
    bytes newAddress
  );

  // external functions

  function setAddr(
    bytes32 node,
    address addr_
  )
    external
    onlyNodeOwner(node)
  {
    _setAddr(node, addr_);
  }

  function setAddr(
    bytes32 node,
    uint coinType,
    bytes memory addr_
  )
    external
    onlyNodeOwner(node)
  {
    _setAddr(node, coinType, addr_);
  }

  // external functions (views)

  function addr(
    bytes32 node
  )
    external
    view
    returns (address)
  {
    return _addr(node);
  }

  function addr(
    bytes32 node,
    uint coinType
  )
    external
    view
    returns (bytes memory)
  {
    return resolverAddresses[node][coinType];
  }

  // internal functions

  function _setAddr(
    bytes32 node,
    address addr_
  )
    internal
  {
    _setAddr(node, COIN_TYPE_ETH, _addressToBytes(addr_));
  }

  function _setAddr(
    bytes32 node,
    uint coinType,
    bytes memory addr_
  )
    internal
  {
    emit AddressChanged(node, coinType, addr_);

    if(coinType == COIN_TYPE_ETH) {
      emit AddrChanged(node, _bytesToAddress(addr_));
    }

    resolverAddresses[node][coinType] = addr_;
  }

  // internal functions (views)

  function _addr(
    bytes32 node
  )
    internal
    view
    returns (address)
  {
    address result;

    bytes memory addr_ = resolverAddresses[node][COIN_TYPE_ETH];

    if (addr_.length > 0) {
      result = _bytesToAddress(addr_);
    }

    return result;
  }

  // private function (pure)

  function _bytesToAddress(
    bytes memory data
  )
    private
    pure
    returns(address payable)
  {
    address payable result;

    require(data.length == 20);

    // solhint-disable-next-line no-inline-assembly
    assembly {
      result := div(mload(add(data, 32)), exp(256, 12))
    }

    return result;
  }

  function _addressToBytes(
    address addr_
  )
    private
    pure
    returns(bytes memory)
  {
    bytes memory result = new bytes(20);

    // solhint-disable-next-line no-inline-assembly
    assembly {
      mstore(add(result, 32), mul(addr_, exp(256, 12)))
    }

    return result;
  }
}
