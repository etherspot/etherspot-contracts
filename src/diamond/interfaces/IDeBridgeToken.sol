// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "../interfaces/IERC20Permit.sol";

interface IDeBridgeToken is IERC20Upgradeable, IERC20Permit {
    /// @dev Issues new tokens.
    /// @param _receiver Token's receiver.
    /// @param _amount Amount to be minted.
    function mint(address _receiver, uint256 _amount) external;

    /// @dev Destroys existing tokens.
    /// @param _amount Amount to be burnt.
    function burn(uint256 _amount) external;
}
