// SPDX-License-Identifier: MIT
// solhint-disable-next-line
pragma solidity 0.8.7;

/// @title DeBridgeFacet.
/// @author Luke Wickens <luke@pillarproject.io>.
/// @notice Facet used to perform cross-chain swap using deBridge.

import "./interfaces/IDeBridgeGate.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";

contract DeBridgeFacet is Ownable {
    using Address for address;

    /// @notice Address of deBridge gate contract (same on all chains).
    address public deBridgeGate = 0x43dE2d77BF8027e25dBD179B491e8d64f38398aA;

    event SentAssets(
        address indexed to,
        address indexed from,
        address indexed token,
        uint256 amount
    );
    event UpdatedDeBridgeGate(address newAddress);

    /// @notice Custom errors to handle address(0) & amount == 0.
    error ZeroAmount();
    error ZeroAddress();

    constructor() {}

    /// @notice Facilitates cross-chain transfer of tokens using deBridge.
    /// @dev Error thrown if: amount is zero or receiver address is address(0).
    /// @dev no _tokenAddress zero address check as address(0) is used to denote chain base assets (e.g. ETH).
    /// @param _tokenAddress = Contract address of token.
    /// @param _amount = Amount of tokens to transfer.
    /// @param _chainIdTo = Chain id of receiving chain.
    /// @param _receiver = Receiving account address on receiving chain.
    /// @custom:event = emits SentAssets event detailing transfer information.

    function deBridgeCrossChainSend(
        address _tokenAddress,
        uint256 _amount,
        uint256 _chainIdTo,
        address _receiver
    ) public {
        if (_amount <= 0) revert ZeroAmount();
        if (_receiver == address(0)) revert ZeroAddress();

        // ERC20 approval here?
        IERC20(_tokenAddress).approve(deBridgeGate, _amount);

        deBridgeGate.functionDelegateCall(
            abi.encodeWithSelector(
                IDeBridgeGate(deBridgeGate).send.selector,
                _tokenAddress,
                _amount,
                _chainIdTo,
                abi.encodePacked(_receiver),
                "",
                false,
                0,
                "0x"
            )
        );

        emit SentAssets(_receiver, _msgSender(), _tokenAddress, _amount);
    }

    /// @notice Updates the deBridge gate contract address.
    /// @dev Error thrown if: new contract address is address(0).
    /// @param _newGate =  new deBridge gate contract address.
    /// @custom:event = emits UpdatedDeBridgeGate event detailing new deBridge gate contract address.

    function updateGateAddress(address _newGate) external onlyOwner {
        if (_newGate == address(0)) revert ZeroAddress();
        deBridgeGate = _newGate;
        emit UpdatedDeBridgeGate(_newGate);
    }
}
