// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.7;

import "./OraclesManager.sol";
import "../interfaces/ISignatureVerifier.sol";
import "../libraries/SignatureUtil.sol";

/// @dev It's used to verify that a transfer is signed by oracles.
contract SignatureVerifier is OraclesManager, ISignatureVerifier {
    using SignatureUtil for bytes;
    using SignatureUtil for bytes32;

    /* ========== STATE VARIABLES ========== */
    /// @dev Number of required confirmations per block after the extra check is enabled
    uint8 public confirmationThreshold;
    /// @dev submissions count in current block
    uint40 public submissionsInBlock;
    /// @dev Current block
    uint40 public currentBlock;

    /// @dev Debridge gate address
    address public debridgeAddress;

    /* ========== ERRORS ========== */

    error DeBridgeGateBadRole();
    error NotConfirmedByRequiredOracles();
    error NotConfirmedThreshold();
    error SubmissionNotConfirmed();
    error DuplicateSignatures();

    /* ========== MODIFIERS ========== */

    modifier onlyDeBridgeGate() {
        if (msg.sender != debridgeAddress) revert DeBridgeGateBadRole();
        _;
    }

    /* ========== CONSTRUCTOR  ========== */

    /// @dev Constructor that initializes the most important configurations.
    /// @param _minConfirmations Common confirmations count.
    /// @param _confirmationThreshold Confirmations per block after the extra check is enabled.
    /// @param _excessConfirmations Confirmations count in case of excess activity.
    function initialize(
        uint8 _minConfirmations,
        uint8 _confirmationThreshold,
        uint8 _excessConfirmations,
        address _debridgeAddress
    ) public initializer {
        OraclesManager.initialize(_minConfirmations, _excessConfirmations);
        confirmationThreshold = _confirmationThreshold;
        debridgeAddress = _debridgeAddress;
    }


    /// @inheritdoc ISignatureVerifier
    function submit(
        bytes32 _submissionId,
        bytes memory _signatures,
        uint8 _excessConfirmations
    ) external override onlyDeBridgeGate {
        //Need confirmation to confirm submission
        uint8 needConfirmations = _excessConfirmations > minConfirmations
            ? _excessConfirmations
            : minConfirmations;
        // Count of required(DSRM) oracles confirmation
        uint256 currentRequiredOraclesCount;
        // stack variable to aggregate confirmations and write to storage once
        uint8 confirmations;
        uint256 signaturesCount = _countSignatures(_signatures);
        address[] memory validators = new address[](signaturesCount);
        for (uint256 i = 0; i < signaturesCount; i++) {
            (bytes32 r, bytes32 s, uint8 v) = _signatures.parseSignature(i * 65);
            address oracle = ecrecover(_submissionId.getUnsignedMsg(), v, r, s);
            if (getOracleInfo[oracle].isValid) {
                for (uint256 k = 0; k < i; k++) {
                    if (validators[k] == oracle) revert DuplicateSignatures();
                }
                validators[i] = oracle;

                confirmations += 1;
                emit Confirmed(_submissionId, oracle);
                if (getOracleInfo[oracle].required) {
                    currentRequiredOraclesCount += 1;
                }
                if (
                    confirmations >= needConfirmations &&
                    currentRequiredOraclesCount >= requiredOraclesCount
                ) {
                    break;
                }
            }
        }

        if (currentRequiredOraclesCount != requiredOraclesCount)
            revert NotConfirmedByRequiredOracles();

        if (confirmations >= minConfirmations) {
            if (currentBlock == uint40(block.number)) {
                submissionsInBlock += 1;
            } else {
                currentBlock = uint40(block.number);
                submissionsInBlock = 1;
            }
            emit SubmissionApproved(_submissionId);
        }

        if (submissionsInBlock > confirmationThreshold) {
            if (confirmations < excessConfirmations) revert NotConfirmedThreshold();
        }

        if (confirmations < needConfirmations) revert SubmissionNotConfirmed();
    }

    /* ========== ADMIN ========== */

    /// @dev Sets minimal required confirmations.
    /// @param _confirmationThreshold Confirmation info.
    function setThreshold(uint8 _confirmationThreshold) external onlyAdmin {
        if (_confirmationThreshold == 0) revert WrongArgument();
        confirmationThreshold = _confirmationThreshold;
    }

    /// @dev Sets core debridge conrtact address.
    /// @param _debridgeAddress Debridge address.
    function setDebridgeAddress(address _debridgeAddress) external onlyAdmin {
        debridgeAddress = _debridgeAddress;
    }

    /* ========== VIEW ========== */

    /// @dev Check is valid signature
    /// @param _submissionId Submission identifier.
    /// @param _signature signature by oracle.
    function isValidSignature(bytes32 _submissionId, bytes memory _signature)
        external
        view
        returns (bool)
    {
        (bytes32 r, bytes32 s, uint8 v) = _signature.splitSignature();
        address oracle = ecrecover(_submissionId.getUnsignedMsg(), v, r, s);
        return getOracleInfo[oracle].isValid;
    }

    /* ========== INTERNAL ========== */

    function _countSignatures(bytes memory _signatures) internal pure returns (uint256) {
        return _signatures.length % 65 == 0 ? _signatures.length / 65 : 0;
    }

    // ============ Version Control ============
    /// @dev Get this contract's version
    function version() external pure returns (uint256) {
        return 201; // 2.0.1
    }
}
