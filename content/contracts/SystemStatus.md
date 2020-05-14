# SystemStatus

**Source:** [contracts/SystemStatus.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    SystemStatus[SystemStatus] --> Owned[Owned]
    SystemStatus[SystemStatus] --> ISystemStatus[ISystemStatus]
```

---

## Structs

---

### Status
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L10)</sub>

| Field | Type | Description |
| ------ | ------ | ------ |
| canSuspend | bool | TBA |
| canResume | bool | TBA |

---

### Suspension
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L17)</sub>

| Field | Type | Description |
| ------ | ------ | ------ |
| suspended | bool | TBA |
| reason | uint248 | TBA |

---

## Variables

---

### `accessControl`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L15)</sub>

**Type:** `mapping(bytes32 => mapping(address => struct SystemStatus.Status))`

---

### `SUSPENSION_REASON_UPGRADE`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L24)</sub>

**Type:** `uint248`

---

### `SECTION_SYSTEM`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L26)</sub>

**Type:** `bytes32`

---

### `SECTION_ISSUANCE`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L27)</sub>

**Type:** `bytes32`

---

### `SECTION_EXCHANGE`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L28)</sub>

**Type:** `bytes32`

---

### `SECTION_SYNTH`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L29)</sub>

**Type:** `bytes32`

---

### `systemSuspension`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L31)</sub>

**Type:** `struct SystemStatus.Suspension`

---

### `issuanceSuspension`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L33)</sub>

**Type:** `struct SystemStatus.Suspension`

---

### `exchangeSuspension`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L35)</sub>

**Type:** `struct SystemStatus.Suspension`

---

### `synthSuspension`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L37)</sub>

**Type:** `mapping(bytes32 => struct SystemStatus.Suspension)`

---

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L39)</sub>

??? example "Details"

    **Signature**

    `(address _owner) public`

    **Modifiers**

    * [Owned](#owned)

---

### `requireSystemActive`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L47)</sub>

??? example "Details"

    **Signature**

    `requireSystemActive() external`

---

### `requireIssuanceActive`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L51)</sub>

??? example "Details"

    **Signature**

    `requireIssuanceActive() external`

---

### `requireExchangeActive`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L57)</sub>

??? example "Details"

    **Signature**

    `requireExchangeActive() external`

---

### `requireSynthActive`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L63)</sub>

??? example "Details"

    **Signature**

    `requireSynthActive(bytes32 currencyKey) external`

---

### `requireSynthsActive`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L69)</sub>

??? example "Details"

    **Signature**

    `requireSynthsActive(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) external`

---

### `isSystemUpgrading`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L79)</sub>

??? example "Details"

    **Signature**

    `isSystemUpgrading() external`

---

### `getSynthSuspensions`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L83)</sub>

??? example "Details"

    **Signature**

    `getSynthSuspensions(bytes32[] synths) external`

---

### `updateAccessControl`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L98)</sub>

??? example "Details"

    **Signature**

    `updateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `suspendSystem`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L107)</sub>

??? example "Details"

    **Signature**

    `suspendSystem(uint256 reason) external`

    **Emits**

    * [SystemSuspended](#systemsuspended)

---

### `resumeSystem`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L114)</sub>

??? example "Details"

    **Signature**

    `resumeSystem() external`

    **Emits**

    * [SystemResumed](#systemresumed)

---

### `suspendIssuance`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L121)</sub>

??? example "Details"

    **Signature**

    `suspendIssuance(uint256 reason) external`

    **Emits**

    * [IssuanceSuspended](#issuancesuspended)

---

### `resumeIssuance`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L128)</sub>

??? example "Details"

    **Signature**

    `resumeIssuance() external`

    **Emits**

    * [IssuanceResumed](#issuanceresumed)

---

### `suspendExchange`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L135)</sub>

??? example "Details"

    **Signature**

    `suspendExchange(uint256 reason) external`

    **Emits**

    * [ExchangeSuspended](#exchangesuspended)

---

### `resumeExchange`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L142)</sub>

??? example "Details"

    **Signature**

    `resumeExchange() external`

    **Emits**

    * [ExchangeResumed](#exchangeresumed)

---

### `suspendSynth`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L149)</sub>

??? example "Details"

    **Signature**

    `suspendSynth(bytes32 currencyKey, uint256 reason) external`

    **Emits**

    * [SynthSuspended](#synthsuspended)

---

### `resumeSynth`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L156)</sub>

??? example "Details"

    **Signature**

    `resumeSynth(bytes32 currencyKey) external`

    **Emits**

    * [SynthResumed](#synthresumed)

---

## Events

---

### `SystemSuspended`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L201)</sub>

- `(uint256 reason)`

---

### `SystemResumed`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L202)</sub>

- `(uint256 reason)`

---

### `IssuanceSuspended`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L204)</sub>

- `(uint256 reason)`

---

### `IssuanceResumed`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L205)</sub>

- `(uint256 reason)`

---

### `ExchangeSuspended`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L207)</sub>

- `(uint256 reason)`

---

### `ExchangeResumed`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L208)</sub>

- `(uint256 reason)`

---

### `SynthSuspended`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L210)</sub>

- `(bytes32 currencyKey, uint256 reason)`

---

### `SynthResumed`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L211)</sub>

- `(bytes32 currencyKey, uint256 reason)`

---

### `AccessControlUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L213)</sub>

- `(bytes32 section, address account, bool canSuspend, bool canResume)`

---

