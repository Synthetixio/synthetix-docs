# StateShared

## Description

**Source:** [contracts/StateShared.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StateShared.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StateShared.sol#L24)</sub>

??? example "Details"

    **Signature**

    `constructor(address[] associatedContracts)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Owner must be set")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StateShared.sol#L26)

## Views

### `associatedContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StateShared.sol#L57)</sub>

??? example "Details"

    **Signature**

    `associatedContracts() view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `addAssociatedContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StateShared.sol#L43)</sub>

??? example "Details"

    **Signature**

    `addAssociatedContracts(address[] associatedContracts)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeAssociatedContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StateShared.sol#L48)</sub>

??? example "Details"

    **Signature**

    `removeAssociatedContracts(address[] associatedContracts)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_addAssociatedContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StateShared.sol#L33)</sub>

??? example "Details"

    **Signature**

    `_addAssociatedContracts(address[] associatedContracts)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Modifiers

### `onlyAssociatedContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StateShared.sol#L63)</sub>

## Events

### `AssociatedContractAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StateShared.sol#L70)</sub>

**Signature**: `AssociatedContractAdded(address associatedContract)`

### `AssociatedContractRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StateShared.sol#L71)</sub>

**Signature**: `AssociatedContractRemoved(address associatedContract)`
