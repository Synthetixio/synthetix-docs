# Exchanger

## Description

Performs all the heavy lifting internally of `exchange` and `settle` functionality.

**Source:** [contracts/Exchanger.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol)

## Architecture

### Related Contracts

<centered-image>
    ![Exchanger architture graph](/img/graphs/Exchanger-architecture.svg)
</centered-image>

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L29)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L47)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `calculateAmountAfterSettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L177)</sub>

??? example "Details"

    **Signature**

    `calculateAmountAfterSettlement(address from, bytes32 currencyKey, uint256 amount, uint256 refunded) view returns (uint256 amountAfterSettlement)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `dynamicFeeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L572)</sub>

??? example "Details"

    **Signature**

    `dynamicFeeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 feeRate, bool tooVolatile)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L557)</sub>

Determine the effective fee rate for the exchange, taking into considering swing trading.

??? example "Details"

    **Signature**

    `feeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "too volatile")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L564)

### `getAmountsForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L746)</sub>

??? example "Details"

    **Signature**

    `getAmountsForExchange(uint256 sourceAmount, bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 amountReceived, uint256 fee, uint256 exchangeFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "src synth rate invalid")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L764)

    * [require(..., "dest synth rate invalid")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L766)

    * [require(..., "exchange rates too volatile")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L783)

### `hasWaitingPeriodOrSettlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L157)</sub>

??? example "Details"

    **Signature**

    `hasWaitingPeriodOrSettlementOwing(address account, bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isSynthRateInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L199)</sub>

??? example "Details"

    **Signature**

    `isSynthRateInvalid(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastExchangeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L136)</sub>

**Type:** `mapping(bytes32 => uint256)`

??? example "Details"

    **Signature**

    `lastExchangeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxSecsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L167)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L132)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L51)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L140)</sub>

Returns the total amount to be reclaimed or rebated for the given account and synth (`currencyKey`). Note: this function can be called at any time, even while the waiting period has not expired.

??? example "Details"

    **Signature**

    `settlementOwing(address account, bytes32 currencyKey) view returns (uint256 reclaimAmount, uint256 rebateAmount, uint256 numEntries)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `tradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L128)</sub>

??? example "Details"

    **Signature**

    `tradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `waitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L124)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L205)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L453)</sub>

??? example "Details"

    **Signature**

    `_convert(bytes32 sourceCurrencyKey, address from, uint256 sourceAmountAfterSettlement, bytes32 destinationCurrencyKey, uint256 amountReceived, address recipient, bool virtualSynth) returns (contract IVirtualSynth vSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_createVirtualSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L477)</sub>

??? example "Details"

    **Signature**

    `_createVirtualSynth(contract IERC20, address, uint256, bytes32) returns (contract IVirtualSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_dynamicFeeCalculation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L704)</sub>

??? example "Details"

    **Signature**

    `_dynamicFeeCalculation(uint256[] prices, uint256 threshold, uint256 weightDecay) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_dynamicFeeRateForCurrency`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L657)</sub>

??? example "Details"

    **Signature**

    `_dynamicFeeRateForCurrency(struct IDirectIntegrationManager.ParameterIntegrationSettings settings) view returns (uint256 dynamicFee, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_dynamicFeeRateForCurrencyRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L674)</sub>

??? example "Details"

    **Signature**

    `_dynamicFeeRateForCurrencyRound(struct IDirectIntegrationManager.ParameterIntegrationSettings settings, uint256 roundId) view returns (uint256 dynamicFee, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_dynamicFeeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L626)</sub>

??? example "Details"

    **Signature**

    `_dynamicFeeRateForExchange(struct IDirectIntegrationManager.ParameterIntegrationSettings sourceSettings, struct IDirectIntegrationManager.ParameterIntegrationSettings destinationSettings) view returns (uint256 dynamicFee, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_dynamicFeeRateForExchangeAtRounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L639)</sub>

??? example "Details"

    **Signature**

    `_dynamicFeeRateForExchangeAtRounds(struct IDirectIntegrationManager.ParameterIntegrationSettings sourceSettings, struct IDirectIntegrationManager.ParameterIntegrationSettings destinationSettings, uint256 roundIdForSrc, uint256 roundIdForDest) view returns (uint256 dynamicFee, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_emitTrackingEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L254)</sub>

??? example "Details"

    **Signature**

    `_emitTrackingEvent(bytes32 trackingCode, bytes32 toCurrencyKey, uint256 toAmount, uint256 fee)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_ensureCanExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L512)</sub>

??? example "Details"

    **Signature**

    `_ensureCanExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey, uint256 sourceAmount) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Can't be same synth")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L517)

    * [require(..., "Zero amount")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L518)

    * [require(..., "src rate stale or flagged")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L527)

    * [require(..., "dest rate stale or flagged")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L528)

### `_ensureCanExchangeAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L534)</sub>

??? example "Details"

    **Signature**

    `_ensureCanExchangeAtRound(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey, uint256 roundIdForSrc, uint256 roundIdForDest) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Can't be same synth")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L540)

    * [require(..., "src/dest rate stale or flagged")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L549)

### `_exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L314)</sub>

??? example "Details"

    **Signature**

    `_exchange(address from, struct IDirectIntegrationManager.ParameterIntegrationSettings sourceSettings, uint256 sourceAmount, struct IDirectIntegrationManager.ParameterIntegrationSettings destinationSettings, address destinationAddress, bool virtualSynth) returns (uint256 amountReceived, uint256 fee, contract IVirtualSynth vSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_exchangeSettings`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L502)</sub>

??? example "Details"

    **Signature**

    `_exchangeSettings(address from, bytes32 currencyKey) view returns (struct IDirectIntegrationManager.ParameterIntegrationSettings settings)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L590)</sub>

??? example "Details"

    **Signature**

    `_feeRateForExchange(struct IDirectIntegrationManager.ParameterIntegrationSettings sourceSettings, struct IDirectIntegrationManager.ParameterIntegrationSettings destinationSettings) view returns (uint256 feeRate, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feeRateForExchangeAtRounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L608)</sub>

??? example "Details"

    **Signature**

    `_feeRateForExchangeAtRounds(struct IDirectIntegrationManager.ParameterIntegrationSettings sourceSettings, struct IDirectIntegrationManager.ParameterIntegrationSettings destinationSettings, uint256 roundIdForSrc, uint256 roundIdForDest) view returns (uint256 feeRate, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_notImplemented`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L792)</sub>

??? example "Details"

    **Signature**

    `_notImplemented() pure`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_processTradingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L263)</sub>

??? example "Details"

    **Signature**

    `_processTradingRewards(uint256 fee, address rewardAddress)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_settleAndCalcSourceAmountRemaining`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L291)</sub>

??? example "Details"

    **Signature**

    `_settleAndCalcSourceAmountRemaining(uint256 sourceAmount, address from, bytes32 sourceCurrencyKey) returns (uint256 sourceAmountAfterSettlement)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_thresholdedAbsDeviationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L730)</sub>

??? example "Details"

    **Signature**

    `_thresholdedAbsDeviationRatio(uint256 price, uint256 previousPrice, uint256 threshold) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_updateSNXIssuedDebtOnExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L269)</sub>

??? example "Details"

    **Signature**

    `_updateSNXIssuedDebtOnExchange(bytes32[2] currencyKeys, uint256[2] currencyRates)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `circuitBreaker`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L80)</sub>

??? example "Details"

    **Signature**

    `circuitBreaker() view returns (contract ICircuitBreaker)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `debtCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L104)</sub>

??? example "Details"

    **Signature**

    `debtCache() view returns (contract IExchangerInternalDebtCache)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L96)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals() view returns (contract IDelegateApprovals)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `directIntegrationManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L108)</sub>

??? example "Details"

    **Signature**

    `directIntegrationManager() view returns (contract IDirectIntegrationManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L76)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L72)</sub>

??? example "Details"

    **Signature**

    `exchangeState() view returns (contract IExchangeState)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L88)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L100)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `resolvedAddresses`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L112)</sub>

??? example "Details"

    **Signature**

    `resolvedAddresses() view returns (struct ExchangeSettlementLib.ResolvedAddresses)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L84)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L68)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `tradingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L92)</sub>

??? example "Details"

    **Signature**

    `tradingRewards() view returns (contract ITradingRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `exchangeAtomically`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L242)</sub>

??? example "Details"

    **Signature**

    `exchangeAtomically(address, bytes32, uint256, bytes32, address, bytes32, uint256) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L487)</sub>

Settle processes all exchanges into the given synth, calculating any `reclaimed` or `refunded` amounts via [`settlementOwing`](#settlementowing) and burning any reclaim and issuing any refund. This function may be called by anyone - the `msg.sender` is irrelevant.

??? example "Details"

    **Signature**

    `settle(address from, bytes32 currencyKey) returns (uint256 reclaimed, uint256 refunded, uint256 numEntriesSettled)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Modifiers

### `onlySynthetixorSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L798)</sub>

## Events

### `ExchangeEntryAppended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L810)</sub>

**Signature**: `ExchangeEntryAppended(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 roundIdForSrc, uint256 roundIdForDest)`

### `ExchangeEntrySettled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Exchanger.sol#L821)</sub>

**Signature**: `ExchangeEntrySettled(address from, bytes32 src, uint256 amount, bytes32 dest, uint256 reclaim, uint256 rebate, uint256 srcRoundIdAtPeriodEnd, uint256 destRoundIdAtPeriodEnd, uint256 exchangeTimestamp)`
