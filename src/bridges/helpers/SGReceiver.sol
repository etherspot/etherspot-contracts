// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "../../common/helpers/DiamondReentrancyGuard.sol";
import {IStargateReceiver} from "../interfaces/stargate/IStargateReceiver.sol";
import {IStargateRouter} from "../interfaces/stargate/IStargateRouter.sol";

/**
 * @title SGReceiver
 * @notice Test for sgReceive
 */

contract SGReceiver is IStargateReceiver, ReentrancyGuard {
    using SafeERC20 for IERC20;

    IStargateRouter router;

    /**
     * @dev emitted when received on destination chain
     * @param token - token address
     * @param amount - amount swapping
     */
    event StargateReceivedOnDestination(address token, uint256 amount);

    constructor(address _sgRouter) {
        router = IStargateRouter(_sgRouter);
    }

    /**
     * @notice required to receive tokens on destination chain
     * @param _token the token contract on the local chain
     * @param _amountLD the qty of local _token contract tokens
     * @param _payload the bytes containing the toAddress
     */
    function sgReceive(
        uint16 /*_chainId*/,
        bytes memory /*_srcAddress*/,
        uint256 /*_nonce*/,
        address _token,
        uint256 _amountLD,
        bytes memory _payload
    ) external override nonReentrant {
        require(
            msg.sender == address(router),
            "Stargate:: only stargate router"
        );

        address to = abi.decode(_payload, (address));
        IERC20(_token).safeTransfer(to, _amountLD);
        emit StargateReceivedOnDestination(_token, _amountLD);
    }
}
