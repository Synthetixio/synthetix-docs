# LimitedSetup

## Description

This contract allows certain functions within inheriting contracts to only operate during a specific limited setup period. After this period elapses, any functions with the [`onlyDuringSetup`](#onlyduringsetup) modifier no longer operate.



**Source:** [contracts/LimitedSetup.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/LimitedSetup.sol)

## Architecture


---
### Inheritance Graph

<centered-image>
    ![LimitedSetup inheritance graph](../img/graphs/LimitedSetup.svg)
</centered-image>

## Variables


---
### `setupExpiryTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/LimitedSetup.sol#L6)</sub>



The timestamp at which functions which have the [`onlyDuringSetup`](#onlyduringsetup) modifier will cease operating. This is determined by the `setupDuration` parameter passed into the contract [constructor](#constructor).




**Type:** `uint256`

## Modifiers


---
### `onlyDuringSetup`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/LimitedSetup.sol#L16)</sub>



Reverts the transaction if the current timestamp is not before [`setupExpiryTime`](#setupexpirytime).


## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/LimitedSetup.sol#L12)</sub>



??? example "Details"

    **Signature**

    `(uint256 setupDuration)`

    **State Mutability**

    `nonpayable`

## Functions (Internal)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/LimitedSetup.sol#L12)</sub>



??? example "Details"

    **Signature**

    `(uint256 setupDuration)`

    **State Mutability**

    `nonpayable`

