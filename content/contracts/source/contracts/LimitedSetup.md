# LimitedSetup

## Description

This contract allows certain functions within inheriting contracts to only operate during a specific limited setup period. After this period elapses, any functions with the [`onlyDuringSetup`](#onlyduringsetup) modifier no longer operate.

**Source:** [contracts/LimitedSetup.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LimitedSetup.sol)

## Variables

### `setupExpiryTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LimitedSetup.sol#L5)</sub>

The timestamp at which functions which have the [`onlyDuringSetup`](#onlyduringsetup) modifier will cease operating. This is determined by the `setupDuration` parameter passed into the contract [constructor](#constructor).

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LimitedSetup.sol#L11)</sub>

??? example "Details"

    **Signature**

    `constructor(uint256 setupDuration)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Modifiers

### `onlyDuringSetup`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LimitedSetup.sol#L15)</sub>

Reverts the transaction if the current timestamp is not before [`setupExpiryTime`](#setupexpirytime).
