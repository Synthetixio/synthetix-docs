# ISynthetixState

## Description

**Source:** [contracts/interfaces/ISynthetixState.sol](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ISynthetixState.sol)

## External Functions

### `appendDebtLedgerValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ISynthetixState.sol#L24)</sub>

??? example "Details"

    **Signature**

    `appendDebtLedgerValue(uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `clearIssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ISynthetixState.sol#L26)</sub>

??? example "Details"

    **Signature**

    `clearIssuanceData(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `debtLedger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ISynthetixState.sol#L7)</sub>

??? example "Details"

    **Signature**

    `debtLedger(uint256 index) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `debtLedgerLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ISynthetixState.sol#L11)</sub>

??? example "Details"

    **Signature**

    `debtLedgerLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `decrementTotalIssuerCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ISynthetixState.sol#L20)</sub>

??? example "Details"

    **Signature**

    `decrementTotalIssuerCount()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `hasIssued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ISynthetixState.sol#L13)</sub>

??? example "Details"

    **Signature**

    `hasIssued(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `incrementTotalIssuerCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ISynthetixState.sol#L18)</sub>

??? example "Details"

    **Signature**

    `incrementTotalIssuerCount()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ISynthetixState.sol#L9)</sub>

??? example "Details"

    **Signature**

    `issuanceData(address account) view returns (uint256 initialDebtOwnership, uint256 debtEntryIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `lastDebtLedgerEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ISynthetixState.sol#L15)</sub>

??? example "Details"

    **Signature**

    `lastDebtLedgerEntry() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `setCurrentIssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ISynthetixState.sol#L22)</sub>

??? example "Details"

    **Signature**

    `setCurrentIssuanceData(address account, uint256 initialDebtOwnership)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
