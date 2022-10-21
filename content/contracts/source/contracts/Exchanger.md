# Exchanger

## Description

Performs all the heavy lifting internally of `exchange` and `settle` functionality.

**Source:** [contracts/Exchanger.sol](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol)

## Architecture

### Related Contracts

<centered-image>
    ![Exchanger architture graph](/img/graphs/Exchanger-architecture.svg)
</centered-image>

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L77)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L94)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `calculateAmountAfterSettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L296)</sub>

??? example "Details"

    **Signature**

    `calculateAmountAfterSettlement(address from, bytes32 currencyKey, uint256 amount, uint256 refunded) view returns (uint256 amountAfterSettlement)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `dynamicFeeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L742)</sub>

??? example "Details"

    **Signature**

    `dynamicFeeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 feeRate, bool tooVolatile)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L732)</sub>

Determine the effective fee rate for the exchange, taking into considering swing trading.

??? example "Details"

    **Signature**

    `feeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "too volatile")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L734)

### `getAmountsForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L911)</sub>

??? example "Details"

    **Signature**

    `getAmountsForExchange(uint256 sourceAmount, bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 amountReceived, uint256 fee, uint256 exchangeFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "src synth rate invalid")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L924)

    * [require(..., "dest synth rate invalid")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L926)

    * [require(..., "exchange rates too volatile")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L943)

### `hasWaitingPeriodOrSettlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L284)</sub>

??? example "Details"

    **Signature**

    `hasWaitingPeriodOrSettlementOwing(address account, bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isSynthRateInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L318)</sub>

??? example "Details"

    **Signature**

    `isSynthRateInvalid(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastExchangeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L170)</sub>

**Type:** `mapping(bytes32 => uint256)`

??? example "Details"

    **Signature**

    `lastExchangeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxSecsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L154)</sub>

Returns the maximum number of seconds remaining in the waiting period for all exchanges into the given synth (`currencyKey`) by the account.

This number must be `0` in order for [`settle()`](#settle) to succeed.

??? example "Details"

    **Signature**

    `maxSecsLeftInWaitingPeriod(address account, bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L166)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L98)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L174)</sub>

Returns the total amount to be reclaimed or rebated for the given account and synth (`currencyKey`). Note: this function can be called at any time, even while the waiting period has not expired.

??? example "Details"

    **Signature**

    `settlementOwing(address account, bytes32 currencyKey) view returns (uint256 reclaimAmount, uint256 rebateAmount, uint256 numEntries)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `tradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L162)</sub>

??? example "Details"

    **Signature**

    `tradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `waitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L158)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `waitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L324)</sub>

??? example "Details"

    **Signature**

    `exchange(address exchangeForAddress, address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress, bool virtualSynth, address rewardAddress, bytes32 trackingCode) returns (uint256 amountReceived, contract IVirtualSynth vSynth)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

## Internal Functions

### `_convert`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L547)</sub>

??? example "Details"

    **Signature**

    `_convert(bytes32 sourceCurrencyKey, address from, uint256 sourceAmountAfterSettlement, bytes32 destinationCurrencyKey, uint256 amountReceived, address recipient, bool virtualSynth) returns (contract IVirtualSynth vSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_createVirtualSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L571)</sub>

??? example "Details"

    **Signature**

    `_createVirtualSynth(contract IERC20, address, uint256, bytes32) returns (contract IVirtualSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_deductFeesFromAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L952)</sub>

??? example "Details"

    **Signature**

    `_deductFeesFromAmount(uint256 destinationAmount, uint256 exchangeFeeRate) pure returns (uint256 amountReceived)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_dynamicFeeCalculation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L869)</sub>

??? example "Details"

    **Signature**

    `_dynamicFeeCalculation(uint256[] prices, uint256 threshold, uint256 weightDecay) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_dynamicFeeRateForCurrency`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L828)</sub>

??? example "Details"

    **Signature**

    `_dynamicFeeRateForCurrency(bytes32 currencyKey, struct MixinSystemSettings.DynamicFeeConfig config) view returns (uint256 dynamicFee, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_dynamicFeeRateForCurrencyRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L846)</sub>

??? example "Details"

    **Signature**

    `_dynamicFeeRateForCurrencyRound(bytes32 currencyKey, uint256 roundId, struct MixinSystemSettings.DynamicFeeConfig config) view returns (uint256 dynamicFee, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_dynamicFeeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L792)</sub>

??? example "Details"

    **Signature**

    `_dynamicFeeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 dynamicFee, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_dynamicFeeRateForExchangeAtRounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L807)</sub>

??? example "Details"

    **Signature**

    `_dynamicFeeRateForExchangeAtRounds(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey, uint256 roundIdForSrc, uint256 roundIdForDest) view returns (uint256 dynamicFee, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_emitTrackingEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L368)</sub>

??? example "Details"

    **Signature**

    `_emitTrackingEvent(bytes32 trackingCode, bytes32 toCurrencyKey, uint256 toAmount, uint256 fee)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_ensureCanExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L604)</sub>

??? example "Details"

    **Signature**

    `_ensureCanExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey, uint256 sourceAmount) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Can't be same synth")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L609)

    * [require(..., "Zero amount")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L610)

    * [require(..., "src rate stale or flagged")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L619)

    * [require(..., "dest rate stale or flagged")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L620)

### `_ensureCanExchangeAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L626)</sub>

??? example "Details"

    **Signature**

    `_ensureCanExchangeAtRound(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey, uint256 roundIdForSrc, uint256 roundIdForDest) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Can't be same synth")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L632)

    * [require(..., "src/dest rate stale or flagged")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L641)

### `_exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L421)</sub>

??? example "Details"

    **Signature**

    `_exchange(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress, bool virtualSynth) returns (uint256 amountReceived, uint256 fee, contract IVirtualSynth vSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L755)</sub>

??? example "Details"

    **Signature**

    `_feeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 feeRate, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feeRateForExchangeAtRounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L774)</sub>

??? example "Details"

    **Signature**

    `_feeRateForExchangeAtRounds(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey, uint256 roundIdForSrc, uint256 roundIdForDest) view returns (uint256 feeRate, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getExchangeEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L255)</sub>

??? example "Details"

    **Signature**

    `_getExchangeEntry(address account, bytes32 currencyKey, uint256 index) view returns (struct IExchangeState.ExchangeEntry)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_internalSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L644)</sub>

??? example "Details"

    **Signature**

    `_internalSettle(address from, bytes32 currencyKey, bool updateCache) returns (uint256 reclaimed, uint256 refunded, uint256 numEntriesSettled)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot settle during waiting period")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L656)

### `_notImplemented`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L1017)</sub>

??? example "Details"

    **Signature**

    `_notImplemented() pure`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_processTradingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L377)</sub>

??? example "Details"

    **Signature**

    `_processTradingRewards(uint256 fee, address rewardAddress)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_settleAndCalcSourceAmountRemaining`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L405)</sub>

??? example "Details"

    **Signature**

    `_settleAndCalcSourceAmountRemaining(uint256 sourceAmount, address from, bytes32 sourceCurrencyKey) returns (uint256 sourceAmountAfterSettlement)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L187)</sub>

??? example "Details"

    **Signature**

    `_settlementOwing(address account, bytes32 currencyKey) view returns (uint256 reclaimAmount, uint256 rebateAmount, uint256 numEntries, struct IExchanger.ExchangeEntrySettlement[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_thresholdedAbsDeviationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L895)</sub>

??? example "Details"

    **Signature**

    `_thresholdedAbsDeviationRatio(uint256 price, uint256 previousPrice, uint256 threshold) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_updateSNXIssuedDebtOnExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L383)</sub>

??? example "Details"

    **Signature**

    `_updateSNXIssuedDebtOnExchange(bytes32[2] currencyKeys, uint256[2] currencyRates)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `appendExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L960)</sub>

??? example "Details"

    **Signature**

    `appendExchange(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [ExchangeEntryAppended](#exchangeentryappended)

### `circuitBreaker`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L126)</sub>

??? example "Details"

    **Signature**

    `circuitBreaker() view returns (contract ICircuitBreaker)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `debtCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L150)</sub>

??? example "Details"

    **Signature**

    `debtCache() view returns (contract IExchangerInternalDebtCache)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L142)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals() view returns (contract IDelegateApprovals)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L122)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L118)</sub>

??? example "Details"

    **Signature**

    `exchangeState() view returns (contract IExchangeState)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L134)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getRoundIdsAtPeriodEnd`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L995)</sub>

??? example "Details"

    **Signature**

    `getRoundIdsAtPeriodEnd(struct IExchangeState.ExchangeEntry exchangeEntry) view returns (uint256 srcRoundIdAtPeriodEnd, uint256 destRoundIdAtPeriodEnd)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L146)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `reclaim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L698)</sub>

??? example "Details"

    **Signature**

    `reclaim(address from, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L708)</sub>

??? example "Details"

    **Signature**

    `refund(address from, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `secsLeftInWaitingPeriodForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L718)</sub>

??? example "Details"

    **Signature**

    `secsLeftInWaitingPeriodForExchange(uint256 timestamp) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L130)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L114)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `tradingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L138)</sub>

??? example "Details"

    **Signature**

    `tradingRewards() view returns (contract ITradingRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `exchangeAtomically`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L356)</sub>

??? example "Details"

    **Signature**

    `exchangeAtomically(address, bytes32, uint256, bytes32, address, bytes32, uint256) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L581)</sub>

Settle processes all exchanges into the given synth, calculating any `reclaimed` or `refunded` amounts via [`settlementOwing`](#settlementowing) and burning any reclaim and issuing any refund. This function may be called by anyone - the `msg.sender` is irrelevant.

??? example "Details"

    **Signature**

    `settle(address from, bytes32 currencyKey) returns (uint256 reclaimed, uint256 refunded, uint256 numEntriesSettled)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynthWithInvalidRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L593)</sub>

??? example "Details"

    **Signature**

    `suspendSynthWithInvalidRate(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Synth price is valid")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L597)

## Modifiers

### `onlySynthetixorSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L1023)</sub>

## Events

### `ExchangeEntryAppended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L1033)</sub>

**Signature**: `ExchangeEntryAppended(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 roundIdForSrc, uint256 roundIdForDest)`

### `ExchangeEntrySettled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Exchanger.sol#L1044)</sub>

**Signature**: `ExchangeEntrySettled(address from, bytes32 src, uint256 amount, bytes32 dest, uint256 reclaim, uint256 rebate, uint256 srcRoundIdAtPeriodEnd, uint256 destRoundIdAtPeriodEnd, uint256 exchangeTimestamp)`
