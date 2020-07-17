# ISystemStatus

## Description

**Source:** [contracts/interfaces/ISystemStatus.sol](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/interfaces/ISystemStatus.sol)

## Views

### `requireExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/interfaces/ISystemStatus.sol#L10)</sub>

??? example "Details"

    **Signature**

    `requireExchangeActive()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireIssuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/interfaces/ISystemStatus.sol#L8)</sub>

??? example "Details"

    **Signature**

    `requireIssuanceActive()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireSynthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/interfaces/ISystemStatus.sol#L12)</sub>

??? example "Details"

    **Signature**

    `requireSynthActive(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireSynthsActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/interfaces/ISystemStatus.sol#L14)</sub>

??? example "Details"

    **Signature**

    `requireSynthsActive(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/interfaces/ISystemStatus.sol#L6)</sub>

??? example "Details"

    **Signature**

    `requireSystemActive()`

    **Visibility**

    `external`

    **State Mutability**

    `view`
