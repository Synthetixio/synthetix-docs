# Owned

## Description

Allows inheriting contracts to have an owner and provides the [`onlyOwner`](#onlyowner) modifier, which restricts function access to that owner.
The owner can be changed by a nomination process, where the nominated owner must accept ownership before it is switched.

**Source:** [contracts/Owned.sol](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Owned.sol)

## Variables

### `nominatedOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Owned.sol#L7)</sub>

The currently-nominated owner.

**Type:** `address`

### `owner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Owned.sol#L6)</sub>

The contract owner.

**Type:** `address`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Owned.sol#L9)</sub>

Initialises the owner of this contract.

??? example "Details"

    **Signature**

    `(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Owner address cannot be 0)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Owned.sol#L10)

    **Emits**

    * [OwnerChanged](#ownerchanged)

## Restricted Functions

### `nominateNewOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Owned.sol#L15)</sub>

Nominates a new owner of this contract, who may then call [`acceptOwnership`](#acceptownership) to become the owner.

??? example "Details"

    **Signature**

    `nominateNewOwner(address _owner)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [OwnerNominated](#ownernominated)

## External Functions

### `acceptOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Owned.sol#L20)</sub>

If called by [`nominatedOwner`](#nominatedowner), ownership is transferred to that address.
The nominated owner is reset to the zero address.

??? example "Details"

    **Signature**

    `acceptOwnership()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., You must be nominated before you can accept ownership)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Owned.sol#L21)

    **Emits**

    * [OwnerChanged](#ownerchanged)

## Modifiers

### `onlyOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Owned.sol#L27)</sub>

Reverts the transaction if `msg.sender` is not the [`owner`](#owner).

## Events

### `OwnerChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Owned.sol#L37)</sub>

Ownership has been handed over from `oldOwner` to `newOwner`, which is the new value of [`owner`](#owner).

**Signature**: `OwnerChanged(address oldOwner, address newOwner)`

### `OwnerNominated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Owned.sol#L36)</sub>

`newOwner` has been set as the [`nominatedOwner`](#nominatedowner).

**Signature**: `OwnerNominated(address newOwner)`
