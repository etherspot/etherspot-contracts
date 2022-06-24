// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.7;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PausableUpgradeable.sol";
import "../interfaces/IDeBridgeToken.sol";

/// @dev ERC20 token that is used as wrapped asset to represent the native token value on the other chains.
contract DeBridgeToken is
    Initializable,
    AccessControlUpgradeable,
    ERC20PausableUpgradeable,
    IDeBridgeToken
{
    /// @dev Minter role identifier
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    /// @dev Pauser role identifier
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    /// @dev Domain separator as described in [EIP-712](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md#rationale)
    bytes32 public DOMAIN_SEPARATOR;
    /// @dev Typehash as described in [EIP-712](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md#rationale).
    /// =keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");
    bytes32 public constant PERMIT_TYPEHASH =
        0x6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9;
    /// @dev Transfers counter
    mapping(address => uint256) public nonces;
    /// @dev Asset's decimals
    uint8 internal _decimals;

    /* ========== ERRORS ========== */

    error MinterBadRole();
    error PauserBadRole();

    /* ========== MODIFIERS ========== */

    modifier onlyMinter() {
        if (!hasRole(MINTER_ROLE, msg.sender)) revert MinterBadRole();
        _;
    }

    modifier onlyPauser() {
        if (!hasRole(PAUSER_ROLE, msg.sender)) revert PauserBadRole();
        _;
    }

    /// @dev Constructor that initializes the most important configurations.
    /// @param name_ Asset's name.
    /// @param symbol_ Asset's symbol.
    /// @param decimals_ Asset's decimals.
    /// @param admin Address to set as asset's admin.
    /// @param minters The accounts allowed to int new tokens.
    function initialize(
        string memory name_,
        string memory symbol_,
        uint8 decimals_,
        address admin,
        address[] memory minters
    ) public initializer {
        _decimals = decimals_;
        name_ = string(abi.encodePacked("deBridge ",
            bytes(name_).length == 0 ? symbol_ : name_));
        symbol_ = string(abi.encodePacked("de", symbol_));

        __ERC20_init_unchained(name_, symbol_);

        _setupRole(DEFAULT_ADMIN_ROLE, admin);
        _setupRole(PAUSER_ROLE, admin);
        uint256 mintersCount = minters.length;
        for (uint256 i = 0; i < mintersCount; i++) {
            _setupRole(MINTER_ROLE, minters[i]);
        }

        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        DOMAIN_SEPARATOR = keccak256(
            abi.encode(
                keccak256(
                    "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
                ),
                keccak256(bytes(name_)),
                keccak256(bytes("1")),
                chainId,
                address(this)
            )
        );
    }

    /// @inheritdoc IDeBridgeToken
    function mint(address _receiver, uint256 _amount) external override onlyMinter {
        _mint(_receiver, _amount);
    }

    /// @inheritdoc IDeBridgeToken
    function burn(uint256 _amount) external override onlyMinter {
        _burn(msg.sender, _amount);
    }

    /// @dev Approves the spender by signature.
    /// @param _owner Token's owner.
    /// @param _spender Account to be approved.
    /// @param _value Amount to be approved.
    /// @param _deadline The permit valid until.
    /// @param _v Signature part.
    /// @param _r Signature part.
    /// @param _s Signature part.
    function permit(
        address _owner,
        address _spender,
        uint256 _value,
        uint256 _deadline,
        uint8 _v,
        bytes32 _r,
        bytes32 _s
    ) external override {
        require(_deadline >= block.timestamp, "permit: EXPIRED");
        bytes32 digest = keccak256(
            abi.encodePacked(
                "\x19\x01",
                DOMAIN_SEPARATOR,
                keccak256(
                    abi.encode(
                        PERMIT_TYPEHASH,
                        _owner,
                        _spender,
                        _value,
                        nonces[_owner]++,
                        _deadline
                    )
                )
            )
        );
        address recoveredAddress = ecrecover(digest, _v, _r, _s);
        require(
            recoveredAddress != address(0) && recoveredAddress == _owner,
            "permit: invalid signature"
        );
        _approve(_owner, _spender, _value);
    }

    /// @dev Asset's decimals
    function decimals() public view override returns (uint8) {
        return _decimals;
    }

    /// @dev Pauses all token transfers. The caller must have the `PAUSER_ROLE`.
    function pause() public onlyPauser {
        _pause();
    }

     /// @dev Unpauses all token transfers. The caller must have the `PAUSER_ROLE`.
    function unpause() public onlyPauser {
        _unpause();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, amount);
    }
}
