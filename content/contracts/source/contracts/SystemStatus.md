# SystemStatus

## Description

Implemented to address [SIP-44](https://sips.synthetix.io/sips/sip-44) - various mechanisms to suspend the Synthetix system

**Source:** [contracts/SystemStatus.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L20)</sub>

**Type:** `bytes32`

### `SECTION_EXCHANGE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L15)</sub>

**Type:** `bytes32`

### `SECTION_FUTURES`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L16)</sub>

**Type:** `bytes32`

### `SECTION_ISSUANCE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L14)</sub>

**Type:** `bytes32`

### `SECTION_SYNTH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L18)</sub>

**Type:** `bytes32`

### `SECTION_SYNTH_EXCHANGE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L17)</sub>

**Type:** `bytes32`

### `SECTION_SYSTEM`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L13)</sub>

**Type:** `bytes32`

### `SUSPENSION_REASON_UPGRADE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L11)</sub>

**Type:** `uint248`

### `accessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L9)</sub>

**Type:** `mapping(bytes32 => mapping(address => struct ISystemStatus.Status))`

### `exchangeSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L26)</sub>

**Type:** `struct ISystemStatus.Suspension`

### `futuresMarketSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L34)</sub>

**Type:** `mapping(bytes32 => struct ISystemStatus.Suspension)`

### `futuresSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L28)</sub>

**Type:** `struct ISystemStatus.Suspension`

### `issuanceSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L24)</sub>

**Type:** `struct ISystemStatus.Suspension`

### `synthExchangeSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L30)</sub>

**Type:** `mapping(bytes32 => struct ISystemStatus.Suspension)`

### `synthSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L32)</sub>

**Type:** `mapping(bytes32 => struct ISystemStatus.Suspension)`

### `systemSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L22)</sub>

**Type:** `struct ISystemStatus.Suspension`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L36)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `getFuturesMarketSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L149)</sub>

??? example "Details"

    **Signature**

    `getFuturesMarketSuspensions(bytes32[] marketKeys) view returns (bool[] suspensions, uint256[] reasons)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getSynthExchangeSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L120)</sub>

??? example "Details"

    **Signature**

    `getSynthExchangeSuspensions(bytes32[] synths) view returns (bool[] exchangeSuspensions, uint256[] reasons)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getSynthSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L134)</sub>

??? example "Details"

    **Signature**

    `getSynthSuspensions(bytes32[] synths) view returns (bool[] suspensions, uint256[] reasons)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isSystemUpgrading`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L116)</sub>

??? example "Details"

    **Signature**

    `isSystemUpgrading() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L55)</sub>

??? example "Details"

    **Signature**

    `requireExchangeActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L57)

    * [_internalRequireExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L60)

### `requireExchangeBetweenSynthsAllowed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L100)</sub>

??? example "Details"

    **Signature**

    `requireExchangeBetweenSynthsAllowed(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L102)

    * [_internalRequireExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L105)

    * [_internalRequireSynthExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L108)

    * [_internalRequireSynthExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L109)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L112)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L113)

### `requireFuturesActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L69)</sub>

??? example "Details"

    **Signature**

    `requireFuturesActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L70)

    * [_internalRequireExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L71)

    * [_internalRequireFuturesActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L72)

### `requireFuturesMarketActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L76)</sub>

??? example "Details"

    **Signature**

    `requireFuturesMarketActive(bytes32 marketKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L77)

    * [_internalRequireExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L78)

    * [_internalRequireFuturesActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L79)

    * [_internalRequireFuturesMarketActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L80)

### `requireIssuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L47)</sub>

??? example "Details"

    **Signature**

    `requireIssuanceActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L49)

    * [_internalRequireIssuanceActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L52)

### `requireSynthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L87)</sub>

??? example "Details"

    **Signature**

    `requireSynthActive(bytes32 currencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L89)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L90)

### `requireSynthExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L63)</sub>

??? example "Details"

    **Signature**

    `requireSynthExchangeActive(bytes32 currencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L65)

    * [_internalRequireSynthExchangeActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L66)

### `requireSynthsActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L93)</sub>

??? example "Details"

    **Signature**

    `requireSynthsActive(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L95)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L96)

    * [_internalRequireSynthActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L97)

### `requireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L39)</sub>

??? example "Details"

    **Signature**

    `requireSystemActive() view`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L40)

### `synthSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L83)</sub>

??? example "Details"

    **Signature**

    `synthSuspended(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `systemSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L43)</sub>

??? example "Details"

    **Signature**

    `systemSuspended() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `_internalResumeFuturesMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L401)</sub>

??? example "Details"

    **Signature**

    `_internalResumeFuturesMarkets(bytes32[] marketKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L402)

### `_internalResumeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L363)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L364)

### `_internalResumeSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L382)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynthsExchange(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L383)

### `_internalSuspendFuturesMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L391)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendFuturesMarkets(bytes32[] marketKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L392)

### `_internalSuspendSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L372)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynthExchange(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L373)

### `_internalSuspendSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L353)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynths(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L354)

### `resumeExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L225)</sub>

??? example "Details"

    **Signature**

    `resumeExchange()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L226)

    **Emits**

    * [ExchangeResumed](#exchangeresumed)

### `resumeFutures`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L239)</sub>

??? example "Details"

    **Signature**

    `resumeFutures()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L240)

    **Emits**

    * [FuturesResumed](#futuresresumed)

### `resumeIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L211)</sub>

??? example "Details"

    **Signature**

    `resumeIssuance()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L212)

    **Emits**

    * [IssuanceResumed](#issuanceresumed)

### `resumeSystem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L197)</sub>

??? example "Details"

    **Signature**

    `resumeSystem()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L198)

    **Emits**

    * [SystemResumed](#systemresumed)

### `suspendExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L218)</sub>

??? example "Details"

    **Signature**

    `suspendExchange(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L219)

    **Emits**

    * [ExchangeSuspended](#exchangesuspended)

### `suspendFutures`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L232)</sub>

??? example "Details"

    **Signature**

    `suspendFutures(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L233)

    **Emits**

    * [FuturesSuspended](#futuressuspended)

### `suspendIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L204)</sub>

??? example "Details"

    **Signature**

    `suspendIssuance(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L205)

    **Emits**

    * [IssuanceSuspended](#issuancesuspended)

### `suspendSystem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L190)</sub>

??? example "Details"

    **Signature**

    `suspendSystem(uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L191)

    **Emits**

    * [SystemSuspended](#systemsuspended)

### `updateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L164)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L173)</sub>

??? example "Details"

    **Signature**

    `updateAccessControls(bytes32[] sections, address[] accounts, bool[] canSuspends, bool[] canResumes)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Input array lengths must match")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L179)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_internalRequireExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L333)</sub>

??? example "Details"

    **Signature**

    `_internalRequireExchangeActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Exchange is suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L334)

### `_internalRequireFuturesActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L337)</sub>

??? example "Details"

    **Signature**

    `_internalRequireFuturesActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Futures markets are suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L338)

### `_internalRequireFuturesMarketActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L349)</sub>

??? example "Details"

    **Signature**

    `_internalRequireFuturesMarketActive(bytes32 marketKey) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Market suspended")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L350)

### `_internalRequireIssuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L329)</sub>

??? example "Details"

    **Signature**

    `_internalRequireIssuanceActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Issuance is suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L330)

### `_internalRequireSynthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L345)</sub>

??? example "Details"

    **Signature**

    `_internalRequireSynthActive(bytes32 currencyKey) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Synth is suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L346)

### `_internalRequireSynthExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L341)</sub>

??? example "Details"

    **Signature**

    `_internalRequireSynthExchangeActive(bytes32 currencyKey) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Synth exchange suspended. Operation prohibited")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L342)

### `_internalRequireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L320)</sub>

??? example "Details"

    **Signature**

    `_internalRequireSystemActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "string memory")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L321)

### `_internalResumeFuturesMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L401)</sub>

??? example "Details"

    **Signature**

    `_internalResumeFuturesMarkets(bytes32[] marketKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L402)

### `_internalResumeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L363)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L364)

### `_internalResumeSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L382)</sub>

??? example "Details"

    **Signature**

    `_internalResumeSynthsExchange(bytes32[] currencyKeys)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L383)

### `_internalSuspendFuturesMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L391)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendFuturesMarkets(bytes32[] marketKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L392)

### `_internalSuspendSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L372)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynthExchange(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L373)

### `_internalSuspendSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L353)</sub>

??? example "Details"

    **Signature**

    `_internalSuspendSynths(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L354)

### `_internalUpdateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L410)</sub>

??? example "Details"

    **Signature**

    `_internalUpdateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid section supplied")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L416)

    **Emits**

    * [AccessControlUpdated](#accesscontrolupdated)

### `_requireAccessToResume`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L316)</sub>

??? example "Details"

    **Signature**

    `_requireAccessToResume(bytes32 section) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Restricted to access control list")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L317)

### `_requireAccessToSuspend`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L312)</sub>

??? example "Details"

    **Signature**

    `_requireAccessToSuspend(bytes32 section) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Restricted to access control list")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L313)

## External Functions

### `resumeFuturesMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L259)</sub>

??? example "Details"

    **Signature**

    `resumeFuturesMarket(bytes32 marketKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resumeFuturesMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L266)</sub>

??? example "Details"

    **Signature**

    `resumeFuturesMarkets(bytes32[] marketKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resumeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L300)</sub>

??? example "Details"

    **Signature**

    `resumeSynth(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resumeSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L280)</sub>

??? example "Details"

    **Signature**

    `resumeSynthExchange(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resumeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L306)</sub>

??? example "Details"

    **Signature**

    `resumeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resumeSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L286)</sub>

??? example "Details"

    **Signature**

    `resumeSynthsExchange(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendFuturesMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L247)</sub>

??? example "Details"

    **Signature**

    `suspendFuturesMarket(bytes32 marketKey, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendFuturesMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L254)</sub>

??? example "Details"

    **Signature**

    `suspendFuturesMarkets(bytes32[] marketKeys, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L290)</sub>

??? example "Details"

    **Signature**

    `suspendSynth(bytes32 currencyKey, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L270)</sub>

??? example "Details"

    **Signature**

    `suspendSynthExchange(bytes32 currencyKey, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L296)</sub>

??? example "Details"

    **Signature**

    `suspendSynths(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynthsExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L276)</sub>

??? example "Details"

    **Signature**

    `suspendSynthsExchange(bytes32[] currencyKeys, uint256 reason)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Events

### `AccessControlUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L453)</sub>

**Signature**: `AccessControlUpdated(bytes32 section, address account, bool canSuspend, bool canResume)`

### `ExchangeResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L439)</sub>

**Signature**: `ExchangeResumed(uint256 reason)`

### `ExchangeSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L438)</sub>

**Signature**: `ExchangeSuspended(uint256 reason)`

### `FuturesMarketResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L451)</sub>

**Signature**: `FuturesMarketResumed(bytes32 marketKey, uint256 reason)`

### `FuturesMarketSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L450)</sub>

**Signature**: `FuturesMarketSuspended(bytes32 marketKey, uint256 reason)`

### `FuturesResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L442)</sub>

**Signature**: `FuturesResumed(uint256 reason)`

### `FuturesSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L441)</sub>

**Signature**: `FuturesSuspended(uint256 reason)`

### `IssuanceResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L436)</sub>

**Signature**: `IssuanceResumed(uint256 reason)`

### `IssuanceSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L435)</sub>

**Signature**: `IssuanceSuspended(uint256 reason)`

### `SynthExchangeResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L445)</sub>

**Signature**: `SynthExchangeResumed(bytes32 currencyKey, uint256 reason)`

### `SynthExchangeSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L444)</sub>

**Signature**: `SynthExchangeSuspended(bytes32 currencyKey, uint256 reason)`

### `SynthResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L448)</sub>

**Signature**: `SynthResumed(bytes32 currencyKey, uint256 reason)`

### `SynthSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L447)</sub>

**Signature**: `SynthSuspended(bytes32 currencyKey, uint256 reason)`

### `SystemResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L433)</sub>

**Signature**: `SystemResumed(uint256 reason)`

### `SystemSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SystemStatus.sol#L432)</sub>

**Signature**: `SystemSuspended(uint256 reason)`
