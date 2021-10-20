# SystemStatus

## Description

Implemented to address [SIP-44](https://sips.synthetix.io/sips/sip-44) - various mechanisms to suspend the Synthetix system

**Source:** [contracts/SystemStatus.sol](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol)

## Variables

### `SECTION_EXCHANGE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L15)</sub>

**Type:** `bytes32`

### `SECTION_ISSUANCE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L14)</sub>

**Type:** `bytes32`

### `SECTION_SYNTH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L17)</sub>

**Type:** `bytes32`

### `SECTION_SYNTH_EXCHANGE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L16)</sub>

**Type:** `bytes32`

### `SECTION_SYSTEM`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L13)</sub>

**Type:** `bytes32`

### `SUSPENSION_REASON_UPGRADE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L11)</sub>

**Type:** `uint248`

### `accessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L9)</sub>

**Type:** `mapping(bytes32 => mapping(address => struct ISystemStatus.Status))`

### `exchangeSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L23)</sub>

**Type:** `struct ISystemStatus.Suspension`

### `issuanceSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L21)</sub>

**Type:** `struct ISystemStatus.Suspension`

### `synthExchangeSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L25)</sub>

**Type:** `mapping(bytes32 => struct ISystemStatus.Suspension)`

### `synthSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L27)</sub>

**Type:** `mapping(bytes32 => struct ISystemStatus.Suspension)`

### `systemSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L19)</sub>

**Type:** `struct ISystemStatus.Suspension`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L29)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `getSynthExchangeSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L91)</sub>

??? example "Details"

    **Signature**

    `getSynthExchangeSuspensions(bytes32[] synths) view returns (bool[] exchangeSuspensions, uint256[] reasons)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getSynthSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L105)</sub>

??? example "Details"

    **Signature**

    `getSynthSuspensions(bytes32[] synths) view returns (bool[] suspensions, uint256[] reasons)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isSystemUpgrading`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L87)</sub>

??? example "Details"

    **Signature**

    `isSystemUpgrading() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L44)</sub>

??? example "Details"

    **Signature**

    `requireExchangeActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L46)

    * [_internalRequireExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L49)

### `requireExchangeBetweenSynthsAllowed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L71)</sub>

??? example "Details"

    **Signature**

    `requireExchangeBetweenSynthsAllowed(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L73)

    * [_internalRequireExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L76)

    * [_internalRequireSynthExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L79)

    * [_internalRequireSynthExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L80)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L83)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L84)

### `requireIssuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L36)</sub>

??? example "Details"

    **Signature**

    `requireIssuanceActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L38)

    * [_internalRequireIssuanceActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L41)

### `requireSynthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L58)</sub>

??? example "Details"

    **Signature**

    `requireSynthActive(bytes32 currencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L60)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L61)

### `requireSynthExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L52)</sub>

??? example "Details"

    **Signature**

    `requireSynthExchangeActive(bytes32 currencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L54)

    * [_internalRequireSynthExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L55)

### `requireSynthsActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L64)</sub>

??? example "Details"

    **Signature**

    `requireSynthsActive(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L66)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L67)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L68)

### `requireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L32)</sub>

??? example "Details"

    **Signature**

    `requireSystemActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L33)

## Restricted Functions

### `_internalResumeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L273)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L274)

### `_internalResumeSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L292)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynthsExchange(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L293)

### `_internalSuspendSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L282)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynthExchange(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L283)

### `_internalSuspendSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L263)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynths(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L264)

### `resumeExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L181)</sub>

??? example "Details"

    **Signature**

    `resumeExchange()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L182)

    **Emits**

    * [ExchangeResumed](#exchangeresumed)

### `resumeIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L167)</sub>

??? example "Details"

    **Signature**

    `resumeIssuance()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L168)

    **Emits**

    * [IssuanceResumed](#issuanceresumed)

### `resumeSystem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L153)</sub>

??? example "Details"

    **Signature**

    `resumeSystem()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L154)

    **Emits**

    * [SystemResumed](#systemresumed)

### `suspendExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L174)</sub>

??? example "Details"

    **Signature**

    `suspendExchange(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L175)

    **Emits**

    * [ExchangeSuspended](#exchangesuspended)

### `suspendIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L160)</sub>

??? example "Details"

    **Signature**

    `suspendIssuance(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L161)

    **Emits**

    * [IssuanceSuspended](#issuancesuspended)

### `suspendSystem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L146)</sub>

??? example "Details"

    **Signature**

    `suspendSystem(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L147)

    **Emits**

    * [SystemSuspended](#systemsuspended)

### `updateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L120)</sub>

??? example "Details"

    **Signature**

    `updateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `updateAccessControls`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L129)</sub>

??? example "Details"

    **Signature**

    `updateAccessControls(bytes32[] sections, address[] accounts, bool[] canSuspends, bool[] canResumes)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Input array lengths must match")](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L135)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_internalRequireExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L251)</sub>

??? example "Details"

    **Signature**

    `_internalRequireExchangeActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Exchange is suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L252)

### `_internalRequireIssuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L247)</sub>

??? example "Details"

    **Signature**

    `_internalRequireIssuanceActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Issuance is suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L248)

### `_internalRequireSynthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L259)</sub>

??? example "Details"

    **Signature**

    `_internalRequireSynthActive(bytes32 currencyKey) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Synth is suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L260)

### `_internalRequireSynthExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L255)</sub>

??? example "Details"

    **Signature**

    `_internalRequireSynthExchangeActive(bytes32 currencyKey) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Synth exchange suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L256)

### `_internalRequireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L238)</sub>

??? example "Details"

    **Signature**

    `_internalRequireSystemActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "string memory")](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L239)

### `_internalResumeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L273)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L274)

### `_internalResumeSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L292)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynthsExchange(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L293)

### `_internalSuspendSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L282)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynthExchange(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L283)

### `_internalSuspendSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L263)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynths(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L264)

### `_internalUpdateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L301)</sub>

??? example "Details"

    **Signature**

    `_internalUpdateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid section supplied")](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L307)

    **Emits**

    * [AccessControlUpdated](#accesscontrolupdated)

### `_requireAccessToResume`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L234)</sub>

??? example "Details"

    **Signature**

    `_requireAccessToResume(bytes32 section) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Restricted to access control list")](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L235)

### `_requireAccessToSuspend`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L230)</sub>

??? example "Details"

    **Signature**

    `_requireAccessToSuspend(bytes32 section) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Restricted to access control list")](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L231)

## External Functions

### `resumeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L218)</sub>

??? example "Details"

    **Signature**

    `resumeSynth(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resumeSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L198)</sub>

??? example "Details"

    **Signature**

    `resumeSynthExchange(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resumeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L224)</sub>

??? example "Details"

    **Signature**

    `resumeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resumeSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L204)</sub>

??? example "Details"

    **Signature**

    `resumeSynthsExchange(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L208)</sub>

??? example "Details"

    **Signature**

    `suspendSynth(bytes32 currencyKey, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L188)</sub>

??? example "Details"

    **Signature**

    `suspendSynthExchange(bytes32 currencyKey, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L214)</sub>

??? example "Details"

    **Signature**

    `suspendSynths(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L194)</sub>

??? example "Details"

    **Signature**

    `suspendSynthsExchange(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Events

### `AccessControlUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L337)</sub>

**Signature**: `AccessControlUpdated(bytes32 section, address account, bool canSuspend, bool canResume)`

### `ExchangeResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L329)</sub>

**Signature**: `ExchangeResumed(uint256 reason)`

### `ExchangeSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L328)</sub>

**Signature**: `ExchangeSuspended(uint256 reason)`

### `IssuanceResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L326)</sub>

**Signature**: `IssuanceResumed(uint256 reason)`

### `IssuanceSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L325)</sub>

**Signature**: `IssuanceSuspended(uint256 reason)`

### `SynthExchangeResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L332)</sub>

**Signature**: `SynthExchangeResumed(bytes32 currencyKey, uint256 reason)`

### `SynthExchangeSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L331)</sub>

**Signature**: `SynthExchangeSuspended(bytes32 currencyKey, uint256 reason)`

### `SynthResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L335)</sub>

**Signature**: `SynthResumed(bytes32 currencyKey, uint256 reason)`

### `SynthSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L334)</sub>

**Signature**: `SynthSuspended(bytes32 currencyKey, uint256 reason)`

### `SystemResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L323)</sub>

**Signature**: `SystemResumed(uint256 reason)`

### `SystemSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SystemStatus.sol#L322)</sub>

**Signature**: `SystemSuspended(uint256 reason)`
