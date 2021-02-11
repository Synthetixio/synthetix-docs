# ISystemStatus

## Description

**Source:** [contracts/interfaces/ISystemStatus.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol)

## Structs

### `Status`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L6)</sub>

| Field        | Type   | Description |
| ------------ | ------ | ----------- |
| `canSuspend` | `bool` | TBA         |
| `canResume`  | `bool` | TBA         |

### `Suspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L11)</sub>

| Field       | Type      | Description |
| ----------- | --------- | ----------- |
| `suspended` | `bool`    | TBA         |
| `reason`    | `uint248` | TBA         |

## External Functions

### `accessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L19)</sub>

??? example "Details"

    **Signature**

    `accessControl(bytes32 section, address account) view returns (bool canSuspend, bool canResume)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exchangeSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L37)</sub>

??? example "Details"

    **Signature**

    `exchangeSuspension() view returns (bool suspended, uint248 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getSynthExchangeSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L43)</sub>

??? example "Details"

    **Signature**

    `getSynthExchangeSuspensions(bytes32[] synths) view returns (bool[] exchangeSuspensions, uint256[] reasons)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getSynthSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L48)</sub>

??? example "Details"

    **Signature**

    `getSynthSuspensions(bytes32[] synths) view returns (bool[] suspensions, uint256[] reasons)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issuanceSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L35)</sub>

??? example "Details"

    **Signature**

    `issuanceSuspension() view returns (bool suspended, uint248 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `requireExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L25)</sub>

??? example "Details"

    **Signature**

    `requireExchangeActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `requireExchangeBetweenSynthsAllowed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L27)</sub>

??? example "Details"

    **Signature**

    `requireExchangeBetweenSynthsAllowed(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `requireIssuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L23)</sub>

??? example "Details"

    **Signature**

    `requireIssuanceActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `requireSynthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L29)</sub>

??? example "Details"

    **Signature**

    `requireSynthActive(bytes32 currencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `requireSynthsActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L31)</sub>

??? example "Details"

    **Signature**

    `requireSynthsActive(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `requireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L21)</sub>

??? example "Details"

    **Signature**

    `requireSystemActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `suspendSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L54)</sub>

??? example "Details"

    **Signature**

    `suspendSynth(bytes32 currencyKey, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synthExchangeSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L39)</sub>

??? example "Details"

    **Signature**

    `synthExchangeSuspension(bytes32 currencyKey) view returns (bool suspended, uint248 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synthSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L41)</sub>

??? example "Details"

    **Signature**

    `synthSuspension(bytes32 currencyKey) view returns (bool suspended, uint248 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `systemSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L33)</sub>

??? example "Details"

    **Signature**

    `systemSuspension() view returns (bool suspended, uint248 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/ISystemStatus.sol#L56)</sub>

??? example "Details"

    **Signature**

    `updateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
