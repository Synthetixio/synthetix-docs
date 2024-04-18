# State

## Description

An external state contract whose functions can only be called by an [associated controller](#associatedcontract) if modified with [`onlyAssociatedContract`](#onlyassociatedcontract).

This is designed to allow behaviour to be decoupled from storage so that upgrades can be made without losing data.

**Source:** [contracts/State.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/State.sol)

## Variables

### `associatedContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/State.sol#L10)</sub>

The address (presumably a contract) which is permitted to use functions on this contract which have the [`onlyAssociatedContract`](#onlyassociatedcontract) modifier.

**Type:** `address`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/State.sol#L12)</sub>

Initialises the associated contract and the owner, who has the exclusive right to switch the associated contract.

??? example "Details"

    **Signature**

    `constructor(address _associatedContract)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Owner must be set")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/State.sol#L14)

    **Emits**

    * [AssociatedContractUpdated](#associatedcontractupdated)

## Restricted Functions

### `setAssociatedContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/State.sol#L23)</sub>

Allows the contract's owner to update the [associated contract](#associatedContract).

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

## Modifiers

### `onlyAssociatedContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/State.sol#L30)</sub>

Reverts the transaction if the `msg.sender` is not the [associated contract](#associatedcontract). Provided for use by inheriting contracts.

## Events

### `AssociatedContractUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/State.sol#L37)</sub>

The associated contract was updated by the owner. This event reports the new associated contract.

**Signature**: `AssociatedContractUpdated(address associatedContract)`
