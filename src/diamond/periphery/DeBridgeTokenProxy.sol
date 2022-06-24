// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.7;

import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";

/// @dev This contract implements a proxy that gets the implementation address for each call
/// from DeBridgeTokenDeployer. It's deployed by DeBridgeTokenDeployer.
/// Implementation is DeBridgeToken.
contract DeBridgeTokenProxy is BeaconProxy {
    constructor(address beacon, bytes memory data) BeaconProxy(beacon, data) {

    }
}
