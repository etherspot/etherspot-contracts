// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

interface IDeBridgeTokenDeployer {

    /// @dev Deploy a deToken(DeBridgeTokenProxy) for an asset
    /// @param _debridgeId Asset id, see DeBridgeGate.getDebridgeId
    /// @param _name The asset's name
    /// @param _symbol The asset's symbol
    /// @param _decimals The asset's decimals
    function deployAsset(
        bytes32 _debridgeId,
        string memory _name,
        string memory _symbol,
        uint8 _decimals
    ) external returns (address deTokenAddress);

    /// @dev Emitted when a deToken(DeBridgeTokenProxy) is deployed using this contract
    event DeBridgeTokenDeployed(
        address asset,
        string name,
        string symbol,
        uint8 decimals
    );
}
