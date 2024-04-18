# LegacyTokenState

## Description

**Source:** [contracts/legacy/LegacyTokenState.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyTokenState.sol)

## Variables

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyTokenState.sol#L12)</sub>

**Type:** `mapping(address => mapping(address => uint256))`

### `associatedContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyTokenState.sol#L8)</sub>

**Type:** `address`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyTokenState.sol#L11)</sub>

**Type:** `mapping(address => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyTokenState.sol#L14)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Emits**

    * [AssociatedContractUpdated](#associatedcontractupdated)

## Restricted Functions

### `setAllowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyTokenState.sol#L27)</sub>

??? example "Details"

    **Signature**

    `setAllowance(address tokenOwner, address spender, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setAssociatedContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyTokenState.sol#L22)</sub>

??? example "Details"

    **Signature**

    `setAssociatedContract(address _associatedContract)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AssociatedContractUpdated](#associatedcontractupdated)

### `setBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyTokenState.sol#L35)</sub>

??? example "Details"

    **Signature**

    `setBalanceOf(address account, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

## Modifiers

### `onlyAssociatedContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyTokenState.sol#L41)</sub>

## Events

### `AssociatedContractUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyTokenState.sol#L48)</sub>

**Signature**: `AssociatedContractUpdated(address _associatedContract)`
