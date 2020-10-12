# FeePoolEternalStorage

## Description

FeePoolEternalStorage is currently used only to store the last fee withdrawal timestamp for each address. See [`FeePool._claimFees`](FeePool.md#_claimFees) and [`FeePool.feesByPeriod`](FeePool.md#feesbyperiod) for details of what this information is used for.

This contract is just wrapper around [EternalStorage](EternalStorage.md) with a limited setup period and a setup function that sets each account's last fee withdrawal times.

**Source:** [contracts/FeePoolEternalStorage.sol](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/FeePoolEternalStorage.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    FeePoolEternalStorage[FeePoolEternalStorage] --> EternalStorage[EternalStorage]
    FeePoolEternalStorage[FeePoolEternalStorage] --> LimitedSetup[LimitedSetup]
    EternalStorage[EternalStorage] --> State[State]
    State[State] --> Owned[Owned]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/FeePoolEternalStorage.sol#L12)</sub>

Initialises the inherited [`EternalStorage`](EternalStorage.md) instance, and sets a [limited setup period](LimitedSetup.md) of six weeks.

??? example "Details"

    **Signature**

    `(address _owner, address _feePool)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Restricted Functions

### `importFeeWithdrawalData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/FeePoolEternalStorage.sol#L14)</sub>

This is a helper to import fee withdrawal information from a previous version of the system during the setup period.

??? example "Details"

    **Signature**

    `importFeeWithdrawalData(address[] accounts, uint256[] feePeriodIDs)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Length mismatch)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/FeePoolEternalStorage.sol#L19)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)
