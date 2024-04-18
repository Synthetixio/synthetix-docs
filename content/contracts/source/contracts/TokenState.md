# TokenState

## Description

An external state contract to hold ERC20 balances and allowances. This operates as an adjunct to [`ExternStateToken`](ExternStateToken.md), so that important token information can persist while the token contract itself can be switched out to upgrade its functionality.

**Source:** [contracts/TokenState.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TokenState.sol)

## Variables

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TokenState.sol#L11)</sub>

ERC20 allowances. Also generates an ERC20 accessor in the same way as the `balanceOf` member.

**Type:** `mapping(address => mapping(address => uint256))`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TokenState.sol#L10)</sub>

ERC20 balances, note that as a public variable, this synthesises an accessor which is itself ERC20 compliant, so balances can be queried by dApps directly from the state contract.

**Type:** `mapping(address => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TokenState.sol#L13)</sub>

Initialises the inherited [`State`](State.md) instance.

??? example "Details"

    **Signature**

    `constructor(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Restricted Functions

### `setAllowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TokenState.sol#L25)</sub>

Sets the token allowance granted to the `spender` by the `tokenOwner`.

??? example "Details"

    **Signature**

    `setAllowance(address tokenOwner, address spender, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TokenState.sol#L39)</sub>

Sets the balance of the specified account.

??? example "Details"

    **Signature**

    `setBalanceOf(address account, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)
