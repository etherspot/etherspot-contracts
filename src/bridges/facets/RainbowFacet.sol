// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8;

import "./INearBridge.sol";
import "../libs/RainbowBridge.sol";

contract RainbowFaucet is INearBridge{

    bytes32 internal constant NAMESPACE =
         keccak256("io.etherspot.facets.rainbow");
     struct Storage {
         address rainbowEth;
         address rainbowNear;
     }

    function transferEthToNear(
        uint256 amount,
        address from,
        address to,
        address token,
        bytes calldata _calldata
    ) external override {

        //Check if the token is Supported By Rainbow bridge
        
        
        //Transfer function Call
        //delegateCall()
    }

}