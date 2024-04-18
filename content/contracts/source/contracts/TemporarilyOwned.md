# TemporarilyOwned

## Description

**Source:** [contracts/TemporarilyOwned.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol)

## Variables

### `expiryTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L6)</sub>

**Type:** `uint256`

### `nominatedOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L5)</sub>

**Type:** `address`

### `temporaryOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L4)</sub>

**Type:** `address`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L8)</sub>

??? example "Details"

    **Signature**

    `constructor(address _temporaryOwner, uint256 _ownershipDuration)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Temp owner address cannot be 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L9)

    * [require(..., "Duration cannot be 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L10)

## Restricted Functions

### `nominateNewOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L21)</sub>

??? example "Details"

    **Signature**

    `nominateNewOwner(address _owner)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyTemporaryOwner](#onlytemporaryowner)

    **Emits**

    * [OwnerNominated](#ownernominated)

### `setNewExpiryTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L16)</sub>

??? example "Details"

    **Signature**

    `setNewExpiryTime(uint256 _duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "New expiry time must be sooner than it currently is")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L17)

    **Modifiers**

    * [onlyTemporaryOwner](#onlytemporaryowner)

## External Functions

### `acceptOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L26)</sub>

??? example "Details"

    **Signature**

    `acceptOwnership()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Ownership expired")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L27)

    * [require(..., "You must be nominated before you can accept ownership")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L28)

    **Emits**

    * [OwnerChanged](#ownerchanged)

## Modifiers

### `onlyTemporaryOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L34)</sub>

## Events

### `OwnerChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L45)</sub>

**Signature**: `OwnerChanged(address oldOwner, address newOwner)`

### `OwnerNominated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/TemporarilyOwned.sol#L44)</sub>

**Signature**: `OwnerNominated(address newOwner)`
