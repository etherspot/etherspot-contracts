// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

interface ISignatureVerifier {

    /* ========== EVENTS ========== */

    /// @dev Emitted once the submission is confirmed by one oracle.
    event Confirmed(bytes32 submissionId, address operator);
    /// @dev Emitted once the submission is confirmed by min required amount of oracles.
    event DeployConfirmed(bytes32 deployId, address operator);

    /* ========== FUNCTIONS ========== */

    /// @dev Check confirmation (validate signatures) for the transfer request.
    /// @param _submissionId Submission identifier.
    /// @param _signatures Array of signatures by oracles.
    /// @param _excessConfirmations override min confirmations count
    function submit(
        bytes32 _submissionId,
        bytes memory _signatures,
        uint8 _excessConfirmations
    ) external;

}
