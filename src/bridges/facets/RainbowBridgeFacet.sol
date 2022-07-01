// SPDX-License-Identifier: MIT
// solhint-disable-next-line
pragma solidity 0.8.4;

import {Address} from "@openzeppelin/contracts/utils/Address.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IEthCustodian} from "../interfaces/IEthCustodian.sol";
import {ReentrancyGuard} from "../helpers/ReentrancyGuard.sol";
import {LibDiamond} from "../libs/LibDiamond.sol";
import {LibAsset} from "../libs/LibAsset.sol";
import {InvalidConfig} from "../errors/GenericErrors.sol";

contract RainbowBridgeFacet is ReentrancyGuard {
    using Address for address;
    //////////////////////////////////////////////////////////////
    /////////////////////////// Events ///////////////////////////
    //////////////////////////////////////////////////////////////
    event RainbowBridgeInitialized(address ethCustodian);
    event TransferStarted(
        string bridgeUsed,
        address tokenAddress,
        address from,
        string to,
        uint256 amount,
        uint256 fee
    );
    event UpdatedEthCustodianAddress(address newAddress);

    //////////////////////////////////////////////////////////////
    ////////////////////////// Storage ///////////////////////////
    //////////////////////////////////////////////////////////////

    bytes32 internal constant NAMESPACE =
        keccak256("io.etherspot.facets.rainbowbridge");

    struct Storage {
        address ethCustodian;
    }
    //////////////////////////////////////////////////////////////
    ////////////////////////// Structs ///////////////////////////
    //////////////////////////////////////////////////////////////

    struct RainbowBridgeData {
        address token;
        string recipient;
        uint256 amount;
        uint256 transferFee;
    }

    /// @notice initializes state variables for the RainbowBridge facet
    /// @param _ethCustodian address of the RainbowBridge router contract
    function initializeRainbowBridge(address _ethCustodian) external {
        LibDiamond.enforceIsContractOwner();
        if (_ethCustodian == address(0)) revert InvalidConfig();
        Storage storage s = getStorage();
        s.ethCustodian = _ethCustodian;
        emit RainbowBridgeInitialized(_ethCustodian);
    }

    // EthCustodian.sol: 0x6BFaD42cFC4EfC96f529D786D643Ff4A8B89FA52 (mainnet)
    // depositToEVM fn call
    function rainbowBridgeTokensToAurora(RainbowBridgeData memory _rainbowData)
        external
        payable
        nonReentrant
    {
        Storage storage s = getStorage();
        address ethCustodian = s.ethCustodian;
        // Transfer ETH to address(this) as msg.value required
        LibAsset.transferFromERC20(
            _rainbowData.token,
            msg.sender,
            address(this),
            _rainbowData.amount
        );
        // call depositToEVM fn in EthCustodian

        IEthCustodian(ethCustodian).depositToEVM{value: _rainbowData.amount}(
            _rainbowData.recipient,
            _rainbowData.transferFee
        );

        emit TransferStarted(
            "rainbowBridge",
            _rainbowData.token,
            msg.sender,
            _rainbowData.recipient,
            _rainbowData.amount,
            _rainbowData.transferFee
        );
    }

    function updateEthCustodianAddress(address _newAddress) external {
        LibDiamond.enforceIsContractOwner();
        if (_newAddress == address(0)) revert InvalidConfig();
        Storage storage s = getStorage();
        s.ethCustodian = _newAddress;
        emit UpdatedEthCustodianAddress(_newAddress);
    }

    /// @dev fetch local storage
    function getStorage() private pure returns (Storage storage s) {
        bytes32 namespace = NAMESPACE;
        // solhint-disable-next-line no-inline-assembly
        assembly {
            s.slot := namespace
        }
    }
}

// Ethereum -> Near transfer (ETH -> ETH (native ETH in Aurora-EVM))
// Go to eth-custodian directory: $ cd eth-custodian.

// Transfer ETH to EthCustodian. Send depositToEVM transaction to EthCustodian contract. This will transfer AMOUNT (wei) from your account and deposit AMOUNT (wei) having FEE (wei) to NEAR_RECIPIENT account on Near.
// Run: $ make eth-deposit-to-evm ETH_RECIPIENT=<ETH_ADDRESS_OF_RECIPIENT_IN_EVM_HERE> AMOUNT=<DEPOSIT_AMOUNT_HERE> FEE=<DEPOSIT_FEE_HERE>.

// Wait sufficiently long You need to wait for 3 confirmations for Ropsten blockchain. This is needed to achieve finality of Ropsten block, including locking transaction. The status of syncing of the bridge can be observed here. First metric (near_bridge_eth2near_client_block_number) should become more than the height of a block with transaction from the step 2 at least by 3, for a successful finalization of the transfer.

// Finalize deposit to Near Call deposit in Near blockchain to finalize the deposit transaction with the given TX_HASH. You can find TX_HASH in the output of the previous step. You will need to provide your NEAR_ACCOUNT AccountId which will be used to relay the ETH proof to the Near blockchain to mint appropriate amount of bridgedETH for the NEAR_RECIPIENT (this parameter is optional here and only serves for verbose purposes to show the balance of the recipient before and after)
// Run: $ make near-finalize-deposit-from-eth-to-evm TX_HASH=<DEPOSIT_TX_HASH_HERE> NEAR_ACCOUNT=<YOUR_NEAR_ACCOUNT_HERE> ETH_RECIPIENT=<ETH_RECIPIENT_HERE>

// ETH FLOW
// USER ===> RainbowBridgeFacet ===> EthCustodian
