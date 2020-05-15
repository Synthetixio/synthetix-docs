# FeePoolState

**Source:** [contracts/FeePoolState.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    FeePoolState[FeePoolState] --> SelfDestructible[SelfDestructible]
    FeePoolState[FeePoolState] --> LimitedSetup[LimitedSetup]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
```

---

## Structs

---

### IssuanceData
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L27)</sub>

| Field | Type | Description |
| ------ | ------ | ------ |
| debtPercentage | uint256 | TBA |
| debtEntryIndex | uint256 | TBA |

---

## Variables

---

### `FEE_PERIOD_LENGTH`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L22)</sub>

**Type:** `uint8`

---

### `feePool`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L24)</sub>

**Type:** `address`

---

### `accountIssuanceLedger`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L33)</sub>

**Type:** `mapping(address => struct FeePoolState.IssuanceData[6])`

---

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L35)</sub>

??? example "Details"

    **Signature**

    `(address _owner, contract IFeePool _feePool) public`

    **Modifiers**

    * [Owned](#owned)

    * [SelfDestructible](#selfdestructible)

    * [LimitedSetup](#limitedsetup)

---

### `setFeePool`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L46)</sub>

??? example "Details"

    **Signature**

    `setFeePool(contract IFeePool _feePool) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `getAccountsDebtEntry`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L57)</sub>

??? example "Details"

    **Signature**

    `getAccountsDebtEntry(address account, uint256 index) public`

    **Requires**

    * [require(..., index exceeds the FEE_PERIOD_LENGTH)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L62)

---

### `applicableIssuanceData`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L73)</sub>

??? example "Details"

    **Signature**

    `applicableIssuanceData(address account, uint256 closingDebtIndex) external`

---

### `appendAccountIssuanceRecord`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L98)</sub>

??? example "Details"

    **Signature**

    `appendAccountIssuanceRecord(address account, uint256 debtRatio, uint256 debtEntryIndex, uint256 currentPeriodStartDebtIndex) external`

    **Modifiers**

    * [onlyFeePool](#onlyfeepool)

---

### `issuanceDataIndexOrder`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L118)</sub>

??? example "Details"

    **Signature**

    `issuanceDataIndexOrder(address account) private`

---

### `importIssuerData`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L137)</sub>

??? example "Details"

    **Signature**

    `importIssuerData(address[] accounts, uint256[] ratios, uint256 periodToInsert, uint256 feePeriodCloseIndex) external`

    **Requires**

    * [require(..., Length mismatch)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L143)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

---

## Modifiers

---

### `onlyFeePool`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L154)</sub>

---

## Events

---

### `IssuanceDebtRatioEntry`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePoolState.sol#L160)</sub>

- `(address account, uint256 debtRatio, uint256 feePeriodCloseIndex)`

---

