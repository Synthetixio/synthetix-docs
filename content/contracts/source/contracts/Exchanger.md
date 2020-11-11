# Exchanger

## Description

Performs all the heavy lifting internally of `exchange` and `settle` functionality.

**Source:** [contracts/Exchanger.sol](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    Exchanger[Exchanger] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

### Related Contracts

<centered-image>
    ![Exchanger architture graph](/img/graphs/Exchanger-architecture.svg)
</centered-image>

## Structs

### `ExchangeEntrySettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L72)</sub>

| Field                    | Type      | Description |
| ------------------------ | --------- | ----------- |
| `src`                    | `bytes32` | TBA         |
| `amount`                 | `uint256` | TBA         |
| `dest`                   | `bytes32` | TBA         |
| `reclaim`                | `uint256` | TBA         |
| `rebate`                 | `uint256` | TBA         |
| `srcRoundIdAtPeriodEnd`  | `uint256` | TBA         |
| `destRoundIdAtPeriodEnd` | `uint256` | TBA         |
| `timestamp`              | `uint256` | TBA         |

## Constants

### `CIRCUIT_BREAKER_SUSPENSION_REASON`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L86)</sub>

**Type:** `uint256`

## Variables

### `lastExchangeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L88)</sub>

**Type:** `mapping(bytes32 => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L114)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `calculateAmountAfterSettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L294)</sub>

??? example "Details"

    **Signature**

    `calculateAmountAfterSettlement(address from, bytes32 currencyKey, uint256 amount, uint256 refunded) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L790)</sub>

Determine the effective fee rate for the exchange, taking into considering swing trading.

??? example "Details"

    **Signature**

    `feeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAmountsForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L805)</sub>

??? example "Details"

    **Signature**

    `getAmountsForExchange(uint256 sourceAmount, bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `hasWaitingPeriodOrSettlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L282)</sub>

??? example "Details"

    **Signature**

    `hasWaitingPeriodOrSettlementOwing(address account, bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isSynthRateInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L316)</sub>

??? example "Details"

    **Signature**

    `isSynthRateInvalid(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxSecsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L159)</sub>

Returns the maximum number of seconds remaining in the waiting period for all exchanges into the given synth (`currencyKey`) by the account.

This number must be `0` in order for [`settle()`](#settle) to succeed.

??? example "Details"

    **Signature**

    `maxSecsLeftInWaitingPeriod(address account, bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L171)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L175)</sub>

Returns the total amount to be reclaimed or rebated for the given account and synth (`currencyKey`). Note: this function can be called at any time, even while the waiting period has not expired.

??? example "Details"

    **Signature**

    `settlementOwing(address account, bytes32 currencyKey) returns (uint256, uint256, uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `tradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L167)</sub>

??? example "Details"

    **Signature**

    `tradingRewardsEnabled() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `waitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L163)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `waitingPeriodSecs() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L321)</sub>

??? example "Details"

    **Signature**

    `exchange(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L341)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L348)

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

### `exchangeOnBehalfWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L387)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalfWithTracking(address exchangeForAddress, address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address originator, bytes32 trackingCode) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L396)

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

### `exchangeWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L363)</sub>

??? example "Details"

    **Signature**

    `exchangeWithTracking(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress, address originator, bytes32 trackingCode) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

### `exchangeWithVirtual`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L413)</sub>

??? example "Details"

    **Signature**

    `exchangeWithVirtual(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress) returns (uint256, contract IVirtualSynth)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

### `setLastExchangeRateForSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L644)</sub>

??? example "Details"

    **Signature**

    `setLastExchangeRateForSynth(bytes32 currencyKey, uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Rate must be above 0)](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L645)

    **Modifiers**

    * [onlyExchangeRates](#onlyexchangerates)

## Internal Functions

### `_convert`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L592)</sub>

??? example "Details"

    **Signature**

    `_convert(bytes32 sourceCurrencyKey, address from, uint256 sourceAmountAfterSettlement, bytes32 destinationCurrencyKey, uint256 amountReceived, address recipient, bool virtualSynth) returns (contract IVirtualSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_createVirtualSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L615)</sub>

??? example "Details"

    **Signature**

    `_createVirtualSynth(contract ISynth , address , uint256 ) returns (contract IVirtualSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_emitTrackingEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L433)</sub>

??? example "Details"

    **Signature**

    `_emitTrackingEvent(bytes32 trackingCode, bytes32 toCurrencyKey, uint256 toAmount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_ensureCanExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L651)</sub>

??? example "Details"

    **Signature**

    `_ensureCanExchange(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Can't be same synth)](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L656)

    * [require(..., Zero amount)](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L657)

    * [require(..., Src/dest rate invalid or not found)](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L662)

### `_exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L494)</sub>

??? example "Details"

    **Signature**

    `_exchange(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress, bool virtualSynth) returns (uint256, uint256, contract IVirtualSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L798)</sub>

??? example "Details"

    **Signature**

    `_feeRateForExchange(bytes32 , bytes32 destinationCurrencyKey) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getAmountReceivedForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L851)</sub>

??? example "Details"

    **Signature**

    `_getAmountReceivedForExchange(uint256 destinationAmount, uint256 exchangeFeeRate) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_getAmountsForExchangeMinusFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L825)</sub>

??? example "Details"

    **Signature**

    `_getAmountsForExchangeMinusFees(uint256 sourceAmount, bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) returns (uint256, uint256, uint256, uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getExchangeEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L253)</sub>

??? example "Details"

    **Signature**

    `_getExchangeEntry(address account, bytes32 currencyKey, uint256 index) returns (struct IExchangeState.ExchangeEntry)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_internalSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L705)</sub>

??? example "Details"

    **Signature**

    `_internalSettle(address from, bytes32 currencyKey, bool updateCache) returns (uint256, uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot settle during waiting period)](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L717)

### `_isDeviationAboveThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L690)</sub>

??? example "Details"

    **Signature**

    `_isDeviationAboveThreshold(uint256 base, uint256 comparison) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_isSynthRateInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L665)</sub>

??? example "Details"

    **Signature**

    `_isSynthRateInvalid(bytes32 currencyKey, uint256 currentRate) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_processTradingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L441)</sub>

??? example "Details"

    **Signature**

    `_processTradingRewards(uint256 fee, address originator)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_settleAndCalcSourceAmountRemaining`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L478)</sub>

??? example "Details"

    **Signature**

    `_settleAndCalcSourceAmountRemaining(uint256 sourceAmount, address from, bytes32 sourceCurrencyKey) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L188)</sub>

??? example "Details"

    **Signature**

    `_settlementOwing(address account, bytes32 currencyKey) returns (uint256, uint256, uint256, struct Exchanger.ExchangeEntrySettlement[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_suspendIfRateInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L447)</sub>

??? example "Details"

    **Signature**

    `_suspendIfRateInvalid(bytes32 currencyKey, uint256 rate) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_updateSNXIssuedDebtOnExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L456)</sub>

??? example "Details"

    **Signature**

    `_updateSNXIssuedDebtOnExchange(bytes32[2] currencyKeys, uint256[2] currencyRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `appendExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L859)</sub>

??? example "Details"

    **Signature**

    `appendExchange(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [ExchangeEntryAppended](#exchangeentryappended)

### `debtCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L155)</sub>

??? example "Details"

    **Signature**

    `debtCache() returns (contract IExchangerInternalDebtCache)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L147)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals() returns (contract IDelegateApprovals)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L131)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L127)</sub>

??? example "Details"

    **Signature**

    `exchangeState() returns (contract IExchangeState)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L139)</sub>

??? example "Details"

    **Signature**

    `feePool() returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getRoundIdsAtPeriodEnd`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L894)</sub>

??? example "Details"

    **Signature**

    `getRoundIdsAtPeriodEnd(struct IExchangeState.ExchangeEntry exchangeEntry) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L151)</sub>

??? example "Details"

    **Signature**

    `issuer() returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `reclaim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L761)</sub>

??? example "Details"

    **Signature**

    `reclaim(address from, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L771)</sub>

??? example "Details"

    **Signature**

    `refund(address from, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `secsLeftInWaitingPeriodForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L781)</sub>

??? example "Details"

    **Signature**

    `secsLeftInWaitingPeriodForExchange(uint256 timestamp) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L135)</sub>

??? example "Details"

    **Signature**

    `synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L123)</sub>

??? example "Details"

    **Signature**

    `systemStatus() returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `tradingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L143)</sub>

??? example "Details"

    **Signature**

    `tradingRewards() returns (contract ITradingRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L624)</sub>

Settle processes all exchanges into the given synth, calculating any `reclaimed` or `refunded` amounts via [`settlementOwing`](#settlementowing) and burning any reclaim and issuing any refund. This function may be called by anyone - the `msg.sender` is irrelevant.

??? example "Details"

    **Signature**

    `settle(address from, bytes32 currencyKey) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `suspendSynthWithInvalidRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L636)</sub>

??? example "Details"

    **Signature**

    `suspendSynthWithInvalidRate(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., No such synth)](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L638)

    * [require(..., Synth price is valid)](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L639)

## Modifiers

### `onlyExchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L927)</sub>

### `onlySynthetixorSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L918)</sub>

## Events

### `ExchangeEntryAppended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L934)</sub>

**Signature**: `ExchangeEntryAppended(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 roundIdForSrc, uint256 roundIdForDest)`

### `ExchangeEntrySettled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1-beta/contracts/Exchanger.sol#L945)</sub>

**Signature**: `ExchangeEntrySettled(address from, bytes32 src, uint256 amount, bytes32 dest, uint256 reclaim, uint256 rebate, uint256 srcRoundIdAtPeriodEnd, uint256 destRoundIdAtPeriodEnd, uint256 exchangeTimestamp)`
