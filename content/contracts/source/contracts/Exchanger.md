# Exchanger

## Description

Performs all the heavy lifting internally of `exchange` and `settle` functionality.

**Source:** [contracts/Exchanger.sol](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol)

## Architecture

### Related Contracts

<centered-image>
    ![Exchanger architture graph](/img/graphs/Exchanger-architecture.svg)
</centered-image>

## Structs

### `ExchangeEntrySettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L72)</sub>

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

## Variables

### `CIRCUIT_BREAKER_SUSPENSION_REASON`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L86)</sub>

**Type:** `uint256`

### `lastExchangeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L88)</sub>

**Type:** `mapping(bytes32 => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L102)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L319)</sub>

??? example "Details"

    **Signature**

    `exchange(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L339)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Not approved to act on behalf")](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L346)

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

### `exchangeOnBehalfWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L385)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalfWithTracking(address exchangeForAddress, address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address originator, bytes32 trackingCode) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Not approved to act on behalf")](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L394)

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

### `exchangeWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L361)</sub>

??? example "Details"

    **Signature**

    `exchangeWithTracking(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress, address originator, bytes32 trackingCode) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

### `exchangeWithVirtual`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L411)</sub>

??? example "Details"

    **Signature**

    `exchangeWithVirtual(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress, bytes32 trackingCode) returns (uint256 amountReceived, contract IVirtualSynth vSynth)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

### `setLastExchangeRateForSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L657)</sub>

??? example "Details"

    **Signature**

    `setLastExchangeRateForSynth(bytes32 currencyKey, uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Rate must be above 0")](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L658)

    **Modifiers**

    * [onlyExchangeRates](#onlyexchangerates)

## Internal Functions

### `_convert`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L603)</sub>

??? example "Details"

    **Signature**

    `_convert(bytes32 sourceCurrencyKey, address from, uint256 sourceAmountAfterSettlement, bytes32 destinationCurrencyKey, uint256 amountReceived, address recipient, bool virtualSynth) returns (contract IVirtualSynth vSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_createVirtualSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L627)</sub>

??? example "Details"

    **Signature**

    `_createVirtualSynth(contract IERC20, address, uint256, bytes32) returns (contract IVirtualSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_emitTrackingEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L436)</sub>

??? example "Details"

    **Signature**

    `_emitTrackingEvent(bytes32 trackingCode, bytes32 toCurrencyKey, uint256 toAmount)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_ensureCanExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L664)</sub>

??? example "Details"

    **Signature**

    `_ensureCanExchange(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Can't be same synth")](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L669)

    * [require(..., "Zero amount")](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L670)

    * [require(..., "Src/dest rate invalid or not found")](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L675)

### `_exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L497)</sub>

??? example "Details"

    **Signature**

    `_exchange(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress, bool virtualSynth) returns (uint256 amountReceived, uint256 fee, contract IVirtualSynth vSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L811)</sub>

??? example "Details"

    **Signature**

    `_feeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 exchangeFeeRate)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_getAmountReceivedForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L881)</sub>

??? example "Details"

    **Signature**

    `_getAmountReceivedForExchange(uint256 destinationAmount, uint256 exchangeFeeRate) pure returns (uint256 amountReceived)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_getAmountsForExchangeMinusFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L855)</sub>

??? example "Details"

    **Signature**

    `_getAmountsForExchangeMinusFees(uint256 sourceAmount, bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 amountReceived, uint256 fee, uint256 exchangeFeeRate, uint256 sourceRate, uint256 destinationRate)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_getExchangeEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L251)</sub>

??? example "Details"

    **Signature**

    `_getExchangeEntry(address account, bytes32 currencyKey, uint256 index) view returns (struct IExchangeState.ExchangeEntry)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_internalSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L718)</sub>

??? example "Details"

    **Signature**

    `_internalSettle(address from, bytes32 currencyKey, bool updateCache) returns (uint256 reclaimed, uint256 refunded, uint256 numEntriesSettled)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cannot settle during waiting period")](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L730)

### `_isDeviationAboveThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L703)</sub>

??? example "Details"

    **Signature**

    `_isDeviationAboveThreshold(uint256 base, uint256 comparison) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_isSynthRateInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L678)</sub>

??? example "Details"

    **Signature**

    `_isSynthRateInvalid(bytes32 currencyKey, uint256 currentRate) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_processTradingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L444)</sub>

??? example "Details"

    **Signature**

    `_processTradingRewards(uint256 fee, address originator)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_settleAndCalcSourceAmountRemaining`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L481)</sub>

??? example "Details"

    **Signature**

    `_settleAndCalcSourceAmountRemaining(uint256 sourceAmount, address from, bytes32 sourceCurrencyKey) returns (uint256 sourceAmountAfterSettlement)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L186)</sub>

??? example "Details"

    **Signature**

    `_settlementOwing(address account, bytes32 currencyKey) view returns (uint256 reclaimAmount, uint256 rebateAmount, uint256 numEntries, struct Exchanger.ExchangeEntrySettlement[])`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_suspendIfRateInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L450)</sub>

??? example "Details"

    **Signature**

    `_suspendIfRateInvalid(bytes32 currencyKey, uint256 rate) returns (bool circuitBroken)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_updateSNXIssuedDebtOnExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L459)</sub>

??? example "Details"

    **Signature**

    `_updateSNXIssuedDebtOnExchange(bytes32[2] currencyKeys, uint256[2] currencyRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `appendExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L889)</sub>

??? example "Details"

    **Signature**

    `appendExchange(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Emits**

    * [ExchangeEntryAppended](#exchangeentryappended)

### `debtCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L153)</sub>

??? example "Details"

    **Signature**

    `debtCache() view returns (contract IExchangerInternalDebtCache)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L145)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals() view returns (contract IDelegateApprovals)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L129)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `exchangeState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L125)</sub>

??? example "Details"

    **Signature**

    `exchangeState() view returns (contract IExchangeState)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L137)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getRoundIdsAtPeriodEnd`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L924)</sub>

??? example "Details"

    **Signature**

    `getRoundIdsAtPeriodEnd(struct IExchangeState.ExchangeEntry exchangeEntry) view returns (uint256 srcRoundIdAtPeriodEnd, uint256 destRoundIdAtPeriodEnd)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L149)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `reclaim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L774)</sub>

??? example "Details"

    **Signature**

    `reclaim(address from, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L784)</sub>

??? example "Details"

    **Signature**

    `refund(address from, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `secsLeftInWaitingPeriodForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L794)</sub>

??? example "Details"

    **Signature**

    `secsLeftInWaitingPeriodForExchange(uint256 timestamp) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L133)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L121)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `tradingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L141)</sub>

??? example "Details"

    **Signature**

    `tradingRewards() view returns (contract ITradingRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `calculateAmountAfterSettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L292)</sub>

??? example "Details"

    **Signature**

    `calculateAmountAfterSettlement(address from, bytes32 currencyKey, uint256 amount, uint256 refunded) view returns (uint256 amountAfterSettlement)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L803)</sub>

Determine the effective fee rate for the exchange, taking into considering swing trading.

??? example "Details"

    **Signature**

    `feeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 exchangeFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getAmountsForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L835)</sub>

??? example "Details"

    **Signature**

    `getAmountsForExchange(uint256 sourceAmount, bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 amountReceived, uint256 fee, uint256 exchangeFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `hasWaitingPeriodOrSettlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L280)</sub>

??? example "Details"

    **Signature**

    `hasWaitingPeriodOrSettlementOwing(address account, bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `isSynthRateInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L314)</sub>

??? example "Details"

    **Signature**

    `isSynthRateInvalid(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `maxSecsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L157)</sub>

Returns the maximum number of seconds remaining in the waiting period for all exchanges into the given synth (`currencyKey`) by the account.

This number must be `0` in order for [`settle()`](#settle) to succeed.

??? example "Details"

    **Signature**

    `maxSecsLeftInWaitingPeriod(address account, bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L169)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L106)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L637)</sub>

Settle processes all exchanges into the given synth, calculating any `reclaimed` or `refunded` amounts via [`settlementOwing`](#settlementowing) and burning any reclaim and issuing any refund. This function may be called by anyone - the `msg.sender` is irrelevant.

??? example "Details"

    **Signature**

    `settle(address from, bytes32 currencyKey) returns (uint256 reclaimed, uint256 refunded, uint256 numEntriesSettled)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L173)</sub>

Returns the total amount to be reclaimed or rebated for the given account and synth (`currencyKey`). Note: this function can be called at any time, even while the waiting period has not expired.

??? example "Details"

    **Signature**

    `settlementOwing(address account, bytes32 currencyKey) view returns (uint256 reclaimAmount, uint256 rebateAmount, uint256 numEntries)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `suspendSynthWithInvalidRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L649)</sub>

??? example "Details"

    **Signature**

    `suspendSynthWithInvalidRate(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "No such synth")](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L651)

    * [require(..., "Synth price is valid")](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L652)

### `tradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L165)</sub>

??? example "Details"

    **Signature**

    `tradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `waitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L161)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `waitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

## Modifiers

### `onlyExchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L957)</sub>

### `onlySynthetixorSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L948)</sub>

## Events

### `ExchangeEntryAppended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L964)</sub>

**Signature**: `ExchangeEntryAppended(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 roundIdForSrc, uint256 roundIdForDest)`

### `ExchangeEntrySettled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Exchanger.sol#L975)</sub>

**Signature**: `ExchangeEntrySettled(address from, bytes32 src, uint256 amount, bytes32 dest, uint256 reclaim, uint256 rebate, uint256 srcRoundIdAtPeriodEnd, uint256 destRoundIdAtPeriodEnd, uint256 exchangeTimestamp)`
