// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title BalancesHelperV2
/// @author Luke Wickens <luke@pillarproject.io>
/// @notice Used to get account balances of Pure and Wrapped Super Tokens

import {IConstantFlowAgreementV1} from '@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol';
import {IInstantDistributionAgreementV1} from '@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IInstantDistributionAgreementV1.sol';
import {ISuperfluidToken} from '@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluidToken.sol';
import {ISuperToken} from '@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperToken.sol';
import {Address} from '@openzeppelin/contracts/utils/Address.sol';

/// @notice Custom errors to handle address(0)
error AccountZeroAddress(address account, address token);
error TokenZeroAddress(address account, address token);

contract BalancesHelperV2 {
    using Address for address;

    constructor() {}

    /// @notice Returns balances of accounts for multiple Pure Super Tokens (non-wrapped).
    /// @dev Error thrown if: account or token address is address(0),
    /// large arrays of accounts/tokens are passed in could cause gas block limit issue
    /// @param accounts = Array of accounts addresses
    /// @param tokens = Array of tokens addresses
    /// @return One-dimensional that's accounts.length * tokens.length long. The
    /// array is ordered by all of accounts[0] token balances, then accounts[1] etc.

    function getSuperfluidPureTokenBalances(
        address[] calldata accounts,
        address[] calldata tokens
    ) external view returns (uint256[] memory) {
        uint256[] memory result = new uint256[](
            accounts.length * tokens.length
        );

        for (uint256 i; i < accounts.length; i++) {
            for (uint256 j; j < tokens.length; j++) {
                uint256 index = j + (tokens.length * i);
                result[index] = _getSuperfluidPureTokenBalance(
                    accounts[i],
                    tokens[j]
                );
            }
        }
        return result;
    }

    /// @notice Returns balances of accounts for multiple Wrapped Super Tokens (non-pure).
    /// @dev Error thrown if: account or token address is address(0),
    /// large arrays of accounts/tokens are passed in could cause gas block limit issue
    /// @param accounts =  Array of accounts addresses
    /// @param tokens = Array of tokens addresses
    /// @return One-dimensional that's accounts.length * tokens.length long. The
    /// array is ordered by all of accounts[0] token balances, then accounts[1] etc.

    function getSuperfluidWrappedTokenBalances(
        address[] calldata accounts,
        address[] calldata tokens
    ) external view returns (int256[] memory) {
        int256[] memory result = new int256[](accounts.length * tokens.length);

        for (uint256 i; i < accounts.length; i++) {
            for (uint256 j; j < tokens.length; j++) {
                uint256 index = j + (tokens.length * i);
                result[index] = _getSuperfluidWrappedTokenBalance(
                    accounts[i],
                    tokens[j]
                );
            }
        }
        return result;
    }

    /// Private fuctions

    /// @notice Returns balance of account for a Pure Super Token.
    /// @dev Error thrown if: account or token address is address(0)
    /// @param account = account address
    /// @param token = tokens address
    /// @return balance of account as uint256.

    function _getSuperfluidPureTokenBalance(address account, address token)
        private
        view
        returns (uint256)
    {
        if (account == address(0)) revert AccountZeroAddress(account, token);
        if (token == address(0)) revert TokenZeroAddress(account, token);

        bytes memory returnedData = token.functionStaticCall(
            abi.encodeWithSelector(
                ISuperToken(token).balanceOf.selector,
                account
            )
        );

        return abi.decode(returnedData, (uint256));
    }

    /// @notice Returns real balance of a user, taking into consideration all agreements of account
    /// @dev Error thrown if: account or token address is address(0)
    /// @param account = account address
    /// @param token = tokens address
    /// @return available balance of account as int256.
    function _getSuperfluidWrappedTokenBalance(address account, address token)
        private
        view
        returns (int256)
    {
        if (account == address(0)) revert AccountZeroAddress(account, token);
        if (token == address(0)) revert TokenZeroAddress(account, token);

        bytes memory returnedData = token.functionStaticCall(
            abi.encodeWithSelector(
                ISuperfluidToken(token).realtimeBalanceOfNow.selector,
                account
            )
        );

        (int256 availableBalance, , , ) = abi.decode(
            returnedData,
            (int256, uint256, uint256, uint256)
        );
        return availableBalance;
    }
}
