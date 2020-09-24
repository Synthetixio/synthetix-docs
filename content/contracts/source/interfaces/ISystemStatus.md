# ISystemStatus

## Description

**Source:** [contracts/interfaces/ISystemStatus.sol](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISystemStatus.sol)

## Structs

### `Status`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISystemStatus.sol#L5)</sub>

| Field        | Type   | Description |
| ------------ | ------ | ----------- |
| `canSuspend` | `bool` | TBA         |
| `canResume`  | `bool` | TBA         |

### `Suspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISystemStatus.sol#L10)</sub>

| Field       | Type      | Description |
| ----------- | --------- | ----------- |
| `suspended` | `bool`    | TBA         |
| `reason`    | `uint248` | TBA         |

## Views

### `accessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISystemStatus.sol#L18)</sub>

??? example "Details"

    **Signature**

    `accessControl(bytes32 section, address account) returns (bool, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISystemStatus.sol#L24)</sub>

??? example "Details"

    **Signature**

    `requireExchangeActive()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireIssuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISystemStatus.sol#L22)</sub>

??? example "Details"

    **Signature**

    `requireIssuanceActive()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireSynthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISystemStatus.sol#L26)</sub>

??? example "Details"

    **Signature**

    `requireSynthActive(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireSynthsActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISystemStatus.sol#L28)</sub>

??? example "Details"

    **Signature**

    `requireSynthsActive(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISystemStatus.sol#L20)</sub>

??? example "Details"

    **Signature**

    `requireSystemActive()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISystemStatus.sol#L30)</sub>

??? example "Details"

    **Signature**

    `synthSuspension(bytes32 currencyKey) returns (bool, uint248)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `suspendSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISystemStatus.sol#L33)</sub>

??? example "Details"

    **Signature**

    `suspendSynth(bytes32 currencyKey, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `updateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/interfaces/ISystemStatus.sol#L35)</sub>

??? example "Details"

    **Signature**

    `updateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
