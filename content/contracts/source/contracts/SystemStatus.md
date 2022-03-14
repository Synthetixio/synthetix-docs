# SystemStatus

## Description

Implemented to address [SIP-44](https://sips.synthetix.io/sips/sip-44) - various mechanisms to suspend the Synthetix system

**Source:** [contracts/SystemStatus.sol](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol)

## Variables

### `SECTION_EXCHANGE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L15)</sub>

**Type:** `bytes32`

### `SECTION_FUTURES`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L16)</sub>

**Type:** `bytes32`

### `SECTION_ISSUANCE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L14)</sub>

**Type:** `bytes32`

### `SECTION_SYNTH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L18)</sub>

**Type:** `bytes32`

### `SECTION_SYNTH_EXCHANGE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L17)</sub>

**Type:** `bytes32`

### `SECTION_SYSTEM`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L13)</sub>

**Type:** `bytes32`

### `SUSPENSION_REASON_UPGRADE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L11)</sub>

**Type:** `uint248`

### `accessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L9)</sub>

**Type:** `mapping(bytes32 => mapping(address => struct ISystemStatus.Status))`

### `exchangeSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L24)</sub>

**Type:** `struct ISystemStatus.Suspension`

### `futuresMarketSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L32)</sub>

**Type:** `mapping(bytes32 => struct ISystemStatus.Suspension)`

### `futuresSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L26)</sub>

**Type:** `struct ISystemStatus.Suspension`

### `issuanceSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L22)</sub>

**Type:** `struct ISystemStatus.Suspension`

### `synthExchangeSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L28)</sub>

**Type:** `mapping(bytes32 => struct ISystemStatus.Suspension)`

### `synthSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L30)</sub>

**Type:** `mapping(bytes32 => struct ISystemStatus.Suspension)`

### `systemSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L20)</sub>

**Type:** `struct ISystemStatus.Suspension`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L34)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `getFuturesMarketSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L147)</sub>

??? example "Details"

    **Signature**

    `getFuturesMarketSuspensions(bytes32[] marketKeys) view returns (bool[] suspensions, uint256[] reasons)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getSynthExchangeSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L118)</sub>

??? example "Details"

    **Signature**

    `getSynthExchangeSuspensions(bytes32[] synths) view returns (bool[] exchangeSuspensions, uint256[] reasons)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getSynthSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L132)</sub>

??? example "Details"

    **Signature**

    `getSynthSuspensions(bytes32[] synths) view returns (bool[] suspensions, uint256[] reasons)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isSystemUpgrading`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L114)</sub>

??? example "Details"

    **Signature**

    `isSystemUpgrading() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L53)</sub>

??? example "Details"

    **Signature**

    `requireExchangeActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L55)

    * [_internalRequireExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L58)

### `requireExchangeBetweenSynthsAllowed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L98)</sub>

??? example "Details"

    **Signature**

    `requireExchangeBetweenSynthsAllowed(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L100)

    * [_internalRequireExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L103)

    * [_internalRequireSynthExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L106)

    * [_internalRequireSynthExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L107)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L110)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L111)

### `requireFuturesActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L67)</sub>

??? example "Details"

    **Signature**

    `requireFuturesActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L68)

    * [_internalRequireExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L69)

    * [_internalRequireFuturesActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L70)

### `requireFuturesMarketActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L74)</sub>

??? example "Details"

    **Signature**

    `requireFuturesMarketActive(bytes32 marketKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L75)

    * [_internalRequireExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L76)

    * [_internalRequireFuturesActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L77)

    * [_internalRequireFuturesMarketActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L78)

### `requireIssuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L45)</sub>

??? example "Details"

    **Signature**

    `requireIssuanceActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L47)

    * [_internalRequireIssuanceActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L50)

### `requireSynthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L85)</sub>

??? example "Details"

    **Signature**

    `requireSynthActive(bytes32 currencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L87)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L88)

### `requireSynthExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L61)</sub>

??? example "Details"

    **Signature**

    `requireSynthExchangeActive(bytes32 currencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L63)

    * [_internalRequireSynthExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L64)

### `requireSynthsActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L91)</sub>

??? example "Details"

    **Signature**

    `requireSynthsActive(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L93)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L94)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L95)

### `requireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L37)</sub>

??? example "Details"

    **Signature**

    `requireSystemActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L38)

### `synthSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L81)</sub>

??? example "Details"

    **Signature**

    `synthSuspended(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `systemSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L41)</sub>

??? example "Details"

    **Signature**

    `systemSuspended() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `_internalResumeFuturesMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L399)</sub>

??? example "Details"

    **Signature**

    `_internalResumeFuturesMarkets(bytes32[] marketKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L400)

### `_internalResumeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L361)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L362)

### `_internalResumeSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L380)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynthsExchange(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L381)

### `_internalSuspendFuturesMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L389)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendFuturesMarkets(bytes32[] marketKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L390)

### `_internalSuspendSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L370)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynthExchange(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L371)

### `_internalSuspendSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L351)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynths(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L352)

### `resumeExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L223)</sub>

??? example "Details"

    **Signature**

    `resumeExchange()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L224)

    **Emits**

    * [ExchangeResumed](#exchangeresumed)

### `resumeFutures`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L237)</sub>

??? example "Details"

    **Signature**

    `resumeFutures()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L238)

    **Emits**

    * [FuturesResumed](#futuresresumed)

### `resumeIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L209)</sub>

??? example "Details"

    **Signature**

    `resumeIssuance()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L210)

    **Emits**

    * [IssuanceResumed](#issuanceresumed)

### `resumeSystem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L195)</sub>

??? example "Details"

    **Signature**

    `resumeSystem()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L196)

    **Emits**

    * [SystemResumed](#systemresumed)

### `suspendExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L216)</sub>

??? example "Details"

    **Signature**

    `suspendExchange(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L217)

    **Emits**

    * [ExchangeSuspended](#exchangesuspended)

### `suspendFutures`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L230)</sub>

??? example "Details"

    **Signature**

    `suspendFutures(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L231)

    **Emits**

    * [FuturesSuspended](#futuressuspended)

### `suspendIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L202)</sub>

??? example "Details"

    **Signature**

    `suspendIssuance(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L203)

    **Emits**

    * [IssuanceSuspended](#issuancesuspended)

### `suspendSystem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L188)</sub>

??? example "Details"

    **Signature**

    `suspendSystem(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L189)

    **Emits**

    * [SystemSuspended](#systemsuspended)

### `updateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L162)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L171)</sub>

??? example "Details"

    **Signature**

    `updateAccessControls(bytes32[] sections, address[] accounts, bool[] canSuspends, bool[] canResumes)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Input array lengths must match")](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L177)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_internalRequireExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L331)</sub>

??? example "Details"

    **Signature**

    `_internalRequireExchangeActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Exchange is suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L332)

### `_internalRequireFuturesActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L335)</sub>

??? example "Details"

    **Signature**

    `_internalRequireFuturesActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Futures markets are suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L336)

### `_internalRequireFuturesMarketActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L347)</sub>

??? example "Details"

    **Signature**

    `_internalRequireFuturesMarketActive(bytes32 marketKey) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Market suspended")](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L348)

### `_internalRequireIssuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L327)</sub>

??? example "Details"

    **Signature**

    `_internalRequireIssuanceActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Issuance is suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L328)

### `_internalRequireSynthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L343)</sub>

??? example "Details"

    **Signature**

    `_internalRequireSynthActive(bytes32 currencyKey) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Synth is suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L344)

### `_internalRequireSynthExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L339)</sub>

??? example "Details"

    **Signature**

    `_internalRequireSynthExchangeActive(bytes32 currencyKey) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Synth exchange suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L340)

### `_internalRequireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L318)</sub>

??? example "Details"

    **Signature**

    `_internalRequireSystemActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "string memory")](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L319)

### `_internalResumeFuturesMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L399)</sub>

??? example "Details"

    **Signature**

    `_internalResumeFuturesMarkets(bytes32[] marketKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L400)

### `_internalResumeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L361)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L362)

### `_internalResumeSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L380)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynthsExchange(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L381)

### `_internalSuspendFuturesMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L389)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendFuturesMarkets(bytes32[] marketKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L390)

### `_internalSuspendSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L370)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynthExchange(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L371)

### `_internalSuspendSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L351)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynths(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L352)

### `_internalUpdateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L408)</sub>

??? example "Details"

    **Signature**

    `_internalUpdateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid section supplied")](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L414)

    **Emits**

    * [AccessControlUpdated](#accesscontrolupdated)

### `_requireAccessToResume`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L314)</sub>

??? example "Details"

    **Signature**

    `_requireAccessToResume(bytes32 section) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Restricted to access control list")](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L315)

### `_requireAccessToSuspend`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L310)</sub>

??? example "Details"

    **Signature**

    `_requireAccessToSuspend(bytes32 section) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Restricted to access control list")](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L311)

## External Functions

### `resumeFuturesMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L257)</sub>

??? example "Details"

    **Signature**

    `resumeFuturesMarket(bytes32 marketKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resumeFuturesMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L264)</sub>

??? example "Details"

    **Signature**

    `resumeFuturesMarkets(bytes32[] marketKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resumeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L298)</sub>

??? example "Details"

    **Signature**

    `resumeSynth(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resumeSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L278)</sub>

??? example "Details"

    **Signature**

    `resumeSynthExchange(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resumeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L304)</sub>

??? example "Details"

    **Signature**

    `resumeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resumeSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L284)</sub>

??? example "Details"

    **Signature**

    `resumeSynthsExchange(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendFuturesMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L245)</sub>

??? example "Details"

    **Signature**

    `suspendFuturesMarket(bytes32 marketKey, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendFuturesMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L252)</sub>

??? example "Details"

    **Signature**

    `suspendFuturesMarkets(bytes32[] marketKeys, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L288)</sub>

??? example "Details"

    **Signature**

    `suspendSynth(bytes32 currencyKey, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L268)</sub>

??? example "Details"

    **Signature**

    `suspendSynthExchange(bytes32 currencyKey, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L294)</sub>

??? example "Details"

    **Signature**

    `suspendSynths(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L274)</sub>

??? example "Details"

    **Signature**

    `suspendSynthsExchange(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Events

### `AccessControlUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L451)</sub>

**Signature**: `AccessControlUpdated(bytes32 section, address account, bool canSuspend, bool canResume)`

### `ExchangeResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L437)</sub>

**Signature**: `ExchangeResumed(uint256 reason)`

### `ExchangeSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L436)</sub>

**Signature**: `ExchangeSuspended(uint256 reason)`

### `FuturesMarketResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L449)</sub>

**Signature**: `FuturesMarketResumed(bytes32 marketKey, uint256 reason)`

### `FuturesMarketSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L448)</sub>

**Signature**: `FuturesMarketSuspended(bytes32 marketKey, uint256 reason)`

### `FuturesResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L440)</sub>

**Signature**: `FuturesResumed(uint256 reason)`

### `FuturesSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L439)</sub>

**Signature**: `FuturesSuspended(uint256 reason)`

### `IssuanceResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L434)</sub>

**Signature**: `IssuanceResumed(uint256 reason)`

### `IssuanceSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L433)</sub>

**Signature**: `IssuanceSuspended(uint256 reason)`

### `SynthExchangeResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L443)</sub>

**Signature**: `SynthExchangeResumed(bytes32 currencyKey, uint256 reason)`

### `SynthExchangeSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L442)</sub>

**Signature**: `SynthExchangeSuspended(bytes32 currencyKey, uint256 reason)`

### `SynthResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L446)</sub>

**Signature**: `SynthResumed(bytes32 currencyKey, uint256 reason)`

### `SynthSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L445)</sub>

**Signature**: `SynthSuspended(bytes32 currencyKey, uint256 reason)`

### `SystemResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L431)</sub>

**Signature**: `SystemResumed(uint256 reason)`

### `SystemSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SystemStatus.sol#L430)</sub>

**Signature**: `SystemSuspended(uint256 reason)`
