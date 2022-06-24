// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "../transfers/DeBridgeGate.sol";

contract MockDeBridgeGate is DeBridgeGate {
    uint256 public chainId;

    /* ========== CONSTRUCTOR  ========== */

    /// @dev Constructor that initializes the most important configurations.
    /// @param _signatureVerifier Aggregator address to verify signatures
    function initializeMock(
        uint8 _excessConfirmations,
        address _signatureVerifier,
        address _callProxy,
        IWETH _weth,
        address _feeProxy,
        address _deBridgeTokenDeployer,
        address _defiController,
        uint256 overrideChainId
    ) public initializer {
        chainId = overrideChainId;

        signatureVerifier = _signatureVerifier;

        callProxy = _callProxy;
        defiController = _defiController;
        excessConfirmations = _excessConfirmations;
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);

        weth = _weth;
        feeProxy = _feeProxy;
        deBridgeTokenDeployer = _deBridgeTokenDeployer;

        flashFeeBps = 10;
    }

    // return overrided chain id
    function getChainId() public view override returns (uint256 cid) {
        return chainId;
    }

    /// @dev Calculate submission id.
    /// @param _debridgeId Asset identifier.
    /// @param _chainIdFrom Chain identifier of the chain where tokens are sent from.
    /// @param _chainIdTo Chain identifier of the chain where tokens are sent to.
    /// @param _receiver Receiver address.
    /// @param _amount Amount of the transfered asset (note: the fee can be applyed).
    /// @param _nonce Submission id.
    function getSubmissionId(
        bytes32 _debridgeId,
        uint256 _chainIdFrom,
        uint256 _chainIdTo,
        uint256 _amount,
        address _receiver,
        uint256 _nonce
    ) public pure returns (bytes32) {
        return
            keccak256(
                abi.encodePacked(SUBMISSION_PREFIX, _debridgeId, _chainIdFrom, _chainIdTo, _amount, _receiver, _nonce)
            );
    }

    // function getEncodePackedFROM(
    //     bytes memory _nativeSender,
    //     bytes32 _debridgeId,
    //     uint256 _chainIdFrom,
    //     uint256 _amount,
    //     address _receiver,
    //     uint256 _nonce,//hello
    //     address _fallbackAddress,
    //     uint256 _executionFee,
    //     bytes memory _data
    // ) public view returns (bytes memory) {
    //     return
    //             abi.encodePacked(
    //                 // To avoid error:
    //                 // Variable value0 is 1 slot(s) too deep inside the stack.
    //                 abi.encodePacked(
    //                     //TODO: ALARM CHECK that we have the same abi.encodePacked from and TO getAutoSubmissionIdTo
    //                     _nativeSender,
    //                     _debridgeId,
    //                     _chainIdFrom
    //                 ),
    //                 getChainId(),//_chainIdTo,
    //                 _amount,
    //                 _receiver,
    //                 _nonce,
    //                 _fallbackAddress,
    //                 _executionFee,
    //                 _data
    //             );
    // }

    // function getEncodePackedTO(
    //     bytes32 _debridgeId,
    //     uint256 _chainIdTo,
    //     uint256 _amount,
    //     bytes memory _receiver,
    //     // uint256 _nonce,
    //     bytes memory _fallbackAddress,
    //     uint256 _executionFee,
    //     bytes memory _data
    // ) public view returns  (bytes memory) {
    //     return
    //             abi.encodePacked(
    //                 address(this), // only for test
    //                 // msg.sender,
    //                 _debridgeId,
    //                 getChainId(),
    //                 _chainIdTo,
    //                 _amount,
    //                 _receiver,
    //                 nonce, //_nonce,
    //                 _fallbackAddress,
    //                 _executionFee,
    //                 _data
    //             );
    // }
}
