// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/IERC20MetadataUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "../interfaces/IERC20Permit.sol";
import "../interfaces/IDeBridgeToken.sol";
import "../interfaces/IDeBridgeTokenDeployer.sol";
import "../interfaces/ISignatureVerifier.sol";
import "../interfaces/IWETH.sol";
import "../interfaces/IDeBridgeGate.sol";
import "../interfaces/ICallProxy.sol";
import "../interfaces/IFlashCallback.sol";
import "../libraries/SignatureUtil.sol";
import "../libraries/Flags.sol";
import "../interfaces/IWethGate.sol";

/// @dev Contract for assets transfers. The user can transfer the asset to any of the approved chains.
/// The admin manages the assets, fees and other important protocol parameters.
contract DeBridgeGate is
    Initializable,
    AccessControlUpgradeable,
    PausableUpgradeable,
    ReentrancyGuardUpgradeable,
    IDeBridgeGate
{
    using SafeERC20Upgradeable for IERC20Upgradeable;
    using SignatureUtil for bytes;
    using Flags for uint256;

    /* ========== STATE VARIABLES ========== */

    /// @dev Basis points or bps, set to 10 000 (equal to 1/10000). Used to express relative values (fees)
    uint256 public constant BPS_DENOMINATOR = 10000;
    /// @dev Role allowed to stop transfers
    bytes32 public constant GOVMONITORING_ROLE = keccak256("GOVMONITORING_ROLE");

    /// @dev prefix to calculation submissionId
    uint256 public constant SUBMISSION_PREFIX = 1;
    /// @dev prefix to calculation deployId
    uint256 public constant DEPLOY_PREFIX = 2;

    /// @dev Address of IDeBridgeTokenDeployer contract
    address public deBridgeTokenDeployer;
    /// @dev Current signature verifier address to verify signatures.
    address public signatureVerifier;
    /// @dev Minimal required confirmations in case sent amount is big, have no effect if less than SignatureVerifier.minConfirmations
    uint8 public excessConfirmations;
    /// @dev Flash loan fee in basis points (1/10000)
    uint256 public flashFeeBps;
    /// @dev outgoing submissions count
    uint256 public nonce;

    /// @dev Maps debridgeId (see getDebridgeId) => bridge-specific information.
    mapping(bytes32 => DebridgeInfo) public getDebridge;
    /// @dev Maps debridgeId (see getDebridgeId) => fee information
    mapping(bytes32 => DebridgeFeeInfo) public getDebridgeFeeInfo;
    /// @dev Returns whether the transfer with the submissionId was claimed.
    /// submissionId is generated in getSubmissionIdFrom
    mapping(bytes32 => bool) public override isSubmissionUsed;
    /// @dev Returns whether the transfer with the submissionId is blocked.
    mapping(bytes32 => bool) public isBlockedSubmission;
    /// @dev Maps debridgeId (see getDebridgeId) to threshold amount after which
    /// Math.max(excessConfirmations,SignatureVerifier.minConfirmations) is used instead of
    /// SignatureVerifier.minConfirmations
    mapping(bytes32 => uint256) public getAmountThreshold;
    /// @dev Whether the chain for the asset is supported to send
    mapping(uint256 => ChainSupportInfo) public getChainToConfig;
    /// @dev Whether the chain for the asset is supported to claim
    mapping(uint256 => ChainSupportInfo) public getChainFromConfig;
    /// @dev Fee discount for address
    mapping(address => DiscountInfo) public feeDiscount;
    /// @dev Returns native token info by wrapped token address
    mapping(address => TokenInfo) public override getNativeInfo;

    /// @dev Return DefiController that can supply liquidity to staking strategies (AAVE, Compound, etc.)
    address public defiController;
    /// @dev Returns proxy to convert the collected fees and transfer to Ethereum network to treasury
    address public feeProxy;
    /// @dev Returns address of the proxy to execute user's calls.
    address public callProxy;
    /// @dev Returns contract for wrapped native token.
    IWETH public weth;

    /// @dev Contract address that can override globalFixedNativeFee
    address public feeContractUpdater;

    /// @dev Fallback fixed fee in native asset, used if a chain fixed fee is set to 0
    uint256 public globalFixedNativeFee;
    /// @dev Fallback transfer fee in BPS, used if a chain transfer fee is set to 0
    uint16 public globalTransferFeeBps;

    /// @dev WethGate contract, that is used for weth withdraws affected by EIP1884
    IWethGate public wethGate;
    /// @dev Locker for claim method
    uint256 public lockedClaim;

    /* ========== ERRORS ========== */

    error FeeProxyBadRole();
    error DefiControllerBadRole();
    error FeeContractUpdaterBadRole();
    error AdminBadRole();
    error GovMonitoringBadRole();
    error DebridgeNotFound();

    error WrongChainTo();
    error WrongChainFrom();
    error WrongArgument();
    error WrongAutoArgument();

    error TransferAmountTooHigh();

    error NotSupportedFixedFee();
    error TransferAmountNotCoverFees();
    error InvalidTokenToSend();

    error SubmissionUsed();
    error SubmissionBlocked();

    error AssetAlreadyExist();
    error ZeroAddress();

    error ProposedFeeTooHigh();
    error FlashFeeNotPaid();

    error NotEnoughReserves();
    error EthTransferFailed();

    /* ========== MODIFIERS ========== */

    modifier onlyFeeProxy() {
        if (feeProxy != msg.sender) revert FeeProxyBadRole();
        _;
    }

    modifier onlyDefiController() {
        if (defiController != msg.sender) revert DefiControllerBadRole();
        _;
    }

    modifier onlyFeeContractUpdater() {
        if (feeContractUpdater != msg.sender) revert FeeContractUpdaterBadRole();
        _;
    }

    modifier onlyAdmin() {
        if (!hasRole(DEFAULT_ADMIN_ROLE, msg.sender)) revert AdminBadRole();
        _;
    }

    modifier onlyGovMonitoring() {
        if (!hasRole(GOVMONITORING_ROLE, msg.sender)) revert GovMonitoringBadRole();
        _;
    }

    /* ========== CONSTRUCTOR  ========== */

    /// @dev Constructor that initializes the most important configurations.
    /// @param _excessConfirmations minimal required confirmations in case of too many confirmations
    /// @param _weth wrapped native token contract
    function initialize(
        uint8 _excessConfirmations,
        IWETH _weth
    ) public initializer {
        excessConfirmations = _excessConfirmations;
        weth = _weth;

        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        __ReentrancyGuard_init();
    }

    /* ========== send, claim ========== */

    /// @inheritdoc IDeBridgeGate
    function send(
        address _tokenAddress,
        uint256 _amount,
        uint256 _chainIdTo,
        bytes memory _receiver,
        bytes memory _permit,
        bool _useAssetFee,
        uint32 _referralCode,
        bytes calldata _autoParams
    ) external payable override nonReentrant whenNotPaused {
        bytes32 debridgeId;
        FeeParams memory feeParams;
        uint256 amountAfterFee;
        // the amount will be reduced by the protocol fee
        (amountAfterFee, debridgeId, feeParams) = _send(
            _permit,
            _tokenAddress,
            _amount,
            _chainIdTo,
            _useAssetFee
        );

        SubmissionAutoParamsTo memory autoParams;

        // Validate Auto Params
        if (_autoParams.length > 0) {
            autoParams = abi.decode(_autoParams, (SubmissionAutoParamsTo));
            autoParams.executionFee = _normalizeTokenAmount(_tokenAddress, autoParams.executionFee);
            if (autoParams.executionFee > _amount) revert ProposedFeeTooHigh();
            if (autoParams.data.length > 0 && autoParams.fallbackAddress.length == 0 ) revert WrongAutoArgument();
        }

        amountAfterFee -= autoParams.executionFee;

        // round down amount in order not to bridge dust
        amountAfterFee = _normalizeTokenAmount(_tokenAddress, amountAfterFee);

        _publishSubmission(
            debridgeId,
            _chainIdTo,
            amountAfterFee,
            _receiver,
            feeParams,
            _referralCode,
            autoParams,
            _autoParams.length > 0
        );
    }

    /// @inheritdoc IDeBridgeGate
    function claim(
        bytes32 _debridgeId,
        uint256 _amount,
        uint256 _chainIdFrom,
        address _receiver,
        uint256 _nonce,
        bytes calldata _signatures,
        bytes calldata _autoParams
    ) external override whenNotPaused {
        if (!getChainFromConfig[_chainIdFrom].isSupported) revert WrongChainFrom();

        SubmissionAutoParamsFrom memory autoParams;
        if (_autoParams.length > 0) {
            autoParams = abi.decode(_autoParams, (SubmissionAutoParamsFrom));
        }

        bytes32 submissionId = getSubmissionIdFrom(
            _debridgeId,
            _chainIdFrom,
            _amount,
            _receiver,
            _nonce,
            autoParams,
            _autoParams.length > 0,
            msg.sender
        );

        // check if submission already claimed
        if (isSubmissionUsed[submissionId]) revert SubmissionUsed();
        isSubmissionUsed[submissionId] = true;

        _checkConfirmations(submissionId, _debridgeId, _amount, _signatures);

        bool isNativeToken =_claim(
            submissionId,
            _debridgeId,
            _receiver,
            _amount,
            _chainIdFrom,
            autoParams
        );

        emit Claimed(
            submissionId,
            _debridgeId,
            _amount,
            _receiver,
            _nonce,
            _chainIdFrom,
            _autoParams,
            isNativeToken
        );
    }

    /// @inheritdoc IDeBridgeGate
    function flash(
        address _tokenAddress,
        address _receiver,
        uint256 _amount,
        bytes memory _data
    ) external override nonReentrant whenNotPaused
    {
        bytes32 debridgeId = getDebridgeId(getChainId(), _tokenAddress);
        if (!getDebridge[debridgeId].exist) revert DebridgeNotFound();
        uint256 currentFlashFee = (_amount * flashFeeBps) / BPS_DENOMINATOR;
        uint256 balanceBefore = IERC20Upgradeable(_tokenAddress).balanceOf(address(this));

        IERC20Upgradeable(_tokenAddress).safeTransfer(_receiver, _amount);
        IFlashCallback(msg.sender).flashCallback(currentFlashFee, _data);

        uint256 balanceAfter = IERC20Upgradeable(_tokenAddress).balanceOf(address(this));
        if (balanceBefore + currentFlashFee > balanceAfter) revert FlashFeeNotPaid();

        uint256 paid = balanceAfter - balanceBefore;
        getDebridgeFeeInfo[debridgeId].collectedFees += paid;
        emit Flash(msg.sender, _tokenAddress, _receiver, _amount, paid);
    }

    /// @dev Deploy a deToken(DeBridgeTokenProxy) for an asset
    /// @param _nativeTokenAddress A token address on a native chain
    /// @param _nativeChainId The token native chain's id
    /// @param _name The token's name
    /// @param _symbol The token's symbol
    /// @param _decimals The token's decimals
    /// @param _signatures Validators' signatures
    function deployNewAsset(
        bytes memory _nativeTokenAddress,
        uint256 _nativeChainId,
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        bytes memory _signatures
    ) external nonReentrant whenNotPaused{
        bytes32 debridgeId = getbDebridgeId(_nativeChainId, _nativeTokenAddress);

        if (getDebridge[debridgeId].exist) revert AssetAlreadyExist();

        bytes32 deployId = getDeployId(debridgeId, _name, _symbol, _decimals);

        // verify signatures
        ISignatureVerifier(signatureVerifier).submit(deployId, _signatures, excessConfirmations);

        address deBridgeTokenAddress = IDeBridgeTokenDeployer(deBridgeTokenDeployer)
            .deployAsset(debridgeId, _name, _symbol, _decimals);

        _addAsset(debridgeId, deBridgeTokenAddress, _nativeTokenAddress, _nativeChainId);
    }

    /// @dev Update native fix fee. Called by our fee update contract
    /// @param _globalFixedNativeFee  new value
    function autoUpdateFixedNativeFee(
        uint256 _globalFixedNativeFee
    ) external onlyFeeContractUpdater {
        globalFixedNativeFee = _globalFixedNativeFee;
        emit FixedNativeFeeAutoUpdated(_globalFixedNativeFee);
    }

    /* ========== ADMIN ========== */

    /// @dev Update asset's fees.
    /// @param _chainIds Chain identifiers.
    /// @param _chainSupportInfo Chain support info.
    /// @param _isChainFrom is true for editing getChainFromConfig.
    function updateChainSupport(
        uint256[] memory _chainIds,
        ChainSupportInfo[] memory _chainSupportInfo,
        bool _isChainFrom
    ) external onlyAdmin {
        if (_chainIds.length != _chainSupportInfo.length) revert WrongArgument();
        for (uint256 i = 0; i < _chainIds.length; i++) {
            if(_isChainFrom){
                getChainFromConfig[_chainIds[i]] = _chainSupportInfo[i];
            }
            else {
                getChainToConfig[_chainIds[i]] = _chainSupportInfo[i];
            }
            emit ChainsSupportUpdated(_chainIds[i], _chainSupportInfo[i], _isChainFrom);
        }
    }

    /// @dev Update fallbacks for fixed fee in native asset and transfer fee
    /// @param _globalFixedNativeFee Fallback fixed fee in native asset, used if a chain fixed fee is set to 0
    /// @param _globalTransferFeeBps Fallback transfer fee in BPS, used if a chain transfer fee is set to 0
    function updateGlobalFee(
        uint256 _globalFixedNativeFee,
        uint16 _globalTransferFeeBps
    ) external onlyAdmin {
        globalFixedNativeFee = _globalFixedNativeFee;
        globalTransferFeeBps = _globalTransferFeeBps;
        emit FixedNativeFeeUpdated(_globalFixedNativeFee, _globalTransferFeeBps);
    }

    /// @dev Update asset's fees.
    /// @param _debridgeId Asset identifier.
    /// @param _supportedChainIds Chain identifiers.
    /// @param _assetFeesInfo Chain support info.
    function updateAssetFixedFees(
        bytes32 _debridgeId,
        uint256[] memory _supportedChainIds,
        uint256[] memory _assetFeesInfo
    ) external onlyAdmin {
        if (_supportedChainIds.length != _assetFeesInfo.length) revert WrongArgument();
        DebridgeFeeInfo storage debridgeFee = getDebridgeFeeInfo[_debridgeId];
        for (uint256 i = 0; i < _supportedChainIds.length; i++) {
            debridgeFee.getChainFee[_supportedChainIds[i]] = _assetFeesInfo[i];
        }
    }

    /// @dev Update minimal amount of required signatures, must be > SignatureVerifier.minConfirmations to have an effect
    /// @param _excessConfirmations Minimal amount of required signatures
    function updateExcessConfirmations(uint8 _excessConfirmations) external onlyAdmin {
        if (_excessConfirmations == 0) revert WrongArgument();
        excessConfirmations = _excessConfirmations;
    }

    /// @dev Set support for the chains where the token can be transferred.
    /// @param _chainId Chain id where tokens are sent.
    /// @param _isSupported Whether the token is transferable to the other chain.
    /// @param _isChainFrom is true for editing getChainFromConfig.
    function setChainSupport(uint256 _chainId, bool _isSupported, bool _isChainFrom) external onlyAdmin {
        if (_isChainFrom) {
            getChainFromConfig[_chainId].isSupported = _isSupported;
        }
        else {
            getChainToConfig[_chainId].isSupported = _isSupported;
        }
        emit ChainSupportUpdated(_chainId, _isSupported, _isChainFrom);
    }

    /// @dev Set address of the call proxy.
    /// @param _callProxy Address of the proxy that executes external calls.
    function setCallProxy(address _callProxy) external onlyAdmin {
        callProxy = _callProxy;
        emit CallProxyUpdated(_callProxy);
    }

    /// @dev Update specific asset's bridge parameters.
    /// @param _debridgeId Asset identifier.
    /// @param _maxAmount Maximum amount of current chain token to be wrapped.
    /// @param _minReservesBps Minimal reserve ration in BPS.
    /// @param _amountThreshold Threshold amount after which Math.max(excessConfirmations,SignatureVerifier.minConfirmations) is used instead of SignatureVerifier.minConfirmations
    function updateAsset(
        bytes32 _debridgeId,
        uint256 _maxAmount,
        uint16 _minReservesBps,
        uint256 _amountThreshold
    ) external onlyAdmin {
        if (_minReservesBps > BPS_DENOMINATOR) revert WrongArgument();
        DebridgeInfo storage debridge = getDebridge[_debridgeId];
        // don't check existence of debridge - it allows to setup asset before first transfer
        debridge.maxAmount = _maxAmount;
        debridge.minReservesBps = _minReservesBps;
        getAmountThreshold[_debridgeId] = _amountThreshold;
    }


    /// @dev Set signature verifier address.
    /// @param _verifier Signature verifier address.
    function setSignatureVerifier(address _verifier) external onlyAdmin {
        signatureVerifier = _verifier;
    }

    /// @dev Set asset deployer address.
    /// @param _deBridgeTokenDeployer Asset deployer address.
    function setDeBridgeTokenDeployer(address _deBridgeTokenDeployer) external onlyAdmin {
        deBridgeTokenDeployer = _deBridgeTokenDeployer;
    }

    /// @dev Set defi controller.
    /// @param _defiController Defi controller address.
    function setDefiController(address _defiController) external onlyAdmin {
        defiController = _defiController;
    }

    /// @dev Set fee contract updater, that can update fix native fee
    /// @param _value new contract address.
    function setFeeContractUpdater(address _value) external onlyAdmin {
        feeContractUpdater = _value;
    }

    /// @dev Set wethGate contract, that uses for weth withdraws affected by EIP1884
    /// @param _wethGate address of new wethGate contract.
    function setWethGate(IWethGate _wethGate) external onlyAdmin {
        wethGate = _wethGate;
    }

    /// @dev Stop all transfers.
    function pause() external onlyGovMonitoring {
        _pause();
    }

    /// @dev Allow transfers.
    function unpause() external onlyAdmin {
        _unpause();
    }

    /// @inheritdoc IDeBridgeGate
    function withdrawFee(bytes32 _debridgeId) external override nonReentrant onlyFeeProxy {
        DebridgeFeeInfo storage debridgeFee = getDebridgeFeeInfo[_debridgeId];
        // Amount for transfer to treasury
        uint256 amount = debridgeFee.collectedFees - debridgeFee.withdrawnFees;

        if (amount == 0) revert NotEnoughReserves();

        debridgeFee.withdrawnFees += amount;

        if (_debridgeId == getDebridgeId(getChainId(), address(0))) {
            _safeTransferETH(feeProxy, amount);
        } else {
            // don't need this check as we check that amount is not zero
            // if (!getDebridge[_debridgeId].exist) revert DebridgeNotFound();
            IERC20Upgradeable(getDebridge[_debridgeId].tokenAddress).safeTransfer(feeProxy, amount);
        }
        emit WithdrawnFee(_debridgeId, amount);
    }

    /// @inheritdoc IDeBridgeGate
    function requestReserves(address _tokenAddress, uint256 _amount)
        external
        override
        onlyDefiController
        nonReentrant
    {
        bytes32 debridgeId = getDebridgeId(getChainId(), _tokenAddress);
        DebridgeInfo storage debridge = getDebridge[debridgeId];
        if (!debridge.exist) revert DebridgeNotFound();
        uint256 minReserves = (debridge.balance * debridge.minReservesBps) / BPS_DENOMINATOR;

        if (minReserves + _amount > IERC20Upgradeable(_tokenAddress).balanceOf(address(this)))
            revert NotEnoughReserves();

        debridge.lockedInStrategies += _amount;
        IERC20Upgradeable(_tokenAddress).safeTransfer(defiController, _amount);
    }

    /// @inheritdoc IDeBridgeGate
    function returnReserves(address _tokenAddress, uint256 _amount)
        external
        override
        onlyDefiController
        nonReentrant
    {
        bytes32 debridgeId = getDebridgeId(getChainId(), _tokenAddress);
        DebridgeInfo storage debridge = getDebridge[debridgeId];
        if (!debridge.exist) revert DebridgeNotFound();
        debridge.lockedInStrategies -= _amount;
        IERC20Upgradeable(debridge.tokenAddress).safeTransferFrom(
            defiController,
            address(this),
            _amount
        );
    }

    /// @dev Set fee converter proxy.
    /// @param _feeProxy Fee proxy address.
    function setFeeProxy(address _feeProxy) external onlyAdmin {
        feeProxy = _feeProxy;
    }

    /// @dev Block or unblock a list of submissions
    /// @param _submissionIds Ids of submissions to block/unblock
    /// @param isBlocked True to block, false to unblock
    function blockSubmission(bytes32[] memory _submissionIds, bool isBlocked) external onlyAdmin {
        for (uint256 i = 0; i < _submissionIds.length; i++) {
            isBlockedSubmission[_submissionIds[i]] = isBlocked;
            if (isBlocked) {
                emit Blocked(_submissionIds[i]);
            } else {
                emit Unblocked(_submissionIds[i]);
            }
        }
    }

    /// @dev Update flash fees.
    /// @param _flashFeeBps new fee in BPS
    function updateFlashFee(uint256 _flashFeeBps) external onlyAdmin {
        if (_flashFeeBps > BPS_DENOMINATOR) revert WrongArgument();
        flashFeeBps = _flashFeeBps;
    }

    /// @dev Update discount.
    /// @param _address customer address
    /// @param _discountFixBps  fix discount in BPS
    /// @param _discountTransferBps transfer % discount in BPS
    function updateFeeDiscount(
        address _address,
        uint16 _discountFixBps,
        uint16 _discountTransferBps
    ) external onlyAdmin {
        if (_address == address(0) ||
            _discountFixBps > BPS_DENOMINATOR ||
            _discountTransferBps > BPS_DENOMINATOR
        ) revert WrongArgument();
        DiscountInfo storage discountInfo = feeDiscount[_address];
        discountInfo.discountFixBps = _discountFixBps;
        discountInfo.discountTransferBps = _discountTransferBps;
    }

    // we need to accept ETH sends to unwrap WETH
    receive() external payable {
        // assert(msg.sender == address(weth)); // only accept ETH via fallback from the WETH contract
    }

    /* ========== INTERNAL ========== */

    function _checkConfirmations(
        bytes32 _submissionId,
        bytes32 _debridgeId,
        uint256 _amount,
        bytes calldata _signatures
    ) internal {
        if (isBlockedSubmission[_submissionId]) revert SubmissionBlocked();
        // inside check is confirmed
        ISignatureVerifier(signatureVerifier).submit(
            _submissionId,
            _signatures,
            _amount >= getAmountThreshold[_debridgeId] ? excessConfirmations : 0
        );
    }

    /// @dev Add support for the asset.
    /// @param _debridgeId Asset identifier.
    /// @param _tokenAddress Address of the asset on the current chain.
    /// @param _nativeAddress Address of the asset on the native chain.
    /// @param _nativeChainId Native chain id.
    function _addAsset(
        bytes32 _debridgeId,
        address _tokenAddress,
        bytes memory _nativeAddress,
        uint256 _nativeChainId
    ) internal {
        DebridgeInfo storage debridge = getDebridge[_debridgeId];

        if (debridge.exist) revert AssetAlreadyExist();
        if (_tokenAddress == address(0)) revert ZeroAddress();

        debridge.exist = true;
        debridge.tokenAddress = _tokenAddress;
        debridge.chainId = _nativeChainId;
        // Don't override if the admin already set maxAmount in updateAsset method before
        if (debridge.maxAmount == 0) {
            debridge.maxAmount = type(uint256).max;
        }
        // set minReservesBps to 100% to prevent using new asset by DeFiController by default
        debridge.minReservesBps = uint16(BPS_DENOMINATOR);
        if (getAmountThreshold[_debridgeId] == 0) {
            getAmountThreshold[_debridgeId] = type(uint256).max;
        }

        TokenInfo storage tokenInfo = getNativeInfo[_tokenAddress];
        tokenInfo.nativeChainId = _nativeChainId;
        tokenInfo.nativeAddress = _nativeAddress;

        emit PairAdded(
            _debridgeId,
            _tokenAddress,
            _nativeAddress,
            _nativeChainId,
            debridge.maxAmount,
            debridge.minReservesBps
        );
    }

    /// @dev Locks asset on the chain and enables minting on the other chain.
    /// @param _amount Amount to be transferred (note: the fee can be applied).
    /// @param _chainIdTo Chain id of the target chain.
    /// @param _permit deadline + signature for approving the spender by signature.
    function _send(
        bytes memory _permit,
        address _tokenAddress,
        uint256 _amount,
        uint256 _chainIdTo,
        bool _useAssetFee
    ) internal returns (
        uint256 amountAfterFee,
        bytes32 debridgeId,
        FeeParams memory feeParams
    ) {
        _validateToken(_tokenAddress);

        // Run _permit first. Avoid Stack too deep
        if (_permit.length > 0) {
            // call permit before transferring token
            uint256 deadline = _permit.toUint256(0);
            (bytes32 r, bytes32 s, uint8 v) = _permit.parseSignature(32);
            IERC20Permit(_tokenAddress).permit(
                msg.sender,
                address(this),
                _amount,
                deadline,
                v,
                r,
                s);
        }

        TokenInfo memory nativeTokenInfo = getNativeInfo[_tokenAddress];
        bool isNativeToken = nativeTokenInfo.nativeChainId  == 0
            ? true // token not in mapping
            : nativeTokenInfo.nativeChainId == getChainId(); // token native chain id the same

        if (isNativeToken) {
            //We use WETH debridgeId for transfer ETH
            debridgeId = getDebridgeId(
                getChainId(),
                _tokenAddress == address(0) ? address(weth) : _tokenAddress
            );
        }
        else {
            debridgeId = getbDebridgeId(
                nativeTokenInfo.nativeChainId,
                nativeTokenInfo.nativeAddress
            );
        }

        DebridgeInfo storage debridge = getDebridge[debridgeId];
        if (!debridge.exist) {
            if (isNativeToken) {
                // Use WETH as a token address for native tokens
                address assetAddress = _tokenAddress == address(0) ? address(weth) : _tokenAddress;
                _addAsset(
                    debridgeId,
                    assetAddress,
                    abi.encodePacked(assetAddress),
                    getChainId()
                );
            } else revert DebridgeNotFound();
        }

        ChainSupportInfo memory chainFees = getChainToConfig[_chainIdTo];
        if (!chainFees.isSupported) revert WrongChainTo();

        if (_tokenAddress == address(0)) {
            // use msg.value as amount for native tokens
            _amount = msg.value;
            weth.deposit{value: _amount}();
            _useAssetFee = true;
        } else {
            IERC20Upgradeable token = IERC20Upgradeable(_tokenAddress);
            uint256 balanceBefore = token.balanceOf(address(this));
            token.safeTransferFrom(msg.sender, address(this), _amount);
            // Received real amount
            _amount = token.balanceOf(address(this)) - balanceBefore;
        }

        if (_amount > debridge.maxAmount) revert TransferAmountTooHigh();

        //_processFeeForTransfer
        {
            DiscountInfo memory discountInfo = feeDiscount[msg.sender];
            DebridgeFeeInfo storage debridgeFee = getDebridgeFeeInfo[debridgeId];

            // calculate fixed fee
            uint256 assetsFixedFee;
            if (_useAssetFee) {
                if (_tokenAddress == address(0)) {
                    // collect asset fixed fee (in weth) for native token transfers
                    assetsFixedFee = chainFees.fixedNativeFee == 0 ? globalFixedNativeFee : chainFees.fixedNativeFee;
                } else {
                    // collect asset fixed fee for non native token transfers
                    assetsFixedFee = debridgeFee.getChainFee[_chainIdTo];
                    if (assetsFixedFee == 0) revert NotSupportedFixedFee();
                }
                // Apply discount for a asset fixed fee
                assetsFixedFee = _applyDiscount(assetsFixedFee, discountInfo.discountFixBps);
                if (_amount < assetsFixedFee) revert TransferAmountNotCoverFees();
                feeParams.fixFee = assetsFixedFee;
            } else {
                // collect fixed native fee for non native token transfers

                // use globalFixedNativeFee if value for chain is not set
                uint256 nativeFee = chainFees.fixedNativeFee == 0 ? globalFixedNativeFee : chainFees.fixedNativeFee;
                // Apply discount for a native fixed fee
                nativeFee = _applyDiscount(nativeFee, discountInfo.discountFixBps);

                if (msg.value < nativeFee) revert TransferAmountNotCoverFees();
                else if (msg.value > nativeFee) {
                    // refund extra fee eth
                     _safeTransferETH(msg.sender, msg.value - nativeFee);
                }
                bytes32 nativeDebridgeId = getDebridgeId(getChainId(), address(0));
                getDebridgeFeeInfo[nativeDebridgeId].collectedFees += nativeFee;
                feeParams.fixFee = nativeFee;
            }

            // Calculate transfer fee
            // use globalTransferFeeBps if value for chain is not set
            uint256 transferFee = (chainFees.transferFeeBps == 0
                ? globalTransferFeeBps : chainFees.transferFeeBps)
                * (_amount - assetsFixedFee) / BPS_DENOMINATOR;
            // apply discount for a transfer fee
            transferFee = _applyDiscount(transferFee, discountInfo.discountTransferBps);

            uint256 totalFee = transferFee + assetsFixedFee;
            if (_amount < totalFee) revert TransferAmountNotCoverFees();
            debridgeFee.collectedFees += totalFee;
            amountAfterFee = _amount - totalFee;

            // initialize feeParams
            feeParams.transferFee = transferFee;
            feeParams.useAssetFee = _useAssetFee;
            feeParams.receivedAmount = _amount;
            feeParams.isNativeToken = isNativeToken;
        }

        if (isNativeToken) {
            debridge.balance += amountAfterFee;
        }
        else {
            debridge.balance -= amountAfterFee;
            IDeBridgeToken(debridge.tokenAddress).burn(amountAfterFee);
        }
        return (amountAfterFee, debridgeId, feeParams);
    }

    function _publishSubmission(
        bytes32 _debridgeId,
        uint256 _chainIdTo,
        uint256 _amount,
        bytes memory _receiver,
        FeeParams memory feeParams,
        uint32 _referralCode,
        SubmissionAutoParamsTo memory autoParams,
        bool hasAutoParams
    ) internal {
        bytes32 submissionId;
        bytes memory packedSubmission = abi.encodePacked(
            SUBMISSION_PREFIX,
            _debridgeId,
            getChainId(),
            _chainIdTo,
            _amount,
            _receiver,
            nonce
        );
        if (hasAutoParams) {
            bool isHashedData = autoParams.flags.getFlag(Flags.SEND_HASHED_DATA);
            if (isHashedData && autoParams.data.length != 32) revert WrongAutoArgument();
            // auto submission
            submissionId = keccak256(
                abi.encodePacked(
                    packedSubmission,
                    autoParams.executionFee,
                    autoParams.flags,
                    keccak256(autoParams.fallbackAddress),
                    isHashedData ? autoParams.data : abi.encodePacked(keccak256(autoParams.data)),
                    keccak256(abi.encodePacked(msg.sender))
                )
            );
        }
        // regular submission
        else {
            submissionId = keccak256(packedSubmission);
        }

        emit Sent(
            submissionId,
            _debridgeId,
            _amount,
            _receiver,
            nonce,
            _chainIdTo,
            _referralCode,
            feeParams,
            hasAutoParams ? abi.encode(autoParams): bytes(""),
            msg.sender
        );

        {
            emit MonitoringSendEvent(
                submissionId,
                nonce,
                getDebridge[_debridgeId].balance,
                IERC20Upgradeable(getDebridge[_debridgeId].tokenAddress).totalSupply()
            );
        }

        nonce++;
    }

    function _applyDiscount(
        uint256 amount,
        uint16 discountBps
    ) internal pure returns (uint256) {
        return amount - amount * discountBps / BPS_DENOMINATOR;
    }

    function _validateToken(address _token) internal {
        if (_token == address(0)) {
            // no validation for native tokens
            return;
        }

        // check existence of decimals method
        (bool success, ) = _token.call(abi.encodeWithSignature("decimals()"));
        if (!success) revert InvalidTokenToSend();

        // check existence of symbol method
        (success, ) = _token.call(abi.encodeWithSignature("symbol()"));
        if (!success) revert InvalidTokenToSend();
    }


    /// @dev Unlock the asset on the current chain and transfer to receiver.
    /// @param _debridgeId Asset identifier.
    /// @param _receiver Receiver address.
    /// @param _amount Amount of the transfered asset (note: the fee can be applyed).
    function _claim(
        bytes32 _submissionId,
        bytes32 _debridgeId,
        address _receiver,
        uint256 _amount,
        uint256 _chainIdFrom,
        SubmissionAutoParamsFrom memory _autoParams
    ) internal returns (bool isNativeToken) {
        DebridgeInfo storage debridge = getDebridge[_debridgeId];
        if (!debridge.exist) revert DebridgeNotFound();
        isNativeToken = debridge.chainId == getChainId();

        if (isNativeToken) {
            debridge.balance -= _amount + _autoParams.executionFee;
        } else {
            debridge.balance += _amount + _autoParams.executionFee;
        }

        address _token = debridge.tokenAddress;
        bool unwrapETH = isNativeToken
            && _autoParams.flags.getFlag(Flags.UNWRAP_ETH)
            && _token == address(weth);

        if (_autoParams.executionFee > 0) {
            _mintOrTransfer(_token, msg.sender, _autoParams.executionFee, isNativeToken);
        }
        if (_autoParams.data.length > 0) {
            // use local variable to reduce gas usage
            address _callProxy = callProxy;
            bool status;
            if (unwrapETH) {
                // withdraw weth to callProxy directly
                _withdrawWeth(_callProxy, _amount);
                status = ICallProxy(_callProxy).call(
                    _autoParams.fallbackAddress,
                    _receiver,
                    _autoParams.data,
                    _autoParams.flags,
                    _autoParams.nativeSender,
                    _chainIdFrom
                );
            }
            else {
                _mintOrTransfer(_token, _callProxy, _amount, isNativeToken);

                status = ICallProxy(_callProxy).callERC20(
                    _token,
                    _autoParams.fallbackAddress,
                    _receiver,
                    _autoParams.data,
                    _autoParams.flags,
                    _autoParams.nativeSender,
                    _chainIdFrom
                );
            }
            emit AutoRequestExecuted(_submissionId, status, _callProxy);
        } else if (unwrapETH) {
            // transferring WETH with unwrap flag
            _withdrawWeth(_receiver, _amount);
        } else {
            _mintOrTransfer(_token, _receiver, _amount, isNativeToken);
        }

        emit MonitoringClaimEvent(
            _submissionId,
            debridge.balance,
            IERC20Upgradeable(debridge.tokenAddress).totalSupply()
        );
    }

    function _mintOrTransfer(
        address _token,
        address _receiver,
        uint256 _amount,
        bool isNativeToken
    ) internal {
        if (_amount > 0) {
            if (isNativeToken) {
                IERC20Upgradeable(_token).safeTransfer(_receiver, _amount);
            } else {
                IDeBridgeToken(_token).mint(_receiver, _amount);
            }
        }
    }

    /*
    * @dev transfer ETH to an address, revert if it fails.
    * @param to recipient of the transfer
    * @param value the amount to send
    */
    function _safeTransferETH(address to, uint256 value) internal {
        (bool success, ) = to.call{value: value}(new bytes(0));
        if (!success) revert EthTransferFailed();
    }


    function _withdrawWeth(address _receiver, uint _amount) internal {
        if (address(wethGate) == address(0)) {
            // dealing with weth withdraw affected by EIP1884
            weth.withdraw(_amount);
            _safeTransferETH(_receiver, _amount);
        }
        else {
            IERC20Upgradeable(address(weth)).safeTransfer(address(wethGate), _amount);
            wethGate.withdraw(_receiver, _amount);
        }
    }

    /*
    * @dev round down token amount
    * @param _token address of token, zero for native tokens
    * @param __amount amount for rounding
    */
    function _normalizeTokenAmount(
        address _token,
        uint256 _amount
    ) internal view returns (uint256) {
        uint256 decimals = _token == address(0)
            ? 18
            : IERC20Metadata(_token).decimals();
        uint256 maxDecimals = 8;
        if (decimals > maxDecimals) {
            uint256 multiplier = 10 ** (decimals - maxDecimals);
            _amount = _amount / multiplier * multiplier;
        }
        return _amount;
    }

    /* VIEW */

    /// @inheritdoc IDeBridgeGate
    function getDefiAvaliableReserves(address _tokenAddress)
        external
        view
        override
        returns (uint256)
    {
        DebridgeInfo storage debridge = getDebridge[getDebridgeId(getChainId(), _tokenAddress)];
        return (debridge.balance * (BPS_DENOMINATOR - debridge.minReservesBps)) / BPS_DENOMINATOR;
    }

    /// @dev Calculates asset identifier.
    /// @param _chainId Current chain id.
    /// @param _tokenAddress Address of the asset on the other chain.
    function getDebridgeId(uint256 _chainId, address _tokenAddress) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_chainId, _tokenAddress));
    }

    /// @dev Calculates asset identifier.
    /// @param _chainId Current chain id.
    /// @param _tokenAddress Address of the asset on the other chain.
    function getbDebridgeId(uint256 _chainId, bytes memory _tokenAddress) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_chainId, _tokenAddress));
    }

    /// @inheritdoc IDeBridgeGate
    function getDebridgeChainAssetFixedFee(
        bytes32 _debridgeId,
        uint256 _chainId
    ) external view override returns (uint256) {
        // if (!getDebridge[_debridgeId].exist) revert DebridgeNotFound();
        return getDebridgeFeeInfo[_debridgeId].getChainFee[_chainId];
    }

    /// @dev Calculate submission id for auto claimable transfer.
    /// @param _debridgeId Asset identifier.
    /// @param _chainIdFrom Chain identifier of the chain where tokens are sent from.
    /// @param _amount Amount of the transferred asset (note: the fee can be applied).
    /// @param _receiver Receiver address.
    /// @param _nonce Submission id.
    /// @param _autoParams Auto params for external call
    /// @param _hasAutoParams True if auto params are provided
    /// @param _sender Address that will call claim
    function getSubmissionIdFrom(
        bytes32 _debridgeId,
        uint256 _chainIdFrom,
        uint256 _amount,
        address _receiver,
        uint256 _nonce,
        SubmissionAutoParamsFrom memory _autoParams,
        bool _hasAutoParams,
        address _sender
    ) public view returns (bytes32) {
        bytes memory packedSubmission = abi.encodePacked(
            SUBMISSION_PREFIX,
            _debridgeId,
            _chainIdFrom,
            getChainId(),
            _amount,
            _receiver,
            _nonce
        );
        if (_hasAutoParams) {
            // Needed to let fallback address claim tokens in case user lost call data and can't restore its' hash
            bool isHashedData = _autoParams.flags.getFlag(Flags.SEND_HASHED_DATA)
                             && _sender == _autoParams.fallbackAddress
                             && _autoParams.data.length == 32;

            // auto submission
            return keccak256(
                abi.encodePacked(
                    packedSubmission,
                    _autoParams.executionFee,
                    _autoParams.flags,
                    keccak256(abi.encodePacked(_autoParams.fallbackAddress)),
                    isHashedData ? _autoParams.data : abi.encodePacked(keccak256(_autoParams.data)),
                    keccak256(_autoParams.nativeSender)
                )
            );
        }
        // regular submission
        return keccak256(packedSubmission);
    }



    /// @dev Calculates asset identifier for deployment.
    /// @param _debridgeId Id of an asset, see getDebridgeId.
    /// @param _name Asset's name.
    /// @param _symbol Asset's symbol.
    /// @param _decimals Asset's decimals.
    function getDeployId(
        bytes32 _debridgeId,
        string memory _name,
        string memory _symbol,
        uint8 _decimals
    ) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(
            DEPLOY_PREFIX,
            _debridgeId,
            keccak256(abi.encodePacked(_name)),
            keccak256(abi.encodePacked(_symbol)),
            _decimals));
    }

    /// @dev Get current chain id
    function getChainId() public view virtual returns (uint256 cid) {
        assembly {
            cid := chainid()
        }
    }

    // ============ Version Control ============
    /// @dev Get this contract's version
    function version() external pure returns (uint256) {
        return 410; // 4.1.0
    }
}
