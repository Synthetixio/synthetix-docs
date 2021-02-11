# SystemStatus

## Description

Implemented to address [SIP-44](https://sips.synthetix.io/sips/sip-44) - various mechanisms to suspend the Synthetix system

**Source:** [contracts/SystemStatus.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol)

## Variables

### `SECTION_EXCHANGE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L16)</sub>

**Type:** `bytes32`

### `SECTION_ISSUANCE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L15)</sub>

**Type:** `bytes32`

### `SECTION_SYNTH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L18)</sub>

**Type:** `bytes32`

### `SECTION_SYNTH_EXCHANGE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L17)</sub>

**Type:** `bytes32`

### `SECTION_SYSTEM`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L14)</sub>

**Type:** `bytes32`

### `SUSPENSION_REASON_UPGRADE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L12)</sub>

**Type:** `uint248`

### `accessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L10)</sub>

**Type:** `mapping(bytes32 => mapping(address => struct ISystemStatus.Status))`

### `exchangeSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L24)</sub>

**Type:** `struct ISystemStatus.Suspension`

### `issuanceSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L22)</sub>

**Type:** `struct ISystemStatus.Suspension`

### `synthExchangeSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L26)</sub>

**Type:** `mapping(bytes32 => struct ISystemStatus.Suspension)`

### `synthSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L28)</sub>

**Type:** `mapping(bytes32 => struct ISystemStatus.Suspension)`

### `systemSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L20)</sub>

**Type:** `struct ISystemStatus.Suspension`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L30)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `_internalResumeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L274)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L275)

### `_internalResumeSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L293)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynthsExchange(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L294)

### `_internalSuspendSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L283)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynthExchange(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L284)

### `_internalSuspendSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L264)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynths(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L265)

### `resumeExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L182)</sub>

??? example "Details"

    **Signature**

    `resumeExchange()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L183)

    **Emits**

    * [ExchangeResumed](#exchangeresumed)

### `resumeIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L168)</sub>

??? example "Details"

    **Signature**

    `resumeIssuance()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L169)

    **Emits**

    * [IssuanceResumed](#issuanceresumed)

### `resumeSystem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L154)</sub>

??? example "Details"

    **Signature**

    `resumeSystem()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L155)

    **Emits**

    * [SystemResumed](#systemresumed)

### `suspendExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L175)</sub>

??? example "Details"

    **Signature**

    `suspendExchange(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L176)

    **Emits**

    * [ExchangeSuspended](#exchangesuspended)

### `suspendIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L161)</sub>

??? example "Details"

    **Signature**

    `suspendIssuance(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L162)

    **Emits**

    * [IssuanceSuspended](#issuancesuspended)

### `suspendSystem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L147)</sub>

??? example "Details"

    **Signature**

    `suspendSystem(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L148)

    **Emits**

    * [SystemSuspended](#systemsuspended)

### `updateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L121)</sub>

??? example "Details"

    **Signature**

    `updateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `updateAccessControls`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L130)</sub>

??? example "Details"

    **Signature**

    `updateAccessControls(bytes32[] sections, address[] accounts, bool[] canSuspends, bool[] canResumes)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Input array lengths must match")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L136)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_internalRequireExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L252)</sub>

??? example "Details"

    **Signature**

    `_internalRequireExchangeActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Exchange is suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L253)

### `_internalRequireIssuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L248)</sub>

??? example "Details"

    **Signature**

    `_internalRequireIssuanceActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Issuance is suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L249)

### `_internalRequireSynthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L260)</sub>

??? example "Details"

    **Signature**

    `_internalRequireSynthActive(bytes32 currencyKey) view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Synth is suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L261)

### `_internalRequireSynthExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L256)</sub>

??? example "Details"

    **Signature**

    `_internalRequireSynthExchangeActive(bytes32 currencyKey) view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Synth exchange suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L257)

### `_internalRequireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L239)</sub>

??? example "Details"

    **Signature**

    `_internalRequireSystemActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "string memory")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L240)

### `_internalResumeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L274)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L275)

### `_internalResumeSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L293)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynthsExchange(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L294)

### `_internalSuspendSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L283)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynthExchange(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L284)

### `_internalSuspendSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L264)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynths(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L265)

### `_internalUpdateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L302)</sub>

??? example "Details"

    **Signature**

    `_internalUpdateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Invalid section supplied")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L308)

    **Emits**

    * [AccessControlUpdated](#accesscontrolupdated)

### `_requireAccessToResume`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L235)</sub>

??? example "Details"

    **Signature**

    `_requireAccessToResume(bytes32 section) view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Restricted to access control list")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L236)

### `_requireAccessToSuspend`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L231)</sub>

??? example "Details"

    **Signature**

    `_requireAccessToSuspend(bytes32 section) view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Restricted to access control list")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L232)

## External Functions

### `getSynthExchangeSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L92)</sub>

??? example "Details"

    **Signature**

    `getSynthExchangeSuspensions(bytes32[] synths) view returns (bool[] exchangeSuspensions, uint256[] reasons)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getSynthSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L106)</sub>

??? example "Details"

    **Signature**

    `getSynthSuspensions(bytes32[] synths) view returns (bool[] suspensions, uint256[] reasons)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `isSystemUpgrading`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L88)</sub>

??? example "Details"

    **Signature**

    `isSystemUpgrading() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `requireExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L45)</sub>

??? example "Details"

    **Signature**

    `requireExchangeActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L47)

    * [_internalRequireExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L50)

### `requireExchangeBetweenSynthsAllowed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L72)</sub>

??? example "Details"

    **Signature**

    `requireExchangeBetweenSynthsAllowed(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L74)

    * [_internalRequireExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L77)

    * [_internalRequireSynthExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L80)

    * [_internalRequireSynthExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L81)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L84)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L85)

### `requireIssuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L37)</sub>

??? example "Details"

    **Signature**

    `requireIssuanceActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L39)

    * [_internalRequireIssuanceActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L42)

### `requireSynthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L59)</sub>

??? example "Details"

    **Signature**

    `requireSynthActive(bytes32 currencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L61)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L62)

### `requireSynthExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L53)</sub>

??? example "Details"

    **Signature**

    `requireSynthExchangeActive(bytes32 currencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L55)

    * [_internalRequireSynthExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L56)

### `requireSynthsActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L65)</sub>

??? example "Details"

    **Signature**

    `requireSynthsActive(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L67)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L68)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L69)

### `requireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L33)</sub>

??? example "Details"

    **Signature**

    `requireSystemActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L34)

### `resumeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L219)</sub>

??? example "Details"

    **Signature**

    `resumeSynth(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `resumeSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L199)</sub>

??? example "Details"

    **Signature**

    `resumeSynthExchange(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `resumeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L225)</sub>

??? example "Details"

    **Signature**

    `resumeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `resumeSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L205)</sub>

??? example "Details"

    **Signature**

    `resumeSynthsExchange(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `suspendSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L209)</sub>

??? example "Details"

    **Signature**

    `suspendSynth(bytes32 currencyKey, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `suspendSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L189)</sub>

??? example "Details"

    **Signature**

    `suspendSynthExchange(bytes32 currencyKey, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `suspendSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L215)</sub>

??? example "Details"

    **Signature**

    `suspendSynths(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `suspendSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L195)</sub>

??? example "Details"

    **Signature**

    `suspendSynthsExchange(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

## Events

### `AccessControlUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L338)</sub>

**Signature**: `AccessControlUpdated(bytes32 section, address account, bool canSuspend, bool canResume)`

### `ExchangeResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L330)</sub>

**Signature**: `ExchangeResumed(uint256 reason)`

### `ExchangeSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L329)</sub>

**Signature**: `ExchangeSuspended(uint256 reason)`

### `IssuanceResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L327)</sub>

**Signature**: `IssuanceResumed(uint256 reason)`

### `IssuanceSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L326)</sub>

**Signature**: `IssuanceSuspended(uint256 reason)`

### `SynthExchangeResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L333)</sub>

**Signature**: `SynthExchangeResumed(bytes32 currencyKey, uint256 reason)`

### `SynthExchangeSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L332)</sub>

**Signature**: `SynthExchangeSuspended(bytes32 currencyKey, uint256 reason)`

### `SynthResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L336)</sub>

**Signature**: `SynthResumed(bytes32 currencyKey, uint256 reason)`

### `SynthSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L335)</sub>

**Signature**: `SynthSuspended(bytes32 currencyKey, uint256 reason)`

### `SystemResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L324)</sub>

**Signature**: `SystemResumed(uint256 reason)`

### `SystemSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/SystemStatus.sol#L323)</sub>

**Signature**: `SystemSuspended(uint256 reason)`
