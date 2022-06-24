// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

interface IOraclesManager {
    /* ========== STRUCTS ========== */

    struct OracleInfo {
        bool exist; // exist oracle
        bool isValid; // is valid oracle
        bool required; // without this oracle (DSRM), the transfer will not be confirmed
    }

    /* ========== EVENTS ========== */
    /// @dev Emitted when an oracle is added
    /// @param oracle Address of an added oracle
    /// @param required Is this oracle's signature required for every transfer
    event AddOracle(address oracle, bool required);
    /// @dev Emitted when an oracle is updated
    /// @param oracle Address of an updated oracle
    /// @param required Is this oracle's signature required for every transfer
    /// @param isValid Is this oracle valid, i.e. should it be treated as an oracle
    event UpdateOracle(address oracle, bool required, bool isValid);
    /// @dev Emitted once the submission is confirmed by min required amount of oracles
    event DeployApproved(bytes32 deployId);
    /// @dev Emitted once the submission is confirmed by min required amount of oracles
    event SubmissionApproved(bytes32 submissionId);
}
