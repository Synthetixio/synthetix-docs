# SynthetixState

**Source:** [contracts/SynthetixState.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    SynthetixState[SynthetixState] --> State[State]
    SynthetixState[SynthetixState] --> LimitedSetup[LimitedSetup]
    State[State] --> Owned[Owned]
```

---

## Structs

---

### IssuanceData
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L19)</sub>

| Field | Type | Description |
| ------ | ------ | ------ |
| initialDebtOwnership | uint256 | TBA |
| debtEntryIndex | uint256 | TBA |

---

## Variables

---

### `issuanceData`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L33)</sub>

**Type:** `mapping(address => struct SynthetixState.IssuanceData)`

---

### `totalIssuerCount`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L36)</sub>

**Type:** `uint256`

---

### `debtLedger`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L39)</sub>

**Type:** `uint256[]`

---

### `issuanceRatio`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L43)</sub>

**Type:** `uint256`

---

### `MAX_ISSUANCE_RATIO`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L45)</sub>

**Type:** `uint256`

---

### `preferredCurrency`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L49)</sub>

**Type:** `mapping(address => bytes4)`

---

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L51)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _associatedContract) public`

    **Modifiers**

    * [Owned](#owned)

    * [State](#state)

    * [LimitedSetup](#limitedsetup)

---

### `setCurrentIssuanceData`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L66)</sub>

??? example "Details"

    **Signature**

    `setCurrentIssuanceData(address account, uint256 initialDebtOwnership) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `clearIssuanceData`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L76)</sub>

??? example "Details"

    **Signature**

    `clearIssuanceData(address account) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `incrementTotalIssuerCount`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L84)</sub>

??? example "Details"

    **Signature**

    `incrementTotalIssuerCount() external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `decrementTotalIssuerCount`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L92)</sub>

??? example "Details"

    **Signature**

    `decrementTotalIssuerCount() external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `appendDebtLedgerValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L101)</sub>

??? example "Details"

    **Signature**

    `appendDebtLedgerValue(uint256 value) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `setPreferredCurrency`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L111)</sub>

??? example "Details"

    **Signature**

    `setPreferredCurrency(address account, bytes4 currencyKey) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `setIssuanceRatio`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L119)</sub>

??? example "Details"

    **Signature**

    `setIssuanceRatio(uint256 _issuanceRatio) external`

    **Requires**

    * [require(..., New issuance ratio cannot exceed MAX_ISSUANCE_RATIO)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L120)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssuanceRatioUpdated](#issuanceratioupdated)

---

### `debtLedgerLength`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L153)</sub>

??? example "Details"

    **Signature**

    `debtLedgerLength() external`

---

### `lastDebtLedgerEntry`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L160)</sub>

??? example "Details"

    **Signature**

    `lastDebtLedgerEntry() external`

---

### `hasIssued`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L168)</sub>

??? example "Details"

    **Signature**

    `hasIssued(address account) external`

---

## Events

---

### `IssuanceRatioUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixState.sol#L172)</sub>

- `(uint256 newRatio)`

---

