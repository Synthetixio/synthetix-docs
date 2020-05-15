# FeePoolEternalStorage

**Source:** [contracts/FeePoolEternalStorage.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolEternalStorage.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    FeePoolEternalStorage[FeePoolEternalStorage] --> EternalStorage[EternalStorage]
    FeePoolEternalStorage[FeePoolEternalStorage] --> LimitedSetup[LimitedSetup]
    EternalStorage[EternalStorage] --> State[State]
    State[State] --> Owned[Owned]
```

---

## Variables

---

### `LAST_FEE_WITHDRAWAL`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolEternalStorage.sol#L10)</sub>

**Type:** `bytes32`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolEternalStorage.sol#L12)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _feePool) public`

    **Modifiers**

    * [EternalStorage](#eternalstorage)

    * [LimitedSetup](#limitedsetup)

---

### `importFeeWithdrawalData`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolEternalStorage.sol#L14)</sub>

??? example "Details"

    **Signature**

    `importFeeWithdrawalData(address[] accounts, uint256[] feePeriodIDs) external`

    **Requires**

    * [require(..., Length mismatch)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolEternalStorage.sol#L19)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

---

