# SystemStatus

## Description

Implemented to address [SIP-44](https://sips.synthetix.io/sips/sip-44) - various mechanisms to suspend the Synthetix system

**Source:** [contracts/SystemStatus.sol](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    SystemStatus[SystemStatus] --> Owned[Owned]

```

## Constants

### `SECTION_EXCHANGE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L16)</sub>

**Type:** `bytes32`

### `SECTION_ISSUANCE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L15)</sub>

**Type:** `bytes32`

### `SECTION_SYNTH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L17)</sub>

**Type:** `bytes32`

### `SECTION_SYSTEM`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L14)</sub>

**Type:** `bytes32`

### `SUSPENSION_REASON_UPGRADE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L12)</sub>

**Type:** `uint248`

## Variables

### `accessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L10)</sub>

**Type:** `mapping(bytes32 => mapping(address => struct ISystemStatus.Status))`

### `exchangeSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L23)</sub>

**Type:** `struct ISystemStatus.Suspension`

### `issuanceSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L21)</sub>

**Type:** `struct ISystemStatus.Suspension`

### `synthSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L25)</sub>

**Type:** `mapping(bytes32 => struct ISystemStatus.Suspension)`

### `systemSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L19)</sub>

**Type:** `struct ISystemStatus.Suspension`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L27)</sub>

??? example "Details"

    **Signature**

    `(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `getSynthSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L71)</sub>

??? example "Details"

    **Signature**

    `getSynthSuspensions(bytes32[] synths) returns (bool[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isSystemUpgrading`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L67)</sub>

??? example "Details"

    **Signature**

    `isSystemUpgrading() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L45)</sub>

??? example "Details"

    **Signature**

    `requireExchangeActive()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L47)

    * [require(..., Exchange is suspended. Operation prohibited)](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L48)

### `requireIssuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L39)</sub>

??? example "Details"

    **Signature**

    `requireIssuanceActive()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L41)

    * [require(..., Issuance is suspended. Operation prohibited)](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L42)

### `requireSynthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L51)</sub>

??? example "Details"

    **Signature**

    `requireSynthActive(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L53)

    * [require(..., Synth is suspended. Operation prohibited)](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L54)

### `requireSynthsActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L57)</sub>

??? example "Details"

    **Signature**

    `requireSynthsActive(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L59)

    * [require(..., One or more synths are suspended. Operation prohibited)](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L61)

### `requireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L35)</sub>

??? example "Details"

    **Signature**

    `requireSystemActive()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L36)

## Restricted Functions

### `resumeExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L130)</sub>

??? example "Details"

    **Signature**

    `resumeExchange()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L131)

    **Emits**

    * [ExchangeResumed](#exchangeresumed)

### `resumeIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L116)</sub>

??? example "Details"

    **Signature**

    `resumeIssuance()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L117)

    **Emits**

    * [IssuanceResumed](#issuanceresumed)

### `resumeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L144)</sub>

??? example "Details"

    **Signature**

    `resumeSynth(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L145)

    **Emits**

    * [SynthResumed](#synthresumed)

### `resumeSystem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L102)</sub>

??? example "Details"

    **Signature**

    `resumeSystem()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L103)

    **Emits**

    * [SystemResumed](#systemresumed)

### `suspendExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L123)</sub>

??? example "Details"

    **Signature**

    `suspendExchange(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L124)

    **Emits**

    * [ExchangeSuspended](#exchangesuspended)

### `suspendIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L109)</sub>

??? example "Details"

    **Signature**

    `suspendIssuance(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L110)

    **Emits**

    * [IssuanceSuspended](#issuancesuspended)

### `suspendSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L137)</sub>

??? example "Details"

    **Signature**

    `suspendSynth(bytes32 currencyKey, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L138)

    **Emits**

    * [SynthSuspended](#synthsuspended)

### `suspendSystem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L95)</sub>

??? example "Details"

    **Signature**

    `suspendSystem(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L96)

    **Emits**

    * [SystemSuspended](#systemsuspended)

### `updateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L86)</sub>

??? example "Details"

    **Signature**

    `updateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_internalRequireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L160)</sub>

??? example "Details"

    **Signature**

    `_internalRequireSystemActive()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., memory)](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L161)

### `_internalUpdateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L169)</sub>

??? example "Details"

    **Signature**

    `_internalUpdateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Invalid section supplied)](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L175)

    **Emits**

    * [AccessControlUpdated](#accesscontrolupdated)

### `_requireAccessToResume`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L156)</sub>

??? example "Details"

    **Signature**

    `_requireAccessToResume(bytes32 section)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Restricted to access control list)](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L157)

### `_requireAccessToSuspend`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L152)</sub>

??? example "Details"

    **Signature**

    `_requireAccessToSuspend(bytes32 section)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Restricted to access control list)](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L153)

## Events

### `AccessControlUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L201)</sub>

**Signature**: `AccessControlUpdated(bytes32 section, address account, bool canSuspend, bool canResume)`

### `ExchangeResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L196)</sub>

**Signature**: `ExchangeResumed(uint256 reason)`

### `ExchangeSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L195)</sub>

**Signature**: `ExchangeSuspended(uint256 reason)`

### `IssuanceResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L193)</sub>

**Signature**: `IssuanceResumed(uint256 reason)`

### `IssuanceSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L192)</sub>

**Signature**: `IssuanceSuspended(uint256 reason)`

### `SynthResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L199)</sub>

**Signature**: `SynthResumed(bytes32 currencyKey, uint256 reason)`

### `SynthSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L198)</sub>

**Signature**: `SynthSuspended(bytes32 currencyKey, uint256 reason)`

### `SystemResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L190)</sub>

**Signature**: `SystemResumed(uint256 reason)`

### `SystemSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/SystemStatus.sol#L189)</sub>

**Signature**: `SystemSuspended(uint256 reason)`
