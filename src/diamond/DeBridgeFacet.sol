// SPDX-License-Identifier: MIT
// solhint-disable-next-line
pragma solidity 0.8.7;

/// @title DeBridgeFacet
/// @author Luke Wickens <luke@pillarproject.io>
/// @notice Facet for performing cross-chain bridging using deBridge

import "./interfaces/IDeBridgeGate.sol";
import {Flags} from "./libraries/Flags.sol";
import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/security/ReentrancyGuard.sol";
// import {Address} from "@openzeppelin/contracts/utils/Address.sol";
// TODO:
// import { LibDiamond } from "<DIAMOND CONTRACT LIBRARIES>"
// Code in place in that fn to use LibDiamond enforce
import "hardhat/console.sol";

contract DeBridgeFacet is ReentrancyGuard {
    // using Address for address;
    using Flags for uint256;

    /// @notice Address of deBridge gate contract (same on all chains)
    address public deBridgeGate = 0x43dE2d77BF8027e25dBD179B491e8d64f38398aA;

    /// Errors ///
    error ZeroAmount();
    error ZeroAddress();
    error InvalidChainId();

    /// Events ///
    event TransferInitiated(
        string bridge,
        address tokenAddress,
        address from,
        address to,
        uint256 amount,
        uint256 sendingChain,
        uint256 receivingChain
    );
    event UpdatedGateAddress(address newAddress);

    /// @notice Facilitates cross-chain transfer of tokens using deBridge
    /// @dev Error thrown if: amount is zero or receiver address is address(0)
    /// @param _tokenAddress = Contract address of token
    /// @param _amount = Amount of tokens to transfer
    /// @param _chainIdTo = Chain id of receiving chain
    /// @param _receiver = Receiving account address on receiving chain
    /// @custom:event = emits TransferInitiated event detailing transfer information

    function deBridgeBridgeTokens(
        address _tokenAddress,
        uint256 _amount,
        uint256 _chainIdTo,
        address _receiver,
        address _fallback,
        uint256 _executionFee
    ) external payable nonReentrant {
        if (_tokenAddress == address(0) || _receiver == address(0))
            revert ZeroAddress();
        if (_receiver == address(0)) revert ZeroAddress();
        if (_amount <= 0) revert ZeroAmount();
        if (_chainIdTo == 0) revert InvalidChainId();

        IERC20(_tokenAddress).transferFrom(msg.sender, address(this), _amount);
        IERC20(_tokenAddress).approve(deBridgeGate, _amount);

        IDeBridgeGate.SubmissionAutoParamsTo memory autoParams;
        autoParams.flags = autoParams.flags.setFlag(
            Flags.REVERT_IF_EXTERNAL_FAIL,
            true
        );
        autoParams.flags = autoParams.flags.setFlag(
            Flags.PROXY_WITH_SENDER,
            true
        );
        autoParams.executionFee = _executionFee;
        autoParams.fallbackAddress = abi.encodePacked(_fallback);

        // This works but requires user to transfer funds to this contract first.
        IDeBridgeGate(deBridgeGate).send{value: msg.value}(
            _tokenAddress,
            _amount,
            _chainIdTo,
            abi.encodePacked(_receiver),
            "",
            false,
            0,
            abi.encode(autoParams)
        );

        // The below functions do not work
        // The issue is that it wont work with a delegated call
        // as you need to send a msg.value along with the transaction
        // which can't be done using a delegated call
        // With a standard call you would still need to send the contract
        // funds from the user as .call executes code in the scope of the
        // contract rather than the user.

        // deBridgeGate.call(
        //     abi.encodeWithSignature(
        //         "send(address, uint256, uint256, bytes memory, bytes memory, bool, uint32, bytes calldata)",
        //         _tokenAddress,
        //         _amount,
        //         _chainIdTo,
        //         abi.encodePacked(_receiver),
        //         "",
        //         false,
        //         0,
        //         abi.encode(autoParams)
        //     )

        // deBridgeGate.functionDelegateCall(
        //     abi.encodeWithSelector(
        //         IDeBridgeGate(deBridgeGate).send.selector,
        //         _tokenAddress,
        //         _amount,
        //         _chainIdTo,
        //         abi.encodePacked(_receiver),
        //         "",
        //         false,
        //         0,
        //         abi.encode(autoParams)
        //     )
        // );

        emit TransferInitiated(
            "deBridge",
            address(_tokenAddress),
            msg.sender,
            _receiver,
            _amount,
            getChainId(),
            _chainIdTo
        );
    }

    /// @notice Updates the deBridge gate contract address
    /// @dev Error thrown if: new contract address is address(0)
    /// @dev Should only be called by contract owner
    /// @param _newGate =  new deBridge gate contract address
    /// @custom:event = emits UpdatedGateAddress event with new gate address

    function updateGateAddress(address _newGate) external {
        // LibDiamond.enforceIsContractOwner();
        if (_newGate == address(0)) revert ZeroAddress();

        deBridgeGate = _newGate;
        emit UpdatedGateAddress(_newGate);
    }

    /// @notice Returns the current chain id

    function getChainId() public view returns (uint256 chainId) {
        return block.chainid;
    }
}
