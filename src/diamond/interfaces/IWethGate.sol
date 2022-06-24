// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.7;

interface IWethGate {
    /// @dev Transfer assets to a receiver.
    /// @param receiver This address will receive a transfer.
    /// @param wad Amount in wei
    function withdraw(address receiver, uint wad) external;
}