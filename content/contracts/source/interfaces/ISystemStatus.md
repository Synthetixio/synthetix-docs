# ISystemStatus

## Description

**Source:** [contracts/interfaces/ISystemStatus.sol](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol)

## Structs

### `Status`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L5)</sub>

| Field        | Type   | Description |
| ------------ | ------ | ----------- |
| `canSuspend` | `bool` | TBA         |
| `canResume`  | `bool` | TBA         |

### `Suspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L10)</sub>

| Field       | Type      | Description |
| ----------- | --------- | ----------- |
| `suspended` | `bool`    | TBA         |
| `reason`    | `uint248` | TBA         |

## Views

### `accessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L18)</sub>

??? example "Details"

    **Signature**

    `accessControl(bytes32 section, address account) view returns (bool canSuspend, bool canResume)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exchangeSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L36)</sub>

??? example "Details"

    **Signature**

    `exchangeSuspension() view returns (bool suspended, uint248 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getSynthExchangeSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L42)</sub>

??? example "Details"

    **Signature**

    `getSynthExchangeSuspensions(bytes32[] synths) view returns (bool[] exchangeSuspensions, uint256[] reasons)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getSynthSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L47)</sub>

??? example "Details"

    **Signature**

    `getSynthSuspensions(bytes32[] synths) view returns (bool[] suspensions, uint256[] reasons)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L34)</sub>

??? example "Details"

    **Signature**

    `issuanceSuspension() view returns (bool suspended, uint248 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L24)</sub>

??? example "Details"

    **Signature**

    `requireExchangeActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireExchangeBetweenSynthsAllowed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L26)</sub>

??? example "Details"

    **Signature**

    `requireExchangeBetweenSynthsAllowed(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireIssuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L22)</sub>

??? example "Details"

    **Signature**

    `requireIssuanceActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireSynthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L28)</sub>

??? example "Details"

    **Signature**

    `requireSynthActive(bytes32 currencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireSynthsActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L30)</sub>

??? example "Details"

    **Signature**

    `requireSynthsActive(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L20)</sub>

??? example "Details"

    **Signature**

    `requireSystemActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthExchangeSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L38)</sub>

??? example "Details"

    **Signature**

    `synthExchangeSuspension(bytes32 currencyKey) view returns (bool suspended, uint248 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L40)</sub>

??? example "Details"

    **Signature**

    `synthSuspension(bytes32 currencyKey) view returns (bool suspended, uint248 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `systemSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L32)</sub>

??? example "Details"

    **Signature**

    `systemSuspension() view returns (bool suspended, uint248 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `suspendSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L53)</sub>

??? example "Details"

    **Signature**

    `suspendSynth(bytes32 currencyKey, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISystemStatus.sol#L55)</sub>

??? example "Details"

    **Signature**

    `updateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume)`

    **Visibility**

    `external`

    **State Mutability**

    ``
