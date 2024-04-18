# LegacyOwned

## Description

**Source:** [contracts/legacy/LegacyOwned.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyOwned.sol)

## Variables

### `nominatedOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyOwned.sol#L5)</sub>

**Type:** `address`

### `owner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyOwned.sol#L4)</sub>

**Type:** `address`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyOwned.sol#L7)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Restricted Functions

### `nominateOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyOwned.sol#L11)</sub>

??? example "Details"

    **Signature**

    `nominateOwner(address _owner)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [OwnerNominated](#ownernominated)

## External Functions

### `acceptOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyOwned.sol#L16)</sub>

??? example "Details"

    **Signature**

    `acceptOwnership()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "bool")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyOwned.sol#L17)

    **Emits**

    * [OwnerChanged](#ownerchanged)

## Modifiers

### `onlyOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyOwned.sol#L23)</sub>

## Events

### `OwnerChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyOwned.sol#L29)</sub>

**Signature**: `OwnerChanged(address oldOwner, address newOwner)`

### `OwnerNominated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/LegacyOwned.sol#L28)</sub>

**Signature**: `OwnerNominated(address newOwner)`
