// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

import "../BLSAccount.sol";
import "../SimpleAccount.sol";
import "../interfaces/IEntryPoint.sol";

contract BLSAccountDeployer {
    function deployAccount(
        IEntryPoint anEntryPoint,
        address anAggregator,
        uint256 salt,
        uint256[4] memory aPublicKey
    ) public returns (BLSAccount) {
        return
            new BLSAccount{salt: bytes32(salt)}(
                anEntryPoint,
                anAggregator,
                aPublicKey
            );
    }
}
