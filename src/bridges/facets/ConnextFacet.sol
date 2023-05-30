// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import {IConnext} from "@connext/nxtp-contracts/contracts/core/connext/interfaces/IConnext.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {IWETH} from "../interfaces/IWETH.sol";
import {LibDiamond} from "../libs/LibDiamond.sol";

/**
 * @title Connext Integration
 *
 * @notice Contract which provides bridging functionality through Connext
 *
 */
contract ConnextFacet {
    using SafeERC20 for IERC20;

    ///// STORAGE AND STRUCTS /////
    bytes32 internal constant NAMESPACE =
        keccak256("io.etherspot.facets.connext");
    struct Storage {
        address connext;
        uint32 domainId;
        address weth;
    }

    ///// EVENTS /////
    /**
     * @dev Emitted when facet initializes
     * @param connext connext address
     * @param domainId domain id
     * @param weth weth address
     */
    event ConnextInitialized(
        address indexed connext,
        uint32 indexed domainId,
        address indexed weth
    );

    /**
     * @dev Emitted on ERC20 token swap
     * @param destination destination domain
     * @param recipient recipient
     * @param asset address of the asset
     * @param amount amount of assets
     * @param relayerFee fee
     * @param transferId transfer ID of created crosschain transfer
     */
    event ConnextTokenSwap(
        uint32 indexed destination,
        address indexed recipient,
        address indexed asset,
        uint256 amount,
        uint256 relayerFee,
        bytes32 transferId
    );

    /**
     * @dev Emitted on ETH swap
     * @param destination destination domain
     * @param recipient recipient
     * @param amount amount of assets
     * @param relayerFee fee
     * @param transferId transfer ID of created crosschain transfer
     */
    event ConnextEthSwap(
        uint32 indexed destination,
        address indexed recipient,
        uint256 amount,
        uint256 relayerFee,
        bytes32 transferId
    );

    ///// INITIALIZE FACET /////
    /**
     * @notice Initializes local variables for the Connext facet
     * @param _connext connext handler address
     * @param _domainId domain id
     * @param _connext weth address
     */
    function initConnext(
        address _connext,
        uint32 _domainId,
        address _weth
    ) external {
        LibDiamond.enforceIsContractOwner();
        require(_connext != address(0), "Connext: invalid address");
        require(_weth != address(0), "Connext: invalid address");
        Storage storage s = getStorage();
        s.connext = _connext;
        s.domainId = _domainId;
        s.weth = _weth;
        emit ConnextInitialized(_connext, _domainId, _weth);
    }

    ///// EXTERNAL FUNCTIONS /////

    /**
     * @notice Transfers non-native assets from one chain to another.
     * @dev User should approve a spending allowance before calling this.
     * @param _token Address of the token on this domain.
     * @param _amount The amount to transfer.
     * @param _recipient The destination address (e.g. a wallet).
     * @param _destinationDomain The destination domain ID.
     * @param _slippage The maximum amount of slippage the user will accept in BPS.
     * @param _relayerFee The fee offered to relayers.
     */
    function connextTokenTransfer(
        address _token,
        uint256 _amount,
        address _recipient,
        uint32 _destinationDomain,
        uint256 _slippage,
        uint256 _relayerFee
    ) external payable {
        IConnext connext = IConnext(getConnext());
        IERC20 token = IERC20(_token);
        // Passed parameter checks
        require(_token != address(0), "Connext: invalid address");
        require(_recipient != address(0), "Connext: invalid address");
        require(
            _destinationDomain != getDomainId(),
            "Connext: Cannot bridge to same domain"
        );
        // check amount
        require(msg.value == _relayerFee, "Connext: relayerFee != msg.value");
        // Check for allowance
        require(
            token.allowance(msg.sender, address(this)) >= _amount,
            "Connext: User must approve amount"
        );
        {
            // scope for weth - avoids stack too deep errors
            // User sends funds to this contract
            token.safeTransferFrom(msg.sender, address(this), _amount);
            // This contract approves transfer to Connext
            token.safeApprove(address(connext), _amount);
        }
        bytes32 transferId = connext.xcall{value: _relayerFee}(
            _destinationDomain, // _destination: Domain ID of the destination chain
            _recipient, // _to: address receiving the funds on the destination
            _token, // _asset: address of the token contract
            msg.sender, // _delegate: address that can revert or forceLocal on destination
            _amount, // _amount: amount of tokens to transfer
            _slippage, // _slippage: the maximum amount of slippage the user will accept in BPS (e.g. 30 = 0.3%)
            bytes("") // _callData: empty bytes because we're only sending funds
        );
        emit ConnextTokenSwap(
            _destinationDomain,
            _recipient,
            _token,
            _amount,
            _relayerFee,
            transferId
        );
    }

    /**
     * @notice Transfers native assets from one chain to another.
     * @param _destinationUnwrapper Address of the Unwrapper contract on destination.
     * @param _amount The amount to transfer.
     * @param _recipient The destination address (e.g. a wallet).
     * @param _destinationDomain The destination domain ID.
     * @param _slippage The maximum amount of slippage the user will accept in BPS.
     * @param _relayerFee The fee offered to relayers.
     */
    function connextEthTransfer(
        address _destinationUnwrapper,
        uint256 _amount,
        address _recipient,
        uint32 _destinationDomain,
        uint256 _slippage,
        uint256 _relayerFee
    ) external payable {
        IConnext connext = IConnext(getConnext());
        address _weth = getWETH();
        // passed parameter checks
        require(
            _destinationUnwrapper != address(0),
            "Connext: invalid address"
        );
        require(_recipient != address(0), "Connext: invalid address");
        require(
            _destinationDomain != getDomainId(),
            "Connext: Cannot bridge to same domain"
        );
        // check amount
        require(
            msg.value == _amount + _relayerFee,
            "Connext: amount + relayerFee != msg.value"
        );
        {
            // scope for weth - avoids stack too deep errors
            IWETH weth = IWETH(_weth);
            // Wrap ETH into WETH to send with the xcall
            weth.deposit{value: _amount}();
            // This contract approves transfer to Connext
            weth.approve(address(connext), _amount);
        }
        // Encode the recipient address for calldata
        bytes memory callData = abi.encode(_recipient);
        // xcall the Unwrapper contract to unwrap WETH into ETH on destination
        bytes32 transferId = connext.xcall{value: _relayerFee}(
            _destinationDomain, // _destination: Domain ID of the destination chain
            _destinationUnwrapper, // _to: Unwrapper contract
            _weth, // _asset: address of the WETH contract
            msg.sender, // _delegate: address that can revert or forceLocal on destination
            _amount, // _amount: amount of tokens to transfer
            _slippage, // _slippage: the maximum amount of slippage the user will accept in BPS (e.g. 30 = 0.3%)
            callData // _callData: calldata with encoded recipient address
        );
        emit ConnextEthSwap(
            _destinationDomain,
            _recipient,
            msg.value,
            _relayerFee,
            transferId
        );
    }

    ///// PRIVATE FUNCTIONS /////
    /**
     * @dev returns connext contract
     * @return address connext contract
     */
    function getConnext() private view returns (address) {
        return getStorage().connext;
    }

    /**
     * @dev returns domain id
     * @return uint32 domain id
     */
    function getDomainId() private view returns (uint32) {
        return getStorage().domainId;
    }

    /**
     * @dev returns WETH contract
     * @return address WETH contract
     */
    function getWETH() private view returns (address weth) {
        return getStorage().weth;
    }

    /**
     * @dev fetch local storage
     */
    function getStorage() private pure returns (Storage storage s) {
        bytes32 namespace = NAMESPACE;
        // solhint-disable-next-line no-inline-assembly
        assembly {
            s.slot := namespace
        }
    }
}
