# ISynthetixState

**Source:** [contracts/interfaces/ISynthetixState.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol)

## Functions

---

### `debtLedger`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L6)</sub>

??? example "Details"

    **Signature**

    `debtLedger(uint256 index) external`

---

### `issuanceRatio`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L8)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() external`

---

### `issuanceData`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L10)</sub>

??? example "Details"

    **Signature**

    `issuanceData(address account) external`

---

### `debtLedgerLength`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L12)</sub>

??? example "Details"

    **Signature**

    `debtLedgerLength() external`

---

### `hasIssued`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L14)</sub>

??? example "Details"

    **Signature**

    `hasIssued(address account) external`

---

### `lastDebtLedgerEntry`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L16)</sub>

??? example "Details"

    **Signature**

    `lastDebtLedgerEntry() external`

---

### `incrementTotalIssuerCount`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L19)</sub>

??? example "Details"

    **Signature**

    `incrementTotalIssuerCount() external`

---

### `decrementTotalIssuerCount`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L21)</sub>

??? example "Details"

    **Signature**

    `decrementTotalIssuerCount() external`

---

### `setCurrentIssuanceData`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L23)</sub>

??? example "Details"

    **Signature**

    `setCurrentIssuanceData(address account, uint256 initialDebtOwnership) external`

---

### `appendDebtLedgerValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L25)</sub>

??? example "Details"

    **Signature**

    `appendDebtLedgerValue(uint256 value) external`

---

### `clearIssuanceData`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L27)</sub>

??? example "Details"

    **Signature**

    `clearIssuanceData(address account) external`

---

