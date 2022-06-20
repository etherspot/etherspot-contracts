// SPDX-License-Identifier: MIT
// solhint-disable-next-line
pragma solidity 0.8.4;

/// @title BalancesHelperV2
/// @author Luke Wickens <luke@pillarproject.io>
/// @notice Used to get account balances of ERC20 tokens and Wrapped Super Tokens

import {ISuperfluidToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluidToken.sol";
import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";

contract BalancesHelperV2 {
    using Address for address;

    /// @notice Custom errors to handle address(0)
    error AccountZeroAddress(address account, address token);
    error TokenZeroAddress(address account, address token);

    constructor() {}

    /// @notice Returns balances of accounts for multiple ERC20 tokens.
    /// @dev Error thrown if: account or token address is address(0),
    /// large arrays of accounts/tokens are passed in could cause gas block limit issue
    /// @param accounts = Array of accounts addresses
    /// @param tokens = Array of tokens addresses
    /// @return One-dimensional that's accounts.length * tokens.length long. The
    /// array is ordered by all of accounts[0] token balances, then accounts[1] etc.

    function getBalances(address[] calldata accounts, address[] calldata tokens)
        external
        view
        returns (uint256[] memory)
    {
        uint256[] memory result = new uint256[](
            accounts.length * tokens.length
        );

        for (uint256 i; i < accounts.length; i++) {
            for (uint256 j; j < tokens.length; j++) {
                uint256 index = j + (tokens.length * i);
                result[index] = _getBalance(accounts[i], tokens[j]);
            }
        }
        return result;
    }

    /// @notice Returns balances of accounts for multiple Wrapped Super Tokens.
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

    /// @notice Returns balance of account for an ERC20 token.
    /// @dev Error thrown if: account or token address is address(0)
    /// @param account = account address
    /// @param token = tokens address
    /// @return balance of account as uint256.

    function _getBalance(address account, address token)
        private
        view
        returns (uint256)
    {
        if (account == address(0)) revert AccountZeroAddress(account, token);
        if (token == address(0)) revert TokenZeroAddress(account, token);

        bytes memory returnedData = token.functionStaticCall(
            abi.encodeWithSelector(IERC20(token).balanceOf.selector, account)
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
