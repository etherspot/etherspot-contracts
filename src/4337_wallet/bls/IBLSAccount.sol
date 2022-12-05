// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.12;

import "../interfaces/IAggregatedAccount.sol";

/**
 * a BLS account should expose its own public key.
 */
interface IBLSAccount is IAggregatedAccount {
    function getBlsPublicKey() external view returns (uint256[4] memory);
}
