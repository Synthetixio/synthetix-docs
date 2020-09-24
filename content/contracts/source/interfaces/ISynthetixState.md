# ISynthetixState

## Description

**Source:** [contracts/interfaces/ISynthetixState.sol](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISynthetixState.sol)

## Views

### `debtLedger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISynthetixState.sol#L6)</sub>

??? example "Details"

    **Signature**

    `debtLedger(uint256 index) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtLedgerLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISynthetixState.sol#L10)</sub>

??? example "Details"

    **Signature**

    `debtLedgerLength() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `hasIssued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISynthetixState.sol#L12)</sub>

??? example "Details"

    **Signature**

    `hasIssued(address account) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISynthetixState.sol#L8)</sub>

??? example "Details"

    **Signature**

    `issuanceData(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastDebtLedgerEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISynthetixState.sol#L14)</sub>

??? example "Details"

    **Signature**

    `lastDebtLedgerEntry() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `appendDebtLedgerValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISynthetixState.sol#L23)</sub>

??? example "Details"

    **Signature**

    `appendDebtLedgerValue(uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `clearIssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISynthetixState.sol#L25)</sub>

??? example "Details"

    **Signature**

    `clearIssuanceData(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `decrementTotalIssuerCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISynthetixState.sol#L19)</sub>

??? example "Details"

    **Signature**

    `decrementTotalIssuerCount()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `incrementTotalIssuerCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISynthetixState.sol#L17)</sub>

??? example "Details"

    **Signature**

    `incrementTotalIssuerCount()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setCurrentIssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISynthetixState.sol#L21)</sub>

??? example "Details"

    **Signature**

    `setCurrentIssuanceData(address account, uint256 initialDebtOwnership)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
