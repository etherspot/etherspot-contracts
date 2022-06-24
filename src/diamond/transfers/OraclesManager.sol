// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.7;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "../interfaces/IOraclesManager.sol";

/// @dev The base contract for oracles management. Allows adding/removing oracles,
/// managing the minimal required amount of confirmations.
contract OraclesManager is Initializable, AccessControlUpgradeable, IOraclesManager {
    /* ========== STATE VARIABLES ========== */

    /// @dev Minimal required confirmations
    uint8 public minConfirmations;
    /// @dev Minimal required confirmations in case of too many confirmations
    uint8 public excessConfirmations;
    /// @dev Count of required oracles
    uint8 public requiredOraclesCount;
    /// @dev Oracle addresses
    address[] public oracleAddresses;
    /// @dev Maps an oracle address to the oracle details
    mapping(address => OracleInfo) public getOracleInfo;

    /* ========== ERRORS ========== */

    error AdminBadRole();
    error OracleBadRole();

    error OracleAlreadyExist();
    error OracleNotFound();

    error WrongArgument();
    error LowMinConfirmations();


    /* ========== MODIFIERS ========== */

    modifier onlyAdmin() {
        if (!hasRole(DEFAULT_ADMIN_ROLE, msg.sender)) revert AdminBadRole();
        _;
    }
    modifier onlyOracle() {
        if (!getOracleInfo[msg.sender].isValid) revert OracleBadRole();
        _;
    }

    /* ========== CONSTRUCTOR  ========== */

    /// @dev Constructor that initializes the most important configurations.
    /// @param _minConfirmations Minimal required confirmations.
    /// @param _excessConfirmations Minimal required confirmations in case of too many confirmations.
    function initialize(uint8 _minConfirmations, uint8 _excessConfirmations) internal {
        if (_minConfirmations == 0 || _excessConfirmations < _minConfirmations) revert LowMinConfirmations();
        minConfirmations = _minConfirmations;
        excessConfirmations = _excessConfirmations;
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /* ========== ADMIN ========== */

    /// @dev Sets minimal required confirmations.
    /// @param _minConfirmations Minimal required confirmations.
    function setMinConfirmations(uint8 _minConfirmations) external onlyAdmin {
        if (_minConfirmations < oracleAddresses.length / 2 + 1) revert LowMinConfirmations();
        minConfirmations = _minConfirmations;
    }

    /// @dev Sets minimal required confirmations in case of too many confirmations.
    /// @param _excessConfirmations Minimal required confirmations in case of too many confirmations.
    function setExcessConfirmations(uint8 _excessConfirmations) external onlyAdmin {
        if (_excessConfirmations < minConfirmations) revert LowMinConfirmations();
        excessConfirmations = _excessConfirmations;
    }

    /// @dev Add oracles.
    /// @param _oracles Oracles' addresses.
    /// @param _required A transfer will not be confirmed without oracles having required set to true,
    function addOracles(
        address[] memory _oracles,
        bool[] memory _required
    ) external onlyAdmin {
        if (_oracles.length != _required.length) revert WrongArgument();
        if (minConfirmations < (oracleAddresses.length +  _oracles.length) / 2 + 1) revert LowMinConfirmations();

        for (uint256 i = 0; i < _oracles.length; i++) {
            OracleInfo storage oracleInfo = getOracleInfo[_oracles[i]];
            if (oracleInfo.exist) revert OracleAlreadyExist();

            oracleAddresses.push(_oracles[i]);

            if (_required[i]) {
                requiredOraclesCount += 1;
            }

            oracleInfo.exist = true;
            oracleInfo.isValid = true;
            oracleInfo.required = _required[i];

            emit AddOracle(_oracles[i], _required[i]);
        }
    }

    /// @dev Update an oracle.
    /// @param _oracle An oracle address.
    /// @param _isValid Is this oracle valid, i.e. should it be treated as an oracle.
    /// @param _required If set to true a transfer will not be confirmed without this oracle.
    function updateOracle(
        address _oracle,
        bool _isValid,
        bool _required
    ) external onlyAdmin {
        //If oracle is invalid, it must be not required
        if (!_isValid && _required) revert WrongArgument();

        OracleInfo storage oracleInfo = getOracleInfo[_oracle];
        if (!oracleInfo.exist) revert OracleNotFound();

        if (oracleInfo.required && !_required) {
            requiredOraclesCount -= 1;
        } else if (!oracleInfo.required && _required) {
            requiredOraclesCount += 1;
        }
        if (oracleInfo.isValid && !_isValid) {
            // remove oracle from oracleAddresses array without keeping an order
            for (uint256 i = 0; i < oracleAddresses.length; i++) {
                if (oracleAddresses[i] == _oracle) {
                    oracleAddresses[i] = oracleAddresses[oracleAddresses.length - 1];
                    oracleAddresses.pop();
                    break;
                }
            }
        } else if (!oracleInfo.isValid && _isValid) {
            if (minConfirmations < (oracleAddresses.length + 1) / 2 + 1) revert LowMinConfirmations();
            oracleAddresses.push(_oracle);
        }
        oracleInfo.isValid = _isValid;
        oracleInfo.required = _required;
        emit UpdateOracle(_oracle, _required, _isValid);
    }
}
