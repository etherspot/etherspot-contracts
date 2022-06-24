// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

/// @title Callback for IDeBridgeGate#flash
/// @notice Any contract that calls IDeBridgeGate#flash must implement this interface
interface IFlashCallback {
    /// @param fee The fee amount in token due to the pool by the end of the flash
    /// @param data Any data passed through by the caller via the IDeBridgeGate#flash call
    function flashCallback(uint256 fee, bytes calldata data) external;
}
