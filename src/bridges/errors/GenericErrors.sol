// SPDX-License-Identifier: MIT
// solhint-disable-next-line
pragma solidity 0.8.4;

error InvalidAmount();
error TokenAddressIsZero();
error CannotBridgeToSameNetwork();
error ZeroPostSwapBalance();
error InvalidBridgeConfigLength();
error NoSwapDataProvided();
error NativeValueWithERC();
error ContractCallNotAllowed();
error NullAddrIsNotAValidSpender();
error NullAddrIsNotAnERC20Token();
error NoTransferToNullAddress();
error NativeAssetTransferFailed();
error InvalidContract();
error InvalidConfig();
error AmountShouldBeGreaterThanFee();
